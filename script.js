// Game data with categories
const games = [
    {
        id: 'memory-flip',
        title: 'Memory Card Flip',
        description: 'Match pairs of cards with the same pattern.',
        image: 'memoryflip.png',
        path: 'memory-flip.html',
        category: 'puzzle'
    },
    {
        id: 'whack-a-mole',
        title: 'Whack-a-Mole',
        description: 'Whack the moles as they appear randomly.',
        image: 'whackamole.png',
        path: 'whack-a-mole.html',
        category: 'action'
    },
    {
        id: 'rock-paper-scissors',
        title: 'Rock Paper Scissors',
        description: 'The classic hand game against the computer.',
        image: 'rockpaperscissors.png',
        path: 'rock-paper-scissors.html',
        category: 'classic'
    },
    {
        id: 'snake',
        title: 'Snake Game',
        description: 'Eat the food, grow longer, but don\'t hit the walls!',
        image: 'snakegame.jpeg',
        path: 'snake.html',
        category: 'classic'
    },
    {
        id: '2048',
        title: '2048',
        description: 'Join the numbers to get to the 2048 tile!',
        image: '2048.jpeg',
        path: '2048.html',
        category: 'puzzle'
    },
    {
        id: 'tic-tac-toe',
        title: 'Tic Tac Toe',
        description: 'The classic X and O game against the computer.',
        image: 'tictactoe.jfif',
        path: 'tic-tac-toe.html',
        category: 'classic'
    },
    {
        id: 'flappy-bird',
        title: 'Flappy Bird Clone',
        description: 'Navigate through pipes without touching them.',
        image: 'flappybird.png',
        path: 'flappy-bird.html',
        category: 'arcade'
    },
    {
        id: 'breakout',
        title: 'Breakout',
        description: 'Break all the bricks with a bouncing ball.',
        image: 'breakout.png',
        path: 'breakout.html',
        category: 'arcade'
    },
    {
        id: 'maze-game',
        title: 'Maze Game',
        description: 'Find your way through the maze to reach the end.',
        image: 'mazegame.jfif',
        path: 'maze-game.html',
        category: 'puzzle'
    },
    {
        id: 'simon-says',
        title: 'Simon Says',
        description: 'Repeat the pattern of lights and sounds.',
        image: 'simonsays.png',
        path: 'simon-says.html',
        category: 'skill'
    },
    {
        id: 'catch-falling',
        title: 'Catch Falling Objects',
        description: 'Catch the falling items before they hit the ground.',
        image: 'catchfalling.png',
        path: 'catch-falling.html',
        category: 'skill'
    },
    {
        id: 'pong',
        title: 'Pong',
        description: 'The classic table tennis arcade game.',
        image: 'pong.png',
        path: 'pong.html',
        category: 'classic'
    },
    {
        id: 'platformer',
        title: 'Platformer Game',
        description: 'Jump from platform to platform and avoid obstacles.',
        image: 'platformer.png',
        path: 'platformer.html',
        category: 'arcade'
    },
    {
        id: 'tap-jump',
        title: 'Tap to Jump',
        description: 'Tap to make your character jump over obstacles.',
        image: 'taptojump.png',
        path: 'tap-jump.html',
        category: 'arcade'
    },
    {
        id: 'reaction-time',
        title: 'Reaction Time Test',
        description: 'Test how quickly you can react to the color change.',
        image: 'reactiontime.png',
        path: 'reaction-time.html',
        category: 'skill'
    },
    {
        id: 'quiz-game',
        title: 'Quiz Game',
        description: 'Test your knowledge with a variety of questions.',
        image: 'quizgame.png',
        path: 'quiz-game.html',
        category: 'puzzle'
    },
    {
        id: 'matching-emoji',
        title: 'Matching Emoji',
        description: 'Match the emojis to clear the board.',
        image: 'matchingemoji.png',
        path: 'matching-emoji.html',
        category: 'puzzle'
    },
    {
        id: 'color-switch',
        title: 'Color Switch',
        description: 'Switch colors to pass through the obstacles.',
        image: 'colorswitch.png',
        path: 'color-switch.html',
        category: 'skill'
    },
    {
        id: 'speed-clicker',
        title: 'Speed Clicker',
        description: 'How many times can you click in 10 seconds?',
        image: 'speedclicker.png',
        path: 'speed-clicker.html',
        category: 'skill'
    },
    {
        id: 'avoid-obstacles',
        title: 'Avoid the Obstacles',
        description: 'Move left and right to avoid the falling obstacles.',
        image: 'avoidobstacles.png',
        path: 'avoid-obstacles.html',
        category: 'arcade'
    },
    {
        id: 'stickman-fight',
        title: 'Stickman Fight',
        description: 'Control a stickman and fight against computer opponents.',
        image: 'stickman.png',
        path: 'stickman-fight.html',
        category: 'action'
    },
    {
        id: 'hangman',
        title: 'Tebak Kata (Hangman)',
        description: 'Guess the word before the hangman is complete.',
        image: 'hangman.png',
        path: 'hangman.html',
        category: 'word'
    },
    {
        id: 'tap-shooter',
        title: 'Tap Tap Shooter',
        description: 'Tap to shoot targets before they disappear.',
        image: 'tapshooter.png',
        path: 'tap-shooter.html',
        category: 'action'
    },
    {
        id: 'traffic-dodge',
        title: 'Traffic Dodge Game',
        description: 'Navigate through busy traffic without crashing.',
        image: 'trafficdodge.png',
        path: 'traffic-dodge.html',
        category: 'arcade'
    },
];

// DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display games on homepage
    const gamesGrid = document.getElementById('games-grid');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Function to render games
    function renderGames(gamesList) {
        gamesGrid.innerHTML = '';
        
        if (gamesList.length === 0) {
            gamesGrid.innerHTML = '<p class="no-games">No games found. Try a different search or category.</p>';
            return;
        }
        
        gamesList.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <span class="category-tag ${game.category}">${game.category}</span>
                <div class="game-card-content">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                </div>
            `;
            
            gameCard.addEventListener('click', () => {
                window.location.href = game.path;
            });
            
            gamesGrid.appendChild(gameCard);
        });
    }
    
    // Filter games function
    function filterGames() {
        const searchValue = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;
        
        const filteredGames = games.filter(game => {
            const matchesSearch = game.title.toLowerCase().includes(searchValue) || 
                                 game.description.toLowerCase().includes(searchValue);
            
            const matchesCategory = categoryValue === 'all' || game.category === categoryValue;
            
            return matchesSearch && matchesCategory;
        });
        
        renderGames(filteredGames);
    }
    
    // Initial render
    renderGames(games);
    
    // Search functionality
    searchInput.addEventListener('input', filterGames);
    
    // Category filter
    categoryFilter.addEventListener('change', filterGames);
    
    // Theme toggle functionality
    themeToggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});