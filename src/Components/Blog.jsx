import React, { useContext } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeProvider";

const tips = [
  {
    title: "Effective Communication",
    description: "Open and honest communication is key to a healthy relationship."
  },
  {
    title: "Trust & Honesty",
    description: "Build trust by being transparent and keeping your promises."
  },
  {
    title: "Quality Time",
    description: "Spending quality time together strengthens your bond."
  },
  {
    title: "Mutual Respect",
    description: "Respect each other's opinions and boundaries."
  }
];

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"
      } py-16 px-4 md:px-16`}
    >
      <SectionTitle
        title="Blog & Relationship Tips"
        subtitle="Enhance your relationships with these valuable insights!"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 shadow-lg rounded-2xl border border-gray-300 text-gray-800 bg-white"
          >
            <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
            <p className="text-sm opacity-80">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
