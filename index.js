import express from 'express';
import cors from 'cors';

import routes from './routes/index.js';
import connectdb from './config/database.js';


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', routes);

const PORT = process.env.PORT || 5000

connectdb().then(()=>app.listen(PORT, () => console.log(`AI server started on ${PORT}`))
)




// app.listen(PORT, () => console.log(`AI server started on ${PORT}`))
