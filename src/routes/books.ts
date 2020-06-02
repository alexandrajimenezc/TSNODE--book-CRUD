import {Router} from 'express';
const router:Router =Router();

import {booksController} from '../controllers/booksController'


router.post('/add',booksController.createBook)
router.get('/',booksController.getAllBooks)
router.get('/add',booksController.renderFormBook)
router.get('/delete/:id',booksController.deleteBook)
router.get('/edit/:id',booksController.editBook)
//router.post('/edit/:id',booksController.updateBook)
export default router;