import { DATA_PAGE } from './data';
import { stateCreator } from './state';

export function isMail(s){
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return reg.test(s)
}

export function isName(s){
  let reg = /^[^0-9!<>,;?=+()@#"°{}_$%:]+$/i;
  return reg.test(s);
}

export function isSafe(s){
  let reg = /^[^<>{}]+$/g;
  return reg.test(s);
}
export function matchComponent(ID){
  return DATA_PAGE.routes.find((route) => route.ID === ID);
}

export function matchComponentName(ID) {
  return matchComponent(ID).name
}

export function getAllChunksForComponent(ID){
  return stateCreator()[matchComponentName(ID)];
}

export function matchDataForChunk(){

}

//
// export function matchComponentName(ID){
//   return matchComponent(ID).name
// }