import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../shared/services/globals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  searchTypeOptions:string[] = ['Doctor', 'Hospital'];
  defaultSearchType:string = 'Doctor';
  searchText:string;

  constructor(
    private globals:Globals,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @ViewChild("dropdownlist") public dropdownlist: any;

  ngOnInit(): void {
    this.globals.showSearchInHeader.next(false);
  }

  navigateToSearch() {
    let searchQuery = {
      "type": this.defaultSearchType,
      "searchText": this.searchText
    }
    this.router.navigate(['/search'], { queryParams: searchQuery});
  }


  selectionChange($event) {
    console.log($event);
  }

}
