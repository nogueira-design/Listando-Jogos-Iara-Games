document.addEventListener('DOMContentLoaded', () => {
    
    // --- ELEMENTOS DO DOM ---
    const loggedOutView = document.getElementById('loggedOutView');
    const loggedInView = document.getElementById('loggedInView');
    
    const loginContainer = document.getElementById('loginFormContainer');
    const registerContainer = document.getElementById('registerFormContainer');
    
    // Botões de Ação
    const btnLogin = document.getElementById('loginButton');
    const btnRegister = document.getElementById('registerButton');
    const btnLogout = document.getElementById('logoutButton');
    
    // Toggles (Inputs Radio que controlam o Slider)
    const radioLogin = document.getElementById('loginTabButton');
    const radioRegister = document.getElementById('registerTabButton');
    
    // --- FUNÇÕES DE ESTADO ---

    /**
     * Alterna entre exibir o formulário de Login ou Registro
     * @param {string} type - 'login' ou 'register'
     */
    function toggleAuthForm(type) {
        if (type === 'login') {
            loginContainer.style.display = 'block';
            registerContainer.style.display = 'none';
            radioLogin.checked = true;
        } else {
            loginContainer.style.display = 'none';
            registerContainer.style.display = 'block';
            radioRegister.checked = true;
        }
    }

    /**
     * Verifica o estado de autenticação e atualiza a view
     */
    function checkAuthState() {
        // Simulação de autenticação via localStorage
        const isLoggedIn = localStorage.getItem('iara_user_logged_in') === 'true';
        
        if (isLoggedIn) {
            loggedOutView.style.display = 'none';
            loggedInView.style.display = 'block';
            // Adicione a classe de animação se necessário
            loggedInView.classList.add('fade-in'); 
        } else {
            loggedInView.style.display = 'none';
            // Usa 'flex' para manter a centralização do Bootstrap
            loggedOutView.style.display = 'flex'; 
        }
    }

    /**
     * Simula o Login
     */
    function performLogin() {
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;

        if (email && pass) {
            localStorage.setItem('iara_user_logged_in', 'true');
            checkAuthState();
        } else {
            alert('Por favor, preencha o e-mail e senha para testar o login.');
        }
    }

    /**
     * Simula o Registro
     */
    function performRegister() {
        const user = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPassword').value;

        if (user && email && pass) {
            alert('Conta criada com sucesso! Você será logado automaticamente.');
            localStorage.setItem('iara_user_logged_in', 'true');
            checkAuthState();
        } else {
            alert('Preencha todos os campos do cadastro.');
        }
    }

    /**
     * Realiza o Logout
     */
    function performLogout() {
        if(confirm('Tem certeza que deseja sair?')) {
            localStorage.removeItem('iara_user_logged_in');
            // Reseta para a aba de login e atualiza a view
            toggleAuthForm('login'); 
            checkAuthState();
        }
    }

    // --- EVENT LISTENERS ---

    // 1. Troca Visual (Controle do Slider e Formulários)
    if (radioLogin && radioRegister) {
        radioLogin.addEventListener('change', () => toggleAuthForm('login'));
        radioRegister.addEventListener('change', () => toggleAuthForm('register'));
    }

    // 2. Ação dos Botões Principais
    if (btnLogin) {
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault(); 
            performLogin();
        });
    }

    if (btnRegister) {
        btnRegister.addEventListener('click', (e) => {
            e.preventDefault();
            performRegister();
        });
    }

    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            performLogout();
        });
    }

    // 3. Feedback dos Botões de "Salvar" no Dashboard
    const settingsButtons = document.querySelectorAll('#loggedInView button.btn-primary-custom');
    settingsButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const originalText = this.innerText;
            this.innerText = 'Salvo! ✓';
            this.classList.remove('btn-primary-custom');
            this.classList.add('btn-success');
            
            setTimeout(() => {
                this.innerText = originalText;
                this.classList.add('btn-primary-custom');
                this.classList.remove('btn-success');
            }, 2000);
        });
    });

    // --- INICIALIZAÇÃO ---
    checkAuthState();
});