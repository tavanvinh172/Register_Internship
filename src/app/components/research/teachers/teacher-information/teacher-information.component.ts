import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { UserModel } from 'src/app/models/UserModel';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-teacher-information',
  templateUrl: './teacher-information.component.html',
  styleUrls: ['./teacher-information.component.css']
})
export class TeacherInformationComponent {

  userModel?: UserModel;

  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.getCurrentUser();
  }

  getCurrentUser():void{
    this.authService.getCurrentUser().pipe(
      tap(response => {
        let user = UserModel.fromJson(response);
        this.userModel = user;
      })
    ).subscribe();
  }
}
