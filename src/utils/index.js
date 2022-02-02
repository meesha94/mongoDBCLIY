exports.addMovie = async (collection, movieObj) => {
    await collection.insertOne(movieObj);
};

exports.findMovie = async (collection) => {
     
        const results = await collection.find().toArray();
        console.log(`found movies  =>`, results); 
    
};

exports.updateMovie = async (collection) => {
     await collection.updateOne(
        {title:"spiderman"},
        {
            $set: {"rating":"9"}
        }
    );
};

exports.deleteMovie = async (collection) => {
    await collection.deleteOne({title:"spiderman"})
};