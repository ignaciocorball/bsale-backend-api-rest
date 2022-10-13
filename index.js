const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const productsRoutes = require("./routes/products-route");
const categoriesRoutes = require("./routes/categories-route");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Patagonia Shop API RESTful listening at http://127.0.0.1:${port}`);
});
