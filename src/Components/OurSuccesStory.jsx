import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useSecure from '../Hooks/useSecure';
import SectionTitle from '../Shared/SectionTitle';

import ReactStarsRating from 'react-awesome-stars-rating';
const OurSuccessStory = () => {
  const axiosSecure = useSecure();

  // Fetching success story data
  const { data: successData = [] } = useQuery({
    queryKey: ['successStory'],
    queryFn: async () => {
      const res = await axiosSecure.get('/successStory');
      return res.data;
    },
  });

  // Sort success stories by marriageDate in descending order
  const sortedSuccessData = [...successData].sort((a, b) => {
    const dateA = new Date(a.marriageDate || '1970-01-01');
    const dateB = new Date(b.marriageDate || '1970-01-01');
    return dateB - dateA; // Descending order
  });

  return (
    <div className="bg-gray-100 py-12">

	  <SectionTitle title={'Our Success Stories'} subtitle={" A Celebration of Love and New Beginnings!"}>
       </SectionTitle>
      {sortedSuccessData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
          {sortedSuccessData.map((story) => (
            <div
              key={story._id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              {/* Couple Image */}
              <img
                src={story.coupleImage}
                alt="Couple"
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Marriage Date */}
              <p className="text-sm text-gray-500 mb-2">
                <strong>Marriage Date:</strong> {story.marriageDate || 'Not Available'}
              </p>

              {/* Review Stars */}
              <div className="flex items-center gap-1 mb-2">
			  <ReactStarsRating className='flex' value={5} />
                {/* {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-500 ${
                      index < (story.reviewStar || 4) ? 'fill-current' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))} */}
			
              </div>

              {/* Success Story Text */}
              <p className="text-gray-700 text-justify mb-4">
                {story.successStory.length > 150
                  ? `${story.successStory.slice(0, 150)}...`
                  : story.successStory}
              </p>

              {/* Read More Button */}
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Read More
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No success stories found!</p>
      )}
    </div>
  );
};

export default OurSuccessStory;
