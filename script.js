const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Save the selected theme
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
