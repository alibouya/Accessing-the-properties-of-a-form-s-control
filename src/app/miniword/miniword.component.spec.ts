import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniWordComponent } from './miniword.component';

describe('MiniWordComponent', () => {
  let component: MiniWordComponent;
  let fixture: ComponentFixture<MiniWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
