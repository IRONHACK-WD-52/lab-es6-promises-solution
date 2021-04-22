// // Iteration 1 using callbacks
const cookSteak = new Promise((resolve, reject) => {
  addFood(steak[0], "#steak", () => {
    addFood(steak[1], "#steak", () => {
      addFood(steak[2], "#steak", () => {
        addFood(steak[3], "#steak", () => {
          addFood(steak[4], "#steak", () => {
            addFood(steak[5], "#steak", () => {
              addFood(steak[6], "#steak", () => {
                addFood(steak[7], "#steak", () => {
                  document.querySelector(
                    "#table"
                  ).innerHTML += `<img src="public/images/steak.jpg" />`;
                  resolve();
                });
              });
            });
          });
        });
      });
    });
  });
});

// // Iteration 2 using `.then()`
const cookMash = new Promise((resolve, reject) => {
  addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
          addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
            document.querySelector(
              "#table"
            ).innerHTML += `<img src="public/images/mashPotatoes.jpg" />`;

            resolve();
          });
        });
      });
    });
  });
});

// Iteration 3 using async and await

async function makeFood(steps, id) {
  return new Promise(async (resolve, reject) => {
    for (let step of steps) {
      await addFood(step, id);
    }

    document.querySelector(
      "#table"
    ).innerHTML += `<img src="public/images/brusselSprouts.jpg" />`;

    resolve();
  });
}

const cookBrusselSprouts = makeFood(brusselSprouts, "#brusselSprouts");

// BONUS

Promise.all([cookBrusselSprouts, cookSteak, cookMash]).then((result) => {
  const audio = new Audio("public/media/dinnerIsServed.mp3");
  audio.volume = 0.5;
  audio.play();
  alert("Dinner is served!");
});

// // IIFE
// (async function run() {
//   await Promise.all([
//     cookSteak,
//     cookMash,
//     makeFood(brusselSprouts, "#brusselSprouts"),
//   ]);

//   const audio = new Audio("public/media/dinnerIsServed.mp3");
//   audio.volume = 0.5;
//   audio.play();
//   alert("Dinner is served!");
// })();
