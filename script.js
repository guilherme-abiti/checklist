document.addEventListener('DOMContentLoaded', function () {
    const checklist = document.getElementById('checklist');
    const addItemButton = document.getElementById('addItem');

    addItemButton.addEventListener('click', function () {
        const itemText = prompt('Digite o nome do item:');
        
        if (itemText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${itemText}</span>
                <button class="removeItem">Remover</button>
            `;

            checklist.appendChild(listItem);

            // Adicionando evento de remoção
            const removeButton = listItem.querySelector('.removeItem');
            removeButton.addEventListener('click', function () {
                checklist.removeChild(listItem);
            });
        }
    });
});
