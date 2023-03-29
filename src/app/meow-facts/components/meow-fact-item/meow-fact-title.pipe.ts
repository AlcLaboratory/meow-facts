import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'meowFactTitle'})
export class MeowFactTitlePipe implements PipeTransform {
  transform(index: number): string {
    return `Fact about cats no. ${index + 1}`;
  }
}
