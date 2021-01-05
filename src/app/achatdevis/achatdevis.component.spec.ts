import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatdevisComponent } from './achatdevis.component';

describe('AchatdevisComponent', () => {
  let component: AchatdevisComponent;
  let fixture: ComponentFixture<AchatdevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatdevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
