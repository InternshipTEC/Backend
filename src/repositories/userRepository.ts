import { getManager, getRepository } from "typeorm";
import { User } from "../models/User";
import { validate } from "class-validator"


const getUserById =  async (id:String) : Promise<User> => {
    try{
        const user = await getRepository(User).findOne({id});
        return user;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

const getAllUser = async () : Promise<User[]> => {
    try{
        const allUser = await getRepository(User).find();
        return allUser;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getUserByEmail = async (email:String) : Promise<User>=> {
    try{
        const users = await getRepository(User) 
        .createQueryBuilder("user")
        .where("user.email = :email", {email})
        .getOne();
        return users;
    } catch(err){
        console.log(err);
        return null;
    }

}

const createUser = async (props:User) : Promise<User> => {
    try{
        let user = new User();
        user =  props; 
        const errors = await validate(user);
        if(errors.length > 0){
            throw new Error("Validation failed!");
        } else {
            await getManager().save(user); 
        }
        return user;
    } catch(err) {
        console.log(err);
        return null;
    }

}

const updateUser = async (id:String, props:User) : Promise<User> => {
    try{
        const user = await getRepository(User).findOne({id});
        const new_user = getRepository(User).merge(user, props);
        return new_user; 
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {getUserByEmail, getUserById, getAllUser, createUser, updateUser}