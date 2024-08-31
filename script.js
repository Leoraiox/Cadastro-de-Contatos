function addContact() {
    // Obter os valores do formulário
    const name = document.getElementById("contact-name").value;
    const phone = document.getElementById("contact-phone").value;

    // Verificar se os campos não estão vazios
    if (name && phone) {
        // Obter a tabela e criar uma nova linha
        const table = document.querySelector("table tbody");
        const newRow = table.insertRow();

        // Criar as células da linha
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        // Inserir os valores nas células
        nameCell.textContent = name;
        phoneCell.textContent = phone;

        // Limpar os campos do formulário
        document.getElementById("contact-form").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
