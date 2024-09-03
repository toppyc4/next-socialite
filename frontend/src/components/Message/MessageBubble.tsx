import {Message} from '@/types/global'
interface MessageBubbleProps {
  message: Message;
  fromMe: boolean;
}
const MessageBubble: React.FC<MessageBubbleProps> = ({ message, fromMe }) => {
    return (
        <div className={`p-3 rounded-lg w-fit ${fromMe ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
            <p>
                {message.text}
            </p>
        </div>
    );
}

export default MessageBubble;