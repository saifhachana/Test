import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/modele/film';

@Component({
  selector: 'saif-lesfilms',
  templateUrl: './lesfilms.component.html',
  styleUrls: ['./lesfilms.component.css']
})
export class LesfilmsComponent implements OnInit {
  lesFilms: Film[] = [

    {title:'Coco', photo:'assets/MyFilms/coco.jpg', duration:88, new:false},
    {title:'Anges & Démons', photo:'assets/MyFilms/ange.jpg', duration:121, new:true},
    {title:'Coeur Nomade', photo:'assets/MyFilms/nomade.bmp', duration:97, new:false}
      ];
      
      public nombreFilms() {
        
      }

  constructor() { }

  ngOnInit(): void {
  }

}
