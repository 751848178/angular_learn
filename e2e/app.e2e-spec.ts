import { FirstNGPage } from './app.po';

describe('first-ng App', () => {
  let page: FirstNGPage;

  beforeEach(() => {
    page = new FirstNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
