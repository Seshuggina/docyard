import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Globals {
    showSearchInHeader = new Subject<boolean>();
}