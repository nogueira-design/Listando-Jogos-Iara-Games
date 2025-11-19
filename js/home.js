document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DADOS (Simulados) ---
    const games = [
        { id: '3', title: 'Celeste', developer: 'Matt Makes Games', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg', price: 36.99, rating: 4.9 },
        { id: '2', title: 'Horizon Chase', developer: 'Aquiris', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/389140/header.jpg', price: 29.99, rating: 4.7 },
        { id: '8', title: 'Momodora: RUTM', developer: 'Bombservice', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/428550/header.jpg', price: 9.99, rating: 4.6 },
        { id: '1', title: 'Dandara', developer: 'Long Hat House', imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/612390/header.jpg', price: 36.99, rating: 4.5 }
    ];

    // --- 2. RENDERIZAÇÃO DOS DESTAQUES ---
    const featuredContainer = document.getElementById('featuredGamesGrid');

    if (featuredContainer) {
        featuredContainer.innerHTML = ''; // Limpa loading

        games.forEach(game => {
            const html = `
                <div class="col">
                    <div class="card h-100 shadow-sm" style="background-color: #111827;">
                        <img src="${game.imageUrl}" class="card-img-top" alt="${game.title}" style="height: 12rem; object-fit: cover;">
                        <div class="card-body text-white d-flex flex-column">
                            <h5 class="card-title fw-bold">${game.title}</h5>
                            <p class="text-secondary-light small mb-2">${game.developer}</p>
                            <div class="mt-auto d-flex justify-content-between align-items-center">
                                <span class="fw-bold">R$ ${game.price.toFixed(2).replace('.', ',')}</span>
                                <span class="badge bg-warning text-dark">
                                    <i class="bi bi-star-fill me-1" style="font-size: 0.7rem;"></i>${game.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            featuredContainer.innerHTML += html;
        });
    }

    // --- 3. ANIMAÇÃO DE SCROLL (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                observer.unobserve(entry.target); // Para de observar depois que animou
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com a classe .hidden-element
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));

});