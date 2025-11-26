(function(){
    const todoList = document.getElementById("todo-list")
    const iteminput = document.getElementById("item-input")
    const bttnADD = document.getElementById("add-item")
    let arrTasks = getDateTasks();

    function getDateTasks(){
        let tasksData = localStorage.getItem("tasks")
        tasksData =  JSON.parse(tasksData)

        return tasksData && tasksData.length ? tasksData : []
    }
    function setTasks(){
        return localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }
    
    ;bttnADD.onclick = function(event){
        event.preventDefault()
        
        const liItem = document.createElement("li")
        liItem.className = "todo-item"
        
        const buttonCheck = document.createElement("button")
        buttonCheck.className = "button-check"
        buttonCheck.innerHTML = '<i class="fas fa-check displayNone" data-action="check"></i>'
        buttonCheck.setAttribute("data-action", "check")

        const textLi = document.createElement("p")
        textLi.textContent = iteminput.value
        textLi.className = "task-name"
        
        const buttonEdit = document.createElement("i")
        buttonEdit.setAttribute("data-action", "edit")
        buttonEdit.className = "fas fa-edit"

        const buttonRemove = document.createElement("i")
        buttonRemove.setAttribute("data-action", "remove")
        buttonRemove.className = "fas fa-trash-alt"

        
            //Container edit tasks
            const editContainer = document.createElement("div")
            editContainer.className = "editContainer"

            //input class="editInput" type="text">
            const editInput = document.createElement("input")
            editInput.className = "editInput"
            editInput.setAttribute("type", "text")

            //<button class="editButton">Edit</button>
            const editButton = document.createElement("button")
            editButton.textContent = "Edit"
            editButton.className = "editButton"

            //<button class="cancelButton">Cancel</button>
            const cancelButton = document.createElement("button")
            cancelButton.textContent = "Cancel"
            cancelButton.className = "cancelButton"
    
            editContainer.append(editInput, editButton,cancelButton)
        //--------------------------
            
        todoList.append(liItem)
        liItem.append(buttonCheck)
        liItem.append(textLi)
        liItem.append(buttonEdit)
        liItem.append(editContainer)
        liItem.append(buttonRemove)
        arrTasks.push({
                name: textLi.textContent,
                createTask: Date.now(),
                completed: false
        })
        
        setTasks()
        iteminput.value = ""
        iteminput.focus()
        console.log(arrTasks)
    }

    
        todoList.addEventListener("click",function(e){
            console.log(e.target)
            let currentLi = e.target
            
            while(currentLi && currentLi.nodeName !== "LI"){
                currentLi = currentLi.parentElement
            }
            if(!currentLi) return

            const currentLiIndex = [...todoList.children].indexOf(currentLi)
            const editContainer = currentLi.querySelector(".editContainer")
            const editInput = currentLi.querySelector(".editInput")
            const editButton = currentLi.querySelector(".editButton")
            const cancelButton = currentLi.querySelector(".cancelButton")
            const textLi = currentLi.querySelector(".task-name")

            if(e.target.getAttribute("data-action") === "edit"){
                    ;[...todoList.querySelectorAll(".editContainer")].forEach(container =>{
                        container.removeAttribute("style")
                    })

                    editContainer.style.display = "flex"
                    editInput.value = textLi.innerText

               editButton.onclick = () => {
                textLi.textContent = editInput.value
                arrTasks[currentLiIndex].name = editInput.value
                editContainer.style.display = "none"
                console.log(arrTasks)
                setTasks()
            }
 
            cancelButton.onclick = () => {
                editContainer.style.display = "none"
            }
            }else if(e.target.getAttribute("data-action") === "remove"){
            arrTasks.splice(currentLiIndex, 1)
            currentLi.remove()
            console.log(arrTasks)
            setTasks()

        }else if(e.target.getAttribute("data-action") === "check"){
            arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed

            if(arrTasks[currentLiIndex].completed){
                currentLi.querySelector(".fa-check").classList.remove("displayNone")
            }else{
                currentLi.querySelector(".fa-check").classList.add("displayNone")
            }
            setTasks()
        }
    
    
    })
    
})()