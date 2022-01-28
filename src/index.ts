import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
const app = express();
const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, () => console.log(`Running on PORT http://localhost:` + PORT));
