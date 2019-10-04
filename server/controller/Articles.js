
import validateArticle from './validate'
import blog from '../models/db'


class Articles {
   
  addArticle (req,res){
        const {error}=validateArticle(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
        const article={
            id:blog.articles.length + 1,
            title:req.body.title,
            content:req.body.content,
            createdOn:new Date(),
            
        };
        blog.articles.push(article);
        res.json({'status': 200, 'message': 'Article created succesfully','ArticleIdentification':article,});
        
    };  
    
    getallArticles (req,res){
        res.json({'status':200,'message':'success','data':blog.articles});
    };
    getoneArticle  (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).send('given id was not found');
        res.json({'status':200,'message':'success','data':article});
    };    
    
     
}

export default Articles = new Articles();
