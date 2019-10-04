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

export default router
