import mongoose, { Schema } from "mongoose"
const Schem = mongoose.Schema

const Star = new Schema(
  {
    name: {type:String, required: true}
  },
  {timestamps:true, toJSON:{virtuals:true}}
)

export default Star