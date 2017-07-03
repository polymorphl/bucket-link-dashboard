import { BucketLinkDashboardPage } from './app.po';

describe('bucket-link-dashboard App', () => {
  let page: BucketLinkDashboardPage;

  beforeEach(() => {
    page = new BucketLinkDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
