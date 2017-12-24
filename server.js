var express =require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Initialize app
var app = express();

//Mongo
var MongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:27017/techstitution';
var ObjectId = require('mongodb').ObjectId;

MongoClient.connect(mongoURL,function(err,database){

    
    if(err)
    {
        console.log(err);
    }
    else {
        console.log('MongoDB Connected');
    }
    qkmk = database.collection('qkmk');
});


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//main route
app.get('/',function(req,res){
    //res.sendFile(__dirname+'index');
    var title = "ITS ME";     
    res.render('index',{ title: title });
    
});


// rout for show
 app.get('/show',function(req,res){

    var title = "Lista me te dhena";
    qkmk.find({}).toArray(function(err,docs){
        if(err){
            console.log(err);
            
            
        }
        res.render('show',{title:title,docs:docs});
    });
     
    
 });

// rout for add
 app.post('/add',function(req,res){
    //res.render(__dirname+'/views/show.ejs');
    //res.redirect('/');
    var data = req.body;
    qkmk.insert(data,function(err,results){

        if(err)
        {
            console.log(err);
        }
        res.redirect('/')
    });
});



//route for edit 

app.get('/edit/:id',function(req,res){
    //res.render(__dirname+'/vies/edit.ejs');
    var title="Edito te dhenat";
    var id = ObjectId(req.params.id);
    qkmk.findOne({_id:id},function(err,doc){
        if(err){
            console.log(err);
            
            
        }
        res.render('edit',{title:title,doc:doc,id:id});
      // res.send(id);
    });
   // res.render('edit');

});
//
app.post('/update/:id',function(req,res){
    var data = req.body;
    var id = ObjectId(req.params.id)
    qkmk.updateOne( {_id:id},
    {$set:data},{strict:false}, function(err,result){
        if(err){
            console.log(err);
        }
        res.redirect('/show');
    });
});

//reout for update
// app.post('/update/:id',function(req,res){
//     //res.render(__dirname+'/views/show.ejs');
//     var data = req.body;
//     var id = ObjectId(req.params.id);
//     qkmk.updateOne({_id:id},{$set:data},function(err,result){
//         if(err)
//         {
//             console.log(err);
//         }
//         res.redirect('/show');
//     })




//
app.get('/delete/:id',function(req,res){
    //res.render(__dirname+'/views/show.ejs');

    var data = req.body;
    var id= ObjectId(req.params.id)
    qkmk.deleteOne({_id:id},function(err,result){
        if(err)
        {
            console.log(err);
        }
        res.redirect('/show');
    });
    
});






app.get('/exercise',function(req,res){
    var dataJSON = {
        "id":1,
        "project":"techstitution"
    };

    var projects=[
        {"id":1, name:"techsitution"},
        {"id":2, name:"techsperience"},
        {"id":3, name:"techforpolicy"}
    ]

    var persons = [

        {"id":1, name:"Alfa", address:[{ "state":"RKS", "city":"PRISHTINA"}]},
        {"id":2, name:"Beta", address:[{ "state":"RKS", "city":"TIRANA"}]},
        {"id":3, name:"Delta",address:[{ "state":"RKS", "city":"GJILAN"}]},

    ]

    res.render('exercise',{ data: dataJSON ,projects:projects,persons:persons});    
});


app.get('*',function(req,res){
    res.send("404 NOT FOUND");
});


app.listen(3001,function(){
    console.log("Navigate to http://localhost:3001");
});