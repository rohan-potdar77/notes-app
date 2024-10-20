import mongoose from "mongoose";

const Note = new mongoose.Schema(
  {
    id: String,
    note: String,
  },
  { timestamps: true }
);

export default mongoose.model("note_collection", Note);
