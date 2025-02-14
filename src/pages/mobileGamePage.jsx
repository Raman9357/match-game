import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import ContestGame from "../components/game";
import "../styles.css";

function MobileGame() {

    return (
        <div>
            <Header />

            <div>

                <ContestGame />
            </div>

            <Footer />
        </div>
    );
}

export default MobileGame;
