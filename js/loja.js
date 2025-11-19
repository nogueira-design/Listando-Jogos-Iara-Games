document.addEventListener('DOMContentLoaded', () => {

    // --- ÍCONES SVG PARA AS ESTRELAS (Mantidos) ---
    const SVG_STAR_FILL = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em;"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>`;
    const SVG_STAR_HALF = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em;"><path d="M5.354 5.119 7.538.792A.513.513 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.5.5 0 0 1 .282-.949l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.699-4.106 2.986-2.828-4.114-.599L8 2.01l-1.82 3.71-4.114.599 2.986 2.828-.699 4.106L7.768 12.083a.5.5 0 0 1 .232-.056z"/></svg>`;
    const SVG_STAR_EMPTY = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="vertical-align: -0.125em;"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.122l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.699-4.106-2.986-2.828 4.114-.599L8 2.01l1.83 3.71.01 4.114.599-2.986 2.828.699-4.106-3.686 1.894L8 12.083z"/></svg>`;

    // --- DADOS (Simulação) ---
    const games = [
        { id: '1', title: 'Dandara', developer: 'Long Hat House', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/612390/header.jpg', price: 36.99, rating: 4.5, tags: ['Metroidvania', 'Plataforma', 'Ação'] },
        { id: '2', title: 'Horizon Chase Turbo', developer: 'Aquiris Game Studio', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/389140/header.jpg', price: 29.99, rating: 4.7, tags: ['Corrida', 'Arcade', 'Retrô'] },
        { id: '3', title: 'Celeste', developer: 'Matt Makes Games', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg', price: 36.99, rating: 4.9, tags: ['Plataforma', 'Pixel Art', 'Aventura'] },
        { id: '4', title: 'Knights of Pen & Paper', developer: 'Behold Studios', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/231740/header.jpg', price: 9.99, rating: 4.3, tags: ['RPG', 'Pixel Art', 'Humor'] },
        { id: '5', title: 'Chroma Squad', developer: 'Behold Studios', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/251130/header.jpg', price: 14.99, rating: 4.2, tags: ['Estratégia', 'Tático', 'Pixel Art'] },
        { id: '6', title: 'Blazing Chrome', developer: 'JoyMasher', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/609110/header.jpg', price: 16.99, rating: 4.4, tags: ['Ação', 'Run and Gun', 'Pixel Art'] },
        { id: '7', title: 'Oniken', developer: 'JoyMasher', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252010/header.jpg', price: 9.99, rating: 4.0, tags: ['Ação', 'Plataforma', 'Pixel Art'] },
        { id: '8', title: 'Momodora: RUTM', developer: 'Bombservice', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/428550/header.jpg', price: 9.99, rating: 4.6, tags: ['Metroidvania', 'Plataforma', 'Ação'] },
        
        // JOGOS MAIS REALISTAS PARA PAGINAÇÃO
        { id: '9', title: 'A Long Way Down', developer: 'Seenapsis', imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/856990/header.jpg?t=1727785688', price: 21.99, rating: 3.8, tags: ['RPG', 'Estratégia'] },
        { id: '10', title: 'Gaucho and the Grassland', developer: 'ButcherLabs', imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1670830/21281221524797409286b9e55706d41952035826/header.jpg?t=1759873267', price: 24.50, rating: 4.0, tags: ['Simulação', 'Aventura'] },
        { id: '11', title: 'No Place for Bravery', developer: 'Glitch Factory', imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1039100/header.jpg?t=1730740548', price: 49.99, rating: 4.2, tags: ['Ação', 'RPG'] },
        { id: '12', title: 'Dodgeball Academia', developer: 'Pocket Trap', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1221520/header.jpg', price: 37.99, rating: 4.4, tags: ['Esportes', 'Aventura'] },
        { id: '13', title: 'UNSIGHTED', developer: 'Studio Pixel Link', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1095420/header.jpg', price: 54.99, rating: 4.6, tags: ['Ação', 'Metroidvania'] },
        { id: '14', title: 'Fobia - St. Dinfna Hotel', developer: 'Pulsatrix Studios', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1298370/header.jpg', price: 69.99, rating: 4.1, tags: ['Survival Horror', 'Puzzle'] },
        { id: '15', title: 'Dungeon of the Endless', developer: 'Amplitude Studios', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/249050/header.jpg', price: 19.99, rating: 4.3, tags: ['Roguelike', 'Estratégia'] },
        { id: '16', title: 'Terraria', developer: 'Re-Logic', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg', price: 19.99, rating: 4.9, tags: ['Aventura', 'Sandbox'] },
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
    let currentView = 'grid'; 
    let currentPage = 1; 
    const ITEMS_PER_PAGE = 8; 

    // --- REFERÊNCIAS DO DOM ---
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const gamesGrid = document.getElementById('gamesGrid');
    const noResultsMessage = document.getElementById('noResults');
    const paginationNav = document.getElementById('pagination'); 

    const btnGridView = document.getElementById('gridViewBtn');
    const btnListView = document.getElementById('listViewBtn');

    // --- FUNÇÕES AUXILIARES E DE RENDERIZAÇÃO ---
    function renderStars(rating) {
        let starsHTML = '';
        const roundedRating = Math.round(rating * 2) / 2;
        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRating) { starsHTML += SVG_STAR_FILL; } 
            else if (i - 0.5 === roundedRating) { starsHTML += SVG_STAR_HALF; } 
            else { starsHTML += SVG_STAR_EMPTY; }
        }
        return starsHTML;
    }

    function renderPaginationLinks(totalPages) {
        const ul = paginationNav.querySelector('.pagination');
        if (!ul) return;
        ul.innerHTML = ''; 

        // Botão Anterior
        const prevDisabled = currentPage === 1 ? 'disabled' : '';
        let prevLi = `<li class="page-item ${prevDisabled}"><a class="page-link" href="#" data-page="${currentPage - 1}" tabindex="-1">Anterior</a></li>`;
        ul.innerHTML += prevLi;

        // Links de Páginas
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === currentPage ? 'active' : '';
            let pageLi = `<li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
            ul.innerHTML += pageLi;
        }

        // Botão Próximo
        const nextDisabled = currentPage === totalPages ? 'disabled' : '';
        let nextLi = `<li class="page-item ${nextDisabled}"><a class="page-link" href="#" data-page="${currentPage + 1}">Próximo</a></li>`;
        ul.innerHTML += nextLi;

        // Adiciona Event Listeners aos novos links (Inclui o scroll)
        ul.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(e.target.dataset.page);
                
                if (!isNaN(page) && page >= 1 && page <= totalPages) {
                    currentPage = page;
                    renderGames(); 
                    
                    // ROLAGEM SUAVE PARA O TOPO DA PÁGINA
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' 
                    });
                }
            });
        });
    }

    function renderCategories() {
        if (!categoryButtonsContainer) return;
        categoryButtonsContainer.innerHTML = '';
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn btn-category rounded-pill';
            button.dataset.categoryId = category.id;
            button.textContent = category.name;

            if (category.id === currentCategory) {
                button.classList.add('active');
            }

            button.addEventListener('click', (e) => {
                currentCategory = e.currentTarget.dataset.categoryId;
                currentPage = 1; // Reseta a página ao trocar categoria
                renderCategories();
                renderGames();
            });
            categoryButtonsContainer.appendChild(button);
        });
    }

    function renderGames() {
        if (!gamesGrid) return;

        // 1. FILTRAR E ORDENAR
        let filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(currentSearch)
        );

        if (currentCategory !== 'all') {
            const categoryName = categories.find(c => c.id === currentCategory).name;
            filteredGames = filteredGames.filter(game => 
                game.tags.some(tag => tag.toLowerCase() === categoryName.toLowerCase())
            );
        }

        filteredGames.sort((a, b) => {
            if (currentSort === 'alphabetical') { return a.title.localeCompare(b.title); } 
            else if (currentSort === 'popular' || currentSort === 'rating') { return b.rating - a.rating; }
            return 0;
        });

        // 2. LÓGICA DE PAGINAÇÃO
        const totalItems = filteredGames.length;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        } else if (totalPages === 0) {
            currentPage = 1;
        }

        // Fatiamento do Array para a página atual
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const gamesToRender = filteredGames.slice(startIndex, endIndex);

        // 3. VISIBILIDADE E LINKS DA PAGINAÇÃO
        if (totalPages > 1) {
            paginationNav.style.display = 'flex';
            renderPaginationLinks(totalPages);
        } else {
            paginationNav.style.display = 'none';
        }

        // 4. RENDERIZAÇÃO NO DOM
        gamesGrid.innerHTML = ''; 

        // Lógica de "Sem Resultados"
        if (gamesToRender.length === 0 && totalItems === 0) {
            paginationNav.style.display = 'none';
            if (noResultsMessage) noResultsMessage.classList.remove('d-none');
            return;
        } else {
            if (noResultsMessage) noResultsMessage.classList.add('d-none');
        }

        // Aplica a classe de visualização para o CSS agir
        gamesGrid.classList.remove('grid-view', 'list-view');
        gamesGrid.classList.add(`${currentView}-view`);
        
        // CORREÇÃO AQUI: Alterna as classes de grid do Bootstrap
        gamesGrid.classList.remove('row-cols-1', 'row-cols-md-2', 'row-cols-lg-3', 'row-cols-xl-4');
        if (currentView === 'grid') {
            gamesGrid.classList.add('row-cols-1', 'row-cols-md-2', 'row-cols-lg-3', 'row-cols-xl-4');
        } else {
            gamesGrid.classList.add('row-cols-1');
        }
        
        gamesToRender.forEach(game => {
            const priceFormatted = `R$ ${game.price.toFixed(2).replace('.', ',')}`;
            
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
    
    // ===========================================
    // NOVO BLOCO: EVENT LISTENERS DO TOGGLE DE VIEW
    // ===========================================
    
    // Toggle de Visualização (Grid/Lista)
    if (btnGridView && btnListView) {
        const toggleView = (view) => {
            currentView = view;
            
            // Atualiza o estado visual dos botões
            btnGridView.classList.remove('active');
            btnListView.classList.remove('active');
            if (view === 'grid') {
                btnGridView.classList.add('active');
            } else { 
                btnListView.classList.add('active');
            }

            renderGames();
        };

        btnGridView.addEventListener('click', () => toggleView('grid'));
        btnListView.addEventListener('click', () => toggleView('list'));
        
        // Inicializa o estado visual correto (Grid)
        btnGridView.classList.add('active'); 
    }
    
    // ===========================================

    // Inicialização da Loja
    renderCategories();
    renderGames();
});