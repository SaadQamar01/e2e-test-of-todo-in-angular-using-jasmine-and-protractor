import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTodoHeading() {
    return element(by.css('app-root h1')).getText();
  }
  getTodoInput() {
    return element(by.css('app-root .new-todo'));
  }
  getAddTodoButton() {
    return element(by.css('app-root .mat-raised-button'));
  }
  getTodoList() {
    return element.all(by.css('.main li'));
  }
  getDeleteButton() {
    return element(by.css('.view .destroy'));
  }
  getfirstItem() {
    return element.all(by.css('.main li button')).first();
  }
  getTotalItem() {
    return element(by.css('footer strong')).getText();
  }
}
