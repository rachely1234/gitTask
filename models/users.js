const mongoose = require('mongoose')
const config=require('../config')
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));
  
const UsersSchema=new mongoose.Schema({
    userId:Number,
    name:String,
    email:String,
    phone:String

})

module.exports=mongoose.model('Uswwer',UsersSchema)


const Joi=require('joi');

const emailSchema = Joi.object({
    email: Joi.string().custom((value, helpers) => {
        if (!value.includes('@')) {
            return helpers.error('any.invalid');
        }
        return value;
    }, 'custom email validation').required()
});
const data = { email: 'example.com' };
const { error, value } = emailSchema.validate(data);
if (error) {
    console.error(error.details[0].message);
} else {
    console.log('Validation passed. Email:', value.email);
}
