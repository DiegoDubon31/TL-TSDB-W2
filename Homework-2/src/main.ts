import './style.css'

const input = document.getElementById('todo-input') as HTMLInputElement;
const addButton = document.getElementById('add-btn') as HTMLButtonElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;


// Evento para agregar tareas
addButton.addEventListener('click', () => {
 
    
      const taskText = input.value.trim();
    if (taskText) {
        // Crea un nuevo elemento <li>
        const li = document.createElement('li');

        // Crea el checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
              li.style.textDecoration = 'line-through';
          } else {
              li.style.textDecoration = 'none';
          }
        });
        // Crea el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';

        // Evento para eliminar solo el <li> específico
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que eventos no deseados se disparen
            li.remove(); // Elimina solo este elemento <li>
        });

        // Agrega el checkbox, el texto de la tarea y el botón de eliminar al <li>
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(` ${taskText}`));
        li.appendChild(deleteButton);

        // Añade el <li> a la lista de tareas
        todoList.appendChild(li);

        // Limpia el campo de entrada
        input.value = '';
    }
  
});
