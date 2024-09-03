import Link from 'next/link'
import Image from 'next/image'
import { User } from '@/types/global'
    import Back  from '../Icons/Back'

const MessageNav: React.FC<{ user: User }> = ({ user }) => {
    return (
        <div className = "flex items-center gap-3 fixed top-0 bg-white py-3 drop-shadow-md w-full left-0 box-border px-4">
            <Back/>
            <Image className = "rounded-full border-solid border-orange-200 border-2" alt = {user.username} src = {user.profilePic} width = '50' height = '50'/>
            <div className='flex flex-col'>
                <span className='font-bold'>Shanice</span>
                <span className = 'text-gray-400'>Active 1h ago</span>
            </div>
        </div>
    );
}

export default MessageNav;