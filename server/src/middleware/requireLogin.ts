import { Request, Response, NextFunction } from "express";


export default function requireLogin(req: Request, res: Response, next: NextFunction) {
    console.log(req.session.user)
    if (req.session.user) {
      next();
    } else {
      res.status(401).json({ message: "로그인이 필요합니다" });
    }
  }

