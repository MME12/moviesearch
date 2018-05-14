import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}