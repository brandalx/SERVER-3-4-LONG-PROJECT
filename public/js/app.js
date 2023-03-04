import { burger } from './tools/burger.js'
import { loadingLine } from './tools/loadingLine.js'
import { preloader } from './tools/preloaderwb.js'
const init = () => {
  preloader()

  burger()

  loadingLine()
}

init()
