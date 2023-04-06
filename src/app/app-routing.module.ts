import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './components/auth/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/auth/sign-up-page/sign-up-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminMainComponent } from './components/research/admin/admin-main/admin-main.component';
import { ResearchManagementComponent } from './components/research/admin/research-management/research-management.component';
import { AddNewStudentComponent } from './components/research/admin/students-management/add-new-student/add-new-student.component';
import { StudentsManagementComponent } from './components/research/admin/students-management/students-management.component';
import { TeacherInformationComponent } from './components/research/teachers/teacher-information/teacher-information.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'admin-main'},
  {path: 'admin-main', component: AdminMainComponent, canActivate: [AuthGuard]},
  {path: 'students-management', component: StudentsManagementComponent, canActivate: [AuthGuard], children: [
    {path: 'add-new-student', component: AddNewStudentComponent}
  ]},
  {path: 'login', component: SignInPageComponent},
  {path: 'signup', component: SignUpPageComponent},
  // {path: 'admin-main', component: AdminMainComponent, },
  {path: 'teacher-main', component: TeacherInformationComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
