import { publishMessage } from "../../lib/pubsub";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, price } = req.body;
    try {
      const messageId = await publishMessage("StoreMenuItems", {
        name,
        price,
      });
      res
        .status(200)
        .json({ message: "Menu item price update published", messageId });
    } catch (error) {
      console.error(`Error updating menu item: ${error.message}`);
      res
        .status(500)
        .json({ error: "Failed to publish menu item price update." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
