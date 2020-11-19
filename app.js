const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")

isName = false
isEmail = false
isPhone = false

$(`#success`).hide()
$(`#failure`).hide()

name.addEventListener('blur', ()=>{
    regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/
    str = name.value

    if(regex.test(str)){
        name.classList.remove('is-invalid')
        isName = true
    }

    else{
        name.classList.add('is-invalid')
        isName = false
    }
})

email.addEventListener('blur', ()=>{
    regex = /([_\-\.a-z0-9A-z]+)@([a-zA-z]+)\.([a-zA-z]){2,7}$/
    str = email.value

    if(regex.test(str)){
        email.classList.remove('is-invalid')
        isEmail = true
    }

    else{
        email.classList.add('is-invalid')
        isEmail = false
    }
})

phone.addEventListener('blur', ()=>{
    regex = /^01[0-9]{9}$/
    str = phone.value
    console.log(regex.test(str))

    if(regex.test(str)){
        phone.classList.remove('is-invalid')
        console.log("done")
        isPhone = true
    }

    else{
        console.log("not")
        phone.classList.add('is-invalid')
        isPhone = false
    }
})


let submit = document.getElementById("submit")

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let success = document.getElementById("success")
    let failour = document.getElementById("failure")
    if(isName && isEmail && isPhone){
        success.classList.add("show")
        // failour.classList.remove("show")
        $(`#success`).show()
        $(`#failure`).hide()
    }

    else{
        failour.classList.add("show")
        // success.classList.remove("show")
        $(`#success`).hide()
        $(`#failure`).show()
       
    }
})