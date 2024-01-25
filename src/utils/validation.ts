import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
});

const validateUserData = data => {
  const { error } = userSchema.validate(data);
  return error ? error.details[0].message : null;
};

export default validateUserData;
