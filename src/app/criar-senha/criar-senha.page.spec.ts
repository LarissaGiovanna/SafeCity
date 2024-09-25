import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarSenhaPage } from './criar-senha.page';

describe('CriarSenhaPage', () => {
  let component: CriarSenhaPage;
  let fixture: ComponentFixture<CriarSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
