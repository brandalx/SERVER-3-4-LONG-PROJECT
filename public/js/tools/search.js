export const search = () => {
  const searchInput = document.getElementById('searchInput')
  const searchButton = document.querySelector('.srchbtn')
  const response = document.querySelector('.response')

  searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase().trim()
    if (searchTerm.length < 3) {
      response.innerHTML = 'Request too short'
    } else {
      const elements = document.getElementsByTagName('*')

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        if (element.innerHTML.toLowerCase().includes(searchTerm)) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })

          // element.style.backgroundColor = '#ffffcc'
        }
      }
    }
  })
}
