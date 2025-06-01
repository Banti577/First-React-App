import mongoose from "mongoose";


const databaseConnection = () => {
    mongoose.connect("mongodb+srv://patelvn2002:PnCSBm6796oXXT06@cluster0.iqukl.mongodb.net/").then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;