const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('.todos');
// const dupArr = [];



const getTodo = JSON.parse(localStorage.getItem('todos'));

if(getTodo){
    getTodo.forEach(gtodo => {
        addToDO(gtodo);
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    addToDO();
})

function addToDO(gtodo){
    let todo = input.value;

    if(gtodo){
        todo = gtodo.text;
    }
    
        if(todo){

            const ulist = document.createElement('ul');
            ulist.classList.add('inner-list');
    
            ulist.innerHTML =   `<li class="todo-li">${todo}</li>
                                <i class="fas fa-times"></i>
                                `;
            list.appendChild(ulist);
    
            const todoli = ulist.querySelector('.todo-li');

            if(gtodo && gtodo.completed){
                todoli.classList.add('completed');
            }
            todoli.addEventListener('click', ()=>{
                todoli.classList.toggle('completed');
    
                updateLS();
            });
    
            const timesBtn = ulist.querySelector('.fa-times');
            timesBtn.addEventListener('click', ()=>{
                ulist.remove();
    
                updateLS();
            })
    
            input.value = '';
        };
    
        updateLS();

}
function updateLS(){
    const todosEl = document.querySelectorAll('li');
    
    const todoArr = [];

    todosEl.forEach((todo)=>{
        todoArr.push({
            text: todo.innerText,
            completed: todo.classList.contains('completed')
        });
       
    });
    
    localStorage.setItem('todos', JSON.stringify(todoArr))

}

