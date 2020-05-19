import { renderHook } from '@testing-library/react-hooks';
import useMultiPossibility from 'use-multi-possibility';
import usePoll from '../../src/index';

const flushPromises = () => new Promise(setImmediate);

describe('usePoll', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  useMultiPossibility(([arg]) => {
    it(`should throw an error if no function callback is provided (${JSON.stringify(arg)})`, () => {
      expect(() => usePoll(arg)).toThrowError(TypeError);
    });
  }, [[undefined, null, 0, 'string', [], {}]]);

  it('should call the function immediately, and then after each timeout finishes', async () => {
    const callback = jest.fn();
    renderHook(() => usePoll(callback));
    await flushPromises();
    jest.runOnlyPendingTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should stop polling when the component is unmounted', async () => {
    const callback = jest.fn();
    const { unmount } = renderHook(() => usePoll(callback));
    await flushPromises();
    jest.runOnlyPendingTimers();
    unmount();
    await flushPromises();
    jest.runOnlyPendingTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
