import { Component } from '@angular/core';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, tap } from 'rxjs';
import { AppIcon } from 'src/utils/app-icon';
import { AuthService } from './services/auth/auth.service';
import {UserModel} from '../app/models/UserModel';
import { Router } from '@angular/router';
import { TOKEN_NAME } from 'src/utils/constants';
import { LoaderService } from './services/loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  appIcon: AppIcon = new AppIcon();

  userModel?:UserModel;

  displaySidebar? : boolean;

  displayTeacher? : boolean;

  displayStudent? : boolean;

  currentRole?: string;

  constructor(private authService: AuthService, private router: Router, public loader: LoaderService){

  }

  ngOnInit(){
    this.authService.updateMenu.subscribe(
      res => {
        this.sideBarDisplay();
      }
    );
    this.sideBarDisplay();
  }

  ngDoCheck():void{
    if(this.router.url === '/login'){
      this.displaySidebar = false;
    }else{
      this.displaySidebar = true;
    }
  }

  isLoggin():boolean{
    if(this.authService.getCurrentToken() === null){
      return false;
    }
    return true;
  }

  signOutUser():void{
    this.authService.logOut().subscribe();
    localStorage.clear();
    if(this.authService.getCurrentToken() === null){
      this.router.navigate(['login'])
    }
  }

  sideBarDisplay(){
    this.authService.getCurrentUser().pipe(
      tap((response) => {
        console.log(response);
        let user = UserModel.fromJson(response);
        this.userModel = user;
        this.currentRole = response.roles[0]?.role
        if(this.currentRole === "LECTURER"){
          this.displayTeacher = true;
          this.displayStudent = false;
        }else if(this.currentRole === "ADMIN"){
          this.displayTeacher = false;
          this.displayStudent = false;
        }else{
          this.displayStudent = true;
          this.displayTeacher = false;
        }
      })
    ).subscribe();
    console.log(`tvv-role: ${this.currentRole}`);
  }
}
