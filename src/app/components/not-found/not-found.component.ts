import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { notFoundPageImage } from 'src/utils/constants';
import { Location } from '@angular/common';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  imagePath = notFoundPageImage;

  constructor(private _location: Location){
  }

  returnPreviousPage():void{
    this._location.back();
  }
}
