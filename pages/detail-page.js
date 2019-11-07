function submitComment () {
    console.log("Hello, the button was pushed");
    const inputField = document.getElementById('name');
    console.log(inputField);
    const name = inputField.value;
    console.log(name);
    const textArea = document.getElementById('msg');
    const msg = textArea.value
    console.log(msg)

    //Creating the needed elements
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p')

    //Adjusting the created elements
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);

    // display elements on the page
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    //reset the values in the form
    inputField.value = null;
    textArea.value = null;
    
}
