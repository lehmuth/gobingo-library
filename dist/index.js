"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rooms_1 = require("./rooms/rooms");
Object.defineProperty(exports, "Rooms", { enumerable: true, get: function () { return rooms_1.Rooms; } });
var player_1 = require("./rooms/schemas/player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return player_1.Player; } });
exports.BingoRoomLib = __importStar(require("./rooms/bingo/bingo-room"));
exports.EntryRoomLib = __importStar(require("./rooms/entry/entry-room"));
