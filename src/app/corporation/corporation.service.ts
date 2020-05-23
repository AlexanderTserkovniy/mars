import { Injectable } from '@angular/core';
import {Corporation} from '@app/corporation/corporation.typings';
import corporationsArray from '@assets/corporations_array.json';

@Injectable({
  providedIn: 'root'
})
export class CorporationService {

  // private corporations: Promise<Corporation[]> = import('@assets/corporations_array.json');
  // This is fucking magic don't touch because you will ruin the TypeScript
  // private corporations: Corporation[] = corporationsArray;
  private corporations: Corporation[] = JSON.parse(JSON.stringify(corporationsArray));
  private givenCorporations: Corporation[] = [];

  constructor() {}

  getCorporationsChoiceForCurrentPlayer(): [Corporation, Corporation] {
    // TODO Rewrite this shit
    if (!this.corporations.length) { return [{} as Corporation, {'Card #': 'FOR TESTING PURPOSES ONLY!'} as Corporation]; }
    const variantAIndex = Math.floor(Math.random() * this.corporations.length);
    let variantBIndex;
    do {
      variantBIndex = Math.floor(Math.random() * this.corporations.length);
    } while (variantAIndex === variantBIndex);
    const result = [this.corporations[variantAIndex], this.corporations[variantBIndex]];
    this.givenCorporations.push(...result);
    result.forEach((corp) => {
      const deleteIndex = this.corporations.findIndex(c => c === corp);
      this.corporations.splice(deleteIndex, 1);
    });
    return result as [Corporation, Corporation];
    // TODO Rewrite this shit [end]
  }
}
