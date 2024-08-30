'use client'
import Link from 'next/link'
import Image from 'next/image'
interface Event {
    eventId: number;
    name: string;
    image: string;
}

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
    return (
        <Link href={`/event/${event.eventId}`} className="shadow-lg flex flex-col items-center relative overflow-hidden rounded-md transition-opacity duration-300 hover:opacity-40">
            <div className = "relative w-28 h-44">
                <Image src={event.image} alt={event.name} fill/>
            </div>
            <p className="
            w-full
            bg-gradient-to-b from-transparent to-white
            py-3
            px-2
            absolute
            bottom-0
            mt-2 text-center text-sm font-medium text-gray-800 truncate w-20
            ">{event.name}</p>
        </Link>
    );
}

export default EventItem;