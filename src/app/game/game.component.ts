import { Component, OnInit } from '@angular/core';
import {GameService} from '@app/game/game.service';
import {delay, take, tap} from 'rxjs/operators';
import {environment} from '@env/environment';
import {of} from 'rxjs';
import {Corporation} from '@app/corporation/corporation.typings';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService) {
    /* istanbul ignore if */
    if (!environment.production) {
      // TODO Fix when players are already created;
      this.gameService.createPlayers(['Direct player 1', 'Direct player 2']);
      this.gameService.getPlayers()
        .subscribe((players) => {
          import('@assets/corporations_array.json')
            .then(({ default: corporations }) => {
              of(null)
                .pipe(
                  delay(1)
                )
                .subscribe(() => {
                  const corps = [
                    corporations.find(corp => corp['Card Name'] === 'Mining Guild') as Corporation,
                    corporations.find(corp => corp['Card Name'] === 'PhoboLog') as Corporation
                  ];

                  this.gameService.userPickCorporation(players[0], corps[0]);
                  this.gameService.userPickCorporation(players[1], corps[1]);

                  this.gameService.setPlayerStartingData(players[0]);
                  this.gameService.setPlayerStartingData(players[1]);
                });
            });
        });
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.gameService.getPlayers().getValue()[0].corporation);
    }, 3);
  }

}
