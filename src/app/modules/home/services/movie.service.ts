import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class SelectedMovie {
	constructor(public Title: string = '', public id: string = '') {}
}

@Injectable()
export class MovieService {
	//apikey=1e2ef0e9
	dataUrl: string = 'http://www.omdbapi.com/?apikey=1e2ef0e9&t=';
	stringUrl: string = 'http://www.omdbapi.com/?apikey=1e2ef0e9&s=';
	detailUrl: string = 'http://www.omdbapi.com/?apikey=1e2ef0e9&i=';

  constructor(private http: HttpClient) { }

  getMovies(text) {
	  return this.http.get(this.stringUrl + text);
  }
  getMovie(id) {
	  return this.http.get(this.detailUrl + id);
  }
  addToSelectedMovies (movie: SelectedMovie) {
    if(!movie) {
      return;
    }
    let selectedMovies = this.getSelectedMoviesFromLocal ();
    let item = selectedMovies.find( value => value.id == movie.id);
    if(!item) {
      selectedMovies.push(movie);
      this.setSelectedMoviesFromLocal (selectedMovies);
    }
  }
  removeFromSelectedMovies (id: string) {
  	let selectedMovies = this.getSelectedMoviesFromLocal ();
  	selectedMovies = selectedMovies.filter(movie => {
      return movie.id != id;
    })
    this.setSelectedMoviesFromLocal (selectedMovies);
  }
  getSelectedMoviesFromLocal (): SelectedMovie[] {
  	let localStorageItem = JSON.parse(localStorage.getItem('selectedMovies'));
  	return localStorageItem ? localStorageItem.selectedMovies : []
  }
  setSelectedMoviesFromLocal (selectedMovies: SelectedMovie[]): void {
  	localStorage.setItem('selectedMovies', JSON.stringify({selectedMovies: selectedMovies}))
  }
}