(function () {
    function buildQuiz() {

        const output = [];


        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                const answers = [];


                for (letter in currentQuestion.answers) {

                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }


                output.push(

                    `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );


        quizContainer.innerHTML = output.join('');
    }

    function showResults() {


        const answerContainers = quizContainer.querySelectorAll('.answers');


        let numCorrect = 0;


        myQuestions.forEach((currentQuestion, questionNumber) => {


            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;


                answerContainers[questionNumber].style.color = 'lightgreen';
            }

            else {

                answerContainers[questionNumber].style.color = 'red';
            }
        });


        resultsContainer.innerHTML = `${numCorrect} Van de ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Wat is de schijf van vijf?",
            answers: {
                A: "Richtlijn voor gezond eten",
                B: "Het enige wat je moet eten ooit",
                C: "Een tv show"
            },
            correctAnswer: "A"
        },
        {
            question: "Wat moet je doen als je te zwaar bent?",
            answers: {
                A: "Extra trip naar de kfc",
                B: "Meer sporten en gezonder eten",
                C: "netflix kijken"
            },
            correctAnswer: "B"
        },
        {
            question: "Wat moet je doen als je op de BMI meter 'Obesitas' bent gemeten? ",
            answers: {
                A: "Hulp zoeken van een professional. die u helpt met een dieet en sport",
                B: "Je favorieten netflix show bingen.",
                C: "Verder gaan. op de manier hoe je al jaren eet.",
            },
            correctAnswer: "A"
        }
    ];


    buildQuiz();


    submitButton.addEventListener('click', showResults);
})();


