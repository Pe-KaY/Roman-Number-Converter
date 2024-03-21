const input = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const form = document.getElementById("form")
const nC = document.getElementById("resultNC")
const eVN = document.getElementById("resultEVN")
const others = document.getElementById("resultOthers")

const magic = (val) => {
  let inputValue = parseInt(val)
  if (inputValue < 1) {
    others.classList.remove("hide")
    others.textContent = "Please enter a number greater than or equal to 1."
    nC.classList.add("hide")
    eVN.classList.add("hide")
    return
  } else if (inputValue > 3999) {
    others.classList.remove("hide")
    others.textContent = "Please enter a number less than or equal to 3999."
    nC.classList.add("hide")
    eVN.classList.add("hide")
    return
  } else {
    convertToRoman(inputValue)
  }
}

const checker = () => {
  const userInput = input.value
  if (userInput == "" || isNaN(userInput)) {
    eVN.classList.remove("hide")
    eVN.textContent = "Please enter a valid number."
    others.classList.add("hide")
    nC.classList.add("hide")
    return
  }
  magic(userInput)
}

function convertToRoman(num) {
  let resultt = ""
  let numarr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000] //numbers
  let romarr = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ] // numbers equivalent in roman numeral

  //loops through and assigns the roman number to result
  for (let i = numarr.length - 1; i >= 0; i--) {
    if (num > 0) {
      let count = Math.floor(num / numarr[i])
      if (numarr[i] <= num) {
        num %= numarr[i]
        resultt += romarr[i].repeat(count)
      }
    }
  }
  nC.classList.remove("hide")
  nC.textContent = resultt
  eVN.classList.add("hide")
  others.classList.add("hide")
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
})
convertBtn.addEventListener("click", checker)
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && input.value !== "") {
    checker()
  }
})
