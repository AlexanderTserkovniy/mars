import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '@app/game/game.service';
import {BehaviorSubject, of, Subject, Subscription} from 'rxjs';
import {Player} from '@app/class/player';
import {environment} from '@env/environment';
import {CorporationService} from '@app/corporation/corporation.service';
import {
  concatMap, delay,
  flatMap,
  mergeAll,
  share,
  take,
  takeWhile
} from 'rxjs/operators';
import {Corporation} from '@app/corporation/corporation.typings';

@Component({
  selector: 'app-hot-seat-start',
  templateUrl: './hot-seat-start.component.html',
  styleUrls: ['./hot-seat-start.component.css']
})
export class HotSeatStartComponent implements OnDestroy, OnInit {

  public players$: BehaviorSubject<Player[]> = this.gameService.getPlayers();
  public userChoice$: Subject<Corporation> = new Subject<Corporation>();
  public templatePlayer: Subject<Player> = new Subject<Player>();
  public templatePlayerForHTML: Player;
  public corporations: Corporation[];
  public corporationsChosen = false;
  private getPlayersSubscription$: any; // Subscription; // Observable<Player[] | Event>;
  private getPlayersSubscription$2: Subscription;

  constructor(public gameService: GameService, private corporationService: CorporationService) {
    if (!environment.production) {
      // TODO Fix when players are already created;
      this.gameService.createPlayers(['Direct player 1', 'Direct player 2']);
      // import('@assets/corporations_array.json')
      //   .then(({ default: corporations }) => {
      //     of(null)
      //       .pipe(
      //         delay(1000)
      //       )
      //       .subscribe(() => {
      //         this.userChoice$.next(corporations.find(corp => corp['Card Name'] === 'Mining Guild') as Corporation);
      //         this.userChoice$.next(corporations.find(corp => corp['Card Name'] === 'PhoboLog') as Corporation);
      //       });
      //   });
    }
  }

  chooseCorporation(corporation) {
    this.userChoice$.next(corporation);
  }

  track(_, corporation: Corporation) {
    return corporation['Card Name'];
  }

  ngOnInit(): void {
    this.templatePlayer.subscribe(player => (this.templatePlayerForHTML = player));

    /*
    * Get array of players (which is observable)
    * mergeAll() it one by one (to iterate by each instead of working on single array)
    * concatMap (to await previous concatMap to complete)
    * wait for user to make choice
    * return result
    * */
    this.getPlayersSubscription$ = this.players$.pipe(
      mergeAll(),
    )
      .pipe(
        concatMap(player => {
          this.corporations = this.corporationService.getCorporationsChoiceForCurrentPlayer();
          this.templatePlayer.next(player);
          return this.userChoice$.pipe(
            take(1),
            flatMap(corporation => {
              return of({player, corporation});
            })
          );
        })
      );

    /*
    * Share need only for getting the finish event down below
    * */
    this.getPlayersSubscription$ = this.getPlayersSubscription$.pipe(share());

    this.getPlayersSubscription$.subscribe((data: { player: Player, corporation: Corporation }) => {
      this.gameService.userPickCorporation(data.player, data.corporation);
    });

    this.getPlayersSubscription$2 = this.getPlayersSubscription$
      .pipe(
        takeWhile(() => {
          const ff = this.players$.getValue();
          return !ff.every(player => !!player.corporation);
        }),
      )
      .subscribe(null, null, () => {
        this.corporationsChosen = true;
        this.gameService.start();
      });
  }

  ngOnDestroy() {
    this.getPlayersSubscription$.unsubscribe();
    this.getPlayersSubscription$2.unsubscribe();
  }
}
