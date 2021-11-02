import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    id:String, 
    schema:String, 
    name: String, 
    aliases:String, 
    birthDate:Date, 
    countries:String, 
    addresses: String, 
    identifiers:String, 
    sanctions:String, 
    phones:String, 
    dataset:String, 
    last_seen:Date, 
    first_seen:Date},
    {collection:'people'}
);

export default mongoose.model('Person', personSchema);

