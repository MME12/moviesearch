import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-search-view',
  templateUrl: './movie-search-view.component.html'
})
export class MovieSearchViewComponent implements OnInit {
	searchText: string;
	searchId: string;
	modeList: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  searchMovies (text: string) {
  	this.searchText = text;
  }
  searchMovie (id: string) {
  	this.searchId = id;
    this.modeList = false;
  }
}
