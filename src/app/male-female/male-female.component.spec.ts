import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleFemaleComponent } from './male-female.component';

describe('MaleFemaleComponent', () => {
  let component: MaleFemaleComponent;
  let fixture: ComponentFixture<MaleFemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaleFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
