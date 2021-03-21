import { Router } from 'express';
import multer from 'multer';
import uploadUserConfig from './config/upload-users';
import uploadProductsConfig from './config/upload-products';
import UsersController from './controllers/UsersController';
import CategoriesClothes from './controllers/CategoriesClothesController';

const routes = Router();
const uploadUser = multer(uploadUserConfig);
const uploadProduct = multer(uploadProductsConfig);

routes.post('/users', uploadUser.array('imageProfile'), UsersController.create);
routes.get('/users', UsersController.index);
routes.post('/categories/clothes', uploadProduct.array('imageProduct'), CategoriesClothes.create);
routes.get('/categories/clothes', CategoriesClothes.index);

export default routes;