"use strict";
//team database starts here
let TeamData = [

  {
    id: 2,
    name: "LAKERS",
    score: 100
  },
  {
    id: 3,
    name: "WARRIORS",
    score: 104
  },
  {
    id: 4,
    name: "SUNS",
    score: 112
  },
  {
    id: 5,
    name: "MAVERICKS",
    score: 95
  },
  {
    id: 6,
    name: "RAPTORS",
    score: 108
  },
  {
    id: 7,
    name: "BUCKS",
    score: 110
  }

]


//call required html elements
const player0Name = document.querySelector("#name--0");
const player1Name = document.querySelector("#name--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

//resetting value of score to zero
const reset = function () {
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
};

//generating average score
const randomScore = function () {
  let random = Math.floor(Math.random() * 15 + 1);
  let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  random = random * plusOrMinus;
  return random;
};

const predictScore = function () {
  reset();
  //console.log(teamvalue1.score);
  //console.log(teamvalue2.score);
  teamvalue1.score += randomScore();
  scorePlayer0.textContent = teamvalue1.score;
  teamvalue2.score += randomScore();
  scorePlayer1.textContent = teamvalue2.score;
};

let teamvalue1;
let teamvalue2;

//user input
const teamName = function (val) {
  reset();
  let setteamVal = prompt("Playing at home or away?");
  if (setteamVal.toLowerCase() == "home") {
    player0Name.textContent = val;
    if (player0Name.textContent != player1Name.textContent) {
      teamvalue1 = TeamData.find(({ name }) => name === val);
    }
    else {
      player0Name.textContent = "Team 1";
      alert("Please choose another team");
    }
  }
  else if (setteamVal.toLowerCase() == "away") {
    player1Name.textContent = val;
    if (player1Name.textContent != player0Name.textContent) {
      teamvalue2 = TeamData.find(({ name }) => name === val);
    }
    else {
      player1Name.textContent = "Team 2";
      alert("Please choose another team");
    }
  }
  else {
    alert("please enter either Home or Away");
  }

}

document.querySelector(".btn--hold").addEventListener("click", function () {
  predictScore();
});

let teamsname = document.querySelectorAll('#team');

teamsname.forEach(ele => {
  ele.addEventListener('click', function () {
    teamName(ele.value);
  })
})


