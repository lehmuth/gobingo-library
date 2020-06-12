import { Schema, type, MapSchema } from "@colyseus/schema";
import { Player } from "../../schemas/player";

export class State extends Schema {
    @type({map: Player})
    users = new MapSchema<Player>();
}