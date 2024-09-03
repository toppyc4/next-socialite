'use client'
import { useState, useMemo } from 'react'
import MessageNav from '@/components/Message/MessageNav'
import { User } from '@/types/global'
import { Message } from '@/types/global'
import MessageComponent from '@/components/Message/MessageComponent'
interface BundledMessages {
    earliest: Date;
    fromMe: boolean;
    messages: Array<Message>;
    displayDate: boolean;
}


const user: User = {
    userId: 1,
    username: "username",
    userHandle: "userHandle",
    lastOnline: new Date(),
    profilePic: "https://via.placeholder.com/150",
}

// Helper function to check if two dates are too far apart (you can define "too far" as needed)
function areDatesTooFarApart(date1: Date, date2: Date, thresholdInMinutes: number): boolean {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    const diffInMinutes = diffInMs / (1000 * 60);
    return diffInMinutes > thresholdInMinutes;
}

// Function to generate bundled messages
function generateBundledMessages(messages: Array<Message>, thresholdInMinutes: number = 60): Array<BundledMessages> {
    const bundledMessages: Array<BundledMessages> = [];

    messages.forEach((message, index) => {
        // Check if this message can be bundled with the previous one
        if (bundledMessages.length > 0) {
            const lastBundle = bundledMessages[bundledMessages.length - 1];

            if (lastBundle.fromMe === message.fromMe) {
                // Add the message to the last bundle
                lastBundle.messages.push(message);
            } else {
                // Create a new bundle
                const newBundle: BundledMessages = {
                    earliest: message.messageId ? new Date(message.messageId) : new Date(),
                    fromMe: message.fromMe,
                    messages: [message],
                    displayDate: false,
                };

                // Check if the date difference between the new bundle and the previous bundle is too large
                if (areDatesTooFarApart(lastBundle.earliest, newBundle.earliest, thresholdInMinutes)) {
                    newBundle.displayDate = true;
                }

                bundledMessages.push(newBundle);
            }
        } else {
            // Create the first bundle
            bundledMessages.push({
                earliest: message.messageId ? new Date(message.messageId) : new Date(),
                fromMe: message.fromMe,
                messages: [message],
                displayDate: false,
            });
        }
    });

    return bundledMessages;
}


const messages: Array<Message> = [
    { messageId: 1, user: user, text: "Hello!", fromMe: true },
    { messageId: 2, user: user, text: "How are you?", fromMe: true },
    { messageId: 3, user: user, text: "I'm fine, thanks!", fromMe: false },
    { messageId: 4, user: user, text: "Great to hear!", fromMe: true },
    { messageId: 5, user: user, text: "What about you?", fromMe: false },
    { messageId: 6, user: user, text: "I'm doing well too!", fromMe: true }
];

const bundledMessages: Array<BundledMessages> = generateBundledMessages(messages);


export default function SearchPage(){
    var [search, setSearch] = useState("")
    console.log(bundledMessages)
    return <>
        <MessageNav user = {user}/>
        <div className='fixed bottom-0 w-full p-3 box-border left-0'>
            {bundledMessages.map((bundle, index) => (
                <MessageComponent key={index} messages={bundle.messages} fromMe={bundle.fromMe} />
                )
            )}
        </div>
    </>
}