export interface Message {
    id: number;
    senderId: string;
    senderUsername: string;
    recipientId: string;
    recipientrUsername: string;
    content: string;
    dateRead: Date;
    messageSent: Date;
}
