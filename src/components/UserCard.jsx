import React from "react";

const UserCard = ({ email, name }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-xs w-full transition-transform transform hover:-translate-y-1 hover:shadow-2xl border-4 border-transparent bg-clip-padding before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-400 before:via-purple-400 before:to-pink-400 before:z-[-1] before:blur-sm">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center mb-4 shadow-lg">
            <span className="text-3xl text-white font-bold">
              {name ? name.charAt(0).toUpperCase() : "U"}
            </span>
          </div>
          <h1 className="text-lg font-bold text-gray-800 mb-1 tracking-wide">
            User Card
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-1">{name}</h2>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
