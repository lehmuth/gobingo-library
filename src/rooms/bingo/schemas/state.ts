import { Schema, type, MapSchema } from "@colyseus/schema";
import { Player } from "../../schemas/player";

export class BingoRoomState extends Schema {
    @type({map: Player})
    players = new MapSchema<Player>();
}