const Joi = require("joi");

const talkValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(10).required(),
        message: Joi.string().min(3).required(),
    });
    return schema.validate(data);
};
const roomChatValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        content: Joi.string().min(1).required(),
    });
    return schema.validate(data);
};
const chatValidate = (data) => {
    const schema = Joi.object({
        roomChat: Joi.string().min(3)
        // .required()
        ,

        name: Joi.string().min(3)
        // .required()
        ,
        content: Joi.string().min(1)
        // .required()
        ,
    });
    return schema.validate(data);
};
const fundingPersonalInformationValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(10).required(),
        phone: Joi.string().min(10).required(),
    });
    return schema.validate(data);
};
const fundingAdditionalInformationValidate = (data) => {
    const schema = Joi.object({
        tripleRevenue: Joi.boolean().required(),
        usePhone: Joi.boolean().required(),
        believeAI: Joi.boolean().required(),
    });
    return schema.validate(data);
};
const fundingCompanyInformationValidate = (data) => {
    const schema = Joi.object({
        yourCompany: Joi.boolean().required(),
        businessPlans: Joi.boolean().required(),
        file: Joi.string()
    });
    return schema.validate(data);
};
module.exports = { talkValidate,roomChatValidate,chatValidate, fundingPersonalInformationValidate, fundingCompanyInformationValidate ,fundingAdditionalInformationValidate}
