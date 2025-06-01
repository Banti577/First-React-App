require("dotenv").config()
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://patelvn2002:MyMongo%40123@cluster0.iqukl.mongodb.net/videoStreaming?retryWrites=true&w=majority&appName=Cluster0`,

   // `mongodb+srv://patelvn2002:PnCSBm6796oXXT06@cluster0.iqukl.mongodb.net/`,
    //`mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.iqukl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
   // `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.f9aqief.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected")) //If connected to DB
  .catch((err) => console.log(err)); //If not connected to DB