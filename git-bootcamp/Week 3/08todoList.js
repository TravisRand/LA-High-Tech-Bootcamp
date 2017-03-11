// JavaScript File
/*travis rand
    2/17/17*/
    var myArray = ["feed the cat", "mic a burrito", "lounge"];
    var running = true;
    while (running) {

      var firstPrompt = prompt("Would you like to add new, list, delete, or quit?");
      if (firstPrompt === "new" || firstPrompt === "add new") {
          myArray.push(prompt("what would you like to add?"));
      } else if (firstPrompt === "list" || firstPrompt === "List") {
          for (var i = 0; i < myArray.length; i++) {
              console.log("(" + i + ") : " + myArray[i]);
            }
      } else if (firstPrompt === "delete" || firstPrompt === "Delete") {
            var deletePrompt = prompt("which item would you like to delete?");
            myArray.splice(deletePrompt, 1);
            console.log(myArray);

      } else if (firstPrompt === "quit" || firstPrompt === "Quit") {
        running = false;
      }


    }
