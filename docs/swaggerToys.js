// for /toys GET request

/**
 * @swagger
 * /toys:
 *   get:
 *     summary: Returns a paginated list of toys
 *     description: Returns a paginated list of toys, sorted by a specified field and in ascending or descending order.
 *     tags:
 *       - Toys
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         description: The page number to retrieve (default is 1).
 *         schema:
 *           type: integer
 *           minimum: 1
 *       - in: query
 *         name: sort
 *         required: false
 *         description: The value to sort by (default is "_id").
 *         schema:
 *           type: string
 *       - in: query
 *         name: desc
 *         required: false
 *         description: Set to "yes" to sort in descending order (default is "none").
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of toys.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 toys:
 *                   type: array
 *                   items:
 *                     type: object
 *                 page:
 *                   type: integer
 *                   minimum: 1
 *                 totalPages:
 *                   type: integer
 *                   minimum: 1
 *                 totalToys:
 *                   type: integer
 *                   minimum: 0
 *             example:
 *               toys:
 *                 - _id: "6122b3a1c0a534a8ca8cbb21"
 *                   name: "Teddy bear"
 *                   info: "This 3-story dollhouse features a working elevator, pool, and garage."
 *                   category: "Dolls & Accessories"
 *                   img_url: "https://images-na.ssl-images-amazon.com/images/I/71x7xLzk%2B4L._AC_SL1000_.jpg"
 *                   price: 20
 *                   date_created: "2023-02-24T23:24:19.906Z"
 *                   user_id: "63f945d1be82167cccb62037"
 *                   __v: 0
 *       '502':
 *         description: Internal server error.
 */

// for /toys/search GET request

/**
 * @swagger
 * /toys/search:
 *   get:
 *     summary: Returns a paginated list of toys that match the search query
 *     description: Returns a paginated list of toys that match the search query provided in the `s` query parameter. The search is performed on the `name` and `info` fields of the toy objects.
 *     tags:
 *       - Toys
 *     parameters:
 *       - in: query
 *         name: s
 *         required: true
 *         description: The search query to retrieve toys.
 *         schema:
 *           type: string
 *
 *     responses:
 *       '200':
 *         description: A list of toys.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 toys:
 *                   type: array
 *                   items:
 *                     type: object
 *                 page:
 *                   type: integer
 *                   minimum: 1
 *                 totalPages:
 *                   type: integer
 *                   minimum: 1
 *                 totalToys:
 *                   type: integer
 *                   minimum: 0
 *             example:
 *               toys:
 *                 - _id: "6122b3a1c0a534a8ca8cbb21"
 *                   name: "Teddy bear"
 *                   info: "This 3-story dollhouse features a working elevator, pool, and garage."
 *                   category: "Dolls & Accessories"
 *                   img_url: "https://images-na.ssl-images-amazon.com/images/I/71x7xLzk%2B4L._AC_SL1000_.jpg"
 *                   price: 20
 *                   date_created: "2023-02-24T23:24:19.906Z"
 *                   user_id: "63f945d1be82167cccb62037"
 *                   __v: 0
 *               page: 1
 *               totalPages: 1
 *               totalToys: 1
 *       '502':
 *         description: Internal server error.
 */

//for /toys/category/:catname GET request

/**
 * @swagger
 * /toys/category/{catname}:
 *   get:
 *     summary: Returns a list of toys by category
 *     description: Returns a list of toys filtered by a specified category.
 *     tags:
 *       - Toys
 *     parameters:
 *       - in: path
 *         name: catname
 *         required: true
 *         description: The name of the category to search for.
 *         schema:
 *           type: string
 *
 *     responses:
 *       '200':
 *         description: A list of toys in the specified category.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   info:
 *                     type: string
 *                   category:
 *                     type: string
 *                   img_url:
 *                     type: string
 *                   price:
 *                     type: number
 *                   date_created:
 *                     type: string
 *                     format: date-time
 *                   user_id:
 *                     type: string
 *                     format: uuid
 *                   __v:
 *                     type: integer
 *                     minimum: 0
 *             example:
 *               - _id: "6122b3a1c0a534a8ca8cbb21"
 *                 name: "Teddy bear"
 *                 info: "This 3-story dollhouse features a working elevator, pool, and garage."
 *                 category: "Dolls & Accessories"
 *                 img_url: "https://images-na.ssl-images-amazon.com/images/I/71x7xLzk%2B4L._AC_SL1000_.jpg"
 *                 price: 20
 *                 date_created: "2023-02-24T23:24:19.906Z"
 *                 user_id: "63f945d1be82167cccb62037"
 *                 __v: 0
 *       '502':
 *         description: Internal server error.
 */

//for /toys/ POST request

