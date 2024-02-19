document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    // Do something with the data (for example, send it to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);

    // Clear the form
    document.getElementById('userDataForm').reset();
});
