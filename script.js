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

      let deleteStudent = document.createElement('button')
      deleteStudent.id = 'delete-student-id'
      deleteStudent.textContent = `Delete student`
      divItem.prepend(deleteStudent)

      deleteStudent.addEventListener('click', function(){
        studentList.removeChild(divItem)
        let deleteMessage = document.createElement('span')
        deleteMessage.textContent = 'Student successfully deleted'
        deleteMessage.style.color = 'green'
        let deleteMessageWrapper = document.createElement('div')
        deleteMessageWrapper.append(deleteMessage)
        studentList.after(deleteMessageWrapper)
        //Ištrynimo funkcija.
        setTimeout(function() {
          deleteMessageWrapper.remove()
        }, 5000);
      })
      

      // Mygtukas rodyti duomenis
      function dataShower(email, phone){
      let showData = document.createElement('button')
      showData.id = 'show-data-id'
      showData.textContent = `Show person's data`
      divItem.append(showData)
      showData.addEventListener('click', function(){
        let emailShow = document.getElementById(email);
        let phoneShow = document.getElementById(phone);
          if (emailShow.type && phoneShow.type === "password") {
            emailShow.type  = "text"
            phoneShow.type  = "text"
            showData.textContent = `Hide person's data`
            personPhone.textContent = `Phone number: ${personPhoneValue}`
            personEmail.textContent = `Email address: ${personEmailValue}`
          } else {
            emailShow.type  = "password"
            phoneShow.type  = "password"
            showData.textContent = `Show person's data`
            personPhone.textContent = `Phone number: ${maskedText}`
            personEmail.textContent = `Email address: ${maskedText1}`
          }
      })
      }
      dataShower('personEmail', 'personPhone')

        
  

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
      const studentTextWrapper = document.createElement('div')
      student.id = 'student-id'
      student.textContent = (`Student created: ${personNameValue} ${personLastNameValue}`)
      student.style.color = 'green'
      studentTextWrapper.append(student)
      divItem.prepend(studentTextWrapper)

      //Ištrynimo funkcija.
      setTimeout(function() {
        divItem.removeChild(studentTextWrapper)
        }, 5000);


      //Amzius
      const personAgeValue = testForm.personAge.value
      const personAge = document.createElement('h2')
      personAge.textContent = `Age: ${personAgeValue}`
      divItem.append(personAge)

      //Telefonas
      let personPhoneValue = testForm.personPhone.value
      let personPhone = document.createElement('h2')
      let maskedText = '*'.repeat(personPhoneValue.length);
      personPhone.textContent = `Phone number: ${maskedText}`
      divItem.append(personPhone)



      //Elektroninis pastas
      let personEmailValue = testForm.personEmail.value
      let personEmail = document.createElement('h2')
      let maskedText1 = '*'.repeat(personEmailValue.length);
      personEmail.textContent = `Email address: ${maskedText1}`
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
//Output elementas
const value = document.querySelector("#value");
const input = document.querySelector("#it_knowledge");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

function hiddenData(data) {
  var x = document.getElementById(data);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}









































