import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecomponentComponent } from './removecomponent.component';

describe('RemovecomponentComponent', () => {
  let component: RemovecomponentComponent;
  let fixture: ComponentFixture<RemovecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
