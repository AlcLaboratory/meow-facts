import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'meowFactTitle'})
export class MeowFactTitlePipe implements PipeTransform {
  transform(index: number): string {
    return `fact about cats no. ${index + 1}`;
  }
}
