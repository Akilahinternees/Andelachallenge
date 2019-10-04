import validateUser from './validateUser'
import blog from '../models/db'

class Users {
   addUser(req,res) {
        
        const { error } = validateUser(req.body);
        
        if(error) return res.status(400).json({'status':400,'message':error.details[0].message});
    
        const user = {
            id : blog.users.length + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender,
            jobRole: req.body.jobRole,
            department: req.body.department,
            address: req.body.address,
            username : req.body.username,
            password : req.body.password
        };

        // const { username, password } = user;
        

        blog.users.push(user);

        res.json({'status': 201, 'message': 'user created succesfully','UserIdentification':user });
        
    }
}

export default Users = new Users()