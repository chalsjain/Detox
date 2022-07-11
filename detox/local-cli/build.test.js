const tempfile = require('tempfile');

describe('build', () => {
  let execSync, detox, callCli;

  beforeEach(() => {
    // @ts-ignore
    callCli = global.callCli;
    jest.mock('child_process');
    execSync = require('child_process').execSync;

    jest.mock('../src/utils/logger');
    jest.mock('../internals', () => {
      const DetoxConfigErrorComposer = require('../src/errors/DetoxConfigErrorComposer');
      return ({
        init: jest.fn(),
        cleanup: jest.fn(),
        config: {
          appsConfig: {},
          artifactsConfig: {},
          behaviorConfig: {},
          errorComposer: new DetoxConfigErrorComposer(),
          deviceConfig: {},
          sessionConfig: {}
        },
        log: require('../src/utils/logger')
      });
    });

    detox = require('../internals');
  });

  it('passes argv to composeConfig', async () => {
    await callCli('./build', 'build -C /etc/.detoxrc.js -c myconf').catch(() => {});

    expect(detox.init).toHaveBeenCalledWith({
      argv: expect.objectContaining({
        'C': '/etc/.detoxrc.js',
        'c': 'myconf',
      }),
      override: expect.objectContaining({
        artifacts: false,
        session: {
          autoStart: false,
          server: expect.any(String),
        },
      }),
    });
  });

  it('runs the build script from the composed device config', async () => {
    detox.config.appsConfig.default = { build: 'yet another command' };

    await callCli('./build', 'build');
    expect(execSync).toHaveBeenCalledWith('yet another command', expect.anything());
  });

  it('skips building the app if the binary exists and --if-missing flag is set', async () => {
    detox.config.appsConfig.default = { build: 'yet another command', binaryPath: __filename };

    await callCli('./build', 'build -i');
    expect(execSync).not.toHaveBeenCalled();

    await callCli('./build', 'build --if-missing');
    expect(execSync).not.toHaveBeenCalled();

    expect(detox.log.info).toHaveBeenCalledWith('Skipping build for "default" app...');
  });

  it('fails with an error if a build script has not been found', async () => {
    detox.config.appsConfig.default = {};
    await expect(callCli('./build', 'build')).rejects.toThrowError(/Failed to build/);
  });

  it('should ignore missing build command with -s, --silent flag', async () => {
    detox.config.appsConfig.default = {};
    await expect(callCli('./build', 'build -s')).resolves.not.toThrowError();
    expect(detox.log.warn).not.toHaveBeenCalled();
  });

  it('should print a warning upon user build script failure', async () => {
    detox.config.appsConfig.default = { build: 'a command' };
    execSync.mockImplementation(() => { throw new Error('Build failure'); });
    await expect(callCli('./build', 'build')).rejects.toThrowError(/Build failure/);
    expect(detox.log.warn).toHaveBeenCalledWith(expect.stringContaining('You are responsible'));
  });

  it('should print a warning if app is not found at binary path', async () => {
    detox.config.appsConfig.default = { binaryPath: tempfile() };
    await expect(callCli('./build', 'build -s')).resolves.not.toThrowError();
    expect(detox.log.warn).toHaveBeenCalledWith(expect.stringContaining('could not find your app at the given binary path'));
  });

  it('should print extra message with the app name before building (in a multi-app configuration)', async () => {
    detox.config.appsConfig.app1 = { binaryPath: tempfile(), build: ':' };
    detox.config.appsConfig.app2 = { binaryPath: tempfile(), build: ':' };

    await expect(callCli('./build', 'build -s')).resolves.not.toThrowError();
    expect(detox.log.info).toHaveBeenCalledWith(expect.stringContaining('app1'));
    expect(detox.log.info).toHaveBeenCalledWith(expect.stringContaining('app2'));
  });

  it('should not print that extra message when the app is single', async () => {
    detox.config.appsConfig.default = { binaryPath: tempfile(), build: ':' };

    await expect(callCli('./build', 'build -s')).resolves.not.toThrowError();
    expect(detox.log.info).not.toHaveBeenCalledWith(expect.stringContaining('default'));
  });
});
