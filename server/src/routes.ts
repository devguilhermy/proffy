import express from "express";
import ClassesController from "./controllers/Classes";
import ConnectionsController from "./controllers/Connections";

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

const router = express.Router();

router.post("/classes", classesController.create);
router.get("/classes", classesController.index);

router.post("/connections", connectionsController.create);
router.get("/connections", connectionsController.index);

export default router;