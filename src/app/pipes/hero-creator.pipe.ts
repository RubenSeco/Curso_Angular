import { Pipe, PipeTransform } from '@angular/core';
import { Creator, Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroCreator'
})

export class HeroCreatorPipe implements PipeTransform {
  transform(value: Creator): string {

    return Creator[value];

  }
}
