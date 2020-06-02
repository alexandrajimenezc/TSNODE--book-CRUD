import mongoose from 'mongoose';
import {mongodb} from '../config/keys'

mongoose.connect(mongodb.URI,{
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology: true ,
useFindAndModify:false
})
.then(()=>console.log('db conectada'))
.catch(error =>console.log(error))