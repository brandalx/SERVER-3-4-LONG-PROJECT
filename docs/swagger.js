//for /toys GET request
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

//for /toys/search GET request

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
