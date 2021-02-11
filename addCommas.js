const addCommas = (num) => {
  let str = num.toString();

  //if num has decimals, split and use first part only. add decimals at end
  const hasDecimals = str.split(".").length === 2;
  if (hasDecimals) {
    str = str.split(".")[0];
  }

  //edge cases: triple digit nums, including those with - sign
  if (str.length <= 3 || (str.length === 4 && str[0] === "-")) {
    return str;
  } else {
    //if negative, take away minus symbol and add back to string at the end
    const isNegative = str[0] === "-";
    if (isNegative) {
      str = str.slice(1);
    }

    //slice off parts of number and add to this arr
    const partsArr = [];
    const mod = str.length % 3;
    let currPosition = 0;

    if (mod > 0) {
      partsArr.push(str.slice(0, mod));
      currPosition = mod;
    }

    while (currPosition < str.length) {
      partsArr.push(str.slice(currPosition, currPosition + 3));
      currPosition += 3;
    }

    let finalString;
    isNegative
      ? (finalString = `-${partsArr.join(",")}`)
      : (finalString = partsArr.join(","));

    hasDecimals
      ? (finalString = `${finalString}.${num.toString().split(".")[1]}`)
      : null;

    return finalString;
  }
};

module.exports = addCommas;
