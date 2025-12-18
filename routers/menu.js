import express from "express"
import menuController from "../controllers/menuController.js"
import menu from "../dati.js";
const router = express.Router();

// INDEX
router.get("/", menuController.index);

// SHOW
router.get("/:id", menuController.show);

// STORE
router.post("/", menuController.store);

// UPDATE
router.put("/:id", menuController.update);

// MODIFY
router.patch("/:id", menuController.modify);

// DESTROY
router.delete("/:id", menuController.destroy);

export default router;