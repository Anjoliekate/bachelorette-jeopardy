// type GameData = {
//   [category: string]: {
//     clues: {
//       question: { type: ['text', 'video'], text?: string,  videoUrl?: string },
//       answer: { type: ['text', 'video'], text?: string,  videoUrl?: string }
//     }[]
//   }
// }

var gameData = {
  Bride: {
    clues: [
      {
        question: {
          text: "This is the bride's go-to drink.",
          type: "text",
          videoUrl: "",
        },
        answer: {
          text: "What is a Spicy Margarita- with patron silver?",
          type: "text",
          videoUrl: "",
        },
        rank: 1,
      },
      {
        question: {
          text: "This is the bride's zodiac sign.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/v4w_mAolkiA",
        },
        answer: { text: "What is Pisces/Aries?", type: "text", videoUrl: "" },
        rank: 2,
      },
      {
        question: {
          text: "The bride has watched this movie 10,000 times.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/gXFocRisWEU",
        },
        answer: { text: "What is Willy Wonka?", type: "text", videoUrl: "" },
        rank: 5,
      },
      {
        question: {
          text: "This is the bride's most expensive purchase (with her own money).",
          type: "text",
          videoUrl: "https://youtube.com/shorts/nuxg4nGn0hk",
        },
        answer: {
          text: "What is a Red Light Mask?",
          type: "text",
          videoUrl: "",
        },
        rank: 4,
      },
      {
        question: {
          text: "This is the bride's new last name.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/FljES6HdBOA",
        },
        answer: { text: "What is Houck?", type: "text", videoUrl: "" },
        rank: 1,
      },
    ],
  },
  "Before the Groom": {
    clues: [
      {
        question: {
          text: "This is how many official boyfriends the bride has had.",
          type: "text",
          videoUrl: "",
        },
        answer: { text: "What is 3?", type: "text", videoUrl: "" },
        rank: 5,
      },
      {
        question: {
          text: "This was the band she fangirled about as a kid.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/Od9DYuD7b2o",
        },
        answer: { text: "What is One Direction?", type: "text", videoUrl: "" },
        rank: 3,
      },
      {
        question: {
          text: "This is the amount of choirs Alysse was in in her senior year of high school.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/5zfsMM84N2E",
        },
        answer: { text: "What is four choirs?", type: "text", videoUrl: "" },
        rank: 4,
      },
      {
        question: {
          text: "The bride has lived in this many states.",
          type: "text",
          videoUrl: "",
        },
        answer: { text: "What is 1?", type: "text", videoUrl: "" },
        rank: 2,
      },
      {
        question: {
          text: "This is the sport that the bride played in high school.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/YmorYFpqJKI",
        },
        answer: { text: "What is Tennis?", type: "text", videoUrl: "" },
        rank: 1,
      },
    ],
  },
  "The Couple": {
    clues: [
      {
        question: {
          text: "This is the couple's favorite trip they have gone on together.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/x5a7XriAS70",
        },
        answer: { text: "What is Austin, TX?", type: "text", videoUrl: "" },
        rank: 5,
      },
      {
        question: {
          text: "This partner is the passenger princess.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/Hw1boK7MaOg",
        },
        answer: { text: "Who is Tommy?", type: "text", videoUrl: "" },
        rank: 3,
      },
      {
        question: {
          text: "This is where the couple met.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/h0EjKTWD3Ng",
        },
        answer: {
          text: "Where is Alysse's apartment (near DSU campus)?",
          type: "text",
          videoUrl: "",
        },
        rank: 4,
      },
      {
        question: {
          text: "If it were a date night in or a date night out, this couple would choose to...",
          type: "text",
          videoUrl: "https://youtube.com/shorts/e8zg6__hFbU",
        },
        answer: { text: "What is a night in?", type: "text", videoUrl: "" },
        rank: 2,
      },
    ],
  },
  "Wedding Trivia": {
    clues: [
      {
        question: {
          text: "This is the term for a small wedding.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/w9j1l5lwNkY",
        },
        answer: { text: "What is an Elopement?", type: "text", videoUrl: "" },
        rank: 1,
      },
      {
        question: {
          text: "This is the most popular month for weddings.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/GXr-NP_EMBk",
        },
        answer: { text: "What is October?", type: "text", videoUrl: "" },
        rank: 3,
      },
      {
        question: {
          text: "This is the finger that the wedding ring is traditionally worn on.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/ZjUs54QO1fM",
        },
        answer: {
          text: "What is the left ring finger?",
          type: "text",
          videoUrl: "",
        },
        rank: 2,
      },
      {
        question: {
          text: "This anniversary year is traditionally called the 'silver anniversary'.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/Fxheo0tVjJY",
        },
        answer: {
          text: "What is the 25th year/anniversary?",
          type: "text",
          videoUrl: "",
        },
        rank: 4,
      },
      {
        question: {
          text: "In what country did the tradition of the white wedding dress originate?",
          type: "text",
          videoUrl: "https://youtube.com/shorts/Ilztp4lFFL0",
        },
        answer: { text: "Where is England?", type: "text", videoUrl: "" },
        rank: 5,
      },
    ],
  },
  Groom: {
    clues: [
      {
        question: {
          text: "This is the song the groom played while dabbing mid stream.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/Idy0YaHIszA",
        },
        answer: {
          text: "What is Static by Steve Lacey?",
          type: "text",
          videoUrl: "",
        },
        rank: 5,
      },
      {
        question: {
          text: "This is the sport the groom played in high school.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/Fdtr7_k7N-I",
        },
        answer: { text: "What is Wrestling?", type: "text", videoUrl: "" },
        rank: 3,
      },
      {
        question: {
          text: "This is the groom's streamer name.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/JMjxYUA_peY",
        },
        answer: { text: "What is TidalFlux?", type: "text", videoUrl: "" },
        rank: 2,
      },
      {
        question: {
          text: "This is the groom's middle name.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/HynfZ5BXJRU",
        },
        answer: { text: "What is Andrew?", type: "text", videoUrl: "" },
        rank: 4,
      },
    ],
  },
  "Before the Bride": {
    clues: [
      {
        question: {
          text: "This was the groom's first job.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/ydMCHjB4Ucs",
        },
        answer: { text: "What is McDonald’s?", type: "text", videoUrl: "" },
        rank: 1,
      },
      {
        question: {
          text: "This is where the groom is originally from.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/sceJlo_CRi4",
        },
        answer: { text: "Where is Rochester, NY?", type: "text", videoUrl: "" },
        rank: 3,
      },
      {
        question: {
          text: "This is the amount of times the groom moved growing up.",
          type: "text",
          videoUrl: "https://youtube.com/shorts/J-oe_uj_zjw",
        },
        answer: { text: "What is 20+ times?", type: "text", videoUrl: "" },
        rank: 4,
      },
    ],
  },
};

