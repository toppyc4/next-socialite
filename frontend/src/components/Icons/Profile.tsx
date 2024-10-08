import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {} 

const Profile = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => ( 
    <svg ref={ref} {...props} 
    className={className??''} 
    width="10" 
    height="10" 
    viewBox="0 0 10 10" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
<path d="M5 5C6.38125 5 7.5 3.88125 7.5 2.5C7.5 1.11875 6.38125 0 5 0C3.61875 0 2.5 1.11875 2.5 2.5C2.5 3.88125 3.61875 5 5 5ZM5 6.25C3.33125 6.25 0 7.0875 0 8.75V9.375C0 9.71875 0.28125 10 0.625 10H9.375C9.71875 10 10 9.71875 10 9.375V8.75C10 7.0875 6.66875 6.25 5 6.25Z" fill="#8A8A8A"/>
</svg>

    
));

Profile.displayName = 'Burger';
export default Profile;