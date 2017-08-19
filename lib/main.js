let barCodeArr = ['||:::　', ':::||　', '::|:|　', '::||:　', ':|::|　', ':|:|:　',
  ':||::　', '|:::|　', '|::|:　', '|:|::　'];

function getVerify(total) {
  return (Math.ceil(total / 10) * 10) - total;
}

function arrToStr(arr) {
  if (arr.length > 6) {
    arr.splice(5, 0, '-');
  }

  return arr.join('');
}

function barCodeToZipCode(str) {
  let result = [];
  let barArr = str.split('　');
  barArr.forEach(item => {
    if (item.length > 1) {
      result.push(barCodeArr.indexOf(item + '　'));
    }
  });
  result.pop();

  return arrToStr(result);
}

function zipCodeToBarCode(str) {
  let result = '|　';
  let total = 0;
  let zipArr = str.split('');
  zipArr.forEach(item => {
    if (item !== '-') {
      total += item - 0;
      result += barCodeArr[item];
    }
  });
  result += barCodeArr[getVerify(total)];

  return result + '|';
}

function main(param) {
  let result;
  if (param.length > 10) {
    result = barCodeToZipCode(param);
  } else {
    result = zipCodeToBarCode(param);
  }

  return result;
}

module.exports = main;
