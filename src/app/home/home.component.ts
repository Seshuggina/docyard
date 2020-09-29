import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @ViewChild("dropdownlist") public dropdownlist: any;

  ngOnInit(): void {
    // this.dropdownlist.toggle(true);
  }

  public navigateToSearch() {
    let searchQuery = {
      "type":"doctors",
      "searchText": "Bangalore"
    } 
    this.router.navigate(['/search'], { queryParams: searchQuery});
  }

}
