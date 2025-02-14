import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles.css";

function LegalPage() {
    return (
        <div>
            <Header />
            <header>Legal Information</header>
            <main style={{ padding: "20px" }}>
                <p>Minimum age: 16 years (with guardian's permission if under 18).</p>
                <p>By entering, you consent to data collection and promotional communication.</p>
                <p>Prize distribution is subject to terms and conditions.</p>
            </main>
            <Footer />
        </div>
    );
}

export default LegalPage;
