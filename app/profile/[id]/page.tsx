import React from 'react';
import { prisma } from '@/prisma/prisma';

const Page = async ({
  params,
}: {
  params: { id: string };
}) => {
  const profile = await prisma.korisnik.findUnique({
    where: { id: params.id },
  });

  if (!profile) {
    return <div>User not found</div>;
  }

  const { ime, prezime, username, email, BrTelefona } = profile;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              {ime} {prezime}
            </h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={ime}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={prezime}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={username}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email account
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={email}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile number
            </label>
            <input
              type="text"
              placeholder="Add number"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={BrTelefona || ''}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
          >
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;