import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetProductsComponent } from './widget-products.component';

describe('WidgetProductsComponent', () => {
    let component: WidgetProductsComponent;
    let fixture: ComponentFixture<WidgetProductsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetProductsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
