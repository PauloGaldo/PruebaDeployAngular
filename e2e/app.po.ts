import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  pausarNavegador(time: number) {
    return browser.sleep(time);
  }

  getParagraphText() {
    return element(by.css('app-root app-contador p')).getText();
  }

  clickBotonSumar() {
    element(by.buttonText('Sumar')).click();
  }

  clickBotonGuardar() {
    element(by.buttonText('Guardar')).click();
  }

  getInputTexto() {
    return element(by.name('texto'));
  }

  getListado() {
    return element.all(by.className('texto'));
  }


}
