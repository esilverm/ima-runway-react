// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { HostedModel } from "@runwayml/hosted-models";

export default async (req, res) => {
  const model = new HostedModel({
    url: "https://new-yorker-style-gan-e7697fe9.hosted-models.runwayml.cloud/v1/",
    token: process.env.RUNWAY_TOKEN,
  });

  const inputs = {
    z: Array.from({ length: 512 }, () => Math.random()),
  };

  const { image } = await model.query(inputs);

  // Use the following to send image to endpoint
  // const decoded = image.replace("data:image/jpeg;base64,", "");
  // const buffer = Buffer.from(decoded, "base64");

  // res.writeHead(200, {
  //   "Content-Type": "image/jpeg",
  //   "Content-Length": buffer.length,
  // });

  // res.end(buffer);

  res.status(200).json({
    model: "new-yorker-style-gan",
    image,
  });
};
