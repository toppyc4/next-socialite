interface TagProps {
    text: String;
    colorClass: String;
}

const Tag: React.FC<TagProps> = ({ text, colorClass }) => {
    return (
        <span className={`text-white px-2 py-1 rounded-xl bg-${colorClass} bg-opacity-60`}>
            {text}
        </span>
    );
};

export default Tag;