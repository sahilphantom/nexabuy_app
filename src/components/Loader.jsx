import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const FancyLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="relative">
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 48,
              }}
              spin
            />
          }
        />
        <div className="absolute top-0 left-0 w-full h-full animate-ping">
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 48,
                  opacity: 0.2,
                }}
                spin
              />
            }
          />
        </div>
      </div>
      <div className="mt-4 text-lg font-semibold text-gray-600 animate-pulse">
        Loading amazing products...
      </div>
      <div className="mt-2 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FancyLoader;
