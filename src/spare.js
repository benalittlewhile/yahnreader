// computed propety keys

/*
let sparename = 1;
let namesList = ["Ben", "Zoe", "Charlie", "Nate", "Eric", "James"];
let heightAsBadNumber = {};

namesList.forEach((name, index) => {
  heightAsBadNumber = {
    ...heightAsBadNumber,
    [name]: index,
  };
});

console.log(heightAsBadNumber);
*/

// tagged template literals

// const parseString = (strings, ...remaining) => {
//   let i = 0;
//   [strings, remaining].forEach((element) => {
//     console.log(`${i} ${element}`);
//     i += 1;
//   });
// };

// parseString`
// this
// is
// a
// test
// }
// ${"weirdConst"}
// socket
// `;

const url = "https://reddit.com/r/all";
const url2 = "https://github.com/benalittlewhile/spare";
const url3 = "http://studio.ribbonfarm.com/neopets/thing3/thing2";

function getUrlFragment(url) {
  const routes = url.split(/http.?:\/\//)[1].split("/");
  if (routes[0] === "github.com") {
    return `${routes[0]}/${routes[1]}`;
  } else {
    return routes[0];
  }
}
console.log(getUrlFragment(url3));
