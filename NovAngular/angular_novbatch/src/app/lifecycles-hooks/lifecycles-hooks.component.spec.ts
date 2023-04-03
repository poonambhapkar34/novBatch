import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclesHooksComponent } from './lifecycles-hooks.component';

describe('LifecyclesHooksComponent', () => {
  let component: LifecyclesHooksComponent;
  let fixture: ComponentFixture<LifecyclesHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclesHooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclesHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
