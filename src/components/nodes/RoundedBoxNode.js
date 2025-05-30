import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import roundInfoButton from '../../assets/round-info-button.png';
//import starIcon from '../../assets/star-icon.png';

function RoundedBoxNode({ data }) {

  const handleClick = () => {
    data.setMoreInfoNodeId(data.id);
  };

  const bgCategoryColors = {
    normal: {
      'Data Systems': 'bg-[#fdd985]',
      'ML': 'bg-[#77d19d]',
      'Core': 'bg-[#fc747b]',
      'CL': 'bg-[#e8abe1]',
      'default': 'bg-[#77d0f6]'
    },
    // grayscale: {
    //   'Data Systems': 'bg-[#dadada]',
    //   'ML': 'bg-[#b0b0b0]',
    //   'Core': 'bg-[#9d9d9d]',
    //   'CL': 'bg-[#c3c3c3]',
    //   'default': 'bg-[#b9b9b9]'
    // },
    // all grayscale is same color
    grayscale: {
      'Data Systems': 'bg-[#dadada]',
      'ML': 'bg-[#dadada]',
      'Core': 'bg-[#dadada]',
      'CL': 'bg-[#dadada]',
      'default': 'bg-[#dadada]'
    }
  };

  const bgColorClass = data.isGrayscale
    ? bgCategoryColors.grayscale[data.courseCategory] || bgCategoryColors.grayscale['default']
    : bgCategoryColors.normal[data.courseCategory] || bgCategoryColors.normal['default'];

  const sourceHandlePosition = data.sourceHandlePosition || Position.Bottom;
  const targetHandlePosition = data.targetHandlePosition || Position.Top;

  // Border logic
  let borderClass = "border-2 border-stone-400"; // default
  if (data.state === "canTake") {
    // canTake:
    borderClass = "border-4 border-[#ffe600]";
  } else if (data.state === "taken") {
    // taken: bold border (you can pick a color, here using green as well)
    borderClass = "border-4 border-black";
  }

  return (
    <div
      className={`relative w-48 h-24 p-4 shadow-md rounded-md flex flex-col justify-center items-center ${bgColorClass} ${borderClass}`}
    >
      <div className="text-center w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="text-lg font-bold truncate w-full">{data.courseNum}</div>
        <div className="text-black break-words overflow-hidden text-ellipsis w-full max-h-10 leading-tight text-sm">
          {data.courseTitle}
        </div>
        {/* Star icon for Core classes */}
        {data.courseCategory === "Core" && (
          <span className="absolute top-1 left-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
            </svg>

          </span>
        )}
      </div>
      {/* More Info Button which triggers popup*/}
      <button
        onClick={() => handleClick()}
        className="absolute top-1 right-1 p-1 rounded-full bg-transparent border-none cursor-pointer"
      >
        <img
          src={roundInfoButton}
          alt="More Info"
          className="w-6 h-6"
        />
      </button>

      <Handle
        type="target"
        position={targetHandlePosition}
        className="opacity-0"
      />
      <Handle
        type="source"
        position={sourceHandlePosition}
        className="opacity-0"
      />
    </div>
  );
}

export default memo(RoundedBoxNode);