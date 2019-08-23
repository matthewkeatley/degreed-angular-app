import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
		movies = [];
		decade = 1980;
		decadeList = [];

		constructor(private apiService: ApiService){}

		onNotify($event) {
			this.decade = $event.value;
		}

		onNavigate(imdbID) {
			window.open(`http://imdb.com/title/${imdbID}`, '_blank');
		}
		
		ngOnInit() {
			this.apiService.getMovies('Batman').subscribe((res)=>{
				const arr = res["Search"].map(({ imdbID }) => this.apiService.getMovie(imdbID));
				forkJoin(arr).subscribe(results => {
					this.movies = results.map(result => ({ ...result, _posterURL: (result['Poster'].split('/').pop()) }));
					console.log(results);
					const decades:any = results.reduce((acc: any, curr: any) => {
						const d = new Date(curr.Released);
						const p = Math.floor((d.getFullYear())/10) * 10;
						if (!acc.includes(p)) acc.push(p);
						return acc;
					}, []);
					this.decadeList = decades.sort();
				})
			});
		}

}
