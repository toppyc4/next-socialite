import { Message } from "@/types/global";
import MessageBubble from "./MessageBubble";
import Image from 'next/image';
const MessageComponent: React.FC<{ messages: Array<Message>, fromMe:boolean }> = ({ messages, fromMe }) => {
    const user = messages[0].user;
    return (
        <div className={`flex flex-row gap-2 ${fromMe ? "justify-end" : ""}`}    >
            {!fromMe && <Image className="rounded-full border-2 border-orange-300" alt = {user.username} width = "50" height = "50"src = {user.profilePic} />}
            <div className={`flex flex-col gap-1 ${fromMe?"items-end":""}`}>
                {messages.map((message, index) => (
                    <MessageBubble key={index} message={message} fromMe={fromMe} />
                ))}
            </div>
        </div>
    )
}

export default MessageComponent;