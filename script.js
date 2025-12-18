document.addEventListener(('DOMContentLoaded'),()=>{
    let email = document.querySelector('.form-control');
    let paragrafError = document.querySelector('.errorMessage');
    let form = document.querySelector('form');
    paragrafError.innerHTML='';
    let emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    form.addEventListener(('submit'),(e)=>{
        e.preventDefault();
        if(email.value.trim()==='')
        {
            paragrafError.innerHTML = 'Required value!';
            email.style.border='2px solid hsl(0, 100%, 63%)';
        }
        else if(emailRegex.test(email.value)===false || (email.value.includes('example@gmail.com')))
        {
            paragrafError.innerHTML ='False mail!';
            email.style.border='2px solid hsl(0, 100%, 63%)'
        }
        else{
            form.reset();
            window.alert('Mail sent succesfully!');
            paragrafError.innerHTML='';
            email.style.border='none';
        }

    })
})