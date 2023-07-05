import ListIcon from "./ListIcon";
import TextFooter from "./TextFooter";

export default function FooterTitle() {
    return (
        <div className="h-5/6 bg-black flex flex-col items-center justify-center gap-4">
            <TextFooter />
            <ListIcon />
        </div>
    )
}