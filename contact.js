document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subscribe = document.getElementById("subscribe").checked;

    // Fix: Correct email submission via Formspree
    fetch("https://formspree.io/f/mqapkrkl", {  // Replace with your Formspree form ID
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            subscribe: subscribe ? "Yes" : "No"
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Your message has been sent successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch(error => {
        alert("There was an error sending your message. Please try again later.");
    });
});
