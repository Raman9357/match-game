import React from "react";
import "./css/win-lose.css";
import "../styles.css";
import Header from "../components/header";
import Footer from "../components/footer";

function WinPage() {

    return (
        <>
            <Header />

            <div className="container flex-col padding-sm">
                <div className="win-pic">
                    <img src={require('../assets/img/you-lose.png')} />
                </div>

                <div className="lose-info">
                    <h3 className="hypatia-italic" >Stay in the fight 🥊</h3>
                </div>

                <div className="win-info margin-top">
                    <h3 className="hypatia-italic" >
                        Not a win this time!
                        <br />
                        <br />
                        <br />

                        Today’s Reward: <br />
                        $2 Off $50+ at Raw-Cabbage-on-a-Stick Hut!

                    </h3>
                </div>

                <div className="play-again">
                    <h2 className="hypatia-italic" >Play again in:</h2>

                    <div className="lose-timer">
                        <span className="hrs clock">00</span>
                        <span className="hypatia-italic" >:</span>
                        <span className="min clock">00</span>
                        <span className="hypatia-italic" >:</span>
                        <span className="sec clock">00</span>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}

export default WinPage;