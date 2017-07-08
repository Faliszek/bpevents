export function isMail(s){
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return reg.test(s)
}

export function isName(s){
  let reg = /^[^0-9!<>,;?=+()@#"°{}_$%:]+$/i;
  return reg.test(s);
}

export function isSafe(s){
  var reg = /^[^<>{}]+$/g;
  return reg.test(s);
}