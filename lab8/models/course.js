const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    maxStudents: {
      type: Number,
      default: 0,
      min: [1, "Le nombre d'étudiants ne peut être inférieur à 1"],
    },
    cost: {
      type: Number,
      default: 0,
      min: [0, "Le cours ne peut pas avoir un coût négatif"],
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        dateEnrolled: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
