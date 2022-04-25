document.addEventListener('DOMContentLoaded', () => {
    let email = document.getElementById('email');
    let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    
    document.getElementsByTagName('form')[0].addEventListener('submit', e => {
        e.preventDefault();
        if (!re.test(email.value)){
            console.log("ble");
            document.getElementById('email-failure').style.display = 'block';
        }
        else{
            this.contact_number.value = Math.random() * 100000 | 0;
            emailjs.sendForm('contact-service', 'contact-form', this)
                .then(() => console.log("Success"), (error) => console.log(error));
        }
            
    });
});