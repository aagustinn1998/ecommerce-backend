const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");

dbConnect();

app.use("/api/user", authRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
  });