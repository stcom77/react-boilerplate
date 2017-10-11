export const SWIPE_LEFT = 0;
export const SWIPE_RIGHT = 1;

function handleGesure(touchstartX, touchendX ) {
  if (touchendX < touchstartX) {
    return SWIPE_LEFT;
  }
  if (touchendX > touchstartX) {
    return SWIPE_RIGHT;
  }
}

export { handleGesure };
