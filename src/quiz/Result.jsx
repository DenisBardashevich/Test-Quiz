import Fire from "./img/VZvx.gif";

const Result = ({ correct, totalQuestions }) => {
    return (
        <div className="content result">
            <div className="img">
                <img src={Fire} alt="Fire" />
            </div>
            <h2 className="result_finish">
                Вы отгадали {correct} ответа из {totalQuestions}{" "}
            </h2>
            <a href="/">
                <button className="btn_start">Попробовать снова</button>
            </a>
        </div>
    );
};

export default Result;
