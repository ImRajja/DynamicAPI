module.exports = (app) => {
  const objects = require("../controllers/controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", objects.create);

  // Retrieve all Tutorials
  router.get("/", objects.findAll);

  // Retrieve all published Tutorials
  router.get("/published", objects.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", objects.findOne);

  // Update a Tutorial with id
  router.put("/:id", objects.update);

  // Delete a Tutorial with id
  router.delete("/:id", objects.delete);

  // Create a new Tutorial
  router.delete("/", objects.deleteAll);

  app.use("/api/objects", router);
  // app.use("/", router);
};
