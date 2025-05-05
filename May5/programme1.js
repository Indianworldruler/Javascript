function alertPrompt()
{
    alert("Welcome to the Javascript world")
    prompt("Enter your password")
    alert("Authentication Successful !")
    document.getElementById('intro').innerHTML = 'Welcome to the JS!';
}

function reset()
{
    document.getElementById('intro').innerHTML = 'Hello World!';
}