const mongoose = require('mongoose');
const { db, collection } = require('moongose/models/user_model');
const mongoURI = 'mongodb+srv://gofood:mernstack@cluster0.avpfogo.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, async (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fetcheddata = await mongoose.connection.db.collection("food_items");
            fetcheddata.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.food_category = catData
                    }
                })
                // if(err) console.log(err);
                // global.food_items =data;

            })
        }



    });
}
module.exports = mongoDB;
