import express from "express";
import axios from "axios";
import { API_KEY } from "../utils/constants";

export const router = express.Router();

type T = {
  accessToken: string;
  section: string;
  filters: string;
};

const get = async ({ accessToken, section, filters }: T) => {
  return await (
    await axios.get(
      `https://youtube.googleapis.com/youtube/v3/${section}?${filters}&key=${API_KEY}&access_token=${accessToken}`
    )
  ).data;
};

router.post("/:section", async (req, res) => {
  const { accessToken, section, filters } = req.body.data;

  try {
    res.send({ data: await get({ accessToken, section, filters }) });
  } catch (e: any) {
    console.error(e);
    res.status(403).send(e);
  }
});

module.exports = router;
