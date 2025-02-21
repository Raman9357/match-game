import React, { useState, useEffect } from "react";
import "./css/win-lose.css";
import "../styles.css";
import Header from "../components/header";
import Footer from "../components/footer";

function WinPage() {
    const [equation, setEquation] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [isInCorrect, setIsInCorrect] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);

    const generateEquation = () => {
        let A = Math.floor(Math.random() * 10) + 1;
        let B = Math.floor(Math.random() * 5) + 1;
        let C = Math.floor(Math.random() * 50) + 10;
        let D = [2, 5, 10][Math.floor(Math.random() * 3)];
        let E = Math.floor(Math.random() * 10) + 1;

        C = Math.floor(C / D) * D;

        let answer = (A * B) + (C / D) + E;

        setEquation(`(${A} × ${B}) + (${C} ÷ ${D}) + ${E} =`);
        setCorrectAnswer(answer);
        setIsCorrect(false);
        setIsInCorrect(false);
        setUserAnswer("");
    };

    useEffect(() => {
        generateEquation();
    }, []);

    const handleSubmit = () => {
        if (parseInt(userAnswer) === correctAnswer) {
            setIsCorrect(true);
            setIsInCorrect(false);
            setPlayerWon(true);
        } else {
            setIsCorrect(false);
            setIsInCorrect(true);
        }
    };

    return (
        <>
            <Header />

            <div className="container flex-col padding-sm">
                <div className="win-pic">
                    <img src={require('../assets/img/starts.png')} alt="Stars" />
                </div>

                <div className="win-info">
                    <h3>You’ve won the Match Game! <br />
                        Next step: Answer a quick skill question to claim your prize!</h3>
                </div>

                <div className="question">
                    <div className="left">
                        <p>{equation}</p>
                        <input
                            type="number"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                    </div>

                    <div className="right">
                        <button className="hypatia-italic" type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>

                {(isCorrect || isInCorrect) && (
                    <div className="prize-info">
                        <h3>
                            <span className={`hypatia-italic ${isCorrect ? "green" : "red"}`}>
                                {isCorrect ? "Correct! 🎉" : "Wrong answer! Try again, you can do it"}
                            </span>
                            <br />
                            {isCorrect ? "Please check your email about your prize!" : "Prize is waiting for you!"}
                        </h3>
                    </div>
                )}


            </div>

            <Footer />
        </>
    );
}

export default WinPage;
