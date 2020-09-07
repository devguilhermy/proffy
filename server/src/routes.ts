import express from "express";
import ClassesController from "./controllers/Classes";
import ConnectionsController from "./controllers/Connections";

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

const router = express.Router();

router.get("/classes", classesController.filter);
router.get("/classes/all", classesController.show);
router.get("/classes/ids", classesController.find);
router.post("/classes", classesController.create);

router.post("/connections", connectionsController.create);
router.get("/connections", connectionsController.index);

export default router;
