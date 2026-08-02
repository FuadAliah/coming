import { Background } from "../components/Background";
import { TextAnimate } from "../components/TextAnimate";

export default function Home() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <TextAnimate />
            <Background />
        </div>
    );
}
