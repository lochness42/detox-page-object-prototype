import { page } from "./pageStore";

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(page().home().welcomeText()).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await page().home().helloButton().tap();
    await expect(page().hello().helloText()).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await page().home().worldButton().tap();
    await expect(page().world().worldText()).toBeVisible();
  });
});