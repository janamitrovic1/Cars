'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

export default function SignInPage(){
    const [form, setForm] = useState<{username: string, password: string}>({
        username: "",
        password: ""
    });

  const router = useRouter();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    try {
        const res = await signIn('SignIn', {
            redirect: false,
            username: form.username,
            password: form.password,
        });
        if (!res?.ok)
            throw new Error(res?.error?.toString());
        else 
            router.replace("/");
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 mt-1 border border-gray-300 bg-gray-50 text-gray-800 rounded-md"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Sign in
        </a>
      </p>
    </div>
  );
};