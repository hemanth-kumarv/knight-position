"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// CORS, JSON and URL Encoded Middlewares
const cors_1 = __importDefault(require("cors"));
const availableMoves_1 = __importDefault(require("./availableMoves"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("assets"));
app.set("view engine", "pug");
app.set("views", path_1.default.join(__dirname, "assets"));
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { position } = req.query;
    const activeCells = (0, availableMoves_1.default)(position); // Get available moves from position
    res.render("chessBoard", {
        currentPosition: position,
        activeCells,
        setCurrentPosition: (col, row) => {
            window.history.replaceState("", "", `?position=${col + row}`);
            window.location.reload();
        },
    });
}));
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
