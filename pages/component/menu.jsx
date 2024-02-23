import Link from "next/link";

export default function Menu({children}){
    return(<div>
        <nav className="nav">
            <ul className="menu">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/addProduct/add"}>addProduct</Link></li>
            </ul>
        </nav>
        {children}
    </div>)
}