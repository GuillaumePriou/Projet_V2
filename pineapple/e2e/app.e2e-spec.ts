import { PineapplePage } from './app.po';

describe('pineapple App', () => {
  let page: PineapplePage;

  beforeEach(() => {
    page = new PineapplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
