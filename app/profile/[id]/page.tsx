import React from 'react'
import { prisma } from '@/prisma/prisma'
const Page = async ({ 
    params 
}: { 
    params: { id: string }
})  =>
{
    const profile = await prisma.korisnik.findUnique({
        where: { id: params.id },
      });
  
      if (!profile) {
        return notFound();
      }
  
      const {id,ime,prezime,username,email,BrTelefona,password,listaZelja,korpa} = profile;
  return (
  <>
    <div>{ime}</div>
    <div>{prezime}</div>
    <div>{username}</div>
    <div>{email}</div>
    <div>{BrTelefona}</div>
    {/* <div>{listaZelja}</div> */}
    {/* <div>{korpa}</div> */}
  </>
    
  )
}

export default Page