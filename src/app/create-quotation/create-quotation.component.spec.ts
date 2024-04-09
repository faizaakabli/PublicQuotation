import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createquotation } from './create-quotation.component';

describe('Createquotation', () => {
  let component: Createquotation;
  let fixture: ComponentFixture<Createquotation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createquotation]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Createquotation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
