import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { AuthModel } from 'src/app/models/AuthModel';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TOKEN_NAME } from 'src/utils/constants';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SignInPageComponent {
  currentRole = '';

  signInForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  private userModel?: AuthModel;

  constructor(private router: Router, private authService: AuthService){
  }

  onSubmit() : void{
    let username = this.signInForm.get('username')?.value;
    let password = this.signInForm.get('password')?.value;
    this.userModel = new AuthModel(username, password);
    if(this.signInForm.invalid){
      return ;
    }
    this.loginUser(this.userModel).subscribe();
  }

  loginUser(userModel?:AuthModel): Observable<any>{
    return this.authService.loginUser(userModel).pipe(
      map(response => {
        let token = response.access_Token
        if(token){
          localStorage.setItem(TOKEN_NAME, token)
          this.authService.updateMenu.next();
          this.authService.getCurrentUser().pipe(
            tap(value => {
              if(value.roles[0]?.role === "LECTURER"){
                this.currentRole = 'teacher';
                this.router.navigate(['teacher-main'])
              }else if(value.roles[0]?.role === "ADMIN"){
                this.currentRole = 'admin';
                this.router.navigate([''])
              }else{
                this.currentRole = 'student'
              }
            })
          ).subscribe()
        }
      })
    )
  }
}
 