import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloNoticiasComponent } from './desarrollo-noticias.component';

describe('DesarrolloNoticiasComponent', () => {
  let component: DesarrolloNoticiasComponent;
  let fixture: ComponentFixture<DesarrolloNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
