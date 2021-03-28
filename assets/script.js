var startQuizButton = document.querySelector('button');
var timer = document.getElementById('timer');
var para1 = document.getElementById('description');
var header = document.getElementById('bigHeader');
var quizDiv = document.getElementById('quizQuestions');
var page = document.getElementById('page');
var form = document.getElementById('form');
var highScoresArray = ['Alex Bradshaw']
var highScoresNames = ['75']
var ul = document.getElementById('highScoresContainer');
var search = document.querySelector('ul')
var quizButton1 = document.getElementById('button1');
var quizButton2 = document.getElementById('button2');
var quizButton3 = document.getElementById('button3');
var quizButton4 = document.getElementById('button4');
var quiz = document.getElementById('quizDiv');
var x = 75

var storedNames = JSON.parse(localStorage.getItem("highScoresName"));
var storedScore = JSON.parse(localStorage.getItem("highScoresScore"));

if(storedNames == null) {
localStorage.setItem("highScoresName", JSON.stringify(['Alex Bradshaw']));
localStorage.setItem("highScoresScore", JSON.stringify(['75']));
storedNames = JSON.parse(localStorage.getItem("highScoresName"));
storedScore = JSON.parse(localStorage.getItem("highScoresScore"));
}

if (search.id == "highScoresContainer") {
    console.log(storedNames)
    console.log(storedScore)
    var i;
    for (i = 0; i < storedNames.length; i++) {

        var li = document.createElement("li");
        li.classList.add('col-12', "pl-0", 'pr-5', 'custom-color', 'd-flex', 'justify-content-center')
        var liContent = document.createTextNode(storedNames[i] + ' ' + storedScore[i]);
        li.appendChild(liContent);
        ul.appendChild(li);

    }
} else {
}


startQuizButton.addEventListener('click', function () {

    if (startQuizButton.id == 'startQuiz') {
        quiz.classList.add('formDivDisplay')
        quiz.classList.remove('formDiv2')
        para1.classList.add('off')
        startQuizButton.classList.add('off')
        quiz.classList.remove('off')
        firstQuestion();
        setInterval(function () {
            if (x > 0 && startQuizButton.id !== 'saveInitials') {

                x -= 1;
                timer.innerHTML = ("Time: " + x)

            } else if (x === 0 && startQuizButton.id !== 'saveInitials') {
                para1.classList.remove('off')
                startQuizButton.classList.remove('off')
                quiz.classList.add('off')
                para1.textContent = 'You can save your intials for the high score page.';
                startQuizButton.innerHTML = 'Save Initials';
                startQuizButton.id = 'saveInitials';
                header.textContent = "You lose!";
                header.style.fontSize = "100px";
                form.style.display = "inline";
                quizDiv.innerHTML = ' ';
                x = -1;

            } else if (x < 0) {

            };
        }, 1000);
    }
});

startQuizButton.addEventListener('click', function () {

    if (startQuizButton.id == 'saveInitials') {
        if(form.value !== null && form.value !== '' && form.value !== 'Please enter initials or your name.'){
            storedNames.push(form.value);
            storedScore.push(x);
            localStorage.setItem("highScoresName", JSON.stringify(storedNames));
            localStorage.setItem("highScoresScore", JSON.stringify(storedScore));
            form.value = '';
            highScoresArray = storedNames
            highScoresNames = storedScore
            location.reload();
        } else{
            form.value = 'Please enter initials or your name.';
        }
    };

});

quizButton1.addEventListener('click', function () {

    if (quizButton1.id == 'button1') {
        x -= 10
        secondQuestion()
    }else if (quizButton1.id == 'q3') {
        x -= 10
        thirdQuestion()
    }else if (quizButton1.id == 'q4') {
        fourthQuestion()
    }else if (quizButton1.id == 'q5') {
        x -= 10
        fifthQuestion()
    }else if (quizButton1.id == 'q6') {
        x -= 10
        youWin()
    };


});

quizButton2.addEventListener('click', function () {

    if (quizButton2.id == 'button2') {
        x -= 10
        secondQuestion()
    }else if (quizButton2.id == 'q3') {
        thirdQuestion()
    }else if (quizButton2.id == 'q4') {
        x -= 10
        fourthQuestion()
    }else if (quizButton2.id == 'q5') {
        x -= 10
        fifthQuestion()
    }else if (quizButton2.id == 'q6') {
        x -= 10
        youWin()
    };


});

