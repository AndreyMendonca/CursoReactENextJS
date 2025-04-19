type Props = {
    label: string;
    onClick: () => void;
}

export const CustomButton = ({label, onClick} : Props) =>{
    return (
        <button onClick={onClick} className="ml-2  rounded-md p-3 text-white bg-red-500 cursor-pointer">{label}</button>
    );
}