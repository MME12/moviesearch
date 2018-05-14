import {Component, Input, Output,  EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'movie-item',
  templateUrl: 'movie-item.component.html',
  styleUrls: ['movie-item.component.css'],
})
export class MovieItemComponent {
	@Input() movie: any;
	@Output() onSelect = new EventEmitter<string>();
	@Output() onAddToList = new EventEmitter<any>();
	selected: boolean = false;
	message: string = 'Add to list';
	constructor() {
	
	  }
	  toggle(event) {
	  	event.stopPropagation();
	  	this.selected = !this.selected;
	  	this.addToList();
	  }
	  onSelected(id: string) {
	    this.onSelect.emit(id);
	  }
	  addToList() {
	    this.onAddToList.emit({id: this.movie.imdbID, Title: this.movie.Title});
	  }
}



