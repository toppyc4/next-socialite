'use client'
import Link from 'next/link'
import Image from 'next/image'
import Search from '../Icons/Search'

const ProfileItem: React.FC<{ search: string, setSearch: Function }> = ({ search,setSearch }) => {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <div className = "w-full mx-auto relative">
            <input type = "text" 
                    placeholder = "Search Sociate"
                    className = "border-2 border-gray-300 py-1 px-4 rounded-lg w-full" onInput = {handleInput} value = {search}/>
            <Search className = "absolute right-1 top-1/2 -translate-y-1/2"/>
        </div>
        
    );
}

export default ProfileItem;