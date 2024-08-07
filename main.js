document.addEventListener("DOMContentLoaded", function() {
    let error = document.querySelector("#error");
    let form = document.querySelector("#main-form");
    
    
    form.addEventListener("submit", function(event) {
        let password = document.querySelector("#password").value;
        let confirmPassword = document.querySelector("#cpassword").value;
        event.preventDefault(); //prevent form from submitting

        if(password != confirmPassword) {
            error.innerHTML = "* Passwords do not match";
        } else {
            error.innerHTML = "";
        }
    })

})