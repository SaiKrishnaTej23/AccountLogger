import { AccountLoggerPage } from './app.po';

describe('account-logger App', () => {
  let page: AccountLoggerPage;

  beforeEach(() => {
    page = new AccountLoggerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
