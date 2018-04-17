import { AppPage } from './app.po';

describe('angular-tests App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('Parrafo inicia con valor en 0', () => {
    expect(page.getParagraphText()).toEqual('0');
  });

  it('Clickeamos sobre boton SUMAR', () => {
    page.clickBotonSumar();
    expect(page.getParagraphText()).toEqual('1');
    page.pausarNavegador(5000);
  });

  it('Escribir sobre input text', () => {
    page.getInputTexto().sendKeys('Hola mundo');
    page.pausarNavegador(5000);
    expect(page.getInputTexto().getAttribute('value')).toEqual('Hola mundo');
    page.pausarNavegador(5000);
  });

  it('Se añadio a listado', () => {
    page.clickBotonGuardar();
    expect(page.getListado().count()).toBeGreaterThan(0);
  });

});
