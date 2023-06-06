const mongoose = require("mongoose");
const invoice = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    salesRepId: {
        type: String,
        required: true,
        unique: true,
    },
    salesmanName: {
        type: String,
        required: true

    },
    invoiceAmount: {
        type: Number,
        required: true
    },
    retailerId: {
        type: String,
        required: true
    },
    retailerPhoneNo: {
        type: String,
        required: true
    },
    retailerName: {
        type: String,
        required: true,
        unique: true,
    },
    invoiceDate: {
        type: Date,
        required: true

    },
    billNo: {
        type: String,
        required: true
    },
    pendingAmount: {
        type: Number,
        required: true
    },
    collectionDate: {
        type: Date,
        required: true
    }

})


mongoose.model("Invoice", invoice);