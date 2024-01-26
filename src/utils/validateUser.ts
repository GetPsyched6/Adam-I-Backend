import Joi from 'joi';
import { UserData } from '../types/userTypes';

const userSchema = Joi.object({
  name: Joi.string().max(255).required(),
  email: Joi.string().email().max(255).required(),
  accountPassword: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,128}$/)
    .required(),
  confirmPassword: Joi.valid(Joi.ref('accountPassword')).required(),
}).with('accountPassword', 'confirmPassword');

const validateUserData = (data: UserData) => {
  const { error } = userSchema.validate(data);
  return error ? error.details[0].message : null;
};

export default validateUserData;
