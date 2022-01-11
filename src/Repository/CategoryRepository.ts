import { Category } from "../model/Category";

interface IDTOCreateCategoryRepository{
    name: string;
    description: string;
}

class CategoryRepository{
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    findByName(name:string):Category{
        const findedCategory = this.categories.find(category => category.name === name);

        return findedCategory;
    }

    create({name, description}: IDTOCreateCategoryRepository): void{
      
        const category = new Category();
        Object.assign(category, {
        name,
        description
    });

    this.categories.push(category)
    }

    list(): Category[]{
        return this.categories;
    }
}

export {CategoryRepository};