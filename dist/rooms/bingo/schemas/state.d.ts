import { Schema, MapSchema } from "@colyseus/schema";
import { Player } from "../../schemas/player";
export declare class BingoRoomState extends Schema {
    players: MapSchema<Player>;
}
