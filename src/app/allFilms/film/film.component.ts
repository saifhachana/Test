import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film';

@Component({
  selector: 'saif-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
   tab:Film;
  @Input("tab")t:Film;


  constructor() { }

  ngOnInit(): void {
  }

}
