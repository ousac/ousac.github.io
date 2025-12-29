import React from 'react';

const Loading = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center bg-white dark:bg-black">
      <div className="loading">
        <svg width="64px" height="48px">
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="back"
          ></polyline>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
            id="front"
          ></polyline>
        </svg>
      </div>
      <p className="mt-4 animate-pulse text-xs font-medium text-gray-500">
        Loading OUSAC Experience...
      </p>
    </div>
  );
};

export default Loading;
