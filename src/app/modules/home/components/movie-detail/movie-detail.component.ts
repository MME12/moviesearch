import { Component, Input, OnChanges, Output,  EventEmitter } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent  {
  @Input() searchId: string;
  @Output() onBack = new EventEmitter();
  movie: any;
  constructor(private movieService: MovieService) { }

  
 ngOnChanges() {
  	console.log(' MovieDetailComponent ngOnChanges')
  	
  	this.searchMovie();
  }
  searchMovie () {
  	this.searchId
  	if(this.searchId === '' || this.searchId === undefined) {
      return;
    }
	  this.movieService.getMovie(this.searchId)
	    .subscribe((data: any) => {
	    	console.log(data)
	    	this.movie = data
	    });
	}
  back() {
  	this.onBack.emit();
  }

}
