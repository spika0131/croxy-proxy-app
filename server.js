const express = require("express");
const Unblocker = require("unblocker");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Renderが指定するポートを使う

// unblockerの設定
const unblocker = Unblocker({
  prefix: "/unblocker/", // プロキシ用パスのプレフィックス
});

app.use(unblocker);

// トップページはviews/index.ejsを表示
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

// 静的ファイル（CSSなど）をpublicフォルダから配信
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
