function bisection1() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const result = bisectionMethod1(a, b);
    document.getElementById('result4').value = result.toFixed(6);
  }
  
  function bisection2() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const result = bisectionMethod2(a, b);
    document.getElementById('result5').value = result.toFixed(6);
  }
  
  function bisectionMethod1(a, b) {
    const tolerance = 1e-6;
  
    if (Math.pow(a, 2) - 4 === 0) {
      return a;
    }
  
    if (Math.pow(b, 2) - 4 === 0) {
      return b;
    }
  
    let mid = (a + b) / 2;
  
    while (Math.abs(b - a) > tolerance) {
      if (Math.pow(mid, 2) - 4 === 0) {
        return mid;
      } else if ((Math.pow(a, 2) - 4) * (Math.pow(mid, 2) - 4) < 0) {
        b = mid;
      } else {
        a = mid;
      }
  
      mid = (a + b) / 2;
    }
  
    return mid;
  }
  
  function bisectionMethod2(a, b) {
    const tolerance = 1e-6;
  
    if (Math.cos(a) - a === 0) {
      return a;
    }
  
    if (Math.cos(b) - b === 0) {
      return b;
    }
  
    let mid = (a + b) / 2;
  
    while (Math.abs(b - a) > tolerance) {
      if (Math.cos(mid) - mid === 0) {
        return mid;
      } else if ((Math.cos(a) - a) * (Math.cos(mid) - mid) < 0) {
        b = mid;
      } else {
        a = mid;
      }
  
      mid = (a + b) / 2;
    }
  
    return mid;
  }