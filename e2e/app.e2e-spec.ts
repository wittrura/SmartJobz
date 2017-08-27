import { SmartjobzPage } from './app.po';

describe('smartjobz App', () => {
  let page: SmartjobzPage;

  beforeEach(() => {
    page = new SmartjobzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
