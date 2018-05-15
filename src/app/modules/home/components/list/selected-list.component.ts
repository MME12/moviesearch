import { Component, Input, OnChanges, OnInit, Output,  EventEmitter } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'selected-list',
  templateUrl: './selected-list.component.html'
})
export class SelectedListComponent   implements OnInit {
  @Input() movieToAdd: any;
  @Output() onSelect = new EventEmitter<string>();
	list: Array<any> = [];
  shown: boolean = false;
  constructor(private movieService: MovieService) { }

  ngOnChanges() {
    console.log('ngOnChanges')
    this.addToList ();
  }

  ngOnInit() {
      this.getList();
   }
  toggleList () {
    this.shown = !this.shown;
  }
  getList () {
    this.list = this.movieService.getSelectedMoviesFromLocal();
  }
  addToList () {
    if(!this.movieToAdd) {
      return;
    }
    this.movieService.addToSelectedMovies(this.movieToAdd);
    this.list = this.movieService.getSelectedMoviesFromLocal();
  }
  removeFromList (id: string) {
  	/*this.list = this.list.filter(movie => {
      return movie.id != id;
    })*/
    this.movieService.removeFromSelectedMovies(id);
    this.list = this.movieService.getSelectedMoviesFromLocal();
  }
  open(id: string) {
      this.onSelect.emit(id);
  }
}
