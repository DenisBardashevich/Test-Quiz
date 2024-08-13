import Quiz from "./quiz/quiz";
import "./quiz/quiz.css";
import Result from "./quiz/Result";
import React from "react";

function App() {
    const questions = [
        {
            title: "Как меня зовут?",
            variants: ["Артем", "Денис", "Женя"],
            correct: 1,
        },
        {
            title: "В какой стране я живу",
            variants: ["Испания", "Беларусь", "Польша"],
            correct: 1,
        },
        {
            title: "Сколько мне лет",
            variants: ["23", "24", "25"],
            correct: 2,
        },
        {
            title: "На кого я обучаюсь",
            variants: [
                "Frontend developer",
                "Backend developer",
                "Manager developer",
            ],
            correct: 0,
        },
        {
            title: "Я люблю свою девушку?",
            variants: ["да", "нет", "не знаю"],
            correct: 0,
        },
    ];
    const [quizComplete, setQuizComplete] = React.useState(false);
    const [correctAnswers, setCorrectAnswers] = React.useState(0);

    const handleCompleteQuiz = (correct) => {
        setCorrectAnswers(correct);
        setQuizComplete(true);
    };

    return (
        <div className="App">
            {!quizComplete ? (
                <Quiz
                    questions={questions}
                    onCompleteQuiz={handleCompleteQuiz}
                />
            ) : (
                <Result
                    correct={correctAnswers}
                    totalQuestions={questions.length}
                />
            )}
        </div>
    );
}

export default App;
