import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import { getAllEntries } from './entryController'

const app = express()

app.use(cors())
app.get('/', (req, res) => res.status(200).send('FindiT-app'))
app.get('/lecturers', getAllEntries)

exports.app = functions.https.onRequest(app)
