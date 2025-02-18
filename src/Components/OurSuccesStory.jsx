import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useSecure from '../Hooks/useSecure';
import SectionTitle from '../Shared/SectionTitle';
import ReactStarsRating from 'react-awesome-stars-rating';
import { ThemeContext } from '../ThemeProvider';

const OurSuccessStory = () => {
  const axiosSecure = useSecure();
  const { theme } = useContext(ThemeContext);
  const { data: successData = [] } = useQuery({
    queryKey: ['successStory'],
    queryFn: async () => {
      const res = await axiosSecure.get('/successStory');
      return res.data;
    },
  });

  const sortedSuccessData = [...successData].sort((a, b) => {
    const dateA = new Date(a.marriageDate || '1970-01-01');
    const dateB = new Date(b.marriageDate || '1970-01-01');
    return dateB - dateA;
  });

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} py-12`}>
      <SectionTitle title={'Our Success Stories'} subtitle={'A Celebration of Love and New Beginnings!'} />
      {sortedSuccessData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
          {sortedSuccessData.map((story) => (
            <StoryCard key={story._id} story={story} />
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No success stories found!</p>
      )}
    </div>
  );
};

const StoryCard = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
      <img src={story.coupleImage} alt="Couple" className="w-full h-48 object-cover rounded-md mb-4" />
      <p className="text-sm text-gray-500 mb-2">
        <strong>Marriage Date:</strong> {story.marriageDate || 'Not Available'}
      </p>
      <div className="flex items-center gap-1 mb-2">
        <ReactStarsRating className='flex' value={5} />
      </div>
      <p className="text-gray-700 text-justify mb-4">
        {isExpanded ? story.successStory : `${story.successStory.slice(0, 150)}...`}
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default OurSuccessStory;
