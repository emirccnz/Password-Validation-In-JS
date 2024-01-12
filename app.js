const handleInputPassword = document.getElementById("passwordId");
const handleInputEmail = document.getElementById("emailId");
const handleUl = document.getElementById("needs");
let specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
const handleOkayUl = document.getElementById("okayUl")
const handleCheckButton = document.getElementById("checkButtonId")
const handleErrorsUl = document.getElementById("errors")
const handleErrorsUl2 = document.getElementById("errors2")
const handleInvalidError = document.getElementById("invalidUl")
const allChangedLis = Array.from(document.getElementsByClassName("changedLis"))
const handleClosedEye = document.getElementById("closedEye")
const handleOpenedEye = document.getElementById("openedEye")
handleClosedEye.style.display = "inline"
handleOpenedEye.style.display = "none"

window.addEventListener("resize", () => {
    if (window.innerWidth <= 1000 || window.innerHeight <= 500) {
        handleClosedEye.style.display = "none"
        handleOpenedEye.style.display = "none"
    }
    else {
        handleClosedEye.style.display = "inline"
    }
})
document.addEventListener("click", function (event) {

    if (event.target !== handleInputPassword) {
        handleUl.style.display = "none";
    }
});


handleInputPassword.addEventListener("keyup", function () {
    handleErrorsUl2.style.display = "none"
    handleErrorsUl.style.display = "none"
    handleInvalidError.style.display = "none"
    handleUl.style.display = "block"
    const passwordValue = handleInputPassword.value.trim()
    const arrayOfValue = Array.from(passwordValue)
    includeNumber(arrayOfValue)
    eightChar(arrayOfValue)
    lowerCaseError(arrayOfValue)
    upperCaseError(arrayOfValue)
    specialCharError(arrayOfValue)
    const confirmed = Array.from(document.getElementsByClassName("changedLis"))
    if (confirmed.length == 5) {
        handleUl.style.display = "none";
        handleOkayUl.style.display = "block"
    }
    else {
        handleUl.style.display = "block"
        handleOkayUl.style.display = "none"
    }
})


handleClosedEye.addEventListener("click", () => {
    showPassword()
})
handleOpenedEye.addEventListener("click", () => {
    hidePassword()
})

handleCheckButton.addEventListener("click", () => {
    invalidPassword()
    emptyOrNot()
})

function includeNumber(arrayOfValue) {

    let includesNumber = false
    handleUl.children[0].classList.remove("changedLis")
    for (let value of arrayOfValue)
        if (!isNaN(value)) {
            includesNumber = true
            break;
        }

    if (includesNumber == true) {
        handleUl.children[0].classList.add("changedLis")
    }

}

function eightChar(arrayOfValue) {
    handleUl.children[1].classList.remove("changedLis")
    let least8 = false
    if (arrayOfValue.length >= 8) {
        least8 = true
    }

    if (least8 == true) {
        handleUl.children[1].classList.add("changedLis")
    }

    if (least8 == false) {
        handleUl.children[1].classList.remove("changedLis")
    }
}

function lowerCaseError(arrayOfValue) {

    handleUl.children[2].classList.remove("changedLis")

    for (let value of arrayOfValue) {
        if (value == value.toLowerCase() && isNaN(value) && !specialChars.includes(value)) {
            handleUl.children[2].classList.add("changedLis")
            break
        }
    }
}

function upperCaseError(arrayOfValue) {
    handleUl.children[3].classList.remove("changedLis")
    handleUl.children[3].classList.remove("changedLis")
    for (let value of arrayOfValue) {
        if (value === value.toUpperCase() && isNaN(value) && !specialChars.includes(value)) {
            handleUl.children[3].classList.add("changedLis")
            break
        }
    }
}

function specialCharError(arrayOfValue) {
    handleUl.children[4].classList.remove("changedLis")
    handleUl.children[4].classList.remove("changedLis")
    let specialArray = Array.from(specialChars)
    for (let i = 0; i < specialArray.length; i++) {
        if (arrayOfValue.includes(specialArray[i])) {
            handleUl.children[4].classList.add("changedLis");
            break;
        }
    }
}

function emptyOrNot() {
    debugger
    if (handleInputPassword.value == "" || handleInputPassword.value == null) {
        handleErrorsUl.style.display = "block"
        handleInvalidError.style.display = "none"
    }
    else {
        handleErrorsUl.style.display = "none"
    }


    if (handleInputEmail.value == "" || handleInputEmail.value == null) {
        handleErrorsUl2.style.display = "block"
    }
    else {
        handleErrorsUl2.style.display = "none"
    }
}

function invalidPassword() {
    if (handleOkayUl.style.display != "block") {
        handleInvalidError.style.display = "block"
    }
    else {
        handleInvalidError.style.display = "none"
    }
}

function showPassword() {
    handleClosedEye.style.display = "none"
    handleOpenedEye.style.display = "inline"
    handleInputPassword.type = "text"
}

function hidePassword() {
    handleClosedEye.style.display = "inline"
    handleOpenedEye.style.display = "none"
    handleInputPassword.type = "password"
}