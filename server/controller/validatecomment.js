import Joi from 'joi';
const validateComment=(user)=>{
    const validation={
        comment:Joi.string().required(),
    };
    return Joi.validate(user, validation);
};
export default validateComment
