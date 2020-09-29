import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResult } from '../services/models/search.model';
import { SearchService } from '../services/search.service';
// https://stackblitz.com/edit/angular-list-animations?file=app%2Fapp.component.html

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity:0, transform: "translate(0, -50px)" }),
          stagger(100, [
            animate('0.5s', style({ opacity:1, transform: "translate(0, 0)" }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})

export class SearchComponent implements OnInit {

  searchResult: SearchResult[] = [];
  postObject$;

  constructor(
    private searchService: SearchService,  
    private route: ActivatedRoute  
  ) {

  }

  ngOnInit() {
    let searchObject:any = {}
    this.route.queryParams.subscribe(params => {
      searchObject.searchType = params['type'];
      searchObject.searchText = params['searchText'];
    });
    
    this.loadResult(searchObject)
    //this.searchResult = this.route.snapshot.data.searchResult;
    console.log(this.searchResult);
  }
  private loadResult(searchObject) {
    this.searchService.getSearchList(searchObject).subscribe((data) => {
      this.searchResult = data;
    });
  }

}
