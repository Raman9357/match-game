import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles.css";

function PrizePage() {
    return (
        <div>
            <Header />
            <header>Congratulations!</header>
            <main style={{ padding: "20px" }}>
                <p>You have won a prize! Answer the skill-testing question to claim it.</p>
            </main>
            <Footer />
        </div>
    );
}

export default PrizePage;
