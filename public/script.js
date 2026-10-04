const form = document.querySelector("form");
const messageInput = document.querySelector("#message");
const submitButton = document.querySelector("button[type='submit']");


// ==========================================
// MESSAGE CHARACTER COUNTER
// ==========================================

if (messageInput) {

    const counter = document.createElement("div");

    counter.className = "character-counter";

    counter.textContent = "0 characters";

    messageInput.parentElement.appendChild(counter);

    const updateCounter = () => {

        const count = messageInput.value.length;

        counter.textContent = `${count} characters`;

        if (count > 450) {
            counter.classList.add("warning");
        } else {
            counter.classList.remove("warning");
        }
    };

    messageInput.addEventListener("input", updateCounter);

}


// ==========================================
// FORM SUBMISSION
// ==========================================

if (form) {

    form.addEventListener("submit", (event) => {

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            return;
        }

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <span>Processing...</span>
            <span class="loading-dot">●</span>
        `;

    });

}