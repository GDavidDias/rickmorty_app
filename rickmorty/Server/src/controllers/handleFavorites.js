let myFavorites = [];

const postFav = function(req, res){
    let char=req.body;
    // console.log("en postFav -char : ",char)
    myFavorites.push(char);
    // console.log("en postFav - myFavorites ", myFavorites)
    return res.status(200).json(myFavorites);
};

const deleteFav = function(req, res){
    let {id} = req.params;
    console.log("en deleteFav - id: ",id)
    console.log("en deleteFav - myFavorites: ",myFavorites)
    let filterFav = myFavorites.filter((char)=>{return char.id!==id});
    console.log("filterFav: ",filterFav)
    myFavorites = filterFav;
    res.status(200).json(myFavorites);
};


module.exports = {postFav, deleteFav};