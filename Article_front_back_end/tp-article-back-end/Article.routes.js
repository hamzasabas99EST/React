const router=require('express').Router();
let Article=require('./Article.model');

router.route('/').get((req,res)=>{
   Article.find()
   .then(students=>res.json(students))
   .catch(err=>res.status(400).json('Error'+err));
});


router.route('/add').post((req,res)=>{

  const nom=req.body.nom;
  const titre=req.body.titre;
  const sujet=req.body.sujet;
  const vote=req.body.vote;

  const newArticle=new Article({
      nom,
      titre,
      sujet,
      vote
  });

  newArticle.save()
  .then(()=>res.json('Article addd'))
  .catch(err=>res.status(400).json('Error'+err));
});

router.route('/:id').get((req,res)=>{
  Article.findById(req.params.id)
  .then(article=>res.json(article))
  .catch(err=>res.status(400).json('Error'+err));
});


router.route('/update/:id').post((req,res)=>{
  Article.findByIdAndUpdate({_id:req.params.id},{$inc:{vote:1}})
  .then(article=>{
      res.json('u did it')
})
});

module.exports=router;