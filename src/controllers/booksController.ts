import {Request,Response} from 'express'
import BookModel, {Book} from '../models/Books';
//BookModel - guardar base de datos
//{Book} , la inteface que me permite hacer la validacióm

class BooksController{
    public async createBook(req:Request, res:Response){
        const {title,author,isbn}= req.body
        await BookModel.create(new BookModel({title,author,isbn}))
        res.redirect('/books')
        console.log(req.body)

    }
    //.lean()
    public async getAllBooks(req:Request, res:Response):Promise<void>{
        const books: Book[] = await BookModel.find({}).lean()
        res.render('books/index', {
            title: 'Books', books
        })
    }
    
    public async deleteBook(req: Request, res: Response){
        
        await BookModel.findByIdAndDelete(req.params.id);
        console.log(req.params.id)
        res.redirect('/books')
    }
    
    
    
    
    public async editBook(req: Request, res: Response){
        const { id } = req.params;
        const updateBook = await BookModel.findById(id);
        console.log(updateBook)
        res.render('books/edit');
    }//REPARAR
    
    
    public renderFormBook(req:Request , res:Response):void{
        res.render('books/add'),{
            title: 'Add a book'
        }
    }
}
//REPARAR
/*    public async updateBook(req: Request, res: Response){
    const { id } = req.params;
    await BookModel.findByIdAndUpdate(id,{
        ...req.body
    },{new:true});
    console.log(id)
    res.redirect('/books')
}  */
export const booksController= new BooksController();
/*      const {title,author,isbn}= req.body
     const book: Book = new BookModel({title,author,isbn})
     await book.save() */
//res.send('recibido')
/* res.render('books/index', {
    title: 'Books'
}) */