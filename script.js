function auth(){
    let usern = document.getElementById('user').value;
    let passw = document.getElementById('pass').value;
    let pres = document.getElementById('res');    
    if (usern === 'Palak' && passw === 'admin') {
        pres.innerText = 'validated';
        window.location.href = 'dashboard.html'; // Redirect to dashboard.html
    }
    else{
        pres.innerText = 'invalid';
    }
}