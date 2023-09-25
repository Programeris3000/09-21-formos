function init() {
const testForm = document.querySelector(`#testForm`) //paselektinu forma

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
      function dataShowButton(){
      let showData = document.createElement('button')
      showData.classList.add('defaultClass', 'active')
      showData.textContent = `Show person's data`
      divItem.appendChild(showData)

      showData.addEventListener('click',function(){
        if(showData.classList.contains('active')){
        showData.textContent = `Hide person's data`
        personPhone.textContent = `Phone number: ${personPhoneValue}`
        personEmail.textContent = `Email address: ${personEmailValue}`
        showData.classList.remove('active')
        }else{
          showData.textContent = `Show person's data`
          personPhone.textContent = `Phone number: ${maskedText}`
          personEmail.textContent = `Email address: ${maskedText1}`
          showData.classList.add('active')
        }
        })
          
      
    }
      dataShowButton()

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

    //   //Kalbos pasirinkimas
    const checkBoxes = document.querySelectorAll("input[type = 'checkbox']")
    const checkBoxesWrapper = document.createElement('div')
    const ulName = document.createElement('h2')
    ulName.textContent = `Selected Language('s)`
    checkBoxesWrapper.prepend(ulName)
  checkBoxes.forEach(checkbox=>{
    if(checkbox.checked){
      const interestForValue = checkbox.value
      const languageUl = document.createElement('ul')
      const ulName = document.createElement('h2')
      ulName.textContent = `Selected language's`
      const languageLi = document.createElement('li')
      languageLi.innerHTML = interestForValue
      divItem.append(checkBoxesWrapper)
      checkBoxesWrapper.append(languageUl)
      languageUl.append(languageLi)
      }
})
  })

}
init()

preAddedContent(`Joe`, `Doe`, 9, `+37844124`, `gmail@gmail.com`, 9, 'feu-4', [`Javascript`, 'C++'])
preAddedContent(`John`, `Santana`, 4, `+378441454524`, `gm@gmail.com`, 5, 'feu-9', [`Javascript`])
preAddedContent(`Mike`, `Cooper`, 4, `+3784414573737`, `gomo@gmail.com`, 7, 'feu-4', [`Javascript`,`Python`,`Java`])
preAddedContent(`Virgis`, `Stakėnas`, 4, `+379878888`, `Kam@gmail.com`, 6, 'feu-5', [`Python`])
preAddedContent(`Leon`, `Somov`, 4, `+3734565`, `Popopapa@gmail.com`, 2, 'feu-10', [`C++`])


function preAddedContent(name, surname, age, phone, email, knowledge, group, interest){
  const sumbitForms = [
    {
      name: name,
      surname: surname,
    },{
      age: age,
    },{
      phone: phone
    },{
      email: email
    },{
      knowledge: knowledge
    },{
      group: group
    },{
      interest: interest
    }
  ]
  

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
  function dataShowButton(){
  let showData = document.createElement('button')
  showData.classList.add('defaultClass', 'active')
  showData.textContent = `Show person's data`
  divItem.appendChild(showData)
  
  showData.addEventListener('click',function(){
    if(showData.classList.contains('active')){
    showData.textContent = `Hide person's data`
    personPhone.textContent = `Phone number: ${personPhoneValue}`
    personEmail.textContent = `Email address: ${personEmailValue}`
    showData.classList.remove('active')
    }else{
      showData.textContent = `Show person's data`
      personPhone.textContent = `Phone number: ${maskedText}`
      personEmail.textContent = `Email address: ${maskedText1}`
      showData.classList.add('active')
    }
    })
      
  
  }
  dataShowButton()
  
  //Vardas
  const personNameValue = sumbitForms[0].name
  
  let personName = document.createElement('h2')
  personName.textContent = `Name: ${personNameValue}`
  divItem.append(personName)
  
  //Pavarde
  const personLastNameValue = sumbitForms[0].surname
  const personLastName = document.createElement('h2')
  personLastName.innerHTML = `Last name: ${personLastNameValue}`
  divItem.append(personLastName)
  

  
  
  //Amzius
  const personAgeValue = sumbitForms[1].age
  const personAge = document.createElement('h2')
  personAge.textContent = `Age: ${personAgeValue}`
  divItem.append(personAge)
  
  //Telefonas
  let personPhoneValue = sumbitForms[2].phone
  let personPhone = document.createElement('h2')
  let maskedText = '*'.repeat(personPhoneValue.length);
  personPhone.textContent = `Phone number: ${maskedText}`
  divItem.append(personPhone)
  
  //Elektroninis pastas
  let personEmailValue = sumbitForms[3].email
  let personEmail = document.createElement('h2')
  let maskedText1 = '*'.repeat(personEmailValue.length);
  personEmail.textContent = `Email address: ${maskedText1}`
  divItem.append(personEmail)
  
  //It zinios
  const personKnowledgeValue = sumbitForms[4].knowledge
  const personKnowledge = document.createElement('h2')
  personKnowledge.textContent = `It Knowledge: ${personKnowledgeValue}`
  divItem.append(personKnowledge)
  
  //Grupes pasirinkimas
  const personGroupValue = sumbitForms[5].group
  const personGroup = document.createElement('h2')
  personGroup.textContent = `Selected Group: ${personGroupValue}`
  divItem.append(personGroup)
  
  
  const interestDiv = document.createElement('div')
  const interestUlName = document.createElement('h2')
  interestUlName.textContent = (`Selected Language('s)`)
  interestDiv.prepend(interestUlName)
  const interestUl = document.createElement('ul')
  
  sumbitForms[6].interest.forEach((item)=>{
    divItem.append(interestDiv)
    interestDiv.append(interestUl)
    const interestFor = document.createElement('li')
    interestUl.append(interestFor)
    interestFor.textContent = item

  })
  }



//Output elementas
const value = document.querySelector("#value");
const input = document.querySelector("#it_knowledge");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});











































