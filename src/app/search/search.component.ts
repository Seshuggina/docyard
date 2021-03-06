import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainSearch } from '../models/search.model';
import { SearchResult } from '../services/models/search.model';
import { SearchService } from '../services/search.service';
import { Globals } from '../shared/services/globals.service';
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
          style({ opacity: 0, transform: "translate(0, -50px)" }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1, transform: "translate(0, 0)" }))
          ])
        ], { optional: true })
      ])
    ])
  ],
})

export class SearchComponent implements OnInit {

  searchResult: SearchResult[] = [];
  searchObject: MainSearch = new MainSearch();
  searchTypeOptions: string[] = ['Doctor', 'Hospital'];
  defaultSearchType: string = 'Doctor';
  searchText: string;

  

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private globals:Globals,
    private router: Router
  ) {
    this.globals.showSearchInHeader.next(true);
  }

  ngOnInit() {
    
    this.searchText = "";
    this.route.queryParams.subscribe(params => {
      this.defaultSearchType = params['type'];
      this.searchText = params['searchText'];
    });

    if (!this.defaultSearchType) {
      this.defaultSearchType = this.searchTypeOptions[0];
    } else if (!this.searchText) {
      this.searchText = "";
    }
    this.loadSearchResults();
  }

  loadSearchResults() {
    this.searchObject.searchType = this.defaultSearchType;
    this.searchObject.searchText = this.searchText;
  }

  callAppointment() {
    console.log("Call AppointMent");
  }

  bookAppointment() {
    console.log("Book AppointMent");
    this.open();
  }

  showProfile() {
    this.router.navigate(['/profile', "seshu.vuggina"]);
  }

  public opened: boolean = false;
  public windowTop = 100;

  public onClose(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
  public confirm() {
    this.opened = false;
  }
  public close() {
    this.opened = false;
  }

  public form: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    phone: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    address: new FormControl(),
    comments: new FormControl()
});




}
