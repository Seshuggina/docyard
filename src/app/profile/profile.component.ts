import { Component, OnInit } from '@angular/core';
import { Globals } from '../shared/services/globals.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private globals:Globals) {
    this.globals.showSearchInHeader.next(true);
  }

  ngOnInit(): void {
  }

}
