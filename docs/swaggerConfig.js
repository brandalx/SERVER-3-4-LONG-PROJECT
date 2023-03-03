import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

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
        // url: 'https://toysrestapi.cyclic.app/',
        url: `http://localhost:3001/`,
        description: process.env.PORT ? ' Cyclic server ' : 'Local server'
      }
    ]
  },
  // API schema model for all routes
  apis: ['./docs/swagger.js']
}

// Generate the Swagger documentation using the defined options
const swaggerDocs = swaggerJsdoc(swaggerOptions)

// Set up Swagger middleware for use in the Express app
export const swaggerUiMiddleware = [swaggerUi.serve, swaggerUi.setup(swaggerDocs)]
