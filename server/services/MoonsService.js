import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService{
  async find(query) {
    return await dbContext.Moons.find(query)
  }
  async findById(id) {
    let moon = await dbContext.Moons.findById(id)
    if (!moon) {
      throw new BadRequest("invalid id")
    }
    return moon
  }
  async create(moon) {
    return await dbContext.Moons.create(moon)
  }
  async edit(update) {
    let updated = await dbContext.Moons.findOneAndUpdate({_id: update.id}, update, {new:true})
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Moons.findOneAndDelete({_id:id})
    if (!deleted){
      throw new BadRequest("invalid id")
    }
  }

}

const moonsService = new MoonsService();
export default moonsService

