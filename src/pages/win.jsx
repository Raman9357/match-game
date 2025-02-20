import React from "react";
import { useState, useEffect } from "react";
import "./css/win-lose.css";
import "../styles.css";
import Header from "../components/header";
import Footer from "../components/footer";

function WinPage() {

    const [equation, setEquation] = useState("");

    const generateEquation = () => {
        let A = Math.floor(Math.random() * 10) + 1;
        let B = Math.floor(Math.random() * 10) + 1;
        let C = Math.floor(Math.random() * 50) + 10;
        let D = [2, 5, 10][Math.floor(Math.random() * 3)];
        let E = Math.floor(Math.random() * 10) + 1;

        let newEquation = `(${A} × ${B}) + (${C} ÷ ${D}) - ${E} =`;
        setEquation(newEquation);
    };

    useEffect(() => {
        generateEquation(); // Run the function when the component mounts
    }, []);

    return (
        <>
            <Header />

            <div className="container flex-col padding-sm">
                <div className="win-pic">
                    <img src={require('../assets/img/starts.png')} />
                </div>

                <div className="win-info">
                    <h3>You’ve won the Match Game! <br />
                        Next step: Answer a quick skill question to claim your prize!</h3>
                </div>

                <div className="question">
                    <div className="left">
                        <p>{equation}</p>
                        <input type="number" />
                    </div>

                    <div className="right">
                        <button type="submit">Submit</button>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}

export default WinPage;