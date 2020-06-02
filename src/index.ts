import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

//importando Routes
import IndexRoutes from './routes/index';
import BooksRoutes from './routes/books'

//inicialización
const app = express();
import('./config/moongose')


//settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    extname:'.hbs',
   // defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    helpers:require('./lib/helpers')
    
}))

app.set('view engine','.hbs');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//Routes
app.use('/',IndexRoutes)
app.use('/books', BooksRoutes)


//static files
app.use(express.static(path.join(__dirname,'public')))


//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on port: ${app.get('port')}`)
})