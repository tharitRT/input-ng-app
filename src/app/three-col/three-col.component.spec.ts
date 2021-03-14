import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColComponent } from './three-col.component';

describe('ThreeColComponent', () => {
  let component: ThreeColComponent;
  let fixture: ComponentFixture<ThreeColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
