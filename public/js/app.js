import { burger } from './tools/burger.js'
import { loadingLine } from './tools/loadingLine.js'
import { preloader } from './tools/preloaderwb.js'
import { search } from './tools/search.js'
const init = () => {
  preloader()

  burger()

  loadingLine()
  search('The Toys API has two levels of user roles and permissions')
}

init()
