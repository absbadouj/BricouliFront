import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatfacturesComponent } from './achatfactures.component';

describe('AchatfacturesComponent', () => {
  let component: AchatfacturesComponent;
  let fixture: ComponentFixture<AchatfacturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatfacturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatfacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
