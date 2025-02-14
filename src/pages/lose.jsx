import React from "react";
import "./css/win-lose.css";

function LosePage() {
    return (
        <div className="lose-container">
            <header className="lose-header">
                <img src="lose-badge.png" alt="Lose Badge" className="lose-badge" />
                <h1>Stay in the <span className="lose-text">fight 🥊</span></h1>
            </header>
            <main className="lose-content">
                <h2 className="oops-text"><strong>Oops, not a match!</strong></h2>
                <p>
                    Better luck next time! You've just played the Match Game, so you’ll need to wait 
                    until your cooldown period ends. Hang tight and get ready to jump back into the fun 
                    for another shot at victory!
                </p>
                <p>
                    For consolation coupon winners, rejoice as your $2.00 off any purchase over $50 at 
                    Raw-Cabbage-on-a-Stick Hut is ready to enhance your next experience.
                </p>
                <p>
                    Hurry, this coupon is valid for the next 24 hours only! 
                    Offer expires this Sunday - use your coupon now!
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
            <footer className="lose-footer">
                <p>© 2025 All Rights Reserved.</p>
                <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </footer>
        </div>
    );
}

export default LosePage;

