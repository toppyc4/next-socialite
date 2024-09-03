import Link from 'next/link'
import Image from 'next/image'
import Profile from '../Icons/Profile'
import Ticket from '../Icons/Ticket'
import Tag from './Tag'
import { EventFull } from '@/types/global.ts'

const EventItemFull: React.FC<{ event: EventFull }> = ({ event }) => {
    return (
        <Link href={`/event/${event.eventId}`} className="shrink-0 w-72 flex flex-col items-center relative overflow-hidden transition-opacity duration-300 hover:opacity-40">
            <div className = "relative w-full h-44">
                
                <Image src={event.image} alt={event.name} fill className='object-cover rounded-md drop-shadow-md'/>
                <div className='absolute top-0 right-0 w-full flex flex-wrap p-2 gap-2 box-border'>
                    {event.eventType.map((type,index) => <Tag key={index} text={type[0]} colorClass={type[1]}/>)}
                </div>
            </div>
            <div className = "flex flex-col w-full">
                <div className='grid w-full gap-4 items-center grid-cols-3 mt-2'>
                    <h3 className = "font-bold text-lg col-span-2">{event.name}</h3>
                    <p className='text-sm text-gray-400 h-fit shrink-0 col-span-1'>{event.country},{event.city}</p>
                </div>
                <div className='flex flex-row w-full items-center gap-2'>
                    <Profile/>
                    <p className='text-sm text-gray-400'>{event.maxAttendees?`${event.minAttendees}-${event.maxAttendees}`:event.minAttendees} Attendees</p>
                </div>
                <div className='flex flex-row w-full items-center gap-2'>
                    <Ticket/>
                    <p className='text-sm text-gray-400'>{event.maxCost?`$${event.minCost}-$${event.maxCost}`:`$${event.minCost}`}</p>
                </div>
            </div>
        </Link>
    );
}

export default EventItemFull;