import headerModel from "../models/headerModel.js";

const getHeaders = async () => await headerModel.find();

export default {
  getHeaders,
};
