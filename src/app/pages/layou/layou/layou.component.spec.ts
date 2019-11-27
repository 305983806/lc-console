import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayouComponent } from './layou.component';

describe('LayouComponent', () => {
  let component: LayouComponent;
  let fixture: ComponentFixture<LayouComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
