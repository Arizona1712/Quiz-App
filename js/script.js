let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
}


function startQuiz() {
    document.getElementById('pageStartScreen').style = "display: none;";
    document.getElementById('pageQuiz').style = "";
    showQuestion();
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else {
        let question = questions[currentQuestion];
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_A').innerHTML = question['A'];
        document.getElementById('answer_B').innerHTML = question['B'];
        document.getElementById('answer_C').innerHTML = question['C'];
        document.getElementById('answer_D').innerHTML = question['D'];
    }
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
    } else {
        console.log('Wrong Answer!!!');
        document.getElementById(selection).previousElementSibling.classList.add('bg-danger');
        document.getElementById(selection).parentNode.classList.add('bg-danger-light');
        document.getElementById(idOfRightAnswer).previousElementSibling.classList.add('bg-success');  
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success-light');    
    }
    document.getElementById('nextButton').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    showQuestion();
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
}


function restartGame() {
    document.getElementById('pageEndScreen').style = "display: none;";
    document.getElementById('pageStartScreen').style = "";
}