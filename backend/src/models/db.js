const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/aircnc-copiado",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

require("./Booking");
require("./Spot");
require("./User");
