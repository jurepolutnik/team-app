import { FuzbalPage } from './app.po';

describe('fuzbal App', function() {
  let page: FuzbalPage;

  beforeEach(() => {
    page = new FuzbalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
