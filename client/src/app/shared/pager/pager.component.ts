import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
@Input() totalCount?: number;
@Input() pageSize?: number;
@Output() pageChanged = new EventEmitter<number>();

onPagerChanged(event: any){
  this.pageChanged.emit(event);
}

}
