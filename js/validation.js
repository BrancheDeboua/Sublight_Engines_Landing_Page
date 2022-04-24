document.addEventListener('DOMContentLoaded', () => {
    let email = document.getElementById('email');
    let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    
    document.getElementsByTagName('form')[0].addEventListener('submit', e => {
        if (!re.test(email.value)){
            console.log("ble");
            document.getElementById('email-failure').style.display = 'block';
            e.preventDefault();
        }
        else{
            document.getElementById('email-failure').style.display = 'none';
        }
            
    });
});