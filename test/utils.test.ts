import { requestFormatter, dilate, parsePort } from '../lib/utils';

describe('Utils module', () => {
  it('Utils requestFormatter() adding question mark', () => {
    const testReq = { query: { q: 'chi è' } };
    const testRes = { response: 'stocazzo' };

    const { query } = requestFormatter(testReq)(testRes);
    expect(query).toBe('chi è?');
  });

  it('Utils requestFormatter(), no question mark added', () => {
    const testReq = { query: { q: 'chi è?' } };
    const testRes = { response: 'stocazzo' };

    const { query } = requestFormatter(testReq)(testRes);
    expect(query).toBe('chi è?');
  });

  it('Utils dilate() should enlarge consistently', () => {
    const testReq = { query: { q: 'chi è?', big: 1 } };
    const testRes = { response: 'stocazzo' };

    const { response } = dilate(testReq)('gran')(testRes);
    expect(response).toBe('stograncazzo');
  });

  it('Utils dilate() should behave if big param is something else', () => {
    const testReq = { query: { q: 'chi è?', big: 2 } };
    const testRes = { response: 'stocazzo' };

    const { response } = dilate(testReq)('gran')(testRes);
    expect(response).toBe('stocazzo');
  });

  it('getPort() should behave consistently', () => {
    expect(parsePort()).toBe(3000);
    expect(parsePort(80)).toBe(80);
  });
});
