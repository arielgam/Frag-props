import { Children } from "react";

export default function ({children}) {
    return (
        <span className="w-7 h-7 flex justify-center items-center rounded-full border border-white">
            {/* <box-icon name='facebook' type='logo' color='#ffffff' ></box-icon> */}
            {children}
        </span>
    )
}