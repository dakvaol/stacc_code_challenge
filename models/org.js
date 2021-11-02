import mongoose from 'mongoose';

const entitySchema = new mongoose.Schema({
    organisasjonsnummer:String, 
    navn:String,
    organisasjonsform:{
        kode: String, 
        beskrivelse:String, 
            _links:{
                self:{
                    href:String
            }
        }
    },
    registreringsdatoEnhetsregisteret:Date,
    registrertIMvareregisteret:Boolean,
    naeringskode1:[{
        beskrivelse:String, 
        kode:String 
    }],
    antallansatte:Number, 
    foretningsadresse:{
        land:String, 
        landkode:String, 
        postnummer:Number, 
        poststed:String, 
        addresse:{0: String},
        kommune:String, 
        kommunenummer:Number
    },
    institusjonellSektorkode:{
        kode:Number, 
        beskrivelse:String
    },
    registrertIForetaksregisteret:Boolean,
    registrertIStiftelsesregisteret:Boolean,
    registrertIFrivillighetsregisteret:Boolean,
    sisteInnsendteAarsregnskap:Number,
    konkurs:Boolean,
    underAvvikling:Boolean,
    underTvangsavviklingEllerTvangsopplosning:Boolean,
    maalform:String,
    _links:{
        self:{
            href:String
            }
        }
    }, {collection:'entities'});

export default mongoose.model('entity', entitySchema);