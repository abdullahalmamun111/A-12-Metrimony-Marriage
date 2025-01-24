import React from "react";
import useAllUser from "../Hooks/useAllUser";
import { useQuery } from "@tanstack/react-query";
import useSecure from "../Hooks/useSecure";

const AdminDashboard = () => {
  const axiosSecure = useSecure();
  const { allUser } = useAllUser();

  const { data: revenue = [], refetch } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const res = await axiosSecure.get("/request");
      return res.data;
    },
  });

  // Calculations
  const totalBiodataCount = allUser.length;
  const maleBiodataCount = allUser.filter(user => user.biodataType === "Male").length;
  const femaleBiodataCount = allUser.filter(user => user.biodataType === "Female").length;
  const premiumBiodataCount = allUser.filter(user => user.userType === "premium").length;

  const totalRevenue = revenue
    .filter(item => item.approved)
    .reduce((acc, _) => acc + 5, 0);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Biodata Count */}
        <div className="bg-blue-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Biodata</h2>
          <p className="text-3xl font-bold text-blue-500">{totalBiodataCount}</p>
        </div>

        {/* Male Biodata Count */}
        <div className="bg-green-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Male Biodata</h2>
          <p className="text-3xl font-bold text-green-500">{maleBiodataCount}</p>
        </div>

        {/* Female Biodata Count */}
        <div className="bg-pink-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Female Biodata</h2>
          <p className="text-3xl font-bold text-pink-500">{femaleBiodataCount}</p>
        </div>

        {/* Premium Biodata Count */}
        <div className="bg-yellow-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Premium Biodata</h2>
          <p className="text-3xl font-bold text-yellow-500">{premiumBiodataCount}</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-purple-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-3xl font-bold text-purple-500">${totalRevenue}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
