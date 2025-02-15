
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    profilePic: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProfilePic, setNewProfilePic] = useState(""); // Store selected image preview

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setNewProfilePic(savedUser.profilePic || "https://via.placeholder.com/100");
    }
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    setUser({ name: "", email: "", contact: "", profilePic: "" });
  };


  const handleSave = () => {
    const updatedUser = { ...user, profilePic: newProfilePic };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h2>
        <div className="flex flex-col items-center">
          <img
            src={user.profilePic || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700">{user.name || "Guest User"}</h3>
          <p className="text-gray-600">{user.email || "No email available"}</p>
          <p className="text-gray-600">Contact: {user.contact || "Not provided"}</p>
        </div>
        <div className="mt-6 space-x-4">
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Edit Profile
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
     

     
    </div>
  );
};

export default UserDashboard;

