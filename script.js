function navigateTo(page) {
    window.location.href = page;
}

function toggleMessage() {
    const messageDiv = document.getElementById('message');
    if (messageDiv.style.display === "none" || messageDiv.style.display === "") {
        messageDiv.style.display = "block";
    } else {
        messageDiv.style.display = "none";
    }
}
