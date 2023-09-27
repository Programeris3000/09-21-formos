const preAddedStudents = [
  {

  },
  // {
  //   name: 'Steeve',
  //   surname: 'Travolta',
  //   age: 23,
  //   phone: `+8692144654`,
  //   email: `vala@gmail.com`,
  //   knowledge: 6,
  //   group: `Feu-9`,
  //   interest: ['Javascript', `Python`],
  // },{
  //   name: 'John',
  //   surname: 'Piterson',
  //   age: 29,
  //   phone: `+800065944`,
  //   email: `valatka@gmail.com`,
  //   knowledge: 8,
  //   group: `Feu-5`,
  //   interest: [`Python`],
  // },{
  //   name: 'Mari',
  //   surname: 'Perez',
  //   age: 35,
  //   phone: `+869214465452548`,
  //   email: `perez@gmail.com`,
  //   knowledge: 3,
  //   group: `Feu-6`,
  //   interest: ['Javascript', `Python`, `C++`],
  // },{
  //   name: 'Ona',
  //   surname: 'Saugirdaitė',
  //   age: 20,
  //   phone: `+7592144654`,
  //   email: `Ona@gmail.com`,
  //   knowledge: 9,
  //   group: `Feu-3`,
  //   interest: ['Javascript', `Python`, `C++`, `Java`],
  // },{
  //   name: 'Jupiter',
  //   surname: 'Star',
  //   age: 45,
  //   phone: `+37092144654`,
  //   email: `star@gmail.com`,
  //   knowledge: 1,
  //   group: `Feu-2`,
  //   interest: ['Javascript'],
  // },  
]
console.log(preAddedStudents)

// testForm.addEventListener('input',(event)=>{
//   let key = event.target.name
//   let value = event.target.value
//   localStorage.setItem(key, value)
// })
const nameInput = document.querySelector('#person-name')
nameInput.value = localStorage.getItem('name-input')
nameInput.addEventListener('input',()=>{
  localStorage.setItem('name-input', nameInput.value)
})

const lastNameInput = document.querySelector('#person-last-name')
  lastNameInput.value = localStorage.getItem('lastName-input')
  lastNameInput.addEventListener('input',()=>{
  localStorage.setItem('lastName-input', lastNameInput.value)
})

const ageInput = document.querySelector('#person-age')
  ageInput.value = localStorage.getItem('age-input')
  ageInput.addEventListener('input',()=>{
  localStorage.setItem('age-input', ageInput.value)
  })

const phoneInput = document.querySelector('#personPhone')
  phoneInput.value = localStorage.getItem('number-input')
  phoneInput.addEventListener('input',()=>{
    localStorage.setItem('number-input', phoneInput.value)
  })

const emailInput = document.querySelector('#personEmail')
  emailInput.value = localStorage.getItem('email-input')
  emailInput.addEventListener('input',()=>{
  localStorage.setItem('email-input', emailInput.value)
})

const knowledgeInput = document.querySelector('#it_knowledge')
  knowledgeInput.value = localStorage.getItem('knowledge-input')
  knowledgeInput.addEventListener('input',()=>{
  localStorage.setItem('knowledge-input', knowledgeInput.value)
})


const groupInput = testForm.groupNumber
groupInput.value = localStorage.getItem('groupName')
groupInput.forEach((group)=>{
group.addEventListener('input', ()=>{
  localStorage.setItem('groupName', group.value)
})
})


const checkedGroupElement = testForm.querySelector(`input[name = "groupNumber"][value="${localStorage.getItem('group-inputs')}"]`)

if(checkedGroupElement){
  checkedGroupElement.checked = true
}

const groupInputs = document.getElementsByName('groupNumber')
groupInputs.forEach((group)=>{
group.addEventListener('input',()=>{
  localStorage.setItem('group-inputs', group.value)
})
})

const localStorageInterests = JSON.parse(localStorage.getItem('interest-inputs'))

if(localStorageInterests){
  localStorageInterests.forEach(localStorageInterest =>{
  const checkedInterestElement = testForm.querySelector(`[name="interestFor"][value="${localStorageInterest}"]`)
  checkedInterestElement.checked = true
  })
}

const interestInputs = document.getElementsByName('interestFor')
interestInputs.forEach((interest=>{
  interest.addEventListener('input',()=>{
const checkedInterests = testForm.querySelectorAll('[name="interestFor"]:checked')
const checkedInterestsValue = [...checkedInterests].map(oneInterest =>{
  return oneInterest.value
})

    localStorage.setItem('interest-inputs', JSON.stringify(checkedInterestsValue))
  })
}))



