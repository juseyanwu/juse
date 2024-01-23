var candy = function(ratings) {
  var left = new Array(ratings.length).fill(1);
  var right = new Array(ratings.length).fill(1);
  for (var i = 1; i < ratings.length; i++) {
      if(ratings[i] > ratings[i-1])
          left[i] = left[i-1] + 1;
  }
  let count = left[ratings.length - 1];
  for (let j = ratings.length - 2; j >= 0; j-- ) {
      if(ratings[j] > ratings[j+1]) {
          right[j] = right[j+1] + 1;
      }
      count += Math.max(left[j], right[j])
  }
  return count;
};
