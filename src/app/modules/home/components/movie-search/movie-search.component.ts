import {Component, OnInit, Output,  EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'movie-search',
  templateUrl: 'movie-search.component.html',
  styleUrls: ['movie-search.component.css'],
})
export class MovieSearchComponent  implements OnInit {
	@Output() onSearch = new EventEmitter<string>();
	filteredMovie: Observable<any[]>;
	searchCtrl: FormControl;
	movieList: Array<any>;
	constructor(private movieService: MovieService) { 
		this.searchCtrl = new FormControl();
	}
	 ngOnInit() {
	  	
	 }
 
	 showVersions(inputString: string) {
	  this.movieService.getMovies(inputString)
	    .subscribe((data: any) => {
	    	this.filteredMovie = data.Search
	    });
	}

  search(inputString: string) {
  	console.log(inputString)
  	this.onSearch.emit(inputString);
  	this.filteredMovie = null
  }
}


