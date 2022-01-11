import { CategoryRepository } from "../Repository/CategoryRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryService{
    constructor(private categoryRepository: CategoryRepository){}

    execute({name, description}: IRequest){
        const findedCategory = this.categoryRepository.findByName(name);
    
    if(findedCategory){
        throw new Error('Category already exists');
    }
    this.categoryRepository.create({name, description});
    }
    
}

export { CreateCategoryService };