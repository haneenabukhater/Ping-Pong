function Calculator(skinName){
  this.skin = skinName;
}
//Business Logic
Calculator.prototype.pingProducer= function(userInput) {
  var newArr = [];
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0){
      newArr.push('ping-pong');
    }else if (i%5 === 0) {
      newArr.push('pong');
    }else if (i % 3 === 0) {
      newArr.push('ping');
    }else {
      newArr.push(i);
    }
  }
  return newArr;
};

Calculator.prototype.multiply = function (mult1, mult2) {
  var total = 0;
  total= mult1 * mult2;
  return total;
};

Calculator.prototype.divide = function (div1, div2) {
  var total = 0;
  total= div1 / div2;
  return total;
};

exports.calculatorModule = Calculator;
//enter elements into an ol list
// function arrToList(newArr) {
//   for (var x = newArr.length - 1; x >=0 ; x--) {
//     var list = document.getElementById('ulList');
//     var li = document.createElement('li');
//     li.innerHTML = newArr[x];
//     list.insertBefore(li, list.firstChild)
//   }
// }
