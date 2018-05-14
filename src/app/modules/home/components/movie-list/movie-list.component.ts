import {Component, OnInit, Input, OnChanges, Output,  EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.css'],
})
export class MovieListComponent  {
	@Input() searchText: string;
  @Output() onSelect = new EventEmitter<string>();
	movieList: Array<any>;
  movieToAdd: any;
	constructor(private movieService: MovieService) { }

  ngOnChanges() {
  	console.log('ngOnChanges')
  	
  	this.loadMovies();
  }
  loadMovies() {
    if(this.searchText === '' || this.searchText === undefined) {
      return;
    }
	  this.movieService.getMovies(this.searchText)
	    .subscribe((data: any) => {
	    	this.movieList = data.Search
	    });
	}
  onSelected(id: string) {
    this.onSelect.emit(id);
  }
  addToList(event) {
      this.movieToAdd = event;
      console.log(this.movieToAdd)
  }
}


