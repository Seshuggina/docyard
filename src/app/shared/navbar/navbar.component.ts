import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '../services/globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  searchText:string;
  showMainSearch:boolean;

  // Private Variables
  private unsubscribe: Subject<void> = new Subject();

  constructor(private globals:Globals) {
    this.globals.showSearchInHeader.pipe(takeUntil(this.unsubscribe)).subscribe(status => {
      this.showMainSearch = status;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
