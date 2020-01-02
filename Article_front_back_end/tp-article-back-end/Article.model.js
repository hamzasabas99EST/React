const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ArtcileShema=new Schema({
    nom:{type:String,required:true},
    titre:{type:String,required:true},
    sujet:{type:String,required:true},
    vote:{type:Number,required:false}
    
});

const Article=mongoose.model('Article',ArtcileShema);

module.exports=Article;