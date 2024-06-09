let currentQuestion = 0;
let rightAnswer = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
}


function startQuiz() {
    document.getElementById('pageStartScreen').style = "display: none;";
    document.getElementById('pageQuiz').style = "";
    showCurrentQuestion();
}


function showCurrentQuestion() {
    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else {
        showQuestion();
    }
}


function showQuestion() {
    showProgress();
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_A').innerHTML = question['A'];
    document.getElementById('answer_B').innerHTML = question['B'];
    document.getElementById('answer_C').innerHTML = question['C'];
    document.getElementById('answer_D').innerHTML = question['D'];
}


function showProgress() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style = `width: ${percent}%;`;
    console.log('Progress: ', percent);
}


function answerQuestion(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);   // auf den letzten charakter eines strings zugreifen
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is the answer', question['answer']);
    let idOfRightAnswer = `answer_${question['answer']}`;
    if (selectedQuestionNumber == question['answer']) {
        console.log('Right Answer!!!');
        document.getElementById(selection).previousElementSibling.classList.add('bg-success');  // hier wird auf das vorherige geschwister-element zugegriffen
        document.getElementById(selection).parentNode.classList.add('bg-success-light');    // hier wird auf das eltern-element zugegriffen
        AUDIO_SUCCESS.play();
        rightAnswer++;
    } else {
        console.log('Wrong Answer!!!');
        document.getElementById(selection).previousElementSibling.classList.add('bg-danger');
        document.getElementById(selection).parentNode.classList.add('bg-danger-light');
        document.getElementById(idOfRightAnswer).previousElementSibling.classList.add('bg-success');  
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success-light');
        AUDIO_FAIL.play();
    }
    document.getElementById('nextButton').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showCurrentQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_A').previousElementSibling.classList.remove('bg-danger');
    document.getElementById('answer_A').parentNode.classList.remove('bg-danger-light');
    document.getElementById('answer_A').previousElementSibling.classList.remove('bg-success');  
    document.getElementById('answer_A').parentNode.classList.remove('bg-success-light');    
    document.getElementById('answer_B').previousElementSibling.classList.remove('bg-danger');
    document.getElementById('answer_B').parentNode.classList.remove('bg-danger-light');
    document.getElementById('answer_B').previousElementSibling.classList.remove('bg-success');  
    document.getElementById('answer_B').parentNode.classList.remove('bg-success-light');    
    document.getElementById('answer_C').previousElementSibling.classList.remove('bg-danger');
    document.getElementById('answer_C').parentNode.classList.remove('bg-danger-light');
    document.getElementById('answer_C').previousElementSibling.classList.remove('bg-success');  
    document.getElementById('answer_C').parentNode.classList.remove('bg-success-light');    
    document.getElementById('answer_D').previousElementSibling.classList.remove('bg-danger');
    document.getElementById('answer_D').parentNode.classList.remove('bg-danger-light');
    document.getElementById('answer_D').previousElementSibling.classList.remove('bg-success');  
    document.getElementById('answer_D').parentNode.classList.remove('bg-success-light');    
}


function showEndScreen() {
    document.getElementById('pageQuiz').style = "display: none;";
    document.getElementById('pageEndScreen').style = "";
    document.getElementById('rightAnswers').innerHTML = rightAnswer;
    document.getElementById('allAnswers').innerHTML = questions.length;
}


function restartGame() {
    document.getElementById('pageEndScreen').style = "display: none;";
    document.getElementById('pageStartScreen').style = "";
    currentQuestion = 0;
    rightAnswer = 0;
}