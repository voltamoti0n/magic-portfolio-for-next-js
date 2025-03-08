import { NextApiRequest, NextApiResponse } from "next";
// import * as cookie from "cookie";  // Comentado ya que no se usará

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Eliminamos la verificación de cookies y siempre devolvemos autenticado
  return res.status(200).json({ authenticated: true });
}
