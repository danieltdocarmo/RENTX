import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {CreateCategoryService } from './CreateCategoryService';

class CreateCategoryController{
   
    async handle(request:Request, response:Response ){
        const {name, description} = request.body;
   
        const createCategoryService = container.resolve(CreateCategoryService);

        await createCategoryService.execute({name, description});
    
        response.status(201).send();
    }

}  export {CreateCategoryController};