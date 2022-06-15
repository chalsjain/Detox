const fs = require('fs-extra');

const tempFile = require('../../../utils/tempFile');

/**
 * @typedef DeviceDriverDeps
 * @property eventEmitter { AsyncEmitter }
 */

class DeviceDriver {
  /**
   * @param deps { DeviceDriverDeps }
   */
  constructor({ eventEmitter }) {
    this.emitter = eventEmitter;
  }

  /**
   * @returns { String | undefined }
   */
  get externalId() {
    return undefined;
  }

  /**
   * @returns { String | undefined }
   */
  get deviceName() {
    return undefined;
  }

  /**
   * @returns { String }
   */
  get platform() {
    return '';
  }

  validateDeviceConfig(_deviceConfig) {}

  async takeScreenshot(_screenshotName) {}
  async setBiometricEnrollment() {}
  async setStatusBar(_params) {}
  async resetStatusBar() {}
  async setLocation(_lat, _lon) {}
  async reverseTcpPort() {}
  async unreverseTcpPort() {}
  async clearKeychain() {}
  async typeText(_text) {}

  async cleanup() {
    this.emitter.off(); // TODO not the right place for this
  }
}

/**
 * @typedef TestAppDriverDeps
 * @property client { Client }
 * @property invocationManager { InvocationManager }
 * @property eventEmitter { AsyncEmitter }
 */

/**
 * @typedef AppInfo
 * @property binaryPath { String }
 */

/**
 * @typedef LaunchInfo
 * @property launchArgs { Object }
 */

class TestAppDriver {

  /**
   * @param deps { TestAppDriverDeps }
   */
  constructor({ client, invocationManager, eventEmitter }) {
    this.client = client;
    this.invocationManager = invocationManager;
    this.emitter = eventEmitter;

    this._pid = null;
    this._appInfo = null;
  }

  get uiDevice() {
    return null;
  }

  /**
   * @returns {boolean} Whether the app is currently running
   */
  isRunning() {
    return !!this._pid;
  }

  /**
   * @param appInfo { AppInfo }
   */
  async select(appInfo) {
    this._appInfo = appInfo;
  }

  async deselect() {
    this._appInfo = null;
  }

  /**
   * @param _launchInfo { LaunchInfo }
   */
  async launch(_launchInfo) {}

  /**
   * @param _launchInfo { LaunchInfo }
   */
  async waitForLaunch(_launchInfo) {}

  async reloadReactNative() {}
  async resetContentAndSettings() {}
  async deliverPayload(_params) {} // TODO (multiapps) Revisit whether keeping this method public makes sense at all
  async sendUserActivity(_payload) {}
  async sendUserNotification(_payload) {}
  async terminate() {
    this._pid = null;
  }

  async invoke(_action) {}

  setInvokeFailuresListener(listener) {
    this.client.setEventCallback('testFailed', listener);
  }

  async startInstrumentsRecording({ recordingPath, samplingInterval }) {
    const { client } = this;
    if (client.isConnected) {
      return client.startInstrumentsRecording(recordingPath, samplingInterval);
    }
  }

  async stopInstrumentsRecording() {
    const { client } = this;
    if (client.isConnected) {
      return client.stopInstrumentsRecording();
    }
  }

  async install() {}
  async uninstall() {}

  async setOrientation(_orientation) {}
  async setPermissions(_permissions) {}
  async sendToHome() {}
  async pressBack() {}
  async matchFace() {}
  async unmatchFace() {}
  async matchFinger() {}
  async unmatchFinger() {}
  async shake() {}
  async enableSynchronization() {}
  async disableSynchronization() {}
  async captureViewHierarchy() {}
  async cleanup() {}

  /** @protected */
  async _waitUntilReady() {
    return this.client.waitUntilReady();
  }

  /** @protected */
  _createPayloadFile(payload) {
    const payloadFile = tempFile.create('payload.json');
    fs.writeFileSync(payloadFile.path, JSON.stringify(payload, null, 2));
    return payloadFile;
  }
}


module.exports = {
  DeviceDriver,
  TestAppDriver,
};
