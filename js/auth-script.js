document.addEventListener('DOMContentLoaded', function() {
            // Referências aos elementos principais da UI
            const loggedOutView = document.getElementById('loggedOutView');
            const loggedInView = document.getElementById('loggedInView');
            
            // Elementos da visão Logged Out
            const loginTabButton = document.getElementById('loginTabButton');
            const registerTabButton = document.getElementById('registerTabButton');
            const loginFormContainer = document.getElementById('loginFormContainer');
            const registerFormContainer = document.getElementById('registerFormContainer');
            const loginButton = document.getElementById('loginButton');
            const registerButton = document.getElementById('registerButton');
            const showRegisterLink = document.getElementById('showRegisterLink');
            const showLoginLink = document.getElementById('showLoginLink');

            // Elementos da visão Logged In
            const logoutButton = document.getElementById('logoutButton');
            const defaultAccountTab = document.getElementById('privacy-tab');
            const defaultAccountPane = document.getElementById('privacy');
            const allAccountTabs = document.querySelectorAll('#account-tab .nav-link');
            const allAccountPanes = document.querySelectorAll('#account-tabContent .tab-pane');

            // --- Funções de Visibilidade ---

            function showLogin() {
                loginFormContainer.style.display = 'block';
                registerFormContainer.style.display = 'none';
                loginTabButton.checked = true;
            }

            function showRegister() {
                loginFormContainer.style.display = 'none';
                registerFormContainer.style.display = 'block';
                registerTabButton.checked = true;
            }

            function showLoggedInView() {
                loggedInView.style.display = 'block';
                loggedOutView.style.display = 'none';
                
                // Reseta para a aba de privacidade ao logar
                allAccountTabs.forEach(tab => tab.classList.remove('active'));
                allAccountPanes.forEach(pane => pane.classList.remove('show', 'active'));
                defaultAccountTab.classList.add('active');
                defaultAccountPane.classList.add('show', 'active');
            }

            function showLoggedOutView() {
                loggedInView.style.display = 'none';
                loggedOutView.style.display = 'block';
                showLogin(); // Mostra o login por padrão ao deslogar
            }

            // --- Event Listeners ---

            // Alternar abas Login/Registro
            loginTabButton.addEventListener('change', showLogin);
            registerTabButton.addEventListener('change', showRegister);

            // Links "Criar conta" e "Entrar"
            showRegisterLink.addEventListener('click', showRegister);
            showLoginLink.addEventListener('click', showLogin);

            // Botões de Login e Registro (simulação)
            loginButton.addEventListener('click', showLoggedInView);
            registerButton.addEventListener('click', showLoggedInView);

            // Botão de Logout
            logoutButton.addEventListener('click', showLoggedOutView);

            // --- Estado Inicial ---
            // Inicia na tela de "Logged Out"
            showLoggedOutView();
});