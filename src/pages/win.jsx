import React from "react";
import "./css/win-lose.css";

function WinPage() {
    return (
        <div className="win-container">
            <header className="win-header">
                <img src="win-badge.png" alt="Win Badge" className="win-badge" />
                <h1>Congratulations, <span className="win-text">you Win! 🎉</span></h1>
            </header>
            <main className="win-content">
                <p>
                    Congratulations on conquering the Match Game and securing your victory! Redeeming 
                    your well-deserved prizes is a breeze. To claim your prize, please answer the 
                    following skill-testing question:
                </p>
                <div className="skill-test">
                    <span>(10 × 2) + (30 ÷ 5) - 4 = </span>
                    <input type="text" className="answer-input" />
                </div>
                <p>
                    Once you've provided the correct answer, your BuyMore Dollars will be seamlessly 
                    added to your account within 6 to 8 weeks from your triumphant moment.
                </p>
                <p>
                    In Canada, winners are required to correctly answer a mathematical skill-testing 
                    question to claim their prize.
                </p>
                <section className="countdown">
                    <h2>PLAY AGAIN IN :</h2>
                    <div className="timer">
                        <div className="time-box"><span>00</span> DAYS</div>
                        <div className="time-box"><span>00</span> HRS</div>
                        <div className="time-box"><span>00</span> MIN</div>
                    </div>
                </section>
            </main>
            <footer className="win-footer">
                <p>© 2025 All Rights Reserved.</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </footer>
        </div>
    );
}

export default WinPage;