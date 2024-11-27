"use client"
import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"
// import "@app/globals.css";
export const Nav = ()=>{

    const {data:session,status} = useSession();

    return <header className='navigation-bar'>

                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={95} height={30}/>
                </Link>

                <div className='flex items-center gap-5'>
                {status === "authenticated" ? (
                    <>
                        <Link href="/products">
                        <span>Products</span>
                        </Link>

                        <Link href="/api/auth/signout">
                        <span>Sign out</span>
                        </Link>

                        <Link href={`/`}>
                        <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/login">Sign in</Link>
                        <Link href="/register" className="">
                        Sign Up
                        </Link>
                    </>
                )}
                </div>

        </header>
}