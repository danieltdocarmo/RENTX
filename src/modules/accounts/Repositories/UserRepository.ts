import { getRepository, Repository } from "typeorm";
import { User } from "../Entities/User";
import { IDTOUser, IUserRepository } from "./Implementations/IUserRepository";


class UserRepository implements IUserRepository {
    constructor(private userRepository: Repository<User>
    ){
        this.userRepository = getRepository(User);
    }


    async create(data: IDTOUser): Promise<void> {
       
        const user = this.userRepository.create(data);
    
        await this.userRepository.save(user);
    
        }

    async findByEmail(email): Promise<User>{
        const userFinded = await this.userRepository.findOne(email);
        return userFinded;
    }

    async findByDriver_license(driver_license): Promise<User>{
        const driver_licenseFinded = await this.userRepository.findOne(driver_license);

        return driver_licenseFinded;
    }
    
    async list(): Promise<User[]> {
       return await this.userRepository.find();
    }

} export { UserRepository }