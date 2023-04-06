import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Student, StudentModel } from 'src/app/models/StudentModel';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ResearchService } from 'src/app/services/research/research.service';

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.css']
})
export class StudentsManagementComponent {
  methodAction = 'method-action';
  inputField = 'input-field';
  content = 'content';
  displayedColumns: string[] = ['Số thứ tự', 'Tên sinh viên', 'Lớp', 'Tên đồ án', 'Kỳ'];

  dataSource?: MatTableDataSource<Student>;

  isLoading:boolean = false;

  isClicking: boolean = false;

  searchText = '';
  
  selectedOption = '';

  constructor(private research: ResearchService, public loader: LoaderService, private router:Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.getAllStudentsResearch();
  }

  getAllStudentsResearch():void{
    this.isLoading = true;
    this.research.getAllStudentsResearch().pipe(
      tap((response) => {
        this.dataSource = new MatTableDataSource<Student>(response);
        console.log(this.dataSource);
        
      })
    ).subscribe(
      (value) => this.isLoading = false
    );
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }

  filterStudentResearch(value: any):void{
    if(value === "guidance"){
      this.isClicking = true;
    }else if(value === "nonGuidance"){
      this.isClicking = false;
    }else{
      this.getAllStudentsResearch();
    }
    console.log(this.isClicking);
    this.research.filterResearch(this.isClicking ? 1 : 2).pipe(
      tap((response) => {
        this.dataSource = new MatTableDataSource<Student>(response);
      })
    ).subscribe();
  }

  navigation():void{
    this.router.navigate(['/students-management/add-new-student'], {relativeTo: this.route})
  }
  
}
