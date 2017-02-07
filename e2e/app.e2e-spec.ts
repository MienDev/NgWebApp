import { SdaoWebAppPage } from './app.po';

describe('sdao-web-app App', function() {
  let page: SdaoWebAppPage;

  beforeEach(() => {
    page = new SdaoWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
