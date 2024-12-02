"use client"
import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import "@app/globals.css";
export const Nav = ()=>{

    const {data:session,status}: any = useSession();

    return <header className='navigation-bar'>

                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={80} height={20}/>
                </Link>

                <div className='nav-links nav-text'>
                {status === "authenticated" ? (
                    <>
                        <Link href="/">
                            <span>Home</span>
                        </Link>
                        <Link href="/products">
                            <span>Products</span>
                        </Link>

                        {/* DROPDOWN KOJI NE RADI*/}
                        <Menu as="div" className="relative inline-block text-left">
                            <MenuButton>
                                <div className="dropdown">
                                    <Link href={`/profile/${session?.user.id}`} >
                                        <span>{session?.user?.name}</span>  
                                    </Link>
                                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400"/>
                                    
                                </div>
                            </MenuButton>
                            
                            <MenuItems
                                transition
                                className="dropdown-menuitems"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <Link href={`/profile/${session?.user.id}`} className="dropdown-menuitem">
                                        Profile
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link href="/api/auth/signout" className="dropdown-menuitem" >
                                            Logout
                                        </Link>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                            
                        </Menu>
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