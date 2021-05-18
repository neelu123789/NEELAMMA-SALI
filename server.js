const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extented:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
  console.log(__dirname);
});


app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send("the answer is"+result);
 console.log(req.body.num1);
  res.send("n1+n2");
});
app.listen(3000,function(){
  console.log("server has started on port 3000")
});
