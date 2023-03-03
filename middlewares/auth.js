import jwt from 'jsonwebtoken'

import { tokenSecret } from '../config//config.js'

const auth = (req, res, next) => {
  // Checks at all that a token has been sent in the directory
  //req.header is used to send token in the header as more secure way to operate ith sesitive info
  //x-api-key - header name whic will be checked if he does provided valid token
  let token = req.header('x-api-key')
  if (!token) {
    return res.status(401).json({ err: 'Please send the token to this endpoint ' })
  }
  try {
    // tries to decode the token and get its payload, which is currently an ID
    let decodeToken = jwt.verify(token, tokenSecret)
    // req -> parameter of an object that is shared by all functions in the routers chain
    req.tokenData = decodeToken
    // Will call the next function in the routers chain
    next()
  } catch (err) {
    console.log(err)
    res.status(401).json({ err: 'Token you provided invalid or expired' })
  }
}
export default auth
