const formData = {
    email: "",
    message: "",
}
const form = document.querySelector('form');

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

function populateForm() {
            const savedData = localStorage.getItem('feedback-form-state');
            if (savedData) {
                const { email, message } = JSON.parse(savedData);
                formData.email = email;
                formData.message = message;
                document.querySelector('input[name="email"]').value = email;
                document.querySelector('textarea[name="message"]').value = message;
            }
}
        
form.addEventListener('submit', event => {
    event.preventDefault();
            if (formData.email === "" || formData.message === "") {
                alert("Fill please all fields");
            } else {
                console.log(formData);
                localStorage.removeItem('feedback-form-state');
                formData.email = "";
                formData.message = "";
                form.reset();
            }
})

