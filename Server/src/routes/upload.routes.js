const {Router} = require("express");

const router = Router();

const Multer = require("multer");

const UploadControllers = require("../controllers/upload");

const storage = new Multer.memoryStorage();

const upload = Multer({storage});

router.post("/", upload.single("file"),  UploadControllers.uploadImage);

module.exports = router;