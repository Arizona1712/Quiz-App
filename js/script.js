let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
}


function startQuiz() {
    document.getElementById('pageStart').style = "display: none;";
    document.getElementById('pageQuiz').style = "";
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_A').innerHTML = question['A'];
    document.getElementById('answer_B').innerHTML = question['B'];
    document.getElementById('answer_C').innerHTML = question['C'];
    document.getElementById('answer_D').innerHTML = question['D'];
}


function answerQuestion(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);   // auf den letzten charakter eines strings zugreifen
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is', question['answer']);
    if (selectedQuestionNumber == question['answer']) {
        console.log('Right Answer!!!');
        document.getElementById(selection).classList.add('bg-success');
    } else {
        console.log('Wrong Answer!!!');
        document.getElementById(selection).classList.add('bg-danger');
    }
}


function nextQuestion() {
    
}