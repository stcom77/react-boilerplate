function isTouchDevice() {
  return !!(typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    ('ontouchstart' in window || navigator.msMaxTouchPoints > 0));
}

function isNarrowScreenDevice() {
  return !!(typeof window !== 'undefined' &&
    window.innerWidth <= 480);
}

export {isTouchDevice, isNarrowScreenDevice};
