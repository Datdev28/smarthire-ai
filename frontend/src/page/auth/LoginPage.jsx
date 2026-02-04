import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [passwordView, setPasswordView] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Dữ liệu form:", data);
  };
  return (
    <div className="flex w-full mx-auto">
      <div className="w-full max-w-6xl flex flex-col items-center mt-20">
        <h1 className="text-green-500 text-xl font-bold">
          Chào mừng bạn đã quay trở lại
        </h1>
        <p className="text-gray-600">
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
          tưởng
        </p>
        <p className="mt-6">
          Bạn chưa có tài khoản?
          <Link to="/register">
            <span className="text-red-600 cursor-pointer underline ml-1">
              Đăng ký tại đây
            </span>
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-lg">
          {/* Email */}
          <div className="flex flex-col  mt-6 text-gray-600">
            <label htmlFor="email">Email</label>
            <div className="flex items-center border border-gray-300 rounded-xs focus-within:border-gray-500">
              <div className="p-2">
                <MdEmail className="text-2xl text-green-600" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: "Email là bắt buộc" })}
                className="flex-1 p-2 focus:outline-0 ml-2"
              />
            </div>

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col mt-6 ">
            <label htmlFor="password">Mật khẩu</label>
            <div className="flex items-center border border-gray-300 rounded-xs focus-within:border-gray-500">
              <div className="p-2">
                <RiLockPasswordFill className="text-2xl text-green-600" />
              </div>
              <input
                type={passwordView ? "text" : "password"}
                id="password"
                placeholder="Mật khẩu"
                {...register("password", { required: "Mật khẩu là bắt buộc" })}
                className="flex-1 focus:outline-0 ml-4"
              />
              <div
                className="p-2 cursor-pointer"
                onClick={() => setPasswordView(!passwordView)}
              >
                {passwordView ? (
                  <FaRegEye className="text-2xl text-green-600" />
                ) : (
                  <FaRegEyeSlash className="text-2xl text-gray-500" />
                )}
              </div>
            </div>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <p className="text-right text-green-700 text-sm mt-2 font-semibold cursor-pointer">
            Quên mật khẩu
          </p>
          <button
            type="submit"
            className="mt-4 bg-green-600 w-full rounded-md text-white p-2 cursor-pointer"
          >
            Đăng nhập
          </button>
          <p className="text-gray-600 text-center py-4">Hoặc đăng nhập bằng</p>
          <div className="flex items-center gap-x-4">
            <button
              className="flex items-center text-white bg-amber-600 w-full justify-center py-2 rounded-md cursor-pointer"
              type="button"
            >
              <FaGoogle className="font-bold mr-1" />
              <p className="text-lg">Google</p>
            </button>
            <button
              className="flex items-center text-white bg-blue-600 w-full justify-center py-2 rounded-md cursor-pointer"
              type="button"
            >
              <IoLogoFacebook className="font-bold mr-1" />
              <p className="text-lg">Facebook</p>
            </button>
          </div>
        </form>
      </div>
      <img src="Smarthire-AI.png" alt="" />
    </div>
  );
};

export default LoginPage;
