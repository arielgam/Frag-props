import FooterTitle from "./FooterTitle";
import Rodape from "./Rodape";

export default function Footer() {
    return (
        <footer className="h-[350px] flex flex-col text-white">
            <FooterTitle />
            <Rodape />
        </footer>
    )
}