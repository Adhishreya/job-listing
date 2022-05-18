import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTileComponent } from './job-tile.component';

describe('JobTileComponent', () => {
  let component: JobTileComponent;
  let fixture: ComponentFixture<JobTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
