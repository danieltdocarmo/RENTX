import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";
import { ICategoryRepository, IDTOCreateCategoryRepository } from "./Implementations/ICategoriesRepository";


class CategoriesRepository implements ICategoryRepository{
    
    private categoriesRepository: Repository<Category> 
    
    constructor(){
        this.categoriesRepository = getRepository(Category);
    }

   async findByName(name:string):Promise<Category>{
        const findedCategory = await this.categoriesRepository.findOne({name});
        return findedCategory;
    }

    async create({name, description}: IDTOCreateCategoryRepository): Promise<void>{
        const findedCategory = await this.findByName(name);
        
        if(findedCategory){
            throw new Error('Category already exists!');
        }

        const category = this.categoriesRepository.create({name, description});

        await this.categoriesRepository.save(category);
    }

   async list(): Promise<Category[]>{
        return this.categoriesRepository.find();
    }
}

export {CategoriesRepository};