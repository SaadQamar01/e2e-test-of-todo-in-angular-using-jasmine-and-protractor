import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

describe('ng5-create-routes App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Todo heading', () => {
    page.navigateTo();
    expect(page.getTodoHeading()).toEqual('Todos');
    // browser.pause();
  });
  it('should display input field', () => {
    expect(page.getTodoInput().getText()).toEqual('');
  });
  it('should display add button', () => {
    expect(page.getAddTodoButton().getText()).toEqual('Add Todo');
  });
  it('should not display todo list', () => {
    expect(page.getTodoList().count()).toBe(0);
  });
  it('when click on add todo button then show a list', () => {
    page.getTodoInput().sendKeys('Todo 1');
    page.getAddTodoButton().click();
    page.getTodoInput().sendKeys('Todo 2');
    page.getAddTodoButton().click();
    page.getTodoInput().sendKeys('Todo 3');
    page.getAddTodoButton().click();
    page.getTodoInput().sendKeys('Todo 4');
    page.getAddTodoButton().click();
    expect(page.getTodoList().count()).toBe(4);
  });
  it('should display total item 4', () => {
    expect(page.getTotalItem()).toEqual('4');
  });
  it('should be 4 item then click on x button should be 3', () => {
    page.getfirstItem().click();
    expect(page.getTodoList().count()).toBe(3);
  });
  it('should display total item 3', () => {
    expect(page.getTotalItem()).toEqual('3');
  });
});
