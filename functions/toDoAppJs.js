/*should i add an alert for time specific salutations*/

window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#taskId");
    const listEl = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const taskEl = document.createElement("div");
        taskEl.classList.add("task");

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        taskContentEl.appendChild(taskInputEl);

        const taskActionsEl = document.createElement("div");
        taskActionsEl.classList.add("actions");

        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "EDIT";

        const taskDeleteEl = document.createElement("button");
        taskDeleteEl.classList.add("delete");
        taskDeleteEl.innerHTML = "DELETE";

        taskActionsEl.appendChild(taskEditEl);
        taskActionsEl.appendChild(taskDeleteEl);

        taskEl.appendChild(taskActionsEl);

        listEl.appendChild(taskEl);

        input.value = "";

        taskEditEl.addEventListener('click', () => {
            if (taskEditEl.innerText.toLowerCase() == "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskEditEl.innerText = "SAVE";
            } else {
                taskInputEl.setAttribute("readonly", "readonly");
                taskEditEl.innerText = "EDIT";
            }
        });
        
        taskDeleteEl.addEventListener('click', () =>{
            listEl.removeChild(taskEl);
        });
        
        taskInputEl.addEventListener('dblclick', function(){
            taskInputEl.style.textDecoration = 'line-through';
        })
        
        

        //this was supposed to sort everything in alphabetical order tbh I'd rather it saved in date order
        /*let items = [taskEl];
        items.sort(function (a, b) {
            return a.localeCompare(b); //using String.prototype.localCompare()
          });*/

    })
})