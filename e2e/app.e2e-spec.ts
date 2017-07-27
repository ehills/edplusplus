import { EdplusplusPage } from './app.po';

describe('edplusplus App', () => {
  let page: EdplusplusPage;

  beforeEach(() => {
    page = new EdplusplusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
