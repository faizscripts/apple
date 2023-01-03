import { serialize } from "cookie";

export default async function handler(req, res) {
    try {
        res.setHeader("Set-Cookie", serialize("token", "", {
            httpOnly: true,
            path: "/",
            expires: new Date(0)
        }))
        res.status(200).end()
    } catch (e) {
        console.log(e);
        res.status(500).end()
    }

}
