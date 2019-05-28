function addToDo(){
    // ADD TO DO TO TO DO LIST
    // get information from html
    var ul = document.getElementById("toDos"); // gets the ul element where the li elements need to go in to 
    var todo = document.getElementById("todoInput"); // gets the input from the user 

    // create elements
    var li = document.createElement("li");
    var done = document.createElement("button"); 
    var remove = document.createElement("button");

    // counting number of lists for id of list attribute
    var listcounter = document.querySelectorAll("li"); 

    // give elements id's and/or classes
    li.setAttribute('class', "todo"); // gives static class to the added list element
    li.setAttribute('id',listcounter.length); // gives dynamic id to the added list element by using the number of the added list (counting from 0)
    remove.setAttribute('class', "remove"); // set class to remove button
    done.setAttribute('class', "done"); // set class to done button

    // give elements text
    li.appendChild(document.createTextNode(todo.value)); // add the input form todoInput (user input) to the li item
    remove.appendChild(document.createTextNode("Delete")); // add text in button remove
    done.appendChild(document.createTextNode("Finished")); // add text in button done

    // add elements
    ul.appendChild(li); //add list item
    li.appendChild(done); //add button done
    li.appendChild(remove); // add button remove

    // add eventlistner to finished button
    done.addEventListener("click", function done(){
        this.parentElement.setAttribute('id', "done");
        if (id ="done") {
            this.parentElement.lastChild;
        }
    });

    // add enventlistner to remove button
    remove.addEventListener("click", function deletefunction(){
        this.parentElement.remove();
    });

    // clear inputbar after printing to do
    document.getElementById("form").reset();
}
