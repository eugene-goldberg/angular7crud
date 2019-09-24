import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesGetComponent } from './indices-get.component';

describe('IndicesGetComponent', () => {
  let component: IndicesGetComponent;
  let fixture: ComponentFixture<IndicesGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicesGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
