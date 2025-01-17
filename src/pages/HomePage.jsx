import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <header>Welcome to the Match Game Contest!</header>
            <main style={{ padding: "20px", textAlign: "center" }}>
                <p>
                    Play and win amazing prizes at BuyMore Dollars. Sign up now to start playing!
                </p>
                <Link to="/form">
                    <button>Sign Up and Play</button>
                </Link>
            </main>
        </div>
    );
}

export default HomePage;
