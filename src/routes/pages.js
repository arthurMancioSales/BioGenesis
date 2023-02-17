/**
 * @author {Thiago}
 */

import { Router } from "express";

export const router = Router();

router.get(`/`, (req, res) => {
  res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/bookshelves`, (req, res) => {
  res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/page2`, (req, res) => {
  res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/page3`, (req, res) => {
  res.sendFile("/public/index.html", { root: "./" });
});
