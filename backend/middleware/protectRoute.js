import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Não autorizado - Nenhum token fornecido" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Não autorizado - Token inválido" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Erro no protectRoute middleware", error.message);
    return res.status(500).json({ error: "Erro interno do servidor!" });
  }
};

export default protectRoute;
