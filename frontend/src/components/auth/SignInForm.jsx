// import { useState } from "react";
// import { Link } from "react-router";
// import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
// import Label from "../form/Label";
// import Input from "../form/input/InputField";
// import Checkbox from "../form/input/Checkbox";
// import Button from "../ui/button/Button";

// export default function SignInForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <div className="flex flex-col flex-1">
//       <div className="w-full max-w-md pt-10 mx-auto">
//         <Link
//           to="/"
//           className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
//         >
//           <ChevronLeftIcon className="size-5" />
//           Back to dashboard
//         </Link>
//       </div>
//       <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
//         <div>
//           <div className="mb-5 sm:mb-8">
//             <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
//               Sign In
//             </h1>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               Enter your email and password to sign in!
//             </p>
//           </div>
//           <div>
//             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
//               <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
//                     fill="#4285F4"
//                   />
//                   <path
//                     d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
//                     fill="#34A853"
//                   />
//                   <path
//                     d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
//                     fill="#FBBC05"
//                   />
//                   <path
//                     d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
//                     fill="#EB4335"
//                   />
//                 </svg>
//                 Sign in with Google
//               </button>
//               <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
//                 <svg
//                   width="21"
//                   className="fill-current"
//                   height="20"
//                   viewBox="0 0 21 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" />
//                 </svg>
//                 Sign in with X
//               </button>
//             </div>
//             <div className="relative py-3 sm:py-5">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
//                   Or
//                 </span>
//               </div>
//             </div>
//             <form>
//               <div className="space-y-6">
//                 <div>
//                   <Label>
//                     Email <span className="text-error-500">*</span>{" "}
//                   </Label>
//                   <Input placeholder="info@gmail.com" />
//                 </div>
//                 <div>
//                   <Label>
//                     Password <span className="text-error-500">*</span>{" "}
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                     />
//                     <span
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
//                     >
//                       {showPassword ? (
//                         <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
//                       ) : (
//                         <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
//                       )}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <Checkbox checked={isChecked} onChange={setIsChecked} />
//                     <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
//                       Keep me logged in
//                     </span>
//                   </div>
//                   <Link
//                     to="/reset-password"
//                     className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <div>
//                   <Button className="w-full" size="sm">
//                     Sign in
//                   </Button>
//                 </div>
//               </div>
//             </form>

//             <div className="mt-5">
//               <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
//                 Don&apos;t have an account? {""}
//                 <Link
//                   to="/signup"
//                   className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
//                 >
//                   Sign Up
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import loginImg from "../../assets/loginImg.jpg";

const Login = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full w-full object-cover"
          src={loginImg}
          alt="leftSideImage"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center ">
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please sign in to continue
          </p>

          {/*<button type="button" className="w-full mt-8 bg-gray-500/10 flex items-center justify-center h-12 rounded-full">*/}
          {/*    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />*/}
          {/*</button>*/}

          {/*<div className="flex items-center gap-4 w-full my-5">*/}
          {/*    <div className="w-full h-px bg-gray-300/90"></div>*/}
          {/*    <p className="w-full text-nowrap text-sm text-gray-500/90">or sign in with email</p>*/}
          {/*    <div className="w-full h-px bg-gray-300/90"></div>*/}
          {/*</div>*/}

          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 mt-8 gap-2">
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="email"
              placeholder="Email id"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                fill="#6B7280"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          {/*<div className="w-full flex items-center justify-between mt-8 text-gray-500/80">*/}
          {/*    <div className="flex items-center gap-2">*/}
          {/*        <input className="h-5" type="checkbox" id="checkbox" />*/}
          {/*        <label className="text-sm" htmlFor="checkbox">Remember me</label>*/}
          {/*    </div>*/}
          {/*    <a className="text-sm underline" href="#">Forgot password?</a>*/}
          {/*</div>*/}

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-[#ce8265] hover:opacity-90 transition-opacity cursor-pointer"
          >
            Login
          </button>
          {/*<p className="text-gray-500/90 text-sm mt-4">Don’t have an account? <a className="text-indigo-400 hover:underline" href="#">Sign up</a></p>*/}
        </form>
      </div>
    </div>
  );
};

export default Login;
