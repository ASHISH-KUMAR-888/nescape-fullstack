import footerModel from "../models/footerModel.js";

const getAllFooters = async ()=> await footerModel.find()

export default getAllFooters 