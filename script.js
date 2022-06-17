const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Joe Biden",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }, 
    {
        question: "How much did Ronaldo transfer to Real Madrid?",
       a: "£50 Million",
       b: "£70 Million",
       c: "£80 Million",
       d: "£90 Million",
       correct: "c",
    },
    {
        question: "Who scored most Premier League goals last season?",
        a: "C.Ronaldo",
        b: "Herry Kane",
        c: "Mohamed Salah",
        d: "Both Son Heung-min and Mohamed Salah ",
        correct: "d",
    },
    {
        question: "What is the most popular series on Netflix?",
        a: "Ozark",
        b: "Peaky Blinders",
        c: "The Witcher",
        d: "Stranger Things",
        correct: "d",
    },
    {
        question: "Which marvel movie will be upcoming on July 7, 2022 ",
        a: "Dr.strange",
        b: "Thor Love & Thunder",
        c: "Guardians of the Galaxy Vol. 3",
        d: "Black Panther: Wakanda Forever",
        correct: "b",
    },
    {
        question: "Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?",
        a:"No.9",
        b: "No.8",
        c: "No.7",
        d: "No.10",
        correct: "a",
    },
    {
        question: "Messi wore the No.30 at the start of his Barca career and is now No.10. What other number has he worn for the club?",
        a: "No.10",
        b: "No.19",
        c: "No.11",
        d: "No.21",
        correct: "b",
    },
    {
        question: "  Which country won the first World Cup Championship?",
        a: "Spain",
        b: "Uruguay",
        c: "France",
        d: "Germany",
        correct: "b",
    },
    {
        question: "A person with the measles sneezes. How long can it hang in the air and infect you?",
        a: "2 mins", 
        b: "2 secs",
        c: "2 hrs",
        d: "1 min",
        correct: "c",
    },
    {
      question: " How many bones make up an adult skeleton?",
      a: "186",
      b: "206",
      c: "226",
      d: "246",
      correct: "b",
    },
    {
        question: "What is a Transient Ischemic Attack (TIA)?",
        a: "Sudden heart attack",
        b: "Blockage to the brain's bld supply",
        c: "Spike in bld pressure",
        d: "Shortness of breath",
        correct: "b",
    }, 
    {
         question: "What is the best game of 2022 so far?",
         a: "Sifu",
         b: "Horizon Forbidden West",
         c: "God of war", 
         d: "Elden Ring",
         correct: "b",
    },
    {
        question: "What super power does Eleven have in stranger things",
        a: "psionic powers",
        b: "Invisiblity",
        c: "Superhuman Strength",
        d: " Telekinesis",
        correct: "a",
    },
    {
        question: "In which film did she make her debut in 2019?",
        a: "Toy story4",
        b: "Godzilla: King of Monsters",
        c: "The Lion King",
        d: "The Secre Life of Pets 2",
        correct: "b",
    },
    {
        question: "How did Eleven earn her nickname in Stranger Things?",
        a: "It is her favourite number",
        b: "She had 011 tattooed on her left arm",
        c: "She has 11 pairs of trainers",
        d: "It was given to her after she ate 11 waffles on lunch time",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 
}

function getSelected() {
   let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});