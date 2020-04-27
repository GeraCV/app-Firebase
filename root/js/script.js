// MENU RESPONSIVE
const menuToogle = document.getElementById('menu-toogle')
const mainNav = document.getElementById('main-nav')



const showMenu = (toogle, nav) => {
  if (toogle && nav) {
    menuToogle.addEventListener('click', () => {
      mainNav.classList.toggle('show')
      document.body.classList.toggle('hidden')
    })
  }
}
showMenu(menuToogle, mainNav)



const introduceBarSearch = (iconId, barId) => {
  const iconSearch = document.getElementById(iconId)
  const barSearch = document.getElementById(barId)

  if (iconSearch && barSearch) {
    iconSearch.addEventListener('click', () => {
      barSearch.classList.toggle("show-bar")
    })
  }
}
introduceBarSearch('icon-search', 'input-bar-search')




