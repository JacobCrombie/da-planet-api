import mongoose, { Schema } from "mongoose"
const Schem = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Star = new Schema(
  {
    name: {type:String, required: true},
    galaxy:{type:ObjectId, ref: "Galaxy", required:true}
  },
  {timestamps:true, toJSON:{virtuals:true}}
)

export default Star