import React, { useState } from "react";
import viewIcon from "../assets/viewIcon.png";
import hideIcon from "../assets/hideIcon.png";

function SignUp() {
  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", information.email);
    console.log("Password:", information.password);
    console.log("First Name:", information.firstName);
    console.log("Last Name:", information.lastName);
    const x = fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(information),
    });
    console.log(x);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              value={information.firstName}
              onChange={(e) =>
                setInformation({ ...information, firstName: e.target.value })
              }
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              value={information.lastName}
              onChange={(e) =>
                setInformation({ ...information, lastName: e.target.value })
              }
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              value={information.email}
              onChange={(e) =>
                setInformation({ ...information, email: e.target.value })
              }
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={information.password}
                onChange={(e) =>
                  setInformation({ ...information, password: e.target.value })
                }
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              >
                {showPassword ? (
                  <img src={viewIcon} alt="View Icon" className="w-5 h-5" />
                ) : (
                  <img src={hideIcon} alt="View Icon" className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
          <div>
            <button
              className="w-full px-4 py-2 text-white bg-blue-200 rounded
              hover:bg-blue-400 focus:outline-none focus:ring
              focus:ring-blue-300"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
