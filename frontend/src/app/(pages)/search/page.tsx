'use client'
import { useState, useMemo } from 'react'
import ProfileItem from '../../../components/Search/ProfileItem'
import SearchBar from '../../../components/Search/SearchBar'
import EventItem from '../../../components/Search/EventItem'
interface Profile {
    profileId: number;
    name: string;
    handle: string;
    image: string;
}

const profiles = [
    {profileId: 1,
name: "Bob",
handle: "@bob123",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"},
{profileId: 2,
name: "Alice",
handle: "@alice123",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"},
{profileId: 3,
name: "Charlie",
handle: "@charlie123",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"},

]
const events = [
    {eventId: 1,
name: "Bob's Birthday",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"},
{eventId: 2,
name: "Alice's Birthday",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"},
{eventId: 3,
name: "Charlie's Birthday",
image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"},
]

export default function SearchPage(){
    var [search, setSearch] = useState("")
    
    const filteredProfiles = useMemo(() => profiles.filter(profile => profile.name.toLowerCase().includes(search.toLowerCase())), [profiles, search])
    const filteredEvents = useMemo(() => events.filter(event => event.name.toLowerCase().includes(search.toLowerCase())), [events, search])
    return <>
    <h1 className = "text-3xl font-bold mb-5">Find</h1>
    <SearchBar search = {search} setSearch = {setSearch}/>
    {filteredProfiles.length > 0 ? <h2 className = "my-4 text-xl font-bold">Profile Matches</h2> : null}
    <div className = "flex space-x-4 overflow-auto">
        {filteredProfiles
        .map(profile => <ProfileItem key =  {profile.profileId} profile = {profile}/>)}
    </div>
    {filteredEvents.length > 0 ? <h2 className = "my-4 text-xl font-bold">Event Matches</h2>:null}
    <div className = "flex space-x-4 overflow-auto">
        {filteredEvents
        .map(event => <EventItem key =  {event.eventId} event = {event}/>)}
    </div>
    </>
}