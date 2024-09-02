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
    eventType:Array<string>;
}

export type { EventFull }