function init() {
const testForm = document.querySelector(`#testForm`) //paselektinu forma

testForm.addEventListener('submit', (event)=>{
event.preventDefault() //Anuliuoju defaultini narsykles perkrovima

      // preAddedStudents.push('name-input', nameInput.value)
      // preAddedStudents.push('lastName-input', lastNameInput.value)
      // preAddedStudents.push('age-input', ageInput.value)
      // preAddedStudents.push('number-input', phoneInput.value)
      // preAddedStudents.push('email-input', emailInput.value)
      // preAddedStudents.push('knowledge-input', knowledgeInput.value)
      // preAddedStudents.push('name-input', nameInput.value) 
      // preAddedStudents.push('groupName')
      console.log(preAddedStudents)



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

localStorage.removeItem('languageName')
localStorage.removeItem('interest-inputs')
localStorage.removeItem('groupName')
localStorage.removeItem('email-input')
localStorage.removeItem('number-input')
localStorage.removeItem('age-input')
localStorage.removeItem('knowledge-input')
localStorage.removeItem('name-input')
localStorage.removeItem('lastName-input')
testForm.reset()

  })

}
init()






// preAddedContent()
// function preAddedContent(){



//   //Paselektinu div elementa esanti html. Kiekviena kart apsisukus ciklui sukuriu div-item ir ji pridedu prie div elemento esancio html.

//   preAddedStudents.forEach(object=>{
//     let studentList = document.querySelector('#student-list')
//     let divItem = document.createElement('div')
//     divItem.classList = ('div-item')
//     studentList.prepend(divItem)
//     studentList.style.backgroundColor = 'lightBlue'
//     studentList.style.border = 'solid 2px'

//     let name = object.name
//     let surname = object.surname
//     let age = object.age
//     let phone = object.phone
//     let email = object.email
//     let knowledge = object.knowledge
//     let group = object.group
//     let interest = object.interest

//   let deleteStudent = document.createElement('button')
//   deleteStudent.id = 'delete-student-id'
//   deleteStudent.textContent = `Delete student`
//   divItem.prepend(deleteStudent)
  
//   deleteStudent.addEventListener('click', function(){
//     studentList.removeChild(divItem)
//     let deleteMessage = document.createElement('span')
//     deleteMessage.textContent = 'Student successfully deleted'
//     deleteMessage.style.color = 'green'
//     let deleteMessageWrapper = document.createElement('div')
//     deleteMessageWrapper.append(deleteMessage)
//     studentList.after(deleteMessageWrapper)
//     //Ištrynimo funkcija.
//     setTimeout(function() {
//       deleteMessageWrapper.remove()
//     }, 5000);
//   })
  
//   // Mygtukas rodyti duomenis
//   function dataShowButton(){
//   let showData = document.createElement('button')
//   showData.classList.add('defaultClass', 'active')
//   showData.textContent = `Show person's data`
//   divItem.appendChild(showData)
  
//   showData.addEventListener('click',function(){
//     if(showData.classList.contains('active')){
//     showData.textContent = `Hide person's data`
//     personPhone.textContent = `Phone number: ${phone}`
//     personEmail.textContent = `Email address: ${email}`
//     showData.classList.remove('active')
//     }else{
//       showData.textContent = `Show person's data`
//       personPhone.textContent = `Phone number: ${maskedText}`
//       personEmail.textContent = `Email address: ${maskedText1}`
//       showData.classList.add('active')
//     }
//     })
      
  
//   }
//   dataShowButton()
  
//   //Vardas
//   let personName = document.createElement('h2')
//   personName.textContent = `Name: ${name}`
//   divItem.append(personName)
  
//   //Pavarde
//   const personLastName = document.createElement('h2')
//   personLastName.innerHTML = `Last name: ${surname}`
//   divItem.append(personLastName)
  
//   //Amzius
//   const personAge = document.createElement('h2')
//   personAge.textContent = `Age: ${age}`
//   divItem.append(personAge)

//   //Telefonas
//   let personPhone = document.createElement('h2')
//   let maskedText = '*'.repeat(phone.length);
//   personPhone.textContent = `Phone number: ${maskedText}`
//   divItem.append(personPhone)
  
//   //Elektroninis pastas
//   let personEmail = document.createElement('h2')
//   let maskedText1 = '*'.repeat(email.length);
//   personEmail.textContent = `Email address: ${maskedText1}`
//   divItem.append(personEmail)
  
//   //It zinios
//   const personKnowledge = document.createElement('h2')
//   personKnowledge.textContent = `It Knowledge: ${knowledge}`
//   divItem.append(personKnowledge)
  
//   //Grupes pasirinkimas
//   const personGroup = document.createElement('h2')
//   personGroup.textContent = `Selected Group: ${group}`
//   divItem.append(personGroup)
  
//   //Dominancios kalbos
//   const interestDiv = document.createElement('div')
//   const interestUlName = document.createElement('h2')
//   interestUlName.textContent = (`Selected Language('s)`)
//   interestDiv.prepend(interestUlName)
//   const interestUl = document.createElement('ul')
//   interest.forEach((item)=>{
//     divItem.append(interestDiv)
//     interestDiv.append(interestUl)
//     const interestFor = document.createElement('li')
//     interestUl.append(interestFor)
//     interestFor.textContent = item
//   })
//   })
//   }

// function fromLocalData(){

//     //Paselektinu div elementa esanti html. Kiekviena kart apsisukus ciklui sukuriu div-item ir ji pridedu prie div elemento esancio html.
  
//     preAddedStudents.forEach(object=>{
//       let studentList = document.querySelector('#student-list')
//       let divItem = document.createElement('div')
//       divItem.classList = ('div-item')
//       studentList.prepend(divItem)
//       studentList.style.backgroundColor = 'lightBlue'
//       studentList.style.border = 'solid 2px'
  
//       let name = nameInput.value
//       let surname = lastNameInput.value
//       let age = ageInput.value
//       let phone = phoneInput.value
//       let email = emailInput.value
//       let knowledge = knowledgeInput.value
//       let group = groupInput.value
//       let interest = object.interest
  
//     let deleteStudent = document.createElement('button')
//     deleteStudent.id = 'delete-student-id'
//     deleteStudent.textContent = `Delete student`
//     divItem.prepend(deleteStudent)
    
//     deleteStudent.addEventListener('click', function(){
//       studentList.removeChild(divItem)
//       let deleteMessage = document.createElement('span')
//       deleteMessage.textContent = 'Student successfully deleted'
//       deleteMessage.style.color = 'green'
//       let deleteMessageWrapper = document.createElement('div')
//       deleteMessageWrapper.append(deleteMessage)
//       studentList.after(deleteMessageWrapper)
//       //Ištrynimo funkcija.
//       setTimeout(function() {
//         deleteMessageWrapper.remove()
//       }, 5000);
//     })
    
//     // Mygtukas rodyti duomenis
//     function dataShowButton(){
//     let showData = document.createElement('button')
//     showData.classList.add('defaultClass', 'active')
//     showData.textContent = `Show person's data`
//     divItem.appendChild(showData)
    
//     showData.addEventListener('click',function(){
//       if(showData.classList.contains('active')){
//       showData.textContent = `Hide person's data`
//       personPhone.textContent = `Phone number: ${phone}`
//       personEmail.textContent = `Email address: ${email}`
//       showData.classList.remove('active')
//       }else{
//         showData.textContent = `Show person's data`
//         personPhone.textContent = `Phone number: ${maskedText}`
//         personEmail.textContent = `Email address: ${maskedText1}`
//         showData.classList.add('active')
//       }
//       })
        
    
//     }
//     dataShowButton()
    
//     //Vardas
//     let personName = document.createElement('h2')
//     personName.textContent = `Name: ${name}`
//     divItem.append(personName)
    
//     //Pavarde
//     const personLastName = document.createElement('h2')
//     personLastName.innerHTML = `Last name: ${surname}`
//     divItem.append(personLastName)
    
//     //Amzius
//     const personAge = document.createElement('h2')
//     personAge.textContent = `Age: ${age}`
//     divItem.append(personAge)
  
//     //Telefonas
//     let personPhone = document.createElement('h2')
//     let maskedText = '*'.repeat(phone.length);
//     personPhone.textContent = `Phone number: ${maskedText}`
//     divItem.append(personPhone)
    
//     //Elektroninis pastas
//     let personEmail = document.createElement('h2')
//     let maskedText1 = '*'.repeat(email.length);
//     personEmail.textContent = `Email address: ${maskedText1}`
//     divItem.append(personEmail)
    
//     //It zinios
//     const personKnowledge = document.createElement('h2')
//     personKnowledge.textContent = `It Knowledge: ${knowledge}`
//     divItem.append(personKnowledge)
    
//     //Grupes pasirinkimas
//     const personGroup = document.createElement('h2')
//     personGroup.textContent = `Selected Group: ${group}`
//     divItem.append(personGroup)
    
//     //Dominancios kalbos
//     const interestDiv = document.createElement('div')
//     const interestUlName = document.createElement('h2')
//     interestUlName.textContent = (`Selected Language('s)`)
//     interestDiv.prepend(interestUlName)
//     const interestUl = document.createElement('ul')
//     interest.forEach((item)=>{
//       divItem.append(interestDiv)
//       interestDiv.append(interestUl)
//       const interestFor = document.createElement('li')
//       interestUl.append(interestFor)
//       interestFor.textContent = item
//     })
//     })
// }
// fromLocalData()



//Output elementas
const value = document.querySelector("#value");
const input = document.querySelector("#it_knowledge");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});











































