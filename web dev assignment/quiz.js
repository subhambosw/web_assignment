(function startquiz() {
  const Time_Limit = 20;

  const questions = [
    {
      question: "Which keyword is used to define a constant?",
      options: ["A) let\n", "B) static\n", "C) const\n", "D) var\n"],
      answer: "c",
      hint: "It prevents reassignment after initialization.",
    },
    {
      question: "WHich symbol is used for strict equality?",
      options: ["A) ==\n", "B) =\n", "C) ===\n", "D) !==\n"],
      answer: "c",
      hint: "It compares boht value and type.",
    },
    {
      question: "What does `typeof null` return?",
      options: ["A) null\n", "B) object\n", "C) undefined\n", "D) boolean\n"],
      answer: "b",
      hint: "It is a famous JavaScript quirk.",
    },
    {
      question: "What does `DOM` stand for?",
      options: [
        "A) Document Obejct Model\n",
        "B) Data Object Method\n",
        "C) Digital Order Model\n",
        "D) Document Operation Manager\n",
      ],
      answer: "a",
      hint: "It represents elements on a webpage.",
    },
    {
      question: "Which language runs in the browser?",
      options: ["A) Python\n", "B) Java\n", "C) JavaScript\n", "D) C++\n"],
      answer: "c",
      hint: "It shares its name with the most popular web scripting language.",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "A) Computer Style System\n",
        "B) Creative Style Sheet\n",
        "C) Colorful Style System\n",
        "D) Cascading Style Sheet\n",
      ],
      answer: "d",
      hint: "It describes how elements should be displayed on screen.",
    },
    {
      question: "What us the output of 2+'2' in JavaScript?",
      options: ["A) 4\n", "B) 22\n", "C) NaN\n", "D) Error\n"],
      answer: "b",
      hint: "JavaScript performs type coercion when types mismatch.",
    },
    {
      question: "Which HTML tag is used for the largest heading?",
      options: ["A) <h6>\n", "B) <head>\n", "C) <heading>\n", "D) <h1>\n"],
      answer: "d",
      hint: "The smaller the number, the bigger the text.",
    },
    {
      question: "Which loop is used when the number of iterations is known?",
      options: ["A) for\n", "B) do-while\n", "C) while\n", "D) foreach\n"],
      answer: "a",
      hint: "You define start, condition, and incerment ahead.",
    },
  ];
  let score = 0;

  alert(
    `🎮Welcome to the JavaScript Console Quiz 🎮!!
        ⌚ You have ${Time_Limit} seconds per question.
        \n\n Press OK to start!`
  );

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    let questionText = `
        Question ${i + 1}: ${q.question}
        \n${q.options.join("")}
        Type A, B, C, or D:
        (You have ${Time_Limit} seconds)`;
    let start_time = Date.now();
    let user_answer = prompt(questionText);
    let time_taken = (Date.now() - start_time) / 1000;

    if (user_answer === null) {
      alert("Quiz cancelled! ❌");
      return;
    }

    user_answer = user_answer.trim().toLowerCase();

    if (time_taken > Time_Limit) {
      alert(
        `⌛Time is up! You took ${time_taken.toFixed(
          1
        )} seconds. \n Correct answer: ${q.answer.toUpperCase()}`
      );
      continue;
    }
    if (user_answer === q.answer) {
      score++;
      alert(`✅Correct!! \n Time: ${time_taken.toFixed(1)}s`);
    } else {
      alert(
        `❌Incorrect.\nHint: ${
          q.hint
        }\nCorrect answer: ${q.answer.toUpperCase()}`
      );
    }
  }

  var final_message = "🎯 Quiz Finished!\n";
  final_message += "Your Score: " + score + " / " + questions.length + "\n";

  if (score === questions.length) {
    final_message += "🔥 Perfect score!";
  } else if (score > questions.length / 2) {
    final_message += "👏 Great job!";
  } else {
    final_message += "📘 Keep practicing!";
  }

  alert(final_message);

  const restart = confirm("Do you want play again?");
  if (restart) {
    startquiz();
  } else {
    alert("Thanks for playing!❤️");
  }
})();