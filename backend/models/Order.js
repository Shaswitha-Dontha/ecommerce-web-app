import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId: String,
    products: Array,
    total: Number,
    status: {
        type: String,
        default: "Pending"
    }
});

export default mongoose.model("Order", orderSchema);