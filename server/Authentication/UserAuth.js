import bcrypt from "bcrypt";

//Hashing A Password//
export const hashPassword =async (password)=>{
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password , saltRounds)
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}
//Comparing A Password//
export const comparePassword = async(password, hashedPassword)=>{
   return bcrypt.compare(password, hashedPassword)
}
