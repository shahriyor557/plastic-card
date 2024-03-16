let card_number = document.querySelector("#card_number")
let user_name_I = document.querySelector("#user_name_I")
let date = document.querySelector("#date")
let User_name = document.querySelector('#User_name')
let User_card_name = document.querySelector('#User_card_name')
let month = document.querySelector("#month")
let year = document.querySelector("#year")
let cardd_nomer = document.querySelector(".cardd_nomer")
let cardd_nomer_input = document.querySelector("#uch")










let Confirm = document.querySelector("#Confirm")
Confirm.addEventListener(("click"), () => {
    console.log((User_name.value[2]));

    // typeof(User_name.value[i] *1) == "number"
    if (User_name.value === "") {
        User_name.style.borderColor = "red";
        error_name.innerText = "Name not entered"
        error_name.style.color = "red"
        error_name.style.marginTop = "5px"

    }
    if (User_card_name.value.length !== 16) {
        card_number.innerHTML = "----------------"
        User_card_name.style.borderColor = "red";
        error_card.innerText = "Wrong format, numbers only"
        error_card.style.color = "red"
        error_card.style.marginTop = "5px"
    }
    if (month.value === "" || month.value >=13 || month.value <= 0) {
        month.style.borderColor = "red";
        error_month.innerText = "Name not entered"
        error_month.style.color = "red"
        error_month.style.marginTop = "5px"
    }
    if (year.value === "" || year.value <=23 ) {
        year.style.borderColor = "red";
        error_year.innerText = "Name not entered"
        error_year.style.color = "red"
        error_year.style.marginTop = "5px"
    }
    if (uch.value === "" || uch.value.length !==3 ) {
        error_svs.style.borderColor = "red";
        error_svs.innerText = "Name not entered"
        error_svs.style.color = "red"
        error_svs.style.marginTop = "5px"
    }
    card_number.innerHTML = User_card_name.value
    user_name_I.innerHTML = User_name.value
    date.innerHTML = month.value + "/" + year.value
    cardd_nomer.innerHTML = cardd_nomer_input.value

    let new_string = ""
    for (let i = 0; i < card_number.innerHTML.length; i++) {
        if (i == 4 || i == 8 || i == 12) {
            new_string += " " + card_number.innerHTML[i]
        }
        else {
            new_string += card_number.innerHTML[i]
        }
    }
    card_number.innerHTML = new_string

})
