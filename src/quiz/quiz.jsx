import React from "react";

const Quiz = ({ questions, onCompleteQuiz }) => {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const totalSteps = questions.length;
    const question = questions[step];

    const percentage = Math.round((step / questions.length) * 100);

    const onClickVariant = (index) => {
        if (index === question.correct) {
            setCorrect(correct + 1);
        }

        if (step === totalSteps - 1) {
            onCompleteQuiz(correct + 1);
        } else {
            setStep(step + 1);
        }
    };

    return (
        <div className="content">
            <div className="progress">
                <div
                    style={{ width: `${percentage}%` }}
                    className="progressing"
                ></div>
            </div>
            <h1>{question.title}</h1>
            <ul className="lines">
                {question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} key={text}>
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
