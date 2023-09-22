function init() {
const testForm = document.querySelector(`#testForm`) //paselektinu forma
console.log(testForm)

testForm.addEventListener('submit', (event)=>{
event.preventDefault() //Anuliuoju defaultini narsykles perkrovima

//Paselektinu div elementa esanti html. Kiekviena kart paspaudus sukuriu div-item ir ji pridedu prie div elemento esancio html.
let studentList = document.querySelector('#student-list')
let divItem = document.createElement('div')
divItem.classList = ('div-item')
studentList.prepend(divItem)
studentList.style.backgroundColor = 'lightBlue'
studentList.style.border = 'solid 2px'


//Vardas
const personNameValue = testForm.name.value
let personName = document.createElement('h2')
personName.textContent = `Name: ${personNameValue}`
divItem.append(personName)

//Pavarde
const personLastNameValue = testForm.lastName.value
const personLastName = document.createElement('h2')
personLastName.innerHTML = `Last name: ${personLastNameValue}`
divItem.append(personLastName)

//Sukuriamas tekstas kuris vėliau išsitrins
const student = document.createElement('span')
student.id = 'student-id'
student.textContent = (`Student created ${personNameValue} ${personLastNameValue}`)
student.style.color = 'green'
student.style.fontSize = '20px'
divItem.prepend(student)

//Ištrynimo funkcija.
setTimeout(function() {
  divItem.removeChild(student)
  }, 5000);


//Amzius
const personAgeValue = testForm.personAge.value
const personAge = document.createElement('h2')
personAge.textContent = `Age: ${personAgeValue}`
divItem.append(personAge)

//Telefonas
const personPhoneValue = testForm.personPhone.value
const personPhone = document.createElement('h2')
personPhone.textContent = `Phone number: ${personPhoneValue}`
divItem.append(personPhone)

//Elektroninis pastas
const personEmailValue = testForm.personEmail.value
const personEmail = document.createElement('h2')
personEmail.textContent = `Email address: ${personEmailValue}`
divItem.append(personEmail)

//It zinios
const personKnowledgeValue = testForm.knowledge.value
const personKnowledge = document.createElement('h2')
personKnowledge.textContent = `It Knowledge: ${personKnowledgeValue}`
divItem.append(personKnowledge)

//Grupes pasirinkimas
const personGroupValue = testForm.groupNumber.value
const personGroup = document.createElement('h2')
personGroup.textContent = `Selected Group: ${personGroupValue}`
divItem.append(personGroup)

//Kalbos pasirinkimas
const checkBoxes = document.querySelectorAll("input[type = 'checkbox']")
checkBoxes.forEach(checkbox=>{
if(checkbox.checked){
  const interestForValue = checkbox.value
  const languageChoose = document.createElement('h2')
  languageChoose.innerHTML = `Selected Language('s): ${interestForValue}`
  divItem.append(languageChoose)
}
})


})

}
init()













































const value = document.querySelector("#value");
const input = document.querySelector("#it_knowledge");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});