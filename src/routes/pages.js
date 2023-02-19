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

router.get(`/login`, (req, res) => {
  res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/register`, (req, res) => {
  res.sendFile("/public/index.html", { root: "./" });
});