import  express from 'express';
import Users from '../controller/User';

const router = express();

router.post('/api/v1/auth/userSignup/', Users.addUser);

export default router
