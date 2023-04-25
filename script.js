// MCQ Questions
var questions = [	{		question: "What is the capital of India?",		options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
		answer: "New Delhi",
		type: "single"
	},

	{
		question: "What is the largest planet in our solar system?",
		options: ["Venus", "Mars", "Jupiter", "Saturn"],
		answer: "Jupiter",
		type: "single"
	},
	{
		question: "Which of the following is not a programming language?",
		options: ["HTML", "Java", "Python", "Google"],
		answer: "Google",
		type: "single"
	},
	{
		question: "Which of the following is not a database management system?",
		options: ["MySQL", "Oracle", "MongoDB", "Java"],
		answer: "Java",
		type: "single"
	},
	{
		question: "Which of the following is not a web browser?",
		options: ["Chrome", "Firefox", "Internet Explorer", "Oracle"],
		answer: "Oracle",
		type: "single"
	},
	{
		question: "Which of the following is a programming language?",
		options: ["CSS", "HTML", "PHP", "MySQL"],
		answer: "PHP",
		type: "single"
	},
	{
		question: "Select all the correct options.",
		options:[
		"A",
			"B",
			"C",
			"D"
		],
		answer: ["A", "B", "C"],
		type: "multiple"
	},
	{
		question: "What is the output of the following code?\nvar a = 10;\nfunction f() {\n\tconsole.log(a);\n\tvar a = 20;\n}\nf();",
		options: [
			"10",
			"undefined",
			"20",
			"ReferenceError"
		],
		answer: "undefined",
		type: "single"
	},
	{
        question: "The Great Wall of China is the longest wall in the world.",
        options: ["True", "False"],
        answer: "True",
        type: "single"
    },
	
];

// Variables
var currentQuestion = 0;
var correctAnswers = 0;

// Functions
function showQuestion() {
	var question = questions[currentQuestion];
	document.getElementById("question").innerHTML = question.question;
	var choices = document.getElementById("choices");
	choices.innerHTML = "";
	if (question.type === "single") {
		for (var i = 0; i < question.options.length; i++) {
			var li = document.createElement("li");
			var radio = document.createElement("input");
			radio.type = "radio";
			radio.name = "choice";
			radio.value = question.options[i];
			li.appendChild(radio);
			li.appendChild(document.createTextNode(question.options[i]));
			choices.appendChild(li);
		}
	} else if (question.type === "multiple") {
		for (var i = 0; i < question.options.length; i++) {
			var li = document.createElement("li");
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "choice";
			checkbox.value = question.options[i];
			li.appendChild(checkbox);
			li.appendChild(document.createTextNode(question.options[i]));
			choices.appendChild(li);
		}
	}
	document.getElementById("submit").disabled = false;
	document.getElementById("next").disabled = true;
	document.getElementById("result").innerHTML = "";
}

function checkAnswer() {
	var question = questions[currentQuestion];
	var choices = document.getElementsByName("choice");
	var selectedAnswers = [];
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			selectedAnswers.push(choices[i].value);
		}
	}
	if (selectedAnswers.length === 0) {
		alert("Please select an answer.");
		return;
	}
	if (question.type === "single") {
		if (selectedAnswers[0] === question.answer) {
			correctAnswers++;
			document.getElementById("result").innerHTML = "Correct!";
		} else {
			document.getElementById("result").innerHTML = "Incorrect!";
		}
	} else if (question.type === "multiple") {
		if (selectedAnswers.length !== question.answer.length) {
			document.getElementById("result").innerHTML = "Incorrect!";
		} else {
			var isCorrect = true;
			for (var i = 0; i < selectedAnswers.length; i++) {
				if (!question.answer.includes(selectedAnswers[i])) {
					isCorrect = false;
					break;
				}
			}
			if (isCorrect) {
				correctAnswers++;
				document.getElementById("result").innerHTML = "Correct!";
			} else {
				document.getElementById("result").innerHTML = "Incorrect!";
			}
		}
	} else if (question.type === "truefalse") {
		var selectedAnswer = "";
		var trueAnswer = question.answer;
		if (trueAnswer === "True") {
			selectedAnswer = choices[0].checked ? "True" : "False";
		} else {
			selectedAnswer = choices[1].checked ? "False" : "True";
		}
		if (selectedAnswer === trueAnswer) {
			correctAnswers++;
			document.getElementById("result").innerHTML = "Correct!";
		} else {
			document.getElementById("result").innerHTML = "Incorrect!";
		}
	}

	document.getElementById("submit").disabled = true;
	document.getElementById("next").disabled = false;
}


function nextQuestion() {
	currentQuestion++;
	if (currentQuestion === questions.length) {
		var quiz = document.getElementById("quiz");
		quiz.innerHTML = "<h1>Quiz Results</h1><hr><p>You got " + correctAnswers + " out of " +questions.length + " questions correct.</p>";
        return;
        }
        showQuestion();
        }
        
        // Event listeners
        document.getElementById("submit").addEventListener("click", checkAnswer);
        document.getElementById("next").addEventListener("click", nextQuestion);
        
        // Initialize quiz
        showQuestion();
