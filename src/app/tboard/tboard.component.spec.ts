import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TboardComponent } from './tboard.component';

describe('TboardComponent', () => {
  let component: TboardComponent;
  let fixture: ComponentFixture<TboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
