import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { SearchResult } from './models/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = "http://jsonplaceholder.typicode.com/posts";  
  
  constructor(private http: HttpClient) {}  
  
  getSearchList(data:any): Observable<SearchResult[]> {

    return this.http.get<SearchResult[]>(this.url).pipe(delay(1000)); 
  }
}
