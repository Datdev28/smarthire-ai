import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
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
          Chào mừng bạn đã đến 
        </h1>
        <p className="text-gray-600">
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
          tưởng
        </p>
        <p className="mt-4">
          Bạn đã có tài khoản? 
          <Link to="/login">
            <span className="text-red-600 cursor-pointer underline ml-1">
              Đăng nhập tại đây
            </span>
          </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-lg">
          {/* Name */}
          <div className="flex flex-col mt-4 text-gray-600">
            <label htmlFor="name">Tên</label>
            <div className="flex items-center border border-gray-300 rounded-xs focus-within:border-gray-500">
              <div className="p-2">
                <SiNamecheap className="text-2xl text-green-600" />
              </div>
              <input
                type="name"
                id="name"
                placeholder="Tên của bạn"
                {...register("name", { required: "Tên là bắt buộc" })}
                className="flex-1 p-2 focus:outline-0 ml-2"
              />
            </div>

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          {/* PhoneNumber */}
          <div className="flex flex-col mt-4 text-gray-600">
            <label htmlFor="name">Số điện thoại</label>
            <div className="flex items-center border border-gray-300 rounded-xs focus-within:border-gray-500">
              <div className="p-2">
                <FaPhone className="text-2xl text-green-600" />
              </div>
              <input
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Số điện thoại của bạn"
                {...register("phoneNumber", {
                  required: "Số điện thoại là bắt buộc",
                  pattern: {
                    value: /^0\d{9}$/,
                    message:
                      "Số điện thoại phải bắt đầu bằng 0 và đủ 10 chữ số",
                  },
                })}
                className="flex-1 p-2 focus:outline-0 ml-2"
              />
            </div>

            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>
          {/* Email */}
          <div className="flex flex-col  mt-4 text-gray-600">
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
          <div className="flex flex-col mt-4 ">
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
           {/* Password */}
          <div className="flex flex-col mt-4 ">
            <label htmlFor="passwordConfirm">Xác nhận mật khẩu</label>
            <div className="flex items-center border border-gray-300 rounded-xs focus-within:border-gray-500">
              <div className="p-2">
                <RiLockPasswordFill className="text-2xl text-green-600" />
              </div>
              <input
                type={passwordView ? "text" : "password"}
                id="passwordConfirm"
                placeholder="Nhập lại mật khẩu"
                {...register("passwordConfirm", { required: "Xác nhận mật khẩu là bắt buộc" })}
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

            {errors.passwordConfirm && (
              <p className="text-red-500">{errors.passwordConfirm.message}</p>
            )}
          </div>
          <p className="text-right text-green-700 text-sm mt-2 font-semibold cursor-pointer">
            Quên mật khẩu
          </p>
          <button
            type="submit"
            className="mt-4 bg-green-600 w-full rounded-md text-white p-2 cursor-pointer mb-10"
          >
            Đăng ký
          </button>
        </form>
      </div>
      <img src="Smarthire-AI.png" alt="" />
    </div>
  );
};

export default RegisterPage;
