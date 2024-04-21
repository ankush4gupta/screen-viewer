import "./button.css";
interface ButtonProps {
    name: string;
}

export default function Options({ name }: ButtonProps) {
    return (
        <button className="text-base text-red-50 bg-cyan-300 p-1.5 m-1.5 rounded">{name}</button>
    );
}