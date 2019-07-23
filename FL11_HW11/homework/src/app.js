let add_btn = document.getElementById('add');
let add_input = document.getElementById('newCat');
let container = document.getElementById('container');
let notification = document.getElementsByClassName('ifMaxShow')[0];
let active = 0;
let li_counter = 0;
const max_count = 10;
let draggedElement;
let draggedText;
let oldText;

function empty_check() {
    if (add_input.value) {
        active = 1;
        add_btn.classList.remove('disabled');
        add_btn.classList.add('enabled');
    } else {
        active = 0;
        add_btn.classList.remove('enabled');
        add_btn.classList.add('disabled');
    }
}

function maximum_check() {
    if (li_counter < max_count) {
        add_input.disabled = false;
        notification.style.visibility = 'hidden';
    } else {
        add_input.disabled = true;
        notification.style.visibility = 'visible';
    }
}

add_input.addEventListener('input', empty_check);

container.addEventListener('dragenter', (event) => {
    if (event.target.tagName === 'LI') {
        oldText = event.target.getElementsByClassName('added_label_text')[0].textContent;
        draggedElement = event.target;
        event.target.style.opacity = '0.5';
        event.target.classList.add('drag');
        event.target.getElementsByClassName('added_label_text')[0].textContent = draggedText;
        event.target.getElementsByClassName('added_input_text')[0].value = draggedText;
    }
});

container.addEventListener('dragleave', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.getElementsByClassName('added_label_text')[0].textContent = oldText;
        event.target.getElementsByClassName('added_input_text')[0].value = oldText;
        event.target.classList.remove('drag');
        event.target.style.opacity = 'unset';
    }
});

container.addEventListener('dragover', (event) => {
    event.preventDefault();
});

add_btn.addEventListener('click', () => {
    empty_check();
    maximum_check();
    if (active) {
        li_counter++;
        let li = document.createElement('li');
        li.draggable = true;
        let checkbox_ico = document.createElement('i');
        checkbox_ico.className = 'material-icons added_ico_checkbox';
        checkbox_ico.textContent = 'check_box_outline_blank'
        let input_text = document.createElement('input');
        input_text.setAttribute('type','text');
        input_text.className = 'added_input_text text_hidden';
        input_text.value = add_input.value;
        input_text.name = 'text_field';
        let label_text = document.createElement('label');
        label_text.setAttribute('for', 'text_field');
        label_text.className = 'added_label_text';
        label_text.textContent = add_input.value;
        let edit_ico = document.createElement('i');
        edit_ico.className = 'material-icons added_ico_edit';
        edit_ico.textContent = 'edit';
        edit_ico.id = 'edit'
        let delete_ico = document.createElement('i');
        delete_ico.className = 'material-icons added_ico_delete';
        delete_ico.textContent = 'delete';
        let save_ico = document.createElement('i');
        save_ico.className = 'material-icons added_ico_save text_hidden';
        save_ico.textContent = 'save';

        li.appendChild(checkbox_ico);
        li.appendChild(input_text);
        li.appendChild(label_text);
        li.appendChild(edit_ico);
        li.appendChild(save_ico);
        li.appendChild(delete_ico);
        container.appendChild(li);

        li.addEventListener('dragstart', (event) => {
            draggedText = event.target.getElementsByClassName('added_label_text')[0].textContent;
        });

        li.addEventListener('dragend', (event) => {
            if (event.target.tagName === 'LI') {
                draggedElement.classList.remove('drag');
                draggedElement.style.opacity = 'unset';
            }
        });

        checkbox_ico.addEventListener('click', () => {
            checkbox_ico.textContent = 'check_box';
        });

        edit_ico.addEventListener('click', () => {
            checkbox_ico.classList.add('text_hidden');
            input_text.classList.remove('text_hidden');
            edit_ico.classList.add('text_hidden');
            label_text.classList.add('text_hidden');
            save_ico.classList.remove('text_hidden');
            delete_ico.classList.add('text_hidden');
            li.draggable = false;

            save_ico.addEventListener('click', () => {
                label_text.textContent = input_text.value;
                checkbox_ico.classList.remove('text_hidden');
                input_text.classList.add('text_hidden');
                edit_ico.classList.remove('text_hidden');
                label_text.classList.remove('text_hidden');
                save_ico.classList.add('text_hidden');
                delete_ico.classList.remove('text_hidden');
                li.draggable = true;
            });
        });

        delete_ico.addEventListener('click', () => {
            container.removeChild(li);
            li_counter--;
            empty_check();
            maximum_check()
        });
        add_input.value = '';
        empty_check();
        maximum_check();
    }
});