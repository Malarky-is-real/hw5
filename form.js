

const ariaField = document.getElementById('formStatus')
const ariaCount = document.getElementById('charCount')


let jsDepElems = document.getElementsByClassName('jsOff')
let baseLength = jsDepElems.length
console.log(jsDepElems.length)
for(let i = 1; i < baseLength; i++){
    console.log(i)
    jsDepElems[1].classList.replace('jsOff','formRow')
}



const form = document.getElementById('contactForm')


const nameField = document.getElementById('Name')
const emailField = document.getElementById('Email')
const textField = document.getElementById('Comments')
const errorsField = document.getElementById('form-errors')
const submitButton = document.getElementById('submitButton')




let globalWarnings = false


nameField.addEventListener('input', checkNameValidity, true)
nameField.addEventListener('invalid', checkNameValidity, true)


emailField.addEventListener('input', checkEmailValidity, true)
emailField.addEventListener('invalid', checkEmailValidity, true)


textField.addEventListener('input', updateCommentCount)

textField.addEventListener('input', checkCommentsValidity, true)
textField.addEventListener('invalid', checkCommentsValidity, true)

submitButton.addEventListener('click', finalCheck)




const finErrs = [];


function submitErrors(){
    if (currentErrors.name){ 
        finErrs.push({field: 'Name', message: currentErrors.name});
    }
    if (currentErrors.email){
        finErrs.push({field: 'Email', message: currentErrors.email})
    }
    if (currentErrors.comments)
    {
        finErrs.push({field: 'Comments', message: currentErrors.comments})
    } 
    

    errorsField.value = JSON.stringify(finErrs)    
}

function finalCheck(){
    form.checkValidity()
    submitErrors()
}

const currentErrors = {
    name: '',
    email: '',
    comments: ''
}

function statusAriaUpdater(){
    const activeErrors = [];
    if (currentErrors.name){ 
        activeErrors.push(currentErrors.name);
    }
    if (currentErrors.email){
        activeErrors.push(currentErrors.email)

    }
    if (currentErrors.comments)
    {
        activeErrors.push(currentErrors.comments)

    } 
    

    ariaField.textContent = activeErrors.join('\n')
    console.log(activeErrors)


}


function checkNameValidity(event){

    errorMessage = ''    

    if(nameField.validity.valueMissing || nameField.validity.tooShort){
        errorMessage += '\n- You need at least 1 character for the Name field. You are currently using ' + (nameField.value.length) + '.'
    }
    nameField.setCustomValidity(errorMessage)
    if(event.type != 'invalid'){
        nameField.reportValidity()
    }

    currentErrors.name = errorMessage
    statusAriaUpdater()
}

function checkEmailValidity(event){

    let errorMessage = ''

    if(emailField.validity.valueMissing || emailField.validity.typeMismatch){
        errorMessage += '\n - The input is not an valid email address. Check for an @ symbol or characters following the @ symbol.  \nExample format: a@b'
    }
    if(emailField.validity.tooShort){
        errorMessage += '\n - You need at least 3 characters for the Email field. You are currently using ' + (emailField.value.length) + '.'
    }


    
    emailField.setCustomValidity(errorMessage)
    if(event.type != 'invalid'){
        emailField.reportValidity()
    }

    currentErrors.email = errorMessage
    statusAriaUpdater()

}

function checkCommentsValidity(event){
    let errorMessage = ''
  

    if(textField.validity.valueMissing || textField.validity.tooShort){
        errorMessage += '\n- You need at least 10 characters for the Comments field.'
        
    }

    textField.setCustomValidity(errorMessage)
    if(event.type != 'invalid'){
        textField.reportValidity()
    }

    currentErrors.comments = errorMessage
    statusAriaUpdater()

    
}

function updateCommentCount() {
    const remaining = textField.maxLength - textField.value.length;
    let countMessage = '';
    
    ariaCount.classList.remove('notNear', 'nearMax', 'atMax');
    
    if (remaining === 0) {
        countMessage = 'Character limit reached.';
        ariaCount.classList.add('atMax');
    } 
    else if (remaining <= 10) {
        countMessage = 'Warning: Only ' + remaining + ' characters left!';
        ariaCount.classList.add('nearMax');
    } 
    else {
        countMessage = 'Remaining Characters: ' + remaining;
        ariaCount.classList.add('notNear');
    }
    
    ariaCount.textContent = countMessage;
}






