import { config } from 'dotenv'

config()

export const urldb = process.env.URLDB

export const tokenSecret = process.env.TOKENSECRET
export const localurldb = process.env.LOCALURLDB
// When upload to a real server that the server will provide its port
// the port itself instead of me having to change it manually
export const port = Number(process.env.PORT) || 3001
