import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonprofilpublicComponent } from './monprofilpublic.component';

describe('MonprofilpublicComponent', () => {
  let component: MonprofilpublicComponent;
  let fixture: ComponentFixture<MonprofilpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonprofilpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonprofilpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
