const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FundingAdditionalInformationSchema = new Schema({
    tripleRevenue: {
        type: Boolean,
        required: true,
    },
    usePhone: {
        type: Boolean,
        required: true,
    },
    believeAI: {
        type: Boolean,
        required: true,
    }
    
});
module.exports = mongoose.model("FundingAdditionalInformation", FundingAdditionalInformationSchema);


