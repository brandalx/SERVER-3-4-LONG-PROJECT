import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { SERVER_URL, port, localurldb } from '../config/config.js'
// Set up Swagger options and generate the Swagger documentation

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Toys REST API',
      version: '1.0.0',
      description:
        'Toys REST API - Swagger automated documantation. Please visit `https://toysrestapi.cyclic.app` for full custom documentation on the server side, or visit `https://toysrestapi.netlify.app` for front-end side of the app. '
    },
    servers: [
      {
        url: SERVER_URL,
        // url: SERVER_URL || localurldb,
        // url: 'https://toysrestapi.cyclic.app/',
        // url: `http://localhost:3001/`,
        description: 'The adress is ' + SERVER_URL
      },
      {
        url: localurldb,
        // url: SERVER_URL || localurldb,
        // url: 'https://toysrestapi.cyclic.app/',
        // url: `http://localhost:3001/`,
        description: 'The adress is ' + SERVER_URL
      }
    ]
  },
  // API schema model for all routes
  apis: ['./docs/swaggerToys.js', './docs/swaggerUsers.js']
}

// Generate the Swagger documentation using the defined options
const swaggerDocs = swaggerJsdoc(swaggerOptions)

// Set up Swagger middleware for use in the Express app
export const swaggerUiMiddleware = [swaggerUi.serve, swaggerUi.setup(swaggerDocs)]
