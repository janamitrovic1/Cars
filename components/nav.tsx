import Link from "next/link"

// import "@app/globals.css";
export const Nav = ()=>{

    return (
        <div className="flex flex-row justify-between p-5">
            <div className="">
                <ul className="flex flex-row gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Products</Link></li>
                    <li><Link href="/">About</Link></li>
                </ul>
            </div>
            <div>
                <h1>CARS</h1>
                
            </div>
        </div>
    )
}