import { BonPage } from './app.po';

describe('bon App', function() {
  let page: BonPage;

  beforeEach(() => {
    page = new BonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