// Get categories as an array for easy access
var categories = Object.keys(gameData);

var questions = [
  [
    {
      text: "This is the shortcut for the move tool.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This needs to be done before starting the LEGO™ micro-game.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is the the default shortcut for the scale tool.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is where you interact with the game being built.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is the button that allows you to change your camera orientation.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is the the default shortcut for the select tool.",
      type: "text",
      videoUrl: "",
    },
  ],
  [
    {
      text: "This person creates the controls for the player.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This generation is when home video game systems became popular.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This person creates character depth and interaction.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This perspective has you looking through the character's eyes.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This person creates the visual elements and assets of the game.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is the term for what that makes a product different from the competion.",
      type: "text",
      videoUrl: "",
    },
  ],
  [
    { text: "This is the shortcut for undo.", type: "text", videoUrl: "" },
    {
      text: "This the button to insert a keyframe.",
      type: "text",
      videoUrl: "",
    },
    { text: "This the button to make a symbol.", type: "text", videoUrl: "" },
    {
      text: "This is the shortcut to group things together.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is the shortcut for the scale tool.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This was a tool used to make Alfonso's tail.",
      type: "text",
      videoUrl: "",
    },
  ],
  [
    {
      text: "This is what you end a line of code with.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is what you need to keep in mind when naming and calling variables.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is the way to print to the console in C#.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is used to comment a line of code in C#.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This is the process of finding and fixing errors in your code.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This the button that is pushed to auto complete part of a line of code.",
      type: "text",
      videoUrl: "",
    },
  ],
  [
    { text: "This is the symbol for copyright.", type: "text", videoUrl: "" },
    {
      text: "This allows for complete use of the work without any extra steps needed.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This requires you to share a work with the same licenses attached.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This prevents you from making changes to the work.",
      type: "text",
      videoUrl: "",
    },
    {
      text: "This prevents you from using the work for profit.",
      type: "text",
      videoUrl: "",
    },
    { text: "This requires you to give credit.", type: "text", videoUrl: "" },
  ],
];

