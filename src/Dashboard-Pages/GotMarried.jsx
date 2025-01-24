import React, { useState } from "react";
import Swal from "sweetalert2";
import usePublic from "../Hooks/usePublic";

const GotMarried = () => {
  const axiosPublic = usePublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const selfBiodataId = form.selfBiodataId.value;
    const partnerBiodataId = form.partnerBiodataId.value;
    const coupleImage = form.coupleImage.value;
    const successStory = form.successStory.value;
    const marriageDate = form.marriageDate.value;

    const data = {
      selfBiodataId,
      partnerBiodataId,
      coupleImage,
      successStory,
      marriageDate
    };
    axiosPublic.post("/successStory", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Done!",
          text: `Your Story Is Sent Successfully!`,
          icon: "success",
        });
      }
    });
	form.reset();
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-6 bg-white rounded-md shadow-md mt-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Share Your Success Story
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="selfBiodataId"
            className="block font-medium text-gray-700"
          >
            Your Biodata ID
          </label>
          <input
            type="text"
            id="selfBiodataId"
            name="selfBiodataId"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label
            htmlFor="partnerBiodataId"
            className="block font-medium text-gray-700"
          >
            Partner's Biodata ID
          </label>
          <input
            type="text"
            id="partnerBiodataId"
            name="partnerBiodataId"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label
            htmlFor="coupleImage"
            className="block font-medium text-gray-700"
          >
            Couple Image Link
          </label>
          <input
            type="text"
            id="coupleImage"
            name="coupleImage"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            htmlFor="marriageDate"
            className="block font-medium text-gray-700"
          >
            Marriage Date
          </label>
          <input
            type="date"
            id="marriageDate"
            name="marriageDate"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label
            htmlFor="successStory"
            className="block font-medium text-gray-700"
          >
            Share Your Story
          </label>
          <textarea
            id="successStory"
            name="successStory"
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            placeholder="How has this website helped you?"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
        >
          Submit Your Story
        </button>
      </form>
    </div>
  );
};

export default GotMarried;
