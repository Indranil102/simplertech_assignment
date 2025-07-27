import React from "react";

const UserCard = ({ email, name }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto mt-6">
        <h1>User Card details</h1>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
