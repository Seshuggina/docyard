import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '../services/globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class NavbarComponent implements OnInit, OnDestroy {


  searchText:string;
  showMainSearch:boolean;
  showSearchButton:boolean;
  // Private Variables
  private unsubscribe: Subject<void> = new Subject();

  constructor(private globals:Globals) {
    this.globals.showSearchInHeader.pipe(takeUntil(this.unsubscribe)).subscribe(status => {
      this.showMainSearch = status;
      this.showSearchButton = status;
    });
  }

  ngOnInit(): void {
  }

  toggleNavbarSearch() {
    this.showMainSearch = !this.showMainSearch;
  }

  onResize(event) {
    console.log("event.target.innerWidth;", event.target.innerWidth);
    if(window.location.pathname !== '/') {
      if(event.target.innerWidth > 991.98) {
        this.showSearchButton = false;
        this.showMainSearch = true;
      } else if(!this.showMainSearch || !this.showSearchButton) {
        this.showMainSearch = true;
        this.showSearchButton = true;
      }
    }
  }

  ngOnDestroy() {
    
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  

}
