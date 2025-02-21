import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../styles.css";

function HomePage() {
    return (
        <>
            {/* < Header /> */}
            <div>
                {/* <header>Welcome to the Match Game Contest!</header> */}
                {/* <main style={{ padding: "20px", textAlign: "center" }}> */}
                <section className="main-home">
                    {/* <p>
                        Play and win amazing prizes at BuyMore Dollars. Sign up now to start playing!
                    </p>
                    <Link to="/form">
                        <button>Sign Up and Play</button>
                    </Link> */}

                    <div className="container col">
                        <div className="left">
                            <div className="main-home-pic">
                                <img src={require('../assets/svg/new-logo.png')} />
                            </div>

                            <div className="main-content">
                                {/* <p>Step into the world of possibilities with Match Game by BuyMore Dollars—a fast, fun, and thrilling digital memory game that rewards your sharp skills! Compete for incredible prizes, including up to 10,000 BuyMore Dollars!</p>
                                <br />

                                <p>Log in, match cards in record time, and claim your chance to win big. Whether you're a first-time player or back for another round, the excitement never stops. Are you ready to unlock a world of rewards?</p> */}
                            </div>

                            <div className="play-to-win hide-win">
                                <Link to="/contest"><h4 className="hypatia-italic" >Play Now!</h4></Link>
                            </div>

                            <div className="win-prizes">
                                <h2 className="hypatia-italic">Match Cards! Win Big!</h2>

                                <div className="prizes-img">
                                    <div className="prize green1">
                                        {/* <p>100 <br /> BuyMore$</p> */}
                                    </div>

                                    <div className="prize green2">
                                        {/* <p>750 <br /> BuyMore$</p> */}
                                    </div>

                                    <div className="prize green3">
                                        {/* <p>10,000 <br /> BuyMore$</p> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="right">
                            <div className="box">
                                {/* <h4>Play to Win</h4> */}
                                <Link to="/contest"><h4 className="content-btn hypatia-italic">Play Now!</h4></Link>
                            </div>

                            {/* <div className="buy-more">
                                <p> BUY MORE POSSIBILITIES</p>
                            </div>

                            <div className="three-pics">
                                <img src={require('../assets/img/pic-1.png')} />
                                <img src={require('../assets/img/pic-2.png')} />
                                <img src={require('../assets/img/pic-3.png')} />
                            </div> */}

                        </div>

                    </div>


                </section>
            </div>

            < Footer />
        </>
    );
}

export default HomePage;
