import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import ContestGame from "../components/game";
import "../styles.css";

function ContestPage() {

    return (
        <div>
            <Header />

            <div>
                {/* <Header /> */}
                {/* <header>Match Game Contest</header> */}

                <div className="intstructions">
                    <div className="container-col">
                        <h2>Instruction</h2>

                        <p>Match all five pairs in 20 seconds to win! Flip fast, stay sharp, and claim rewards—up to 10,000 BuyMore Dollars! Missed it? Try again in 24 hours. A countdown shows when your next chance begins. Keep flipping for more! </p>

                        <p>Click to read the <a href="#">Terms and Conditions</a> </p>
                    </div>
                </div>

                <div className="prize-table">
                    <div className="container">
                        <table>
                            <tr>
                                <th>Prize Amounts</th>
                                <th>Winning</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>750</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>100</td>
                            </tr>

                            <tr>
                                <td>100</td>
                                <td>5</td>
                            </tr>
                        </table>
                    </div>
                </div>


                {/* <div className="desktop-game">
                    <ContestGame />
                </div> */}

                <div className="mobile-game">
                    <Link className="game-link" to="/mobile-game">Play Now</Link>
                </div>


                {/* <Footer /> */}
            </div>

            <Footer />
        </div>
    );
}

export default ContestPage;
