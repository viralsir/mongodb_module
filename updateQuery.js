// load the module and create the reference of mongodb module 
let mongoClient = require("mongodb").MongoClient;
//url Details
let url ="mongodb://localhost:27017";
// connect the database 
mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected")
        let db = client.db("DBDemo");
        // City update using _id 
        db.collection("demotable").updateOne({_id:17},{$set:{city:"Amedabad",name:"Raj Deep"}},(err,result)=> {
            if(!err){
                    if(result.modifiedCount>0){
                        console.log("Record updated successfully")
                    }else {
                        console.log("Record not present")
                    }
                   
            }else {
                    console.log(err);
            }
            client.close();
        })
        
    }else {
        console.log(err);
    }
})