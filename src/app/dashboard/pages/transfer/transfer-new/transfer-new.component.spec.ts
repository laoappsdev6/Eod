import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferNewComponent } from './transfer-new.component';

describe('TransferNewComponent', () => {
  let component: TransferNewComponent;
  let fixture: ComponentFixture<TransferNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
