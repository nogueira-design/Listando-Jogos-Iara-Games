document.addEventListener('DOMContentLoaded', () => {

    // --- ÍCONES SVG PARA AS ESTRELAS ---
    const SVG_STAR_FILL = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em; margin-right: 2px;">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>`;
    
    const SVG_STAR_HALF = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em; margin-right: 2px;">
          <path d="M5.354 5.119 7.538.792A.513.513 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.5.5 0 0 1 .282-.949l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.699-4.106 2.986-2.828-4.114-.599L8 2.01l-1.82 3.71-4.114.599 2.986 2.828-.699 4.106L7.768 12.083a.5.5 0 0 1 .232-.056z"/>
        </svg>`;

    const SVG_STAR_EMPTY = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em; margin-right: 2px;">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.122l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.699-4.106-2.986-2.828 4.114-.599L8 2.01l1.83 3.71.01 4.114.599-2.986 2.828.699-4.106-3.686 1.894L8 12.083z"/>
        </svg>`;


    // --- DADOS (copiados do React) ---
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

    // --- CÓDIGO QUE FALTAVA, ADICIONADO AGORA ---
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
    // ------------------------------------------

    // --- ESTADO DA APLICAÇÃO ---
    let currentSort = 'alphabetical';
    let currentCategory = 'all';
    let currentSearch = '';

    // --- REFERÊNCIAS DO DOM ---
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const gamesGrid = document.getElementById('gamesGrid');

    // --- FUNÇÕES DE RENDERIZAÇÃO ---

    /**
     * NOVO: Gera o HTML para 5 estrelas com base na nota.
     * @param {number} rating - A nota do jogo (ex: 4.5)
     * @returns {string} - O HTML dos 5 SVGs de estrela
     */
    function renderStars(rating) {
        let starsHTML = '';
        const roundedRating = Math.round(rating * 2) / 2; // Arredonda para o 0.5 mais próximo
        
        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRating) {
                // Estrela cheia
                starsHTML += SVG_STAR_FILL;
            } else if (i - 0.5 === roundedRating) {
                // Meia estrela
                starsHTML += SVG_STAR_HALF;
            } else {
                // Estrela vazia
                starsHTML += SVG_STAR_EMPTY;
            }
        }
        return starsHTML;
    }


    /**
     * Renderiza os botões de categoria.
     */
    function renderCategories() {
        if (!categoryButtonsContainer) return; // Proteção caso o elemento não exista
        categoryButtonsContainer.innerHTML = ''; // Limpa botões existentes
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.type = 'button';
            // ATUALIZADO: Usa classes do style.css
            button.className = 'category-btn';
            button.dataset.categoryId = category.id;
            button.textContent = category.name;

            // Define o botão ativo
            if (category.id === currentCategory) {
                // ATUALIZADO: Usa classe 'active'
                button.classList.add('active');
            }

            // Adiciona evento de clique
            button.addEventListener('click', (e) => {
                // Atualiza o estado
                currentCategory = e.currentTarget.dataset.categoryId;
                // Re-renderiza categorias para atualizar o botão ativo
                renderCategories();
                // Re-renderiza os jogos com o novo filtro
                renderGames();
            });

            categoryButtonsContainer.appendChild(button);
        });
    }

    /**
     * Renderiza o grid de jogos com base nos filtros e ordenação atuais.
     */
    function renderGames() {
        if (!gamesGrid) return; // Proteção caso o elemento não exista

        // 1. Filtrar por Busca
        let filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(currentSearch)
        );

        // 2. Filtrar por Categoria
        if (currentCategory !== 'all') {
            const categoryName = categories.find(c => c.id === currentCategory).name;
            // ATUALIZADO: Lógica de filtro de tag (Alguns jogos não tinham tags correspondentes)
            // Vamos assumir que as tags do jogo podem corresponder ao 'name' da categoria.
            // Ex: Jogo com tag 'Ação' corresponde à categoria 'Ação'
            filteredGames = filteredGames.filter(game => 
                game.tags.some(tag => tag.toLowerCase() === categoryName.toLowerCase())
            );
        }

        // 3. Ordenar
        filteredGames.sort((a, b) => {
            if (currentSort === 'alphabetical') {
                return a.title.localeCompare(b.title);
            } else if (currentSort === 'popular' || currentSort === 'rating') {
                return b.rating - a.rating; // Ordena por nota (maior primeiro)
            }
            return 0;
        });

        // 4. Renderizar no DOM
        gamesGrid.innerHTML = ''; // Limpa o grid

        if (filteredGames.length === 0) {
            gamesGrid.innerHTML = `
                <div class="no-results-message" style="display: block; grid-column: 1 / -1;">
                    <h2>Nenhum jogo encontrado</h2>
                    <p>Tente ajustar sua busca ou filtros.</p>
                </div>
            `;
            return;
        }

        filteredGames.forEach(game => {
            const priceFormatted = `R$ ${game.price.toFixed(2).replace('.', ',')}`;
            
            // ATUALIZADO: HTML do card para corresponder ao style.css
            const gameCardHTML = `
                <div class="game-card">
                    <img src="${game.imageUrl}" class="game-card-image" alt="${game.title}">
                    <div class="game-card-body">
                        <h3 class="game-card-title">${game.title}</h3>
                        <p class="game-card-developer">${game.developer}</p>
                        <div class="game-card-footer">
                            <span class="game-card-price">${priceFormatted}</span>
                            
                            <!-- ATUALIZADO: Chama a função renderStars -->
                            <span class="game-card-rating" style="display: inline-flex; align-items: center;" title="Avaliação: ${game.rating} de 5">
                                ${renderStars(game.rating)}
                            </span>
                        </div>
                    </div>
                </div>
            `;
            gamesGrid.innerHTML += gameCardHTML;
        });
    }

    // --- EVENT LISTENERS INICIAIS ---

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            renderGames(); // Re-renderiza os jogos a cada tecla digitada
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderGames(); // Re-renderiza os jogos com a nova ordenação
        });
    }

    // --- CARGA INICIAL ---
    renderCategories();
    renderGames();

});

