import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Pie } from "react-chartjs-2";
import useAllUser from "../Hooks/useAllUser";
import useSecure from "../Hooks/useSecure";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

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
  const maleBiodataCount = allUser.filter(
    (user) => user.biodataType === "Male"
  ).length;
  const femaleBiodataCount = allUser.filter(
    (user) => user.biodataType === "Female"
  ).length;
  const premiumBiodataCount = allUser.filter(
    (user) => user.userType === "premium"
  ).length;

  const totalRevenue = revenue
    .filter((item) => item.approved)
    .reduce((acc, _) => acc + 5, 0);

  // Pie Chart Data
  const pieData = {
    labels: [
      "Total Biodata",
      "Male Biodata",
      "Female Biodata",
      "Premium Biodata",
      "Total Revenue",
    ],
    datasets: [
      {
        label: "Admin Dashboard Statistics",
        data: [
          totalBiodataCount,
          maleBiodataCount,
          femaleBiodataCount,
          premiumBiodataCount,
          totalRevenue,
        ],
        backgroundColor: [
          "#3B82F6", // Blue
          "#22C55E", // Green
          "#EC4899", // Pink
          "#FACC15", // Yellow
          "#A855F7", // Purple
        ],
        borderColor: [
          "#2563EB", // Dark Blue
          "#16A34A", // Dark Green
          "#BE185D", // Dark Pink
          "#CA8A04", // Dark Yellow
          "#9333EA", // Dark Purple
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-5">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-blue-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Biodata</h2>
          <p className="text-3xl font-bold text-blue-500">
            {totalBiodataCount}
          </p>
        </div>

        <div className="bg-green-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Male Biodata</h2>
          <p className="text-3xl font-bold text-green-500">
            {maleBiodataCount}
          </p>
        </div>

        <div className="bg-pink-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Female Biodata</h2>
          <p className="text-3xl font-bold text-pink-500">
            {femaleBiodataCount}
          </p>
        </div>

        <div className="bg-yellow-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Premium Biodata</h2>
          <p className="text-3xl font-bold text-yellow-500">
            {premiumBiodataCount}
          </p>
        </div>

        <div className="bg-purple-100 p-5 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-3xl font-bold text-purple-500">${totalRevenue}</p>
        </div>
      </div>
      {/* Pie Chart Section */}
      <div className="w-full mt-12 max-w-md mx-auto">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
