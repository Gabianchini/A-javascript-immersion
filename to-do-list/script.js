//funcao adicionar tarefa
function addTask(){
const taskTitle = document.querySelector("#task-title").value;// //pegar titulo da tarefa, deve se colocar o .value para indicar que esta  pegando o valor do input
//condicao que diz que se nao for colocado texto no input e clicar no botao de adicionar nao vai adicionar a tarefa
if(taskTitle){
    const template = document.querySelector(".template");//clona template
    const newTask = template.cloneNode(true); // o clone node clona o html selecionado(.template)
    newTask.querySelector(".task-title").textContent = taskTitle;//adiciona titulo da task(dada pelo input) na tasktitle
    
    newTask.classList.remove("template");  //remover as classes desnacessarias(no caso a template e hide)
    newTask.classList.remove("hide"); 
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);//adiciona tarefa na lista
    document.querySelector("#task-title").value = "";//limpar texto depois de adicionar tarefa

    //adicionar evento de remover task na nova tarefa( a nova tarefa com o botao de remover que sera removida entao devemos referenciar ela e nao document)
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
    removeTask(this);
    });

    //adicionar evento de completar task
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click",function(){
        completeTask(this);
    })

    
}
}

//funcao completar tarefa
function completeTask(newTask){
    console.log(newTask);
    const taskToComplete = newTask.parentNode;
    taskToComplete.classList.toggle("done");

}

//funcao de remover tarefa
//como o eventlistener está no remove button que vai receber a funcao de remover a task
function removeTask(newTask){
    newTask.parentNode.remove(true);//parent node é o pai do elemento removeBtn, que é a li( que é a taskcriada(newtask)) 
      // true manda que a li seja removida
}

//mapear botao de adicionar
const addBtn = document.querySelector("#add-btn");
//colocar eventlistener no botao
addBtn.addEventListener("click", function(e){
    e.preventDefault();//previnir comportamento do formulario de enviar
    //criar funcao para adicionar task
    addTask();
})