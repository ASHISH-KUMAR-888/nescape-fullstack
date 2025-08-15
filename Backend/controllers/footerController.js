import getAllFooters from "../services/footerService.js";

const getFooters = async (req, res) => {
  const footer = await getAllFooters();
  res.status(200).json({ success: true, data: footer });
};

export default getFooters;
