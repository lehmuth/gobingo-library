import { Schema, type } from "@colyseus/schema";

export class Player extends Schema {
    @type("string")
    username: string;

    constructor(username: string) {
        super();
        this.username = username;
    }
}