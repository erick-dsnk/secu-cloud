import bodyParser from "body-parser";
import express from "express";
import constants from "./constants";
import router from "./router";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(constants.PORT, () => {
  console.log(`Server running on port ${constants.PORT}`);
});
