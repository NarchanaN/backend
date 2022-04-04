const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category_controller');

const multer = require('multer');
var storage = multer.diskStorage({
    destination:'public/images',
    filename: function(req,file,cb){
        cb(null,Date.now()+''+file.originalname);
    }
})
var upload = multer({stroage: storage});

router.post('/addCategory',upload.single('cat_image'),categoryController.add);
router.get('/viewCategory',categoryController.view);



module.exports = router;