quizButton3.addEventListener('click', function () {

    if (quizButton3.id == 'button3') {
        secondQuestion()
    }else if (quizButton3.id == 'q3') {
        x -= 10
        thirdQuestion()
    }else if (quizButton3.id == 'q4') {
        x -= 10
        fourthQuestion()
    }else if (quizButton3.id == 'q5') {
        fifthQuestion()
    }else if (quizButton3.id == 'q6') {
        youWin()
    };

});

quizButton4.addEventListener('click', function () {

    if (quizButton4.id == 'button4') {
        x -= 10
        secondQuestion()
    }else if (quizButton4.id == 'q3') {
        x -= 10
        thirdQuestion()
    }else if (quizButton4.id == 'q4') {
        x -= 10
        fourthQuestion()
    }else if (quizButton4.id == 'q5') {
        x -= 10
        fifthQuestion()
    }else if (quizButton4.id == 'q6') {
        x -= 10
        youWin()
    };

});


function firstQuestion(){
    header.textContent = "What elements should you be using to make your code readable?"
    quizButton1.textContent = "Divs"
    quizButton2.textContent = "P tags"
    quizButton3.textContent = "Semantic Elements"
    quizButton4.textContent = "More Css Links"
    quizButton1.id = "button1"
    quizButton2.id = "button2"
    quizButton3.id = "button3"
    quizButton4.id = "button4"
    quizDiv.id = 'secondQuestion';
};

function secondQuestion(){
    header.textContent = "What type of file is used for styling webpages?"
    quizButton1.textContent = ".rar"
    quizButton2.textContent = ".css"
    quizButton3.textContent = ".exe"
    quizButton4.textContent = ".mp4"
    quizButton1.id = "q3"
    quizButton2.id = "q3"
    quizButton3.id = "q3"
    quizButton4.id = "q3"
    quizDiv.id = 'thirdQuestion';
};

function thirdQuestion(){
    header.textContent = "What type of element controls the title of the webpage?"
    quizButton1.textContent = "<title>"
    quizButton2.textContent = "<p>"
    quizButton3.textContent = "<img>"
    quizButton4.textContent = "<footer>"
    quizButton1.id = "q4"
    quizButton2.id = "q4"
    quizButton3.id = "q4"
    quizButton4.id = "q4"
    quizDiv.id = 'fourthQuestion';
};

function fourthQuestion(){
    header.textContent = "What is the default name of a webpage's home html file?"
    quizButton1.textContent = "transfer.html"
    quizButton2.textContent = "first.html"
    quizButton3.textContent = "index.html"
    quizButton4.textContent = "page1.html"
    quizButton1.id = "q5"
    quizButton2.id = "q5"
    quizButton3.id = "q5"
    quizButton4.id = "q5"
    quizDiv.id = 'fifthQuestion';
};

function fifthQuestion(){
    header.textContent = "What element is mainly used to display images?"
    quizButton1.textContent = "<p>"
    quizButton2.textContent = "<h1>"
    quizButton3.textContent = "<img>"
    quizButton4.textContent = "<link>"
    quizButton1.id = "q6"
    quizButton2.id = "q6"
    quizButton3.id = "q6"
    quizButton4.id = "q6"
    quizDiv.id = 'quizQuestions';
};

function youWin(){
    header.textContent = "You win!"
    para1.classList.remove('off')
    startQuizButton.classList.remove('off')
    quiz.classList.add('off')
    quiz.classList.remove('formDivDisplay')
    quiz.classList.add('formDiv2')
    para1.textContent = 'You can save your intials for the high score page.';
    startQuizButton.innerHTML = 'Save Initials';
    startQuizButton.id = 'saveInitials';
    header.style.fontSize = "100px";
    form.style.display = "inline";
    quizDiv.innerHTML = ' ';
    timer.innerHTML = ("Time: " + x)
    quizButton1.id = "button1"
    quizButton2.id = "button2"
    quizButton3.id = "button3"
    quizButton4.id = "button4"
}