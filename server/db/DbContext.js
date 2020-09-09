import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import GalaxySchema from "../models/Galaxy";
import MoonSchema from "../models/Moon";
import PlanetSchema from "../models/Planet";
import StarSchema from "../models/Star";
class DbContext {
  Stars = mongoose.model("Star", StarSchema)
  Planets = mongoose.model("Planet", PlanetSchema)
  Moons = mongoose.model("Moon", MoonSchema)
  Galaxys = mongoose.model("Galaxy", GalaxySchema)
  Values = mongoose.model("Value", ValueSchema);
}

export const dbContext = new DbContext();
