import { Component } from '@angular/core';
import { BehaviorSubject, interval, map, Observable } from 'rxjs';
import { AppIcon } from 'src/utils/app-icon';
import { buttonColor } from 'src/utils/helpers/app-helper';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent {
  appIcon: AppIcon = new AppIcon();

  currentDate$ = new Observable<Date>;

  researchButton = "research-button";
  constructor(){
    this.currentDate$ = interval(1000).pipe(
      map((value) => new Date())
    );
  }

  customButtonColor(backgroundColor? : string, color? : string):any{
    return buttonColor(backgroundColor, color);
  }

}