var url = document.location.href,
  params = url.split("?")[1].split("&"),
  data = {},
  tmp;
for (var i = 0, l = params.length; i < l; i++) {
  tmp = params[i].split("=");
  data[tmp[0]] = tmp[1];
}
var numTeams = parseInt(data.teams);
if (numTeams > 6) {
  numTeams = 6;
}
var teams = new Array();
for (i = 1; i <= numTeams; i++) {
  teams[i] = ["Team " + i, 0];
}
teams = teams.filter(function () {
  return true;
});
var currentTeam = 0;
var previousTeam = 0;
var lastCorrectTeam = 0;
var previousCorrectTeam = 0;
var questionAttempts = numTeams;
var questionsLeft = categories.length * questions[0].length;
var isAnsReveal = false;
var isPlaying = true;
var isHint = true;
var isBtns = true;
var currentQuestion;

var dd = getRandomInt(2, 30 - numTeams);
var maxBet = 0;
var ddCategory;
var ddQuestionID;
var disableQuestionInput = false;

var money = "";

var keys = [49];
for (i = 0; i < numTeams - 1; i++) {
  keys[i + 1] = keys[i] + 1;
}
var teamTracker = [];
for (i = 0; i < numTeams; i++) {
  teamTracker[i] = i;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function setupBoard() {
  for (var i = 0; i < categories.length; i++) {
    var col = document.createElement("div");
    col.className = "col-sm text-center";
    var card = document.createElement("div");
    card.className = "card";

    var cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    var header = document.createElement("h2");
    var headerText = document.createTextNode(categories[i]);
    header.appendChild(headerText);

    var list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    for (var j = 0; j < gameData[categories[i]].clues.length; j++) {
      var link = document.createElement("a");
      link.setAttribute("href", "");
      link.setAttribute("data-toggle", "modal");
      link.setAttribute("data-target", "#questionModal");
      link.setAttribute("data-category", categories[i]);
      link.setAttribute("data-money", ((j + 1) * 200).toString());
      link.setAttribute("data-questionid", j.toString());
      var listItem = document.createElement("li");
      listItem.className = "list-group-item";
      var amount = document.createTextNode("$" + (j + 1) * 200);
      listItem.appendChild(amount);

      list.append(link);
      link.append(listItem);
    }

    $("#gameBoard").append(col);
    col.append(card);
    card.append(cardHeader);
    cardHeader.append(header);
    card.append(list);
  }
}

function setupScoreBoard() {
  $("#scoreboard-header").empty();
  $("#scoreboard-data").empty();
  for (var i = 1; i <= numTeams; i++) {
    var h = "<th>Team " + i + "</th>";
    if (i == 1) {
      var d = '<td class="s-table-text-active" id="t' + i + '">$0</td>';
    } else {
      var d = '<td id="t' + i + '">$0</td>';
    }
    $("#scoreboard-header").append(h);
    $("#scoreboard-data").append(d);
  }
}

function incrementTeam() {
  last = currentTeam;
  if (currentTeam < teams.length - 1) {
    currentTeam++;
  } else {
    currentTeam = 0;
  }
}

function reduceQuestions() {
  questionsLeft--;
}

function buttonSound() {
  var audio = new Audio("../Media/buttonpress.mp3");
  audio.play();
}

function checkForWinner() {
  if (questionsLeft == 0) {
    var url = "result.html?teams=" + encodeURIComponent(numTeams);
    for (i = 0; i < numTeams; i++) {
      url += "&team" + (i + 1) + "=" + encodeURIComponent(teams[i][1]);
    }
    document.location.href = url;
  }
}

function whosTurnIsIt() {
  $("#teamTurn").text(teams[lastCorrectTeam][0] + " is up");
}

function updateScoreboard() {
  $("#t" + (currentTeam + 1)).empty();
  d = "$" + teams[currentTeam][1];
  $("#t" + (currentTeam + 1)).append(d);
}

function updateActiveTeam() {
  document
    .getElementsByClassName("s-table-text-active")[0]
    .classList.remove("s-table-text-active");
  document
    .getElementById("t" + (lastCorrectTeam + 1))
    .classList.add("s-table-text-active");
}

function controlAudio(b) {
  document.getElementById("background_audio").muted = b;
}

function nextQuestion() {
  reduceQuestions();
  $("#questionModal").modal("hide");
  currentQuestion.addClass("isDisabled");
  currentQuestion.children().addClass("disabled");
  document.getElementById("incorrect").removeAttribute("data-dismiss");
  isAnsReveal = false;
  updateScoreboard();
  incrementTeam();
  whosTurnIsIt();
  updateActiveTeam();
  checkForWinner();
}

function hintCheck() {
  if (questionsLeft == parseInt(categories.length * questions[0].length) - 5) {
    document.getElementById("reveal").innerHTML = "Reveal Answer";
    document.getElementById("incorrect").innerHTML = "Incorrect";
    document.getElementById("correct").innerHTML = "Correct";
    isHint = false;
  }
}

function hideButtons() {
  var btns = ["reveal", "correct", "incorrect"];
  for (i = 0; i < btns.length; i++) {
    document.getElementById(btns[i]).classList.add("hidden");
    document.getElementById(btns[i]).style.height = "0%";
    document.getElementById(btns[i]).innerHTML = "";
  }
  document.getElementById("modal-footer").classList.remove("modal-footer");
  document.getElementById("toggleBtns").innerHTML = "Turn on Buttons";
}

function showButtons() {
  var btns = ["reveal", "correct", "incorrect"];
  for (i = 0; i < btns.length; i++) {
    document.getElementById(btns[i]).classList.remove("hidden");
    document.getElementById(btns[i]).style.height = "100%";
  }
  if (isAnsReveal == false) {
    if (isHint) {
      document.getElementById("reveal").innerHTML = "Reveal Answer (space)";
    } else {
      document.getElementById("reveal").innerHTML = "Reveal Answer";
    }
  }
  if (isHint) {
    document.getElementById("correct").innerHTML = "Correct (c)";
    document.getElementById("incorrect").innerHTML = "Incorrect (z)";
  } else {
    document.getElementById("correct").innerHTML = "Correct";
    document.getElementById("incorrect").innerHTML = "Incorrect";
  }
  document.getElementById("modal-footer").classList.add("modal-footer");
  document.getElementById("toggleBtns").innerHTML = "Turn off Buttons";
}

function dailyDouble(category, questionid) {
  var modal = $("#questionModal");
  modal.find(".modal-title").text("Daily Double!");
  modal.find(".modal-body p").text("Place your bets!");

  var bet = document.createElement("input");
  bet.setAttribute("type", "number");
  bet.setAttribute("name", "bet");
  bet.setAttribute("min", "5");
  bet.setAttribute("step", "1");
  bet.setAttribute("pattern", "d*");
  bet.setAttribute("placeholder", "Enter Bet");
  bet.setAttribute("id", "bet-input");
  bet.classList.add("bet-input");

  var ptext = document.createElement("p");
  maxBet = teams[lastCorrectTeam][1];
  if (maxBet <= 5) {
    maxBet = 500;
  }
  ptext.innerHTML = "Minimum is $5, maximum is $" + maxBet + ".";
  ptext.classList.add("modal-dd-text");

  var ddbtn = document.createElement("button");
  ddbtn.innerHTML = "Confirm";
  ddbtn.classList.add("ddbtn");
  ddbtn.setAttribute("id", "ddbtn");
  ddbtn.setAttribute("onClick", "ddbtn()");

  document.getElementById("daily-double").appendChild(ptext);
  document.getElementById("daily-double").appendChild(bet);
  document
    .getElementById("daily-double")
    .appendChild(document.createElement("br"));
  document.getElementById("daily-double").appendChild(ddbtn);

  if (isBtns) {
    hideButtons();
  }

  hideTeamSelector();

  var audio = new Audio("../Media/dd.mp3");
  audio.play();

  ddCategory = category;
  ddQuestionID = questionid;

  document
    .getElementById("bet-input")
    .addEventListener("keydown", function (event) {
      if (event.keyCode == 13) {
        // enter key
        event.preventDefault();
        document.getElementById("ddbtn").click();
      }
    });

  teamTracker = [lastCorrectTeam];

  disableQuestionInput = true;
}

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

function ddbtn() {
  var input = document.getElementById("bet-input").value;
  input = input.split(".")[0];
  if (!input.includes("-") && input >= 5 && input <= maxBet) {
    if (isBtns) {
      showButtons();
    }
    money = input;

    rebuildTeamSelector();
    for (i = 0; i < numTeams; i++) {
      if (i != lastCorrectTeam) {
        var teamAttempted = document.getElementById("option" + i);
        teamAttempted.parentNode.removeChild(teamAttempted);
      }
    }

    var modal = document.getElementById("questionModal");
    document.getElementById("questionModalLabel").innerHTML =
      categories[ddCategory] + " for $" + money;
    var clue = gameData[ddCategory].clues[ddQuestionID];
    var modalBody = modal.find(".modal-body");

    if (clue.question.type === "video") {
      modalBody.html(
        '<div class="video-container"><iframe width="560" height="315" src="' +
          clue.question.videoUrl +
          '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
      );
    } else {
      modalBody.html('<p class="card-text">' + clue.question.text + "</p>");
    }
    document
      .getElementById("bet-input")
      .removeEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
          // enter key
          event.preventDefault();
          document.getElementById("ddbtn").click();
        }
      });
    disableQuestionInput = false;
    var ddOptions = document.getElementById("daily-double");
    ddOptions.parentNode.removeChild(ddOptions);
    document.getElementById("questionModal").focus();
  }
}

