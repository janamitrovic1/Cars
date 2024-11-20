'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';
import RegisterSchema from '@/components/zodschemas/RegisterSchema';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    ime: '',
    prezime: '',
    username: '',
    email: '',
    BrTelefona: '',
    password: '',
  });
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validate = RegisterSchema.safeParse(formData); 
      if(validate.success){
        const res = await signIn('SignUp', {
          redirect: false,
          ...validate.data
        });
        if (!res?.ok) 
          throw new Error(res?.error?.toString());
        else 
          router.push('/');
      }
      else
        setErrors(validate.error.flatten().fieldErrors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className={`block text-sm font-medium ${errors.ime ? 'text-red-500' : ''}`}>Name</label>
          <input
            type="text"
            name="ime"
            className={`w-full px-3 py-2 mt-1 border ${errors.ime ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-800 rounded-md`}
            value={formData.ime}
            onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
          />
          {errors.ime && (
            <span className="text-red-500 text-sm">{errors.ime[0]}</span>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium ${errors.prezime ? 'text-red-500' : ''}`}>Last name</label>
          <input
            type="text"
            name="prezime"
            className={`w-full px-3 py-2 mt-1 border ${errors.prezime ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-800 rounded-md`}
            value={formData.prezime}
            onChange={(e) => setFormData({ ...formData, prezime: e.target.value })}
          />
          {errors.prezime && (
            <span className="text-red-500 text-sm">{errors.prezime[0]}</span>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium ${errors.username ? 'text-red-500' : ''}`}>Username</label>
          <input
            type="text"
            name="username"
            className={`w-full px-3 py-2 mt-1 border ${errors.username ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-800 rounded-md`}
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username[0]}</span>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium ${errors.email ? 'text-red-500' : ''}`}>Email</label>
          <input
            type="email"
            name="email"
            className={`w-full px-3 py-2 mt-1 border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-800 rounded-md`}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email[0]}</span>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium ${errors.BrTelefona ? 'text-red-500' : ''}`}>Phone number</label>
          <input
            type="text"
            name="BrTelefona"
            className={`w-full px-3 py-2 mt-1 border ${errors.BrTelefona ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-800 rounded-md`}
            value={formData.BrTelefona}
            onChange={(e) => setFormData({ ...formData, BrTelefona: e.target.value })}
          />
          {errors.BrTelefona && (
            <span className="text-red-500 text-sm">{errors.BrTelefona[0]}</span>
          )}
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium ${errors.password ? 'text-red-500' : ''}`}>Password</label>
          <input
            type="password"
            name="password"
            className={`w-full px-3 py-2 mt-1 border ${errors.password ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-800 rounded-md`}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password[0]}</span>
          )}
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
