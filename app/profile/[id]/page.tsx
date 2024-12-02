import React from 'react';
import { prisma } from '@/prisma/prisma';

const Page = async ({ params }: { params: { id: string } }) => {
  // Fetch user profile
  const profile = await prisma.korisnik.findUnique({
    where: { id: params.id },
    include: {
      listaZelja: { include: { proizvod: true } }, // Include wishlist products
      korpa: { include: { proizvod: true } },     // Include cart products
    },
  });

  if (!profile) {
    return <p className="text-red-500 text-center">Greška: Korisnik nije pronađen.</p>;
  }

  const { ime, prezime, username, email, listaZelja, korpa } = profile;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* User Info */}
      <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {ime+" "+prezime}
            </h3>
          </div>
{/* 
          <Image
            src={user.image}
            alt={user.name}
            width={220}
            height={220}
            className="profile_image"
          /> */}

          <p className="text-30-extrabold mt-7 text-center">
            @{username}
          </p>
          <p className="mt-1 text-center text-14-normal">{email}</p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8">
        {/* Wishlist Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Wishlist</h3>
          {listaZelja.length > 0 ? (
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left">Naziv</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Opis</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Cena (RSD)</th>
                </tr>
              </thead>
              <tbody>
                {listaZelja.map((item) => (
                  <tr key={item.proizvod.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">{item.proizvod.marka+" "+item.proizvod.model}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.proizvod.description}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.proizvod.cena}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">Lista želja je prazna.</p>
          )}
        </div>

        {/* Cart Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Cart</h3>
          {korpa.length > 0 ? (
            <table className="w-full table-auto border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left">Naziv</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Opis</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Cena (RSD)</th>
                </tr>
              </thead>
              <tbody>
                {korpa.map((item) => (
                  <tr key={item.proizvod.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">{item.proizvod.marka+" "+item.proizvod.model}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.proizvod.description}</td>
                    <td className="border border-gray-200 px-4 py-2">{item.proizvod.cena}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">Korpa je prazna.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