function setupTeamSelector() {
  var teamSelector = document.getElementById("team-selector");
  var options = "";
  for (i = 0; i < numTeams; i++) {
    options +=
      '<option value="' +
      i +
      '" id="option' +
      i +
      '">Team ' +
      (i + 1) +
      "</option>";
  }
  teamSelector.innerHTML = options;
}

function hideTeamSelector() {
  document.getElementById("modal-team-selector").classList.add("hidden");
  document.getElementById("modal-team-selector").style.height = "0%";
  document.getElementById("modal-team-selector").innerHTML = "";
}

function rebuildTeamSelector() {
  var lbl = document.createElement("label");
  lbl.setAttribute("for", "teams");
  lbl.innerHTML = "Buzzed In:";

  var slct = document.createElement("select");
  slct.setAttribute("name", "teams");
  slct.setAttribute("id", "team-selector");
  var options = "";
  for (i = 0; i < numTeams; i++) {
    options +=
      '<option value="' +
      i +
      '" id="option' +
      i +
      '">Team ' +
      (i + 1) +
      "</option>";
  }
  slct.innerHTML = options;

  var teamSelector = document.getElementById("modal-team-selector");
  teamSelector.appendChild(lbl);
  teamSelector.appendChild(slct);
  teamSelector.classList.remove("hidden");
  teamSelector.removeAttribute("style");
  teamSelector.style.paddingRight = "10px";
}

