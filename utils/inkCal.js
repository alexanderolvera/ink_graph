Number.prototype.toFixedNoRound = function(prec = 1){
  const factor = Math.pow(10, prec);
  return Math.floor(this * factor) / factor
}

export default function inkGrapher(target, current, actual = 0) {
  // let offset;
  // if (current > target) {
  //   offset = current - target
  //   //(current - target * actual) - actual
  // } else {
  //   offset = target - current
  // }

  // return Number((offset * actual).toFixed(2));

  let limit = (current > target) ? actual : -Math.abs(actual);

  return (Math.abs((actual *(current - target)) - limit)).toFixedNoRound(2)
}