import { Response } from "express";
import { container } from "tsyringe";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController{
    
    

    async handle( response: Response){
        
        const listCategoryService = container.resolve(ListCategoryService);
        
        const categoryList = await listCategoryService.execute();
    
        response.status(200).json(categoryList);
    }

} export { ListCategoryController };

