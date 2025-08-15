import headerService from "../services/headerService.js";

const getHeaders = async (req, res) => {
  const header = await headerService.getHeaders();
  res.status(200).json({ success: true, data: header });
};

export { getHeaders };
