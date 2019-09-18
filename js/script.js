$(document).ready(function() {
  $("#addquestion").submit(function(event) {
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
    event.preventDefault();
  });
});
