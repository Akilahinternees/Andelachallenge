import  express from 'express';
import Users from '../controller/User';

const router = express();

router.post('/api/v1/auth/userSignup/', Users.addUser);
router.post('/api/v1/auth/signin', Users.login);

export default router
