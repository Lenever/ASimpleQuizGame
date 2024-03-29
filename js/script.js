$(document).ready(function() {
  // Adding Questions and correct answer from user
  $("#addquestion").submit(function(event) {
    event.preventDefault();
    if ($(".question").val() !== "" && $(".answer").val() !== "") {
      const question = $(".question").val();
      const answer = $(".answer").val();
      let newQuestions = {
        question,
        answer
      };
      $.ajax({
        method: "POST",
        url: "http://localhost:3000/questions",
        data: newQuestions
      })
        .done(function(newQuestions) {
          alert("Question Saved: " + newQuestions);
          const postData = JSON.stringify(newQuestions);
          localStorage.setItem("post", postData);
        })
        .fail(function(err) {
          alert("Error" + msg);
        });
    }
  });

  // Getting questions from database
  $.get("http://localhost:3000/questions", function(data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      var question = data[i]["question"];
      $("#quest-li").append(`<li> ${question} </li>`);
    }
  });

  // Getting the options and answers
  var options = [
    "host",
    "Data",
    "three",
    "HTML",
    "six",
    "Mark Up",
    "Language",
    "Body tag",
    "None of the above",
    "All of the above",
    "Zero",
    "I do not know"
  ];

  $.get("http://localhost:3000/questions", function(data) {
    for (let j = 0; j < data.length; j++) {
      var question = data[j].question;
      var answer = data[j]["answer"];
      var id = data[j]["id"];

      let rand1 = Math.random();
      let randIndex1 = Math.floor(rand1 * options.length);
      let randomOption1 = options[randIndex1];

      let rand2 = Math.random();
      let randIndex2 = Math.floor(rand2 * options.length);
      let randomOption2 = options[randIndex2];

      // Adding a div to add questions
      $("#quiz").append(`<div id="quiz` + id + `"></div>`);

      // Adding a question
      $("#quiz" + id).append(
        `<li class="quizquest" id="quest>` + id + `">` + question + `</li>`
      );

      // Adding radio option (answer)
      $("#quiz" + id).append(
        `<input type="radio" class="form-check-input" name="group` +
          id +
          `" value="` +
          answer +
          `" id="num` +
          id +
          `"/><label for="num` +
          id +
          `">` +
          answer +
          `
        </label>`
      );

      $("#quiz" + id).append("<br>");

      // Adding radio option 1
      $("#quiz" + id).append(
        `<input type="radio" class="form-check-input" name="group` +
          id +
          `" value="` +
          randomOption1 +
          `" id="num` +
          id +
          `"/><label for="num` +
          id +
          `">` +
          randomOption1 +
          `
        </label>`
      );

      $("#quiz" + id).append("<br>");

      // Adding radio option 2
      $("#quiz" + id).append(
        `<input type="radio" class="form-check-input" name="group` +
          id +
          `" value="` +
          randomOption2 +
          `" id="num` +
          id +
          `"/><label for="num` +
          id +
          `">` +
          randomOption2 +
          `
        </label>`
      );
      $("#quiz" + id).append("<hr>");
    }
  });
});
