import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function ContestGame() {
    const navigate = useNavigate();


    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        const timerDisplay = document.querySelector('#time');
        let firstCard, secondCard;
        let lockBoard = false;
        let timeLeft = 20;
        let timerInterval;

        const panel = document.querySelector(".game-starter");
        const playButton = document.querySelector("#play-game");

        if (playButton && panel) {
            playButton.addEventListener("click", playTheGame);
        }

        function playTheGame() {
            panel.style.display = "none";
            startTimer();
        }

        function shuffleCards() {
            const gameBoard = document.querySelector('.game-board');
            const shuffledCards = Array.from(cards).sort(() => Math.random() - 0.5);
            shuffledCards.forEach(card => gameBoard.appendChild(card));
        }

        function flipCard() {
            if (lockBoard) return;
            if (this === firstCard) return;

            this.classList.add('flipped');

            if (!firstCard) {
                firstCard = this;
                return;
            }

            secondCard = this;
            checkForMatch();
        }

        function checkForMatch() {
            const isMatch = firstCard.dataset.pair === secondCard.dataset.pair;

            isMatch ? disableCards() : unflipCards();
        }

        function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);

            if (document.querySelectorAll('.card:not(.flipped)').length === 0) {
                clearInterval(timerInterval);
                navigate("/prize");
            }

            resetBoard();
        }

        function unflipCards() {
            lockBoard = true;

            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');

                resetBoard();
            }, 400);
        }

        function resetBoard() {
            [firstCard, secondCard] = [null, null];
            lockBoard = false;
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = timeLeft;

                if (timeLeft === 0) {
                    clearInterval(timerInterval);
                    alert('Game Over! Time is up.');
                    resetGame();
                }
            }, 1000);
        }

        function resetGame() {
            cards.forEach(card => card.classList.remove('flipped'));
            cards.forEach(card => card.addEventListener('click', flipCard));
            [firstCard, secondCard] = [null, null];
            lockBoard = false;
            timeLeft = 20;
            timerDisplay.textContent = timeLeft;
            shuffleCards();
            startTimer();
        }

        cards.forEach(card => card.addEventListener('click', flipCard));
        shuffleCards();
        // startTimer();

        return () => {
            clearInterval(timerInterval);
            cards.forEach(card => card.removeEventListener('click', flipCard));

            if (playButton) {
                playButton.removeEventListener("click", playTheGame);
            }
        };

    }, []);

    return (
        <div className="contest-page">
            <div className="container">

                {/* <main style={{ padding: "20px" }}> */}
                <main>

                    <div className="game-starter">
                        <div className="play">
                            <button id="play-game">Play</button>
                        </div>
                    </div>

                    <div className="timer">
                        <span id="time">20</span>
                    </div>

                    <div className="game-board">
                        <div className="card" data-pair="1">
                            <div className="front">🐱</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="1">
                            <div className="front">🐱</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="2">
                            <div className="front">🐶</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="2">
                            <div className="front">🐶</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="3">
                            <div className="front">🐰</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="3">
                            <div className="front">🐰</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="4">
                            <div className="front">🦁</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="4">
                            <div className="front">🦁</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="5">
                            <div className="front">🐼</div>
                            <div className="back">❓</div>
                        </div>
                        <div className="card" data-pair="5">
                            <div className="front">🐼</div>
                            <div className="back">❓</div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
}

export default ContestGame;
