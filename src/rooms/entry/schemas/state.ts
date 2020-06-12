import { Schema, type, MapSchema } from "@colyseus/schema";
import { Player } from "../../schemas/player";

export class EntryRoomState extends Schema {
    @type({map: Player})
    users = new MapSchema<Player>();
}