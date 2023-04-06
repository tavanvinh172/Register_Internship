import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInPageComponent } from './components/auth/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/auth/sign-up-page/sign-up-page.component';
import { materialComponent } from 'src/utils/installation';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentsComponent } from './components/research/students/students.component';
import { AdminMainComponent } from './components/research/admin/admin-main/admin-main.component';
import { ResearchManagementComponent } from './components/research/admin/research-management/research-management.component';
import { StudentsManagementComponent } from './components/research/admin/students-management/students-management.component';
import { TeachersManagementComponent } from './components/research/admin/teachers-management/teachers-management.component';
import { AuthInterceptor, AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { AuthService } from './services/auth/auth.service';
import { TeacherInformationComponent } from './components/research/teachers/teacher-information/teacher-information.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorInterceptorProvider } from './interceptors/error-handler.interceptor';
import { LoggingInterceptorProvider } from './interceptors/logging-handler.interceptor';
import { AuthGuard } from './guard/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingInterceptorProvider } from './interceptors/loading.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FilterPipe } from './pipe/filter.pipe';
import { MatTableModule } from '@angular/material/table';
import { AddNewStudentComponent } from './components/research/admin/students-management/add-new-student/add-new-student.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInPageComponent,
    SignUpPageComponent,
    StudentsComponent,
    AdminMainComponent,
    ResearchManagementComponent,
    StudentsManagementComponent,
    TeachersManagementComponent,
    TeacherInformationComponent,
    NavigationComponent,
    NotFoundComponent,
    SpinnerComponent,
    FilterPipe,
    AddNewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    materialComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatTableModule
  ],
  providers: [
    AuthService, 
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    LoggingInterceptorProvider,
    LoadingInterceptorProvider,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
