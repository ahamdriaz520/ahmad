import mongoose from "mongoose";
import colors from "colors";

const dbconn = async()=>{
    try {
       const DB = await mongoose.connect(process.env.DB_URL)
        console.log(
            `Database connection established , and working on :` .bgMagenta, DB.connection.host .bgGreen);
    } catch (error) {
        console.log(`Error in DB connection ` , error)
    }
}
export default dbconn;