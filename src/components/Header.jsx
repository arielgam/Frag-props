export default function Header({header}) {
    return (
        <header className="w-full h-14 bg-black text-white flex justify-between items-center px-10">
            <h1 className="font-bold uppercase text-2xl cursor-pointer">{header}</h1>
            <div className="flex items-center">
                <ul className="flex gap-2 mr-10 items-center">
                    <li className="cursor-pointer">Contato</li>
                    <li className="cursor-pointer">Serviços</li>
                    <li className="cursor-pointer">Sobre nós</li>
                    <li className="cursor-pointer">Blog</li>
                </ul>
                <ul>
                    <li>Sair</li>
                </ul>
            </div>
        </header>
    )
}