import  express from 'express';
import Users from '../controller/User';
import Articles from '../controller/Articles';

const router = express();

router.post('/api/v1/auth/userSignup/', Users.addUser);
router.post('/api/v1/auth/signin', Users.login);
router.post('/api/v1/articles', Articles.addArticle);
router.get('/api/v1/Viewarticles', Articles.getallArticles);
router.get('/api/v1/ViewSpecificarticle/:id', Articles.getoneArticle);
router.delete('/api/V1/Deletearticles/:id', Articles.deleteArticle);
router.put('/api/V1/Updatearticles/:id', Articles.updateArticle);
router.get('/api/v1/getusers', Users.getallUsers);
router.get('/api/v1/getOneuser/:id', Users.getOneuser);
router.post('/api/V1/commentarticles/:id', Articles.commentArticle)

export default router
