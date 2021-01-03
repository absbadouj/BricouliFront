import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddannonceComponent } from './addannonce.component';

describe('AddannonceComponent', () => {
  let component: AddannonceComponent;
  let fixture: ComponentFixture<AddannonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddannonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
