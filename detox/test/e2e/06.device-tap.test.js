describe('Device tap', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('Device Tap')).tap();
  });

  it('tap on screen without specifying coordinates', async () => {
    await device.tap();
    await expect(element(by.text('Screen Tapped'))).toBeVisible();
  });

  it('tap on screen by coordinates ignoring status bar', async () => {
    const point = {x: 210, y: 200}
    await device.tap(point, true);
    await expect(element(by.text('Button Tapped'))).toBeVisible();
  });

  it(':android: tap on screen by coordinates including status bar', async () => {
    const point = {x: 210, y: 200}
    await device.tap(point, false);
    await expect(element(by.text('Screen Tapped'))).toBeVisible();
  });

  it('long press on screen by coordinates ignoring status bar', async () => {
    const point = {x: 150, y: 300}
    await device.longPress(point, true);
    await expect(element(by.text('Screen Long Pressed'))).toBeVisible();
  });

  it(':android: long press on screen by coordinates including status bar', async () => {
    const point = {x: 150, y: 300}
    await device.longPress(point, false);
    await expect(element(by.text('Screen Long Pressed'))).toBeVisible();
  });

  it('long press on screen by coordinates with duration ignoring status bar', async () => {
    const point = {x: 170, y: 160}
    await device.longPress(point, 2000, true);
    await expect(element(by.text('Screen Long Custom Duration Pressed'))).toBeVisible();
  });

  it(':android: long press on screen by coordinates with duration including status bar', async () => {
    const point = {x: 170, y: 160}
    await device.longPress(point, 2000, false);
    await expect(element(by.text('Screen Long Pressed'))).toBeVisible();
  });

  it('long press on screen with duration without specifying coordinates', async () => {
    await device.longPress(2000);
    await expect(element(by.text('Screen Long Pressed'))).toBeVisible();
  });

  it('long press on screen without specifying coordinates and duration', async () => {
    await device.longPress();
    await expect(element(by.text('Screen Long Pressed'))).toBeVisible();
  });
});
