import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle'
})
export class CustomTitlePipe implements PipeTransform {

  transform(title: string, count: number = 4): string {
    return title.split(" ").slice(0, count).join(" ").concat("...");
  }

}