/**
 * @swagger
 * securityDefinitions:
 *   apiKey:
 *     type: apiKey
 *     in: header
 *     name: x-api-key
 *
 * /toys:
 *   post:
 *     summary: Adds a new toy to the database
 *     description: Adds a new toy to the database with the provided name, info, category, image URL, and price. Requires a valid JWT token for authentication.
 *     tags:
 *       - Toys
 *     parameters:
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         description: Token obtained from logging in
 *         schema:
 *           type: string
 *     security:
 *       - apiKey: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               info:
 *                 type: string
 *               category:
 *                 type: string
 *               img_url:
 *                 type: string
 *               price:
 *                 type: number
 *             required:
 *               - name
 *               - info
 *               - category
 *               - img_url
 *               - price
 *             example:
 *               name: "Lego Ninjago Golden Dragon"
 *               info: "This set includes a golden dragon, three minifigures, and assorted weapons."
 *               category: "Construction Sets"
 *               img_url: "https://images-na.ssl-images-amazon.com/images/I/81nA1edvR9L._AC_SL1500_.jpg"
 *               price: 19.99
 *     responses:
 *       '200':
 *         description: The newly created toy.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 info:
 *                   type: string
 *                 category:
 *                   type: string
 *                 img_url:
 *                   type: string
 *                 price:
 *                   type: number
 *                 date_created:
 *                   type: string
 *                 user_id:
 *                   type: string
 *                 __v:
 *                   type: number
 *             example:
 *               _id: "6122b3a1c0a534a8ca8cbb21"
 *               name: "Lego Ninjago Golden Dragon"
 *               info: "This set includes a golden dragon, three minifigures, and assorted weapons."
 *               category: "Construction Sets"
 *               img_url: "https://images-na.ssl-images-amazon.com/images/I/81nA1edvR9L._AC_SL1500_.jpg"
 *               price: 19.99
 *               date_created: "2023-02-24T23:24:19.906Z"
 *               user_id: "63f945d1be82167cccb62037"
 *               __v: 0
 *       '400':
 *         description: Bad request, invalid input.
 *       '401':
 *         description: Unauthorized, missing or invalid authentication token.
 *       '502':
 *         description: Internal server error.
 */

//for /toys/ PUT request

/**
 * @swagger
 * securityDefinitions:
 *   apiKey:
 *     type: apiKey
 *     in: header
 *     name: x-api-key
 *
 * /toys/{editId}:
 *   put:
 *     summary: Update an existing toy
 *     description: Update an existing toy in the database. Only admin users or the user who added the toy can update it.
 *     tags:
 *       - Toys
 *     parameters:
 *       - in: path
 *         name: editId
 *         required: true
 *         description: The ID of the toy to update
 *         schema:
 *           type: string
 *           example: "63f67afa1c859b4d063e03f4"
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         description: Token obtained from logging in
 *         schema:
 *           type: string
 *     security:
 *       - apiKey: []
 *     requestBody:
 *       required: true
 *       description: The updated toy object
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Lego City Space Mars Research Shuttle 2.0"
 *               info:
 *                 type: string
 *                 example: "This set includes a new space shuttle, five astronaut minifigures, and a two rovers"
 *               category:
 *                 type: string
 *                 example: "Action Figures & Playsets"
 *               img_url:
 *                 type: string
 *                 example: "https://images-na.ssl-images-amazon.com/images/I/81YyWWuB7zL._AC_SL1500_.jpg"
 *               price:
 *                 type: number
 *                 example: 10.00
 *             required:
 *               - name
 *               - info
 *               - category
 *               - img_url
 *               - price
 *     responses:
 *       '200':
 *         description: The updated toy object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 n:
 *                   type: number
 *                   example: 1
 *                 nModified:
 *                   type: number
 *                   example: 1
 *                 ok:
 *                   type: number
 *                   example: 1
 *             example:
 *               n: 1
 *               nModified: 1
 *               ok: 1
 *       '400':
 *         description: Bad request. The request body is not valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "\"name\" is required"
 *                   path:
 *                     type: string
 *                     example: "name"
 *                   type:
 *                     type: string
 *                     example: "any.required"
 *       '401':
 *         description: Unauthorized. The user is not authorized to update the toy.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       '502':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: object
 */
//for /toys/ DELETE request
/**
 * @swagger
 * securityDefinitions:
 *   apiKey:
 *     type: apiKey
 *     in: header
 *     name: x-api-key
 *
 * /toys/{editId}:
 *   delete:
 *     summary: Delete an existing toy
 *     description: Deletes an existing toy in the database. Only admin users or the user who added the toy can update it.
 *     tags:
 *       - Toys
 *     parameters:
 *       - in: path
 *         name: editId
 *         required: true
 *         description: The ID of the toy to update
 *         schema:
 *           type: string
 *           example: "63f67afa1c859b4d063e03f4"
 *       - in: header
 *         name: x-api-key
 *         required: true
 *         description: Token obtained from logging in
 *         schema:
 *           type: string
 *     security:
 *       - apiKey: []
 *     responses:
 *       '200':
 *         description: The deleted toy object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: string
 *                   example: true
 *                 deletedCount:
 *                   type: number
 *                   example: 1
 *       '401':
 *         description: Unauthorized. The user is not authorized to update the toy.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Unauthorized"
 *       '502':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: object
 */
