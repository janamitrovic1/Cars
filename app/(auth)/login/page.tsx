"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";
import LoginSchema from "@/utils/zodschemas/LoginSchema";

export default function SignInPage() {
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setErrors({});
      const validate = LoginSchema.safeParse(formData);
      if (validate.success) {
        const res = await signIn("SignIn", {
          redirect: false,
          ...validate.data,
        });
        if (!res?.ok)
          setErrors((prevErrors: any) => ({
            ...prevErrors,
            username: [res?.error?.toString()],
          }));
        else router.replace("/");
      } else setErrors(validate.error.flatten().fieldErrors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className={`block text-sm font-medium ${
              errors.username ? "text-red-500" : ""
            }`}
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            className={`w-full px-3 py-2 mt-1 border ${
              errors.username ? "border-red-500" : "border-gray-300"
            } bg-gray-50 text-gray-800 rounded-md`}
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username[0]}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className={`block text-sm font-medium ${
              errors.password ? "text-red-500" : ""
            }`}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className={`w-full px-3 py-2 mt-1 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } bg-gray-50 text-gray-800 rounded-md`}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password[0]}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
