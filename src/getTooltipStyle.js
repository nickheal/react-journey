export default function getTooltipStyle(step) {
  const TOOLTIP_WIDTH = 300;
  const boundingRect = step.getBoundingClientRect();
  const itemHorizontalCenter = boundingRect.left + boundingRect.width / 2;
  let tooltipLeft = itemHorizontalCenter - (TOOLTIP_WIDTH / 2);
  if (tooltipLeft < 0) tooltipLeft = 0;
  if (tooltipLeft + TOOLTIP_WIDTH > window.innerWidth) tooltipLeft = window.innerWidth - TOOLTIP_WIDTH;
  return {
    transform: `translate(${tooltipLeft}px, ${boundingRect.bottom}px)`,
    background: '#fff',
    borderRadius: 4,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    transition: 'transform 500ms ease-in-out',
    width: 300,
    zIndex: 3
  };
}
