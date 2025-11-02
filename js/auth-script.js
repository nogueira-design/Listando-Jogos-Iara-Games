document.addEventListener('DOMContentLoaded', () => {
            
    // Seleciona os elementos principais
    const loggedOutView = document.getElementById('logged-out-view');
    const loggedInView = document.getElementById('logged-in-view');
    
    // Seleciona os botões que mudam o estado
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const logoutButton = document.getElementById('logout-button');

    // Funções para mostrar/esconder as seções
    function showLoggedInView() {
        loggedOutView.classList.add('d-none');
        loggedInView.classList.remove('d-none');
    }

    function showLoggedOutView() {
        loggedInView.classList.add('d-none');
        loggedOutView.classList.remove('d-none');
    }

    // --- EVENT LISTENERS ---

    if(loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o envio do formulário
            console.log('Simulando login...');
            // Adicione sua validação de formulário aqui
            showLoggedInView();
        });
    }

    if(registerButton) {
        registerButton.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o envio do formulário
            console.log('Simulando registro...');
            // Adicione sua validação de formulário aqui
            showLoggedInView();
        });
    }

    if(logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Simulando logout...');
            showLoggedOutView();
        });
    }
    
    // showLoggedInView();
});
