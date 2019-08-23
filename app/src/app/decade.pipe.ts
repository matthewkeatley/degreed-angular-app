import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decade'
})
export class DecadePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
	if(!value) return [];
	const year = Number(args[0]);
	const begDate = new Date(year,0,0,0,0,0,0);
	const endDate = new Date(year + 10,0,0,0,0,0,0);
	const movies = value.filter(movie => {
		const releaseDate = new Date(movie.Released);
		return (releaseDate >= begDate && releaseDate <= endDate)
	});
	return movies;
  }

}
