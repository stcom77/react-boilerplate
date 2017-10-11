const fadeIn = (timeoutSec = 2) => {
  return {
    animation: `${timeoutSec}s linear 0s fadeIn`,
  };
};

const fadeOut = (timeoutSec = 2) => {
  return {
    animation: `${timeoutSec}s linear 0s fadeOut`,
  };
};

const slideLeft = (timeoutSec = 2) => {
  return {
    animation: `${timeoutSec}s ease 0s slideOutLeft`,
  };
};

const zoomOut = (timeoutSec = 2) => {
  return {
    animation: `${timeoutSec}s ease 0s zoomOut`,
  };
};

const slideRight = (timeoutSec = 2) => {
  return {
    animation: `${timeoutSec}s ease 0s slideInRight`,
  };
};

export { fadeIn, fadeOut, slideLeft, slideRight, zoomOut };
