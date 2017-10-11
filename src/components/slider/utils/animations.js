const callAnimation = (durationSec, animFunc, node, endCallback) => {
  const start = performance.now();
  let timeFraction = 0;

  const animateIt = () => {
    const time = performance.now();
    timeFraction = ((time - start)) / (durationSec * 1000);
    if (timeFraction > 1) timeFraction = 1;
    const progress = timing(timeFraction);
    animFunc(node, progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animateIt);
    } else {
      endCallback && endCallback();
    }
  };
  requestAnimationFrame(animateIt);
};

function makeAnimation(type, node, durationSec = 2, endCallback) {
  if (type === 'fadeInOut') {
    callAnimation(durationSec, getAnimationFunc('fadeOut'), node, () => {
      endCallback && endCallback();
      callAnimation(durationSec, getAnimationFunc('fadeIn'), node);
    });
  }
  if (type === 'changeRightLeft') {
    callAnimation(durationSec, getAnimationFunc('moveLeft'), node, () => {
      endCallback && endCallback();
      callAnimation(durationSec, getAnimationFunc('moveRight'), node);
    });
  }
}

function fadeIn(node, progress) {
  node.style.opacity = progress;
}

function fadeOut(node, progress) {
  node.style.opacity = 1 - progress;
}

function moveLeft(node, progress) {
  node.style.marginLeft = `-${progress * 600}px`;
}

function moveRight(node, progress) {
  node.style.marginLeft = `${(1 - progress) * 600}px`;
}

function timing(timeFraction) {
  return timeFraction;
}


function getAnimationFunc(type) {
  switch (type) {
  case 'fadeIn':
    return fadeIn;
  case 'fadeOut':
    return fadeOut;
  case 'moveLeft':
    return moveLeft;
  case 'moveRight':
    return moveRight;
  case 'fadeInOut':
    return fadeOut;
  }
}

export { makeAnimation };

