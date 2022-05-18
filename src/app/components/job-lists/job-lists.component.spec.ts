import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListsComponent } from './job-lists.component';

describe('JobListsComponent', () => {
  let component: JobListsComponent;
  let fixture: ComponentFixture<JobListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
