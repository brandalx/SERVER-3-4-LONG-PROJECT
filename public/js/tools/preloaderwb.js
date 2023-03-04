export const preloader = () => {
  document.body.style.overflow = 'hidden'
  const pMain = document.querySelector('.wrapper')
  pMain.style.display = 'none'

  setTimeout(() => {
    document.querySelector('.preloaderwb').style.display = 'none'
    pMain.style.display = 'block'
    document.body.style.overflow = 'auto'
    AOS.init()
  }, 2000)
}
