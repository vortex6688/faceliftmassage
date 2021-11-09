import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import eventsRoutes from './routes/events.js';

const app = express()

// app.use(express.json({limit: "32mb", extend: true}));
// app.use(express.urlencoded({limit: "32mb", extend: true}));
// app.use(cors());
app.use(express.json({ limit: "32mb", extended: true }))
app.use(express.urlencoded({ limit: "32mb", extended: true }))
app.use(cors())

app.use('/events', eventsRoutes);

const CONNECTION_URL = 'mongodb+srv://vortex:Hellion007@faceliftcluster.b7zdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true}, {useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch(err => console.log('error'))