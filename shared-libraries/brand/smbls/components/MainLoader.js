export const MainLoader = {
  attr: {
    id: 'main-loader',
  },
  position: 'fixed',
  boxSize: '100% 100%',
  inset: '0 0 0 0',
  zIndex: 9990099,
  pointerEvents: 'none',
  theme: 'document',
  overflow: 'hidden',
  animation: 'scaleOutIn',
  animationDuration: 'E',
  LoaderRatio: {
    position: 'absolute',
    zIndex: 1,
  },
  LogoLoader: {
    zIndex: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: '1em',
    transform: 'translate3d(-50%, -50%, 0)',
  },
};