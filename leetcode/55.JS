/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if(s.length == 0) return true;
  let sStack = s.split('');
  let tStack = t.split('');
  while(tStack.length>0){
          let tItem = tStack.pop();
          if(tItem == sStack[sStack.length-1]){
              sStack.pop();
              if(sStack.length == 0) return true;
          }
  }
  return false;
};
