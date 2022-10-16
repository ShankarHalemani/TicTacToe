let noOfButtons = document.querySelectorAll(`.inner-div`).length;
let turn = `X`;
let gameOver = false;
let count = 0;

function handleClick(event) {
  let toggle = event.target;
  if (!gameOver) {
    if (!toggle.innerText) {
      toggle.innerText = turn;
      winner();
      if (turn === `X`) {
        document.querySelector(`.to-play`).innerText = `Player 2-O to play`;
        turn = `O`;
      } else if (turn === `O`) {
        document.querySelector(`.to-play`).innerText = `Player 1-X to play`;
        turn = `X`;
      }
    }
  }
  if (count === 9 && gameOver === false) {
    document.querySelector(`.winner`).innerHTML = `ITS A DRAW 🤖`;
    document.querySelector(`.to-play`).innerText = `Refresh to start new game`;
  } else if (gameOver === true) {
    document.querySelector(`.to-play`).innerText = `Refresh to start new game`;
  }
}

for (let i = 0; i < noOfButtons; i++) {
  document
    .querySelectorAll(`.inner-div`)
    [i].addEventListener(`click`, handleClick);
}

/*  good X O toggling code if u do not understand above code u can refer this
function handleClick(event) {
  let div = document.getElementById(event.target.id);

  // check if there is some value in tthe div
  if (!div.innerText) {
    div.innerText = turn;

    if (turn === "X") turn = "O";
    else if (turn === "O") turn = "X";
  }
}

document.getElementById("one").addEventListener("click", handleClick);
document.getElementById("two").addEventListener("click", handleClick);
document.getElementById("three").addEventListener("click", handleClick);
document.getElementById("four").addEventListener("click", handleClick);
document.getElementById("five").addEventListener("click", handleClick);
document.getElementById("six").addEventListener("click", handleClick);
document.getElementById("seven").addEventListener("click", handleClick);
document.getElementById("eight").addEventListener("click", handleClick);
document.getElementById("nine").addEventListener("click", handleClick);
*/

let winArray = [
  [`one`, `two`, `three`],
  [`four`, `five`, `six`],
  [`seven`, `eight`, `nine`],
  [`one`, `four`, `seven`],
  [`two`, `five`, `eight`],
  [`three`, `six`, `nine`],
  [`one`, `five`, `nine`],
  [`three`, `five`, `seven`],
];

function winner() {
  for (let i = 0; i < winArray.length; i++) {
    let array = winArray[i];
    let first = document.querySelector(`#${array[0]}`);
    let second = document.querySelector(`#${array[1]}`);
    let third = document.querySelector(`#${array[2]}`);

    if (first.innerText) {
      if (
        first.innerText === second.innerText &&
        first.innerText === third.innerText
      ) {
        gameOver = true;
        if (first.innerText === `X`) {
          document.querySelector(
            `.winner`
          ).innerHTML = `Player 1-X won YO!!!!😎 Plyer 2-O better luck next time 👎😕`;
          for (let i = 0; i < noOfButtons; i++) {
            document.querySelectorAll(`.inner-div`)[i].innerText = `X`;
          }
        } else if (first.innerText === `O`) {
          document.querySelector(
            `.winner`
          ).innerHTML = `Player 2-O won YO!!!!😎 Plyer 1-X better luck next time 👎😕`;
          for (let i = 0; i < noOfButtons; i++) {
            document.querySelectorAll(`.inner-div`)[i].innerText = `O`;
          }
        }
      }
    }
  }
  count++;
}