function resetTeamTracker() {
  for (i = 0; i < numTeams; i++) {
    teamTracker[i] = i;
  }
}

$(document).ready(function () {
  var category = "";
  var questionid = "";

  setupBoard();
  setupScoreBoard();
  setupTeamSelector();
  whosTurnIsIt();

  $("a").click(function () {
    currentQuestion = $(this);
    hintCheck();
    questionAttempts = numTeams;
    setupTeamSelector();
    resetTeamTracker();
  });

  $("#questionModal").on("shown.bs.modal", function (event) {
    var link = $(event.relatedTarget);
    category = link.data("category");
    money = link.data("money");
    questionid = link.data("questionid");
    var modal = $(this);
    if (questionsLeft == dd) {
      dailyDouble(category, questionid);
    } else {
      modal.find(".modal-title").text(category + " for $" + money);
      var clue = gameData[category].clues[questionid];
      var modalBody = modal.find(".modal-body");

      if (clue.question.type === "video") {
        modalBody.html(
          '<div class="video-container"><iframe width="560" height="315" src="' +
            clue.question.videoUrl +
            '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        );
      } else {
        modalBody.html('<p class="card-text">' + clue.question.text + "</p>");
      }
    }
  });

  document
    .getElementById("questionModal")
    .addEventListener("keydown", function (event) {
      if (!disableQuestionInput) {
        if (event.keyCode == 32) {
          // spacebar
          event.preventDefault();
          document.getElementById("reveal").click();
        } else if (event.keyCode == 90) {
          // z
          event.preventDefault();
          document.getElementById("incorrect").click();
        } else if (event.keyCode == 67) {
          // c
          event.preventDefault();
          document.getElementById("correct").click();
        } else if (keys.includes(event.keyCode)) {
          // 2
          if (teamTracker.indexOf(keys.indexOf(event.keyCode)) > -1) {
            event.preventDefault();
            document.getElementById("team-selector").value = keys.indexOf(
              event.keyCode
            );
          }
        }
      }
    });

  $("#reveal").click(function () {
    var modal = $(this);
    if (isAnsReveal == false) {
      var clue = gameData[category].clues[questionid];
      var modalBody = $("#questionModal").find(".modal-body");

      if (clue.answer.type === "video") {
        modalBody.html(
          '<div class="video-container"><iframe width="560" height="315" src="' +
            clue.answer.videoUrl +
            '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
        );
      } else {
        modalBody.html('<p class="card-text">' + clue.answer.text + "</p>");
      }

      if (isHint) {
        document.getElementById("reveal").innerHTML = "Reveal Question (space)";
      } else {
        document.getElementById("reveal").innerHTML = "Reveal Question";
      }
      isAnsReveal = true;
      return;
    }

    var clue = gameData[category].clues[questionid];
    var modalBody = $("#questionModal").find(".modal-body");

    if (clue.question.type === "video") {
      modalBody.html(
        '<div class="video-container"><iframe width="560" height="315" src="' +
          clue.question.videoUrl +
          '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
      );
    } else {
      modalBody.html('<p class="card-text">' + clue.question.text + "</p>");
    }

    isAnsReveal = false;
    if (isHint) {
      document.getElementById("reveal").innerHTML = "Reveal Answer (space)";
    } else {
      document.getElementById("reveal").innerHTML = "Reveal Answer";
    }
  });

  $("#correct").click(function () {
    currentTeam = parseInt(document.getElementById("team-selector").value);
    lastCorrectTeam = parseInt(document.getElementById("team-selector").value);
    teams[currentTeam][1] += parseInt(money);
    nextQuestion();
  });

  $("#incorrect").click(function () {
    currentTeam = parseInt(document.getElementById("team-selector").value);
    teams[parseInt(document.getElementById("team-selector").value)][1] -=
      parseInt(money);
    questionAttempts--;
    updateScoreboard();
    var teamAttempted = document.getElementById("option" + currentTeam);
    teamAttempted.parentNode.removeChild(teamAttempted);

    for (var i = 0; i < teamTracker.length; i++) {
      if (teamTracker[i] == teamAttempted.value) {
        teamTracker.splice(i, 1);
      }
    }

    if (questionAttempts == 0 || questionsLeft == dd) {
      nextQuestion();
    }
  });

  $("#close").click(function () {
    if (questionAttempts != numTeams || questionsLeft == dd) {
      nextQuestion();
    }
  });
});

$("#audioControl").click(function () {
  if (!isPlaying) {
    document.getElementById("audioControl").innerHTML = "Unmute Music";
  } else {
    document.getElementById("audioControl").innerHTML = "Mute Music";
  }
  isPlaying = !isPlaying;
  controlAudio(isPlaying);
});

$("#toggleBtns").click(function () {
  if (isBtns) {
    hideButtons();
    isBtns = false;
  } else {
    showButtons();
    isBtns = true;
  }
});
