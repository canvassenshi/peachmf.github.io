const game = () => {
	let pScore = 0;
	let cScore = 0;

	

	const introScreen = document.querySelector(".intro");
	const match = document.querySelector(".match");
	const option = document.querySelector(".options");
	const playerScore = document.querySelector(".player-score p")
	const computerScore = document.querySelector(".computer-score p")

	//Start the game
	const startGame = () => {
		const playBtn = document.querySelector(".intro button");

		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
			option.classList.add("fadeIn");
			playerScore.textContent = 0;
			computerScore.textContent = 0;
			pScore = 0;
			cScore = 0;
		});
	};

	//Play match
	const playMatch = () => {
		const options = document.querySelectorAll(".options button")
		const playerHand = document.querySelector(".player-hand")
		const computerHand = document.querySelector(".computer-hand")

		const computerOptions = ["rock", "paper", "scissors"]

		options.forEach(option=>{
			option.addEventListener("click", function() {
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber]


				compareHands(this.textContent, computerChoice);

				//Update Images
				playerHand.src = `./icon/${this.textContent}.png`
				computerHand.src = `./icon/${computerChoice}.png`
			})
		})	
	}

	const updateScore = () => {
	
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;

		if(pScore == 5 || cScore == 5){
			const gameOver = document.querySelector(".intro h1")
			gameOver.textContent = "Game over.. Play again?"

			match.classList.remove("fadeIn");
			option.classList.remove("fadeIn");

			setTimeout(() => {
				introScreen.classList.remove("fadeOut");
				gameOverAudio = new Audio("gtfo.mp3")
				gameOverAudio.play()
			}, 2000);

		}
	}


	const compareHands = (playerChoice, computerChoice) => {

		const botVoice = ["mf.mp3", "noob.mp3", "ass.mp3"];
		const botNumber = Math.floor(Math.random() * 3);
		const music = new Audio(botVoice[botNumber]);


		const winner = document.querySelector(".winner")
		if(playerChoice === computerChoice){
			winner.textContent = "Draw!"
			return;
		}

		if(playerChoice == "rock"){
			if(computerChoice === "scissors"){
				winner.textContent = "You win!"
				pScore++;
				updateScore();
				return;
			}
			else{
				winner.textContent = "Computer wins.."
				music.play()
				cScore++;
				updateScore();
				return;
			}
		}

		if(playerChoice == "scissors"){
			if(computerChoice === "paper"){
				winner.textContent = "You win!"
				pScore++;
				updateScore();
				return;
			}
			else{
				winner.textContent = "Computer wins.."
				music.play()
				cScore++;
				updateScore();
				return;
			}
		}

		if(playerChoice == "paper"){
			if(computerChoice === "scissors"){
				winner.textContent = "Computer wins!"
				music.play()
				cScore++;
				updateScore();
				return;
			}
			else{
				winner.textContent = "You win.."
				pScore++;
				updateScore();
				return;
			}
		}


	}

	


	//Calling functions

	startGame();
	playMatch();

};

//start the game function
game();