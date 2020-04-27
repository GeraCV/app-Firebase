const textLogin = document.getElementById('text-login')
const containerLogin = document.getElementById('container-login')
const formularyLogin = document.getElementById('formulario-login')

const introduceTooltipLogin = (text, login) => {
  if (text && login) {
    text.addEventListener('click', () => {
      login.classList.toggle("show-container-login")
      document.body.classList.toggle('hidden')

      if (containerRegister.classList.contains("show-container-register")) {
        containerRegister.classList.remove("show-container-register")
        document.body.classList.toggle('hidden')
      }
    })
  }
}
introduceTooltipLogin(textLogin, containerLogin)


formularyLogin.addEventListener('submit', e => {
  e.preventDefault()

  const email = formularyLogin.email.value
  const password = formularyLogin.password.value

  const user = {
    email: email,
    password: password
  }

  //console.log(user)


})