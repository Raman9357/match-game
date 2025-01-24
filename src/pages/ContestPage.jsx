import React from "react";
import { useNavigate } from "react-router-dom";

function ContestPage() {
    const navigate = useNavigate();
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        const timerDisplay = document.querySelector('#time');
        let firstCard, secondCard;
        let lockBoard = false;
        let timeLeft = 20;
        let timerInterval;

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
                // alert('Congratulations! You matched all pairs!');
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
        startTimer();
    });

    return (

        <div>

            <header>Match Game Contest</header>
            <main style={{ padding: "20px" }}>
                {/* <p>Match all 10 tiles within 20 seconds to win amazing prizes!</p> */}
                <div>
                    {/* */}
                    {/* <p>Game Tiles Go Here!</p> */}
                </div>

                <div class="timer"><span id="time">20</span></div>

                <div class="game-board">
                    <div class="card" data-pair="1">
                        <div class="front">🐱</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="1">
                        <div class="front">🐱</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="2">
                        <div class="front">🐶</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="2">
                        <div class="front">🐶</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="3">
                        <div class="front">🐰</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="3">
                        <div class="front">🐰</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="4">
                        <div class="front">🦁</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="4">
                        <div class="front">🦁</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="5">
                        <div class="front">🐼</div>
                        <div class="back">❓</div>
                    </div>
                    <div class="card" data-pair="5">
                        <div class="front">🐼</div>
                        <div class="back">❓</div>
                    </div>
                </div>



            </main>
        </div>
    );
}

export default ContestPage;
