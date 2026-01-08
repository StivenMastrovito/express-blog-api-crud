import express from "express"
import menuController from "../controllers/menuController.js"
import menu from "../dati.js";
import controlloId from "../middlewares/controlloId.js";
const router = express.Router();

// INDEX
router.get("/", menuController.index);

// SHOW
router.get("/:id", controlloId, menuController.show);

// STORE
router.post("/", menuController.store);

// UPDATE
router.put("/:id", controlloId, menuController.update);

// MODIFY
router.patch("/:id", controlloId, menuController.modify);

// DESTROY
router.delete("/:id", controlloId, menuController.destroy);

export default router;