interface EventFull {
    eventId: number;
    name: string;
    image: string;
    country:string;
    city:string;
    minAttendees:number;
    maxAttendees:number|undefined;
    minCost:number;
    maxCost:number|undefined;
    eventType:Array<[String,String]>;
}
interface Event {
    eventId: number;
    name: string;
    image: string;
}
interface User {
    userId:number;
    username:string;
    userHandle:string;
    lastOnline:Date;
    profilePic:string;
}
interface Message {
    messageId:number;
    user:User;
    text:string;
    fromMe:boolean;
}
export type { EventFull, Event, User, Message }