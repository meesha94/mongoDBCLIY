const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, findMovie, results, updateMovie, results1, deleteMovie} = require("./utils");

const app = async (yargsObj) => {
    try {
        const collection = await connection();
        if (yargsObj.add) {
            await addMovie(collection, {title:yargsObj.title, actor:yargsObj.actor});
            console.log("Movie added") 
        } else if(yargsObj.find) {
            await findMovie(collection, {title:yargsObj.title, actor:yargsObj.actor}); 
            console.log(results)

        } else if (yargsObj.update){
            await updateMovie(collection, {title:yargsObj.title, actor:yargsObj.actor});
            console.log("movie updated")
        } else if (yargsObj.delete) {
            await deleteMovie(collection, {title:yargsObj.title, actor:yargsObj.actor});
            console.log("Movie deleted")

        } else {
            console.log("incorrect command");
        }
        client.close();
    } catch (error) {
        console.log(error)
    }
}
app(yargs.argv);