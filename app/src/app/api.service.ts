import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const { omdb: { apiUrl, apiKey } } = environment;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

	constructor(private httpClient: HttpClient) {}

	public getMovie = (imbdID?: string) => this.httpClient.get(`${apiUrl}/?apikey=${apiKey}&i=${imbdID}`);

	public getMovies = (searchParam?: string) => this.httpClient.get(`${apiUrl}/?apikey=${apiKey}&s=${searchParam}`);
}
