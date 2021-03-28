const router = require("express").Router();
const notFound = require("../middleware/notFound");
const CategoryController = require("../controllers/CategoryController");
const AboutController = require("../controllers/AboutController")
const ContactController = require("../controllers/ContactController")
const HomeController = require("../controllers/HomeController")

router.get("/categories",CategoryController.index);
router.post("/categories",CategoryController.store);
router.get("/categories/:course_id",CategoryController.edit);
router.delete("/categories/:course_id",CategoryController.destroy);

router.get("/about",AboutController.index);

router.get("/contact",ContactController.index);

router.get("/",HomeController.index);



router.get("/*",notFound,(request,response)=>{
    response.json({
        "message":"Not Found"
    });
});

module.exports = router