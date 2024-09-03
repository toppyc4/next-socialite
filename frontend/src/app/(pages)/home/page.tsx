'use client'
import { useState, useMemo } from 'react'
import EventItemFull from '@/components/Home/EventItemFull'
import EventItem from '../../../components/Search/EventItem'
import { EventFull } from '@/types/global'
const allClasses = `
    bg-red-500 
    bg-blue-500 
    bg-green-500 
    bg-yellow-500 
`;

const events: EventFull[] = [
    {eventId: 1,
name: "Bob's Birthday",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
country: "USA",
city: "New York",
minAttendees: 10,
maxAttendees: 20,
minCost: 20,
maxCost: 50,
eventType: [
    ["Conference", "red-500"],
    ["Workshop", "blue-500"]
]
},
{eventId: 2,
name: "Alice's Birthday",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
country: "USA",
city: "Los Angeles",
minAttendees: 10,
maxAttendees: 20,
minCost: 20,
maxCost: 50,
eventType: [
    ["Conference", "red-500"],
    ["Workshop", "blue-500"]
]
},
{eventId: 3,
name: "Charlie's Birthday",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
country: "USA",
city: "San Francisco",
minAttendees: 10,
maxAttendees: 20,
minCost: 20,
maxCost: 50,
eventType: [
    ["Conference", "red-500"],
    ["Workshop", "blue-500"]
]
},
]

export default function SearchPage(){    
    return <>
    <h1 className='text-3xl font-bold'>Sociate</h1>
    <h2 className="text-xl font-semibold my-2">Discover</h2>
    <div className='flex gap-4 overflow-x-auto w-full'>
        {events.map(event => <EventItem event={event}/>)}
    </div>
    <h2 className="text-xl font-semibold my-2">
    Events Near You
    </h2>
    <div className='flex gap-4 overflow-x-auto'>
        {events.map(event => <EventItemFull event={event}/>)}
    </div>
    <h2 className="text-xl font-semibold my-2">Events Based on Interest</h2>
    <div className='flex gap-4 overflow-x-auto'>
        {events.map(event => <EventItemFull event={event}/>)}
    </div>
    </>
}