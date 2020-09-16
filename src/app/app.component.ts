import { Component } from '@angular/core';
import {Artikel} from './artikel/artikel';
import {ARTIKEL} from './artikel/artikelData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	Artikel: Artikel[] = ARTIKEL;
  title = 'AngularTest';
}
