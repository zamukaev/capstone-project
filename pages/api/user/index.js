import dbConnect from "../../../db/connect";
import User from "../../../db/models/user";
import checkAuth from "../../../middleware/checkAuth";
export default async function handler(req, res) {
    await dbConnect();
    console.log(req.body.status)

    if (req.method === "PUT") {
        checkAuth(req, res, async () => {
            try {
                const user = await User.findByIdAndUpdate(req.body.id, { $set: { status: req.body.status } })
                if (!user) {
                    return res.status(404).json({ message: "Not found" });
                }
                return res.status(200).json(user)
            } catch (error) {
                return res.status(500).json(error);
            }
        });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
