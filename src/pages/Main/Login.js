import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-hot-toast";

// const eye = <FontAwesomeIcon icon={faEye} />;
// const EyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
// import Navbar from "./Navbar";
const Login = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await axios.post(
        "https://aladintech-backend.onrender.com/api/v1/user/login",
        {
          Mobile_No: data.Mobile_No,
          pass_word: data.password,
        }
      );

      console.log("response", res.data.data.user.role);

      if (res.data.status === "Success") {
        toast.success("Successfully Complete Login");
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("role", res.data.data.user.role);
        navigate("/");
      }
      //   if (res.data.error == false) {
      //     // console.log("Token", data);
      //     localStorage.setItem("id", res.data.data.id);
      //     Cookies.set("SavedToken", res.data.data.token);
      //     Cookies.set("SavedWebToken", res.data.data.webtoken);
      //     window.location.href = "/status";
      //     // navigate("/status");
      //     // window.location.reload();
      //     toast.success(res.data.message);
      //   } else {
      //     // console.log('Data not found', data.data.message)
      //     toast.error(res.data.message);
      //   }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <section className="login bg-gray-50 h-screen">
      <div className="overlay h-screen flex flex-col items-center justify-center px-2 py-2 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow mt-8 mb-8 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control w-full">
                <label className="label">
                  <span className="font-medium">Mobile Number</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  name="Mobile_No"
                  {...register("Mobile_No", {
                    required: "this field is required.",
                    pattern: {
                      // https://regexr.com/744ji
                      value: /(^(01){1}[3456789]{1}(\d){8})$/,
                      message: "please enter a valid mobile number.",
                    },
                  })}
                />
                {errors.Mobile_No && (
                  <div className="text-red-600 invalid-feedback capitalize mt-2">
                    {errors.Mobile_No.message}
                  </div>
                )}
              </div>

              <div>
                <label className="font-medium" htmlFor="password">
                  Password
                </label>
                <div className="relative w-full mt-2">
                  <div className="absolute inset-y-0 right-0 flex items-center px-2">
                    <input
                      className="hidden js-password-toggle"
                      id="toggle"
                      type="checkbox"
                    />
                    <label
                      className="px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                      htmlFor="toggle"
                      onClick={togglePasswordVisiblity}
                    >
                      {/* {(passwordShown ? false : true) ? (
                        <>{EyeSlash}</>
                      ) : (
                        <>{eye}</>
                      )} */}
                    </label>
                  </div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    {...register("password", {
                      required: "this field is required.",
                      pattern: {
                        value: /^[A-Za-z\d@$!%*#?&^_-]{6,50}$/,
                        message: "password length minimun 6 character.",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <div className="text-red-600 invalid-feedback capitalize mt-2">
                    {errors.password.message}
                  </div>
                )}
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/ForgotPassword"
                  className="text-sm font-medium text-black hover:underline"
                >
                  Forgot password?
                </Link>
              </div> */}
              <button
                type="submit"
                className="w-full btn text-white btn-blue bg-indigo-500 border-none hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="ml-2 text-indigo-500 font-medium hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
