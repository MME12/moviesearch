import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'selected-list',
  templateUrl: './selected-list.component.html'
})
export class SelectedListComponent  {
  @Input() movieToAdd: any;
	list: Array<any> = [];
  constructor() { }

  ngOnChanges() {
    console.log('ngOnChanges')
    
    this.addToList ();
  }

  addToList () {
    if(!this.movieToAdd) {
      return;
    }
    let item = this.list.find( value => value.id == this.movieToAdd.id);
    if(!item) {
      this.list.push(this.movieToAdd)
    }
  }
  removeFromList (id: string) {
  	this.list = this.list.filter(movie => {
      return movie.id != id;
    })
  }
}
