import getTooltipStyle from 'src/getTooltipStyle';

describe('getTooltipStyle', () => {
  it('should position the tooltip at the center/bottom of the component', () => {
    const el = document.createElement('div');
    el.getBoundingClientRect = () => ({
      bottom: 200,
      left: 100,
      width: 220
    })
    expect(getTooltipStyle(el).transform).toBe('translate(60px, 200px)');
  });

  it('should position the tooltip to the left if the element is at the right of the window', () => {
    const originalWidth = window.innerWidth;

    window.innerWidth = 320;
    const el = document.createElement('div');
    el.getBoundingClientRect = () => ({
      bottom: 200,
      left: 100,
      width: 220
    })
    expect(getTooltipStyle(el).transform).toBe('translate(20px, 200px)');

    window.innerWidth = originalWidth;
  });
});
