import ProfileItem from '../../components/Search/profileItem'

export default function SearchPage(){
    return <>
    <h2 className = "my-4 text-2xl font-bold">Recent</h2>
    <div className = "flex space-x-4">
        <ProfileItem profile = {{profileId: 1,
    name: "Bob",
    handle: "@bob123",
    image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"}}/>
    <ProfileItem profile = {{profileId: 1,
    name: "Bob",
    handle: "@bob123",
    image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"}}/>
    <ProfileItem profile = {{profileId: 1,
    name: "Bob",
    handle: "@bob123",
    image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"}}/>
    </div>
    </>
}