import type { NextApiRequest, NextApiResponse } from "next";

type Data = { ok: boolean; ts: number; env: "preview" | "production" | "dev" };

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  const env = (process.env.VERCEL_ENV as Data["env"]) ?? "dev";
  res.status(200).json({ ok: true, ts: Date.now(), env });
}
