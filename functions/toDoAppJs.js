

/**
 * Once the page has loaded the event listener will carry out all of the app tasks
 * the formatting of html elements into javascript also happens, although partially, here
 */

window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#taskId");
    const listEl = document.querySelector("#tasks");


    /**
     * This portion codes fo what comes after the input has been uploaded, also prevents form from submitting in case where input is not filled in
     */
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }


        /**
         * Created a second container in html and gave it a class for css purposes
         */
        const taskEl = document.createElement("div");
        taskEl.classList.add("task");
        const uniqueKey = Date.now(taskEl);



        /**
         * Coded for the div, in the second container, that has the date
         */
        const taskTimeEl = document.createElement("div");
        taskTimeEl.classList.add("time");
        /**
        * Made sure that the date div is in the second container div
        */
        taskEl.appendChild(taskTimeEl);

        /**
         * Created the date to go in the time div
         */
        const taskDateEl = document.createElement("input");
        taskDateEl.setAttribute("type", "date");
        taskDateEl.classList.add("date");

        /**
        * Appended the date into the correct div
        */
        taskTimeEl.appendChild(taskDateEl);






        /**
         * Created the actual div for the task input.value() and gave it a class for css purposes
        */
        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");

        /**
         * Made sure that content in html is in the task div
         */
        taskEl.appendChild(taskContentEl);

        /**
         * Coded for the actual text in the div in the scond container and made sure it is equal to the input from the header
         *Also set the task to readonly, will be undone later
         */
        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");

        /**
         * Made sure that the text is in the right div
         */
        taskContentEl.appendChild(taskInputEl);



        /**
         * Coded for the div, in the second container, that has the edit and delete buttons
         */
        const taskActionsEl = document.createElement("div");
        taskActionsEl.classList.add("actions");
        /**
         * Made sure that the actions div is in the second container div
         */
        taskEl.appendChild(taskActionsEl);

        /**
         * Created the edit and delete butttons to go in the actions div
         */
        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "EDIT";

        const taskDeleteEl = document.createElement("button");
        taskDeleteEl.classList.add("delete");
        taskDeleteEl.innerHTML = "DELETE";

        /**
         * Appended the buttons into the correct div
         */
        taskActionsEl.appendChild(taskEditEl);
        taskActionsEl.appendChild(taskDeleteEl);


        /**
         * Put task inside tasks like in my html
         */

        listEl.appendChild(taskEl);
        /**
         * Made sure that my input was clear after each use
         */

        input.value = "";


        /**
         * Added event listener to edit so that it actually edits the tasks, this is where the readonly is removd
         */
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
        /**
         * This is to delete using the delete button
         */
        taskDeleteEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        });
        /**
         * Last but not least this is to scratch out the input/ task when it is double clicked
         */
        taskInputEl.addEventListener('dblclick', function () {
            taskInputEl.style.textDecoration = 'line-through';
        })


        /**
         * coding for local storage and using the name entered before
         */
        /*const uniqueKey = Date.now(taskEl);
        localStorage.setItem('keyName', uniqueKey);
        
        taskEl = localStorage.getItem("keyName");*/

    })
})