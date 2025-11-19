document.addEventListener('DOMContentLoaded', () => {

    // --- ÍCONES SVG PARA AS ESTRELAS ---
    const SVG_STAR_FILL = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em;">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>`;
    
    const SVG_STAR_HALF = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em;">
          <path d="M5.354 5.119 7.538.792A.513.513 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.5.5 0 0 1 .282-.949l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.699-4.106 2.986-2.828-4.114-.599L8 2.01l-1.82 3.71-4.114.599 2.986 2.828-.699 4.106L7.768 12.083a.5.5 0 0 1 .232-.056z"/>
        </svg>`;

    const SVG_STAR_EMPTY = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em;">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.122l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.699-4.106-2.986-2.828 4.114-.599L8 2.01l1.83 3.71.01 4.114.599-2.986 2.828.699-4.106-3.686 1.894L8 12.083z"/>
        </svg>`;


    // --- DADOS ---
    const games = [
        {
            id: '1',
            title: 'Dandara',
            developer: 'Long Hat House',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/612390/header.jpg',
            price: 36.99,
            rating: 4.5,
            tags: ['Metroidvania', 'Plataforma', '2D'],
        },
        {
            id: '2',
            title: 'Horizon Chase Turbo',
            developer: 'Aquiris Game Studio',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/389140/header.jpg',
            price: 29.99,
            rating: 4.7,
            tags: ['Corrida', 'Arcade', 'Retrô'],
        },
        {
            id: '3',
            title: 'Celeste',
            developer: 'Matt Makes Games',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg',
            price: 36.99,
            rating: 4.9,
            tags: ['Plataforma', 'Pixel Art', 'Difícil'],
        },
        {
            id: '4',
            title: 'Knights of Pen & Paper',
            developer: 'Behold Studios',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/231740/header.jpg',
            price: 9.99,
            rating: 4.3,
            tags: ['RPG', 'Pixel Art', 'Humor'],
        },
        {
            id: '5',
            title: 'Chroma Squad',
            developer: 'Behold Studios',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/251130/header.jpg',
            price: 14.99,
            rating: 4.2,
            tags: ['Estratégia', 'Tático', 'Pixel Art'],
        },
        {
            id: '6',
            title: 'Blazing Chrome',
            developer: 'JoyMasher',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/609110/header.jpg',
            price: 16.99,
            rating: 4.4,
            tags: ['Ação', 'Run and Gun', 'Pixel Art'],
        },
        {
            id: '7',
            title: 'Oniken',
            developer: 'JoyMasher',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252010/header.jpg',
            price: 9.99,
            rating: 4.0,
            tags: ['Ação', 'Plataforma', 'Pixel Art'],
        },
        {
            id: '8',
            title: 'Momodora: Reverie Under the Moonlight',
            developer: 'Bombservice',
            imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/428550/header.jpg',
            price: 9.99,
            rating: 4.6,
            tags: ['Metroidvania', 'Plataforma', 'Difícil'],
        },
    ];

    const categories = [
        { id: 'all', name: 'Todos' },
        { id: 'action', name: 'Ação' },
        { id: 'adventure', name: 'Aventura' },
        { id: 'rpg', name: 'RPG' },
        { id: 'strategy', name: 'Estratégia' },
        { id: 'simulation', name: 'Simulação' },
        { id: 'sports', name: 'Esportes' },
        { id: 'racing', name: 'Corrida' },
        { id: 'puzzle', name: 'Puzzle' },
    ];

    // --- ESTADO DA APLICAÇÃO ---
    let currentSort = 'alphabetical';
    let currentCategory = 'all';
    let currentSearch = '';

    // --- REFERÊNCIAS DO DOM ---
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const gamesGrid = document.getElementById('gamesGrid');
    const noResultsMessage = document.getElementById('noResults');

    // --- FUNÇÕES DE RENDERIZAÇÃO ---

    function renderStars(rating) {
        let starsHTML = '';
        const roundedRating = Math.round(rating * 2) / 2;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRating) {
                starsHTML += SVG_STAR_FILL;
            } else if (i - 0.5 === roundedRating) {
                starsHTML += SVG_STAR_HALF;
            } else {
                starsHTML += SVG_STAR_EMPTY;
            }
        }
        return starsHTML;
    }


    /**
     * Renderiza os botões de categoria (Pílulas)
     */
    function renderCategories() {
        if (!categoryButtonsContainer) return;
        categoryButtonsContainer.innerHTML = '';
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.type = 'button';
            
            // ATUALIZADO: Adicionadas classes do Bootstrap e Customizadas
            // 'btn' = Base do Bootstrap
            // 'btn-category' = Nossa classe de cor roxa
            // 'rounded-pill' = Borda totalmente arredondada
            button.className = 'btn btn-category rounded-pill';
            
            button.dataset.categoryId = category.id;
            button.textContent = category.name;

            // Define o botão ativo
            if (category.id === currentCategory) {
                button.classList.add('active');
            }

            button.addEventListener('click', (e) => {
                currentCategory = e.currentTarget.dataset.categoryId;
                renderCategories();
                renderGames();
            });

            categoryButtonsContainer.appendChild(button);
        });
    }

    /**
     * Renderiza o grid de jogos
     */
    function renderGames() {
        if (!gamesGrid) return;

        // 1. Filtrar por Busca
        let filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(currentSearch)
        );

        // 2. Filtrar por Categoria
        if (currentCategory !== 'all') {
            const categoryName = categories.find(c => c.id === currentCategory).name;
            
            filteredGames = filteredGames.filter(game => 
                // Verifica se alguma tag do jogo contem o nome da categoria (case insensitive)
                game.tags.some(tag => tag.toLowerCase() === categoryName.toLowerCase())
            );
        }

        // 3. Ordenar
        filteredGames.sort((a, b) => {
            if (currentSort === 'alphabetical') {
                return a.title.localeCompare(b.title);
            } else if (currentSort === 'popular' || currentSort === 'rating') {
                return b.rating - a.rating;
            }
            return 0;
        });

        // 4. Renderizar no DOM
        gamesGrid.innerHTML = ''; // Limpa o grid

        // Lógica de "Sem Resultados"
        if (filteredGames.length === 0) {
            // Mostra a div de mensagem removendo a classe d-none
            if (noResultsMessage) noResultsMessage.classList.remove('d-none');
            return;
        } else {
            // Esconde a div de mensagem
            if (noResultsMessage) noResultsMessage.classList.add('d-none');
        }

        filteredGames.forEach(game => {
            const priceFormatted = `R$ ${game.price.toFixed(2).replace('.', ',')}`;
            
            // ATUALIZADO: Estrutura de Coluna + Card do Bootstrap
            // Usamos 'card' e 'card-body' que estilizamos no CSS para ser escuro
            const gameCardHTML = `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="${game.imageUrl}" class="card-img-top" alt="${game.title}" style="height: 12rem; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold text-white mb-1">${game.title}</h5>
                            <p class="card-text text-secondary-light small mb-3">${game.developer}</p>
                            
                            <div class="mt-auto d-flex justify-content-between align-items-center">
                                <span class="fw-bold text-white fs-5">${priceFormatted}</span>
                                
                                <span class="text-warning d-flex align-items-center" title="Avaliação: ${game.rating}">
                                    ${renderStars(game.rating)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            gamesGrid.innerHTML += gameCardHTML;
        });
    }

    // --- EVENT LISTENERS ---

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            renderGames();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderGames();
        });
    }

    // --- INICIALIZAÇÃO ---
    renderCategories();
    renderGames();

});