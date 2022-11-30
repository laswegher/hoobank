import React from 'react';

//Components
import { FeedbackCard } from './index';

//Constant data
import { feedbacks } from '../constants';

const Testimonials = () => {
  return (
    <div
      id="about-us"
      className="my-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center">
          <h2 className="flex-1 leading-[50px]">
            What people are <br className="hidden sm:block" /> saying
            about us
          </h2>
          <p className="flex-1 tracking-wider max-w-md opacity-80">
            Everything you need to accept card payments and grow your
            business anywhere on the planet.
          </p>
        </div>

        {/* Clients */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10">
          {feedbacks.map((feedback) => (
            <div
              className=""
              key={feedback.id}
            >
              <FeedbackCard {...feedback} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
