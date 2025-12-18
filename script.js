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
        }
        else if(email.value.includes('example@mail.com') || email.value.length <=5)
        {
            paragrafError.innerHTML = 'Invalid mail!';
        }
        else if(emailRegex.test(email.value)===false)
        {
            paragrafError.innerHTML ='False mail!';
        }
        else{
            form.reset();
            window.alert('Mail sent succesfully!');
            paragrafError.innerHTML='';
        }

    })
})