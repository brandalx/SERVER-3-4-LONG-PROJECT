// import indexRoute from './index.js'
import toysRouter from './toys.js'
import userRouter from './users.js'

import { swaggerUiMiddleware } from '../docs/swaggerConfig.js'
export const routesInit = (app) => {
  // app.use('/main', indexRoute)
  app.use('/users', userRouter)
  app.use('/toys', toysRouter)
  app.use('/api-docs', swaggerUiMiddleware)
  // Set up middleware for serving Swagger UI and documentation
  // Serve the Swagger UI with the generated OpenAPI specification file
  app.use((req, res) => {
    // res.status(404).send("Sorry, page not found.");
    res.status(404).json({
      msg: "Error 404: The page you are looking for could not be found. Please check the URL and try again. If you're not sure where to go, you can always head back to the homepage by entering in the your borwser follow url: https://toysrestapi.cyclic.app"
    })
  })
}
