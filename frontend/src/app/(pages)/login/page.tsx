"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../../_providers/Auth";

// import { Button } from "../../components/base/Button";

// type FormData = {
//   email: string
//   password: string
// }

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  // const onSubmit = useCallback(
  //   async (data) => {
  //     try {
  //       await login(data);
  //       if (redirect?.current) router.push(redirect.current);
  //       else requestFormReset.push("/account");
  //     } catch (_) {
  //       setError(
  //         "There was an error with the credentials provided. Please try again."
  //       );
  //     }
  //   },
  //   [login, router]
  // );

  const onSubmit = () => {
    router.push("/just-arrived");
  };

  return (
    <section
      className="py-24 md:py-32 bg-white"
      style={{
        backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <Link className="inline-block mb-6" href="#">
              <Image
                className="h-16"
                src="/icons/socialite-logo.svg"
                alt="logo"
                width={169}
                height={30}
              />
            </Link>
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Sign in to your account
            </h3>
            <p className="text-lg text-coolGray-500 font-medium">
              Start your demo version
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                for=""
              >
                Email
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="email"
                placeholder="your@email.dev"
                {...register("email", {
                  required: { value: true, message: "content is required" },
                })}
              />
              {errors.email && (
                <p className="font-bold text-red-600">{`${errors.email.message}`}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                for=""
              >
                Password
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                type="password"
                placeholder="************"
                {...register("password", {
                  required: { value: true, message: "content is required" },
                })}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="w-full md:w-1/2">
                <label className="relative inline-flex items-center">
                  <input
                    className="form-checkbox appearance-none"
                    type="checkbox"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
                    <input type="checkbox" />
                  </div>
                  <span className="ml-7 text-xs text-coolGray-800 font-medium">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="w-full md:w-auto mt-1">
                <Link
                  className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                  href="fpassword"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            {/* <Button> Sign in </Button> */}
            <button className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm">
              Sign In
            </button>
            <p className="text-center">
              <span className="text-xs font-medium">
                Don’t have an account?
              </span>
              <Link
                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                href="/signup"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
        <h2 className="mb-4 text-l md:text-xl text-center font-bold">
          {error}{" "}
        </h2>
      </div>
    </section>
  );
};
export default Login;
