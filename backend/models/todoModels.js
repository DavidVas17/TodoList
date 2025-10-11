const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: " ",
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"], // valores válidos
        default: "medium",              // si no mandas nada, será medium
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
