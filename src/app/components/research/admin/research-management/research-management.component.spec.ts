import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchManagementComponent } from './research-management.component';

describe('ResearchManagementComponent', () => {
  let component: ResearchManagementComponent;
  let fixture: ComponentFixture<ResearchManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
