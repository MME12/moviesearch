import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SelectedListComponent } from './list/selected-list.component';

export const components: any[] = [MovieSearchComponent,
								  MovieListComponent, 
								  MovieItemComponent,
								  MovieDetailComponent,
								  SelectedListComponent];

export * from './movie-search/movie-search.component';
export * from './movie-list/movie-list.component';
export * from './movie-detail/movie-detail.component';
export * from './movie-item/movie-item.component';
export * from './list/selected-list.component';
