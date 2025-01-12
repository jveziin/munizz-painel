const users = {
    "jveziin": { mode: "temporary", duration: 500 * 60 * 1000 },  // 5 minutos
    "walter13": { mode: "temporary", duration: 500 * 60 * 1000 }, // 5 minutos
  };
  
  function login() {
    const username = document.getElementById("username").value.trim();
    const errorMessage = document.getElementById("error-message");
    const statusInfo = document.getElementById("status-info");
    const userInfo = document.getElementById("user-info");
    const loginTime = document.getElementById("login-time");
  
    if (users[username]) {
      const user = users[username];
      const lastLogin = localStorage.getItem(username);
      const currentTime = Date.now();
  
      if (lastLogin) {
        const timeRemaining = user.duration - (currentTime - lastLogin);
        if (timeRemaining > 0) {
          const minutesLeft = Math.floor(timeRemaining / 60000);
          const secondsLeft = Math.floor((timeRemaining % 60000) / 1000);
          userInfo.textContent = Usuário: ${username};
          loginTime.textContent = Tempo restante: ${minutesLeft}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft};
          statusInfo.style.display = "block";
          window.location.href = "processo_injecao.html"; // Redireciona para processo_injecao.html
        } else {
          localStorage.removeItem(username); // Remove o usuário se o tempo expirar
          errorMessage.textContent = "Seu tempo expirou! Compre mais tempo.";
          errorMessage.style.display = "block";
        }
      } else {
        localStorage.setItem(username, currentTime); // Armazena o login no localStorage
        window.location.href = "processo_injecao.html"; // Redireciona para processo_injecao.html
      }
    } else {
      errorMessage.style.display = "block"; // Exibe a mensagem de erro se o usuário não for encontrado
    }
  }
  
  function comprarLogin() {
    window.location.href = "pagina_compra.html"; // Redireciona para a página de compra
  }