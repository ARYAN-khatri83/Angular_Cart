import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionPageComponent } from './fashion-page.component';

describe('FashionPageComponent', () => {
  let component: FashionPageComponent;
  let fixture: ComponentFixture<FashionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionPageComponent]
    });
    fixture = TestBed.createComponent(FashionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
