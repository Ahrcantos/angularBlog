import { Component, OnInit } from '@angular/core';
import {Artikel} from './artikel';
import {Input} from '@angular/core';


@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {
@Input()Artikel : Artikel;
  constructor() { }

  ngOnInit(): void {
  }

}
