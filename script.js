document.addEventListener("DOMContentLoaded", function() {
    // Get references to your buttons
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    // Add click event listeners to the buttons
    button1.addEventListener("click", function() {
        // Redirect to another HTML page (replace 'page1.html' with the actual file name)
        window.location.href = "index1.html";
    });

    button2.addEventListener("click", function() {
        // Redirect to another HTML page (replace 'page2.html' with the actual file name)
        window.location.href = "index2.html";
    });
});