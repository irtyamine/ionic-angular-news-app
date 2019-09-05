import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { LocationResponse, SourcesResponse, NewsApiResponse } from '../interfaces/interfaces';
import { Article } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiUrl = environment.API_URL;
const apiKey = environment.API_KEY;

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {
	currentArticle: any; // used by news-detail page

	// fetch news from user country
	constructor(
		private http: HttpClient,
		private router: Router
	) {
		this.getCountryCode();
	}

	// fetch country code from ip location API
	getCountryCode() {
		return this.http.get<LocationResponse>('http://ip-api.com/json');
	}

	// fetch sources from news API using url input
	getSources(url: string) {
		return this.http.get<SourcesResponse>(`${apiUrl}/${url}&apiKey=${apiKey}`);
  }

	// fetch news from news API using url input
  getNews(url: string) {
		return this.http.get<NewsApiResponse>(`${apiUrl}/${url}&apiKey=${apiKey}`);
	}

	getNewsDetail(article: Article) {
		this.currentArticle = article;
    console.log('news item clicked - show news-detail');
		this.router.navigate(['/news-detail']);
	}
}
 