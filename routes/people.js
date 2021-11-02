import express from 'express';
import Person from '../models/person.js';

const router = express.Router();

// Getting all people 
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.send(people);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Getting person by name 
router.get('/name/:name', async (req, res) => {
    try{
        const name = req.params.name;
        const person = await Person.find({ name: name });
        res.send(person);
    }catch (error) {
        res.status(404).json({message: 'Person not found'});
    }
});

export default router;