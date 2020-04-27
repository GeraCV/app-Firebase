const textRegister = document.getElementById('text-register')
const containerRegister = document.getElementById('container-register')
const formularyRegister = document.getElementById("formulario-register")

const introduceTooltipRegister = (text, register) => {
  if (text && register) {
    text.addEventListener('click', () => {
      register.classList.toggle("show-container-register")
      document.body.classList.toggle('hidden')

      if (containerLogin.classList.contains("show-container-login")) {
        containerLogin.classList.remove("show-container-login")
        document.body.classList.toggle('hidden')

      }
    })
  }
}
introduceTooltipRegister(textRegister, containerRegister)

formularyRegister.addEventListener('submit', e => {
  e.preventDefault()

  const name = formularyRegister.name.value
  const lastname = formularyRegister.lastname.value
  const email = formularyRegister.email.value
  const password = formularyRegister.password.value

  const user = {
    name: name,
    lastname: lastname,
    email: email,
    password: password
  }

  //console.log(user)


})