import { Schema, MapSchema } from "@colyseus/schema";
import { Player } from "../../schemas/player";
export declare class EntryRoomState extends Schema {
    users: MapSchema<Player>;
}
