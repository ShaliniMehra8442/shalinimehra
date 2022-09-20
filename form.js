const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',e=>{
    e.preventDefault();

    validatesInputs();
    });

    const setError = (Element, message)=>
    {
        const inputcontrol= Element.parentElement;
        const errorDisplay= inputcontrol.querySelector('.error');

        errorDisplay.innerText=message;
        inputcontrol.classList.add('error');
        inputcontrol.classList.remove('success')
    }
    const setSuccess = elements =>
    {
        const inputcontrol= Element.parentElement;
        const errorDisplay= inputcontrol.querySelector('.error');

        errorDisplay.innerText='';
        inputcontrol.classList.add('success');
        inputcontrol.classList.remove('error');
    };

    const isValidEmail= email => {
        const re =/^([^<>()[\]\\., ;:\s@"]+(\. [^<>()[\]\\;\s@"]+)") | (".+")@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatesInputs=()=>{
        const usernameValue = username.Value.trim();
        const emailValue = email.Value.trim();
        const passwordvalue = password.value.trim();
        const password2value = password2.value.trim();

        if(usernameValue === ''){
            setError(username, 'username is required');
        }
        else{
            setSuccess(username);
        }
        if(emailValue ==='')
        {
            setError(email, 'Email is required');
        }
        else if(!isValidEmail(emailValue))
        {
            setError(email, 'provide a valid email address');
        }
        else{
            setSuccess(email);
        }

        if(passwordvalue === ''){
            setError(password, 'password is required');
        }
        else if(passwordvalue.length<8)
        {setError(password, 'Password must be at least 8 character.')
        }
        else
        {
          setSuccess(password)
        }

        if(password2value ==='')
        {
            setError(password2,'Please confirm your password');

        }
        else if(password2value!==passwordvalue)
        {
            setError(password2, "password doesn't match'");
        }
        else{
            setSuccess(password2);
        }




    };
