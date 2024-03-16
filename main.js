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
    card_number.innerHTML = User_card_name.value
    user_name_I.innerHTML = User_name.value
    date.innerHTML = month.value + "/" + year.value
    cardd_nomer.innerHTML = cardd_nomer_input.value
    if (User_card_name.value.length !== 16 ) {
        card_number.innerHTML = "Entered incorrectly"
    }
    let new_string = ""
    for (let i = 0; i < card_number.innerHTML.length; i++) {
        if (i == 4 || i == 8 || i == 12) {
            new_string += " " +card_number.innerHTML[i]
        }
        else {
            new_string += card_number.innerHTML[i]
        }
    }
    card_number.innerHTML = new_string

})
