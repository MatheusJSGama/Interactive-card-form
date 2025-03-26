const imageCardName = document.querySelector(".cardholder-name-image")
const imageCardNumber = document.querySelector(".card-number-image")
const imageCardMonth = document.querySelector(".month-card-image")
const imageCardYear = document.querySelector(".year-card-image")
const imageCardCvc = document.querySelector(".cvc-card-image")
const nameInput = document.querySelector(".name")
const cardNumberInput = document.querySelector(".card-number")
const monthInput = document.querySelector(".month-expirated")
const yearInput = document.querySelector(".year-expirated")
const formBtn = document.querySelector(".form-btn")
const cardCvcInput = document.querySelector(".cvc-number")
const form = document.querySelector(".form")

nameInput.addEventListener("input", function (e) {
    const inputValue = e.target.value
    imageCardName.innerHTML = inputValue.toUpperCase()
})

function nameBlank(input) {
    const value = input.value
    if (value === "") {
        input.classList.add("border-error")
        document.querySelector(".field-blank-name").classList.add("error")
        return true
    } else {
        input.classList.remove("border-error")
        document.querySelector(".field-blank-name").classList.remove("error")
        input.classList.add("border-filled")
    }
}

cardNumberInput.addEventListener("input", function (e) {
    let valor = e.target.value.replace(/\D/g, '')
    valor = valor.match(/.{1,4}/g)?.join(' ') || ''
    imageCardNumber.innerHTML = e.target.value = valor
});

function cardNumberErrors(input) {
    const value = input.value.length
    if (value === 0) {
        input.classList.add("border-error")
        document.querySelector(".field-blank-card-number").classList.add("error")
        return true
    } else if (value > 1 && value < 19) {
        input.classList.add("border-error")
        document.querySelector(".field-blank-card-number").classList.remove("error")
        document.querySelector(".wrong-format").classList.add("error")
        return true
    } else {
        input.classList.remove("border-error")
        document.querySelector(".field-blank-card-number").classList.remove("error")
        document.querySelector(".wrong-format").classList.remove("error")
        input.classList.add("border-filled")
    }
}

monthInput.addEventListener("input", function (e) {
    const valor = parseInt(e.target.value)
    imageCardMonth.innerHTML = valor || "MM"
})

function monthNumberError(input) {
    const value = input.value
    if (value < 1 || value > 12) {
        form.classList.add("error")
        document.querySelector(".expirated-errors").classList.add("error")
        monthInput.classList.add("border-error")
        document.querySelector(".month-invalid").classList.add("error")
        return true
    } else {
        monthInput.classList.remove("border-error")
        document.querySelector(".month-invalid").classList.remove("error")
        monthInput.classList.add("border-filled")
    }
}

yearInput.addEventListener("input", function (e) {
    const value = e.target.value
    imageCardYear.innerHTML = value || "YYYY"
})

function yearNumberError(input) {
    const value = input.value
    const actualDate = new Date()
    const ano = actualDate.getFullYear()
    if (value < ano) {
        form.classList.add("error")
        document.querySelector(".expirated-errors").classList.add("error")
        yearInput.classList.add("border-error")
        document.querySelector(".year-invalid").classList.add("error")
        return true
    } else {
        yearInput.classList.remove("border-error")
        document.querySelector(".year-invalid").classList.remove("error")
        yearInput.classList.add("border-filled")
    }
}

cardCvcInput.addEventListener("input", function (e) {
    const valor = e.target.value
    imageCardCvc.innerHTML = valor
})

function cvcNumberError(input) {
    const value = input.value
    if (value < 100) {
        cardCvcInput.classList.add("border-error")
        document.querySelector(".cvc-errors").classList.add("error")
        document.querySelector(".cvc-invalid").classList.add("error")
        return true
    } else {
        cardCvcInput.classList.remove("border-error")
        document.querySelector(".cvc-errors").classList.remove("error")
        document.querySelector(".cvc-invalid").classList.remove("error")
        cardCvcInput.classList.add("border-filled")
    }
}

formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let hasError = false;

    if (nameBlank(nameInput)) hasError = true;
    if (cardNumberErrors(cardNumberInput)) hasError = true;
    if (monthNumberError(monthInput)) hasError = true;
    if (yearNumberError(yearInput)) hasError = true;
    if (cvcNumberError(cardCvcInput)) hasError = true;

    if (hasError) return;

    form.classList.add("close");
    document.querySelector(".box-sucess").classList.add("show");

    document.querySelector(".sucess-btn").addEventListener("click", () => {
        location.reload();
    });
});


