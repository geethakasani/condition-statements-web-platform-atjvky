const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
  let numberInput1 = document.getElementById('number-input1').value;

  // Challenge 1: Use if else condition to store the respective comments in the variable "message1" based on the score input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”
  let Score = parseInt(numberInput1, 10);

  // Use if-else conditions to set the message based on the score
  if (isNaN(Score)) {
    message1 = "Please enter a valid number.";
  } else if (Score < 0 || Score > 100) {
    message1 = "This is not possible. An error has occurred.";
  } else if (Score >= 0 && Score <= 19) {
    message1 = "That was a terrible score!";
  } else if (Score >= 20 && Score <= 39) {
    message1 = "You know some things. Needs improvement.";
  } else if (Score >= 40 && Score <= 69) {
    message1 = "You did a passable job, not bad!";
  } else if (Score >= 70 && Score <= 89) {
    message1 = "That’s a great score. You really know your stuff.";
  } else if (Score >= 90 && Score <= 100) {
    message1 = "What an amazing score!";
  }

  commentContainer1.innerHTML = message1;
};

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
  let numberInput2 = document.getElementById('number-input2').value;

  // Challenge 2: Use Switch statements to store the respective comments in the variable "message2" based on the input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”
  let score = parseInt(numberInput2, 10);
  let message2;
  
  switch (true) {
    case isNaN(score):
      message2 = "Please enter a valid number.";
      break;
    case score < 0 || score > 100:
      message2 = "This is not possible. An error has occurred.";
      break;
    case score >= 0 && score <= 19:
      message2 = "That was a terrible score!";
      break;
    case score >= 20 && score <= 39:
      message2 = "You know some things. Needs improvement.";
      break;
    case score >= 40 && score <= 69:
      message2 = "You did a passable job, not bad!";
      break;
    case score >= 70 && score <= 89:
      message2 = "That’s a great score. You really know your stuff.";
      break;
    case score >= 90 && score <= 100:
      message2 = "What an amazing score!";
      break;
  }
  commentContainer2.innerHTML = message2;
};
