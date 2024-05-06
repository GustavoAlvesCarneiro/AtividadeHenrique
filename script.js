const validarNome = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
const validarTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById('form'); 
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let nomeInput = document.getElementById("nome")
    let emailInput = document.getElementById("email")
    let telefoneInput = document.getElementById("telefone")
    
    if (!validarNome.test(nomeInput.value) || /\d/.test(nomeInput.value)) {
        alert('Por favor, insira um nome válido (máximo 100 caracteres e apenas letras).');
        nomeInput.focus();
        return;
      }
      
      if (!validarEmail.test(emailInput.value)) {
        alert('Por favor, insira um email válido.');
        emailInput.focus();
        return;
      }
      
      if (!validarTelefone.test(telefoneInput.value)) {
        alert('Por favor, insira um número de telefone válido (com DDD, no formato (XX) XXXX-XXXX).');
        telefoneInput.focus();
        return;
      }
      
      // Se todas as validações passarem, o formulário pode ser enviado
      alert('Formulário enviado com sucesso!');
    
});
