'use client'
import Link from 'next/link'
import Image from 'next/image'
interface Profile {
    profileId: number;
    name: string;
    handle: string;
    image: string;
}

const ProfileItem: React.FC<{ profile: Profile }> = ({ profile }) => {
    return (
        <Link href={`/profile/${profile.profileId}`} className="flex flex-col items-center">
            <Image src={profile.image} alt={profile.name} width={96}
            height={96} className = "rounded-full object-cover"/>
            <p className="mt-2 text-center text-sm font-medium text-gray-800 truncate w-20">{profile.name}</p>
            <p className="text-center text-xs text-gray-500">{profile.handle}</p>
        </Link>
    );
}

export default ProfileItem;