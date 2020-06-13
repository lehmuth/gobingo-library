import { SendChatMessage as SendChatMessagePayload } from "./send-chat-message";
import { BroadcastChatMessage as BroadcastChatMessagePayload } from "./broadcast-chat-message";

export const SendChatMessage = {
    type: "sendChatMessage",
    Payload: SendChatMessagePayload,
};
export const BROADCAST_CHAT_MESSAGE = {
    id: "broadcastChatMessage",
    Payload: BroadcastChatMessagePayload,
};