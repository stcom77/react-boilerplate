import { cloneElement } from 'react';

export const addProps = (element, props) => cloneElement(element, { ...props });

export const compareState = (oldState, newState) => {
  let changedKeys = Object.keys(oldState).reduce((prev, key) => {
    if ((typeof oldState[key] !== 'object') && (oldState[key] !== newState[key])) {
      pushIfNotIn(prev, key);
    }
    return prev;
  }, []);

  changedKeys = Object.keys(newState).reduce((prev, key) => {
    if ((typeof oldState[key] !== 'object') && (oldState[key] !== newState[key])) {
      pushIfNotIn(prev, key);
    }
    return prev;
  }, []);

  return changedKeys;
};

const pushIfNotIn = (arr, key) => !arr.includes(key) && arr.push(key);

const makeRoundArray = (arr, shift, direction = 1) => {
  shift  = shift > arr.length ? 0 : shift  * direction;
  return [...arr.slice(-shift), ...arr.slice(0, -shift)];
};
/*
//алгоритм для циклического слайдера
получаем массив слайдов
если показываем слайд в нулевой позиции тогда
сдвигаем массив на половину количества слайдов справа от нулевого
для последнего так же
имеет значение направление движения
считаем количество в напр движения и количество в обр направлении
полож -  двигаемся вправо
отриц -  двигаемся влево
x - позиция элемента
arr.slice(x).length - arr.slice(0, x).length относительное смещение
как только относительное смещение станет меньше половины длины массива Math.floor([1,2,3,4,5].length /2) нужно смещать
смещаем на половину длины массива в направлении движения makeRoundArray(arr, Math.floor([1,2,3,4,5].length /2), 1)
а позиция текущего элемента считается так модуль(длина масс - (shift + тек поз))
*/
class CyclicArray {
  constructor(){
    this.store = [];
  }
  shift(shiftVal, direction = 1){
    shiftVal  = shiftVal > this.length ? 0 : shiftVal  * direction;
    this.store = [...this.store.slice(-shiftVal), ...this.store.slice(0, -shiftVal)];
  }
  recalcPosition(curPosition, shiftVal){
    return Math.abs(this.length - (shiftVal + curPosition));
  }
  get length(){
    return this.store.length;
  }
}

export const isRetina = () => {
  var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx),(min-resolution: 192dpi)';
  if (window.matchMedia && window.matchMedia(mediaQuery).matches)
    return true;
  return false;
};
