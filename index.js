
function addingEventListener() {
    const input = document.getElementById("button");// fetching the html document
    input.addEventListener('click',function() {
        alert('I\'m clicked!');
    })
}

// call the function to set up the eventlistener
addingEventListener();
