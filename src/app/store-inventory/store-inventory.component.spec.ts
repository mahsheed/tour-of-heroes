import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInventoryComponent } from './store-inventory.component';

describe('StoreInventoryComponent', () => {
  let component: StoreInventoryComponent;
  let fixture: ComponentFixture<StoreInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Store Inventory'`, async(() => {
    const fixture = TestBed.createComponent(StoreInventoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Store Inventory');
  }));

});
