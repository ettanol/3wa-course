import { Pipe, PipeTransform, ElementRef, } from '@angular/core';


@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  constructor(
    private el: ElementRef,
    ) {

  }

  transform(_class: string): string {
    let maxPerPage = 9;

    document.addEventListener('DOMContentLoaded',() => {
      if(this.el.nativeElement.children.length !== 0){
        for(let i=0; i < maxPerPage; i++) {
        // _class = this.el.nativeElement.child.classList.add('show');
        console.log(this.el.nativeElement.children[0]);
        }
      }
    })
    return _class;
  }

}
