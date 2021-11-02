import express from 'express';
import Entity from '../models/org.js';

const router = express.Router();

// Getting all entities 
router.get('/', async (req, res) => {
    try {
        const entity = await Entity.find();
        res.send(entity);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

// Getting entity by orgNr  
router.get('/orgnr/:nr', async (req, res) => {
    try{
        const orgnr = req.params.nr;
        const entity = await Entity.find({ organisasjonsnummer: orgnr });
        res.send(entity);
    }catch (error) {
        res.status(404).json({message: 'Organization not found'});
    }
});

export default router;