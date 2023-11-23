import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescargarAppPage } from './descargar-app.page';

describe('DescargarAppPage', () => {
  let component: DescargarAppPage;
  let fixture: ComponentFixture<DescargarAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescargarAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
