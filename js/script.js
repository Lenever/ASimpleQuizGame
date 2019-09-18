$(document).ready(function() {
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

  $.get("http://localhost:3000/questions", function(data) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      var question = data[i]["question"];
      $("#quest-li").append("<li>" + question + "</li>");
    }
  });

  $.get("http://localhost:3000/questions", function(data) {
    for (let j = 0; i < data.length; i++) {
      var question = data[i]["question"];
      var answer = data[i]["answer"];
    }
  });
});
