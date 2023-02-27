// @author {Thiago}
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

router.get(`/list`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/listShelves`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/passwordRecover`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/aboutUs`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/editProfile`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});

router.get(`/profile`, (req, res) => {
    res.sendFile("/public/index.html", { root: "./" });
});