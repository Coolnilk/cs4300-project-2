function validateForm()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "")
    {
        alert("Please fill out all fields.");
    }
    else
    {
        alert("Form submitted successfully!");
    }
}