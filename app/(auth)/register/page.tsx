'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    username: '',
    email: '',
    BrTelefona: '',
    password: '',
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signIn('SignUp', {
        redirect: false,
        ime: formData.ime,
        prezime: formData.prezime,
        username: formData.username,
        email: formData.email,
        BrTelefona: formData.BrTelefona,
        password: formData.password,
      });

      if (!res?.ok) throw new Error(res?.error?.toString());
      else router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Ime</label>
          <input
            type="text"
            name="ime"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={formData.ime}
            onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Prezime</label>
          <input
            type="text"
            name="prezime"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={formData.prezime}
            onChange={(e) => setFormData({ ...formData, prezime: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Broj telefona</label>
          <input
            type="text"
            name="BrTelefona"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={formData.BrTelefona}
            onChange={(e) => setFormData({ ...formData, BrTelefona: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default SignUpPage;
