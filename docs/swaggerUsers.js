// /users GET request
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a message indicating the users endpoint has been reached
 *     description: Returns a JSON message indicating that the users endpoint has been reached
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: A message indicating that the users endpoint has been reached
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *             example:
 *               {
 *                 "msg": "Users endpoint"
 *               }
 *       '502':
 *         description: Internal server error.
 */
// /users POST request
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user with hashed password using bcrypt
 *     description: This route creates a new user in the database with a hashed password using bcrypt.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name.
 *               email:
 *                 type: string
 *                 description: User's email.
 *               password:
 *                 type: string
 *                 description: User's password.
 *               role:
 *                 type: string
 *                 enum: [USER, admin]
 *                 default: USER
 *                 description: User's role.
 *             example:
 *               name: John Smith
 *               email: example@gmail.com
 *               password: "123456"
 *     tags:
 *       - Users
 *     responses:
 *       '201':
 *         description: Successfully created a new user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: User's name.
 *                 email:
 *                   type: string
 *                   description: User's email.
 *                 password:
 *                   type: string
 *                   description: Encrypted password with random stars as a replacement for security reasons.
 *                 role:
 *                   type: string
 *                   enum: [USER, ADMIN]
 *                   default: USER
 *                   description: User's role.
 *                 _id:
 *                   type: string
 *                   description: User's ID.
 *                 date_created:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time the user was created.
 *                 __v:
 *                   type: integer
 *                   description: MongoDB version key.
 *             example:
 *               name: John Smith
 *               email: example@gmail.com
 *               password: "******"
 *               role: USER
 *               _id: "640295e379d96b011a78845c"
 *               date_created: "2023-03-04T00:50:43.196Z"
 *               __v: 0
 *       '400':
 *         description: Invalid request body or email already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 *                   example: This email is already exist in our system, please try log in again
 *                 code:
 *                   type: integer
 *                   description: Error code.
 *                   example: 11000
 *       '502':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: object
 *                   description: Error object.
 *                   example: {}
 */

//
// /users/login POST request

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Authenticating a user by verifying their email and password and returning a JSON web token if the authentication is successful.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               email: bdrndddalxs@gmail.com
 *               password: "342743630"

 *     responses:
 *       200:
 *         description: Returns a JSON web token if the authentication is successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JSON web token.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAyOTVlMzc5ZDk2YjAxMWE3ODg0NWMiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3Nzg5MjYzOSwiZXhwIjoxNjc3ODk2MjM5fQ.BiqtYLXtjNUZjZFFeV1R10-dptSwD7BBCQX2ZG0jzr8"
 *       400:
 *         description: Bad request error if the request body is not valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: object
 *                   description: Validation error details.
 *                   example: { "email": "Invalid email format." }
 *       401:
 *         description: Unauthorized error if the email is not found or the password is wrong.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Error message.
 *                   example: "Email not found / user dont exist or Password you're entered is wrong"
 *       502:
 *         description: Bad gateway error if an unexpected error occurs on the server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   description: Error message.
 *                   example: "Unexpected error occurred on the server."
 */

// /users/userInfo POST request

/**
 * @swagger
 * securityDefinitions:
 *   apiKey:
 *     type: apiKey
 *     in: header
 *     name: x-api-key
 * /users/userInfo:
 *   get:
 *     summary: Retrieves a user's information based on the token sent in the request header.
 *     description: Retrieves the user's information from the database based on the token sent in the request header. The token must be included in the `x-api-key` header.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         description: Token obtained from logging in
 *         schema:
 *           type: string
 *     security:
 *       - apiKey: []
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the user.
 *                 name:
 *                   type: string
 *                   description: The name of the user.
 *                 email:
 *                   type: string
 *                   description: The email address of the user.
 *                 role:
 *                   type: string
 *                   description: The role of the user.
 *                 date_created:
 *                   type: string
 *                   description: The date the user account was created.
 *                 __v:
 *                   type: number
 *                   description: The version of the user document.
 *       401:
 *         description: Unauthorized
 *       502:
 *         description: Bad Gateway
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user details by ID
 *     tags:
 *       - Users
 *     security:
 *       - apiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *           example:
 *             name: example@gmail.com
 *             email: iliya_tsoy@mail.ru
 *             password: 23232
 *     responses:
 *       '200':
 *         description: Updated user details successfully
 *       '400':
 *         description: Invalid input
 *       '401':
 *         description: Unauthorized
 *       '502':
 *         description: Internal server error
 */
