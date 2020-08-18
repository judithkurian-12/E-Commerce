const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;

let _db;	

const MongoConnect=callback=>{
	MongoClient.connect("mongodb+srv://judith:T2Splacement2020@cluster0-fupaz.mongodb.net/shop?retryWrites=true&w=majority",{useUnifiedTopology: true,
useNewUrlParser: true}).then(client=>{
	console.log("Connected !");
	_db=client.db();
	callback();
}).catch(err=>{
	console.log(err);
	throw err;
});
};

const getdb=()=>{
	if(_db)
	{
		return _db;
	}
	throw "No database found";
}

exports.MongoConnect=MongoConnect;
exports.getdb=getdb;	