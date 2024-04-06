

const light = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(color);
      resolve();
    }, delay);
  });
};

const light_step = () => {
  Promise.resolve()
    .then(() => {
      return light("red", 3000);
    })
    .then(() => {
      return light("green", 2000);
    })
    .then(() => {
      return light("yellow", 1000);
    })
    .finally(() => {
      return light_step();
    });
};

light_step();
