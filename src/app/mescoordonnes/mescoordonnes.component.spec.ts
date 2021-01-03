import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MescoordonnesComponent } from './mescoordonnes.component';

describe('MescoordonnesComponent', () => {
  let component: MescoordonnesComponent;
  let fixture: ComponentFixture<MescoordonnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MescoordonnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MescoordonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
