document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    

    // Display the result in an alert
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);

    // Optionally, you can reset the form after submission
    this.reset();
});