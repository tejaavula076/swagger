const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const basicAuth = require("express-basic-auth");
const { router } = require("./routes/app.routes");
const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "QuoteMaker",
      version: "1.0.0",
      description: "Quotemaker API",
    },
    servers: [
      {
        url: "http://localhost:8082",
      },
    ],
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpecs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(8082, () => console.log(`Server is running on port 8082`));
