import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedhomeComponent } from './sharedhome.component';

describe('SharedhomeComponent', () => {
  let component: SharedhomeComponent;
  let fixture: ComponentFixture<SharedhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedhomeComponent]
    });
    fixture = TestBed.createComponent(SharedhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
