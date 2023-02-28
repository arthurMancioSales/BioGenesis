// @author {Thiago}
// @coauthor {Arthur}
import { Router } from "express";
import authenticateUser from "../lib/authenticateUser.js";

export const router = Router();

router.get(`/`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/bookshelves`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/login`, authenticateUser, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/register`, authenticateUser, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/list`, authenticateUser, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/listShelves`, authenticateUser, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/aboutUs`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/editProfile`, authenticateUser, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/profile`, authenticateUser, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});