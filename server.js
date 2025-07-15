const express = require("express");
const unblocker = require("unblocker");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

// prefix オプションは必須です（最後はスラッシュで終わる文字列）
app.use(
  unblocker({
    prefix: "/proxy/",
  })
);

app.listen(port, () => {
  console.log(`Proxy running at http://localhost:${port}`);
});
