import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

function RoundedBoxNode({ data }) {
  const bgCategoryColors = {
    normal: {
      'Data Systems': 'bg-[#fdd985]',
      'ML': 'bg-[#77d19d]',
      'Core': 'bg-[#fc747b]',
      'CL': 'bg-[#e8abe1]',
      'default': 'bg-[#77d0f6]'
    },
    grayscale: {
      'Data Systems': 'bg-[#dadada]',
      'ML': 'bg-[#b0b0b0]',
      'Core': 'bg-[#9d9d9d]',
      'CL': 'bg-[#c3c3c3]',
      'default': 'bg-[#b9b9b9]'
    }
  };

  const bgColorClass = data.isGrayscale
    ? bgCategoryColors.grayscale[data.courseCategory] || bgCategoryColors.grayscale['default']
    : bgCategoryColors.normal[data.courseCategory] || bgCategoryColors.normal['default'];

  return (
    <div className={`w-48 h-24 p-4 shadow-md rounded-md border-2 border-stone-400 flex flex-col justify-center items-center ${bgColorClass}`}>
      <div className="text-center">
        <div className="text-lg font-bold">{data.courseNum}</div>
        <div className="text-black break-words">{data.courseTitle}</div>
      </div>

      {/* More Info Button which triggers popup*/}
      <button
        onClick={() => onMoreInfoClick(data)}
        className="mt-2 text-sm text-blue-500 underline"
      >
        More Info
      </button>
      <Handle
        type="target"
        position={Position.Top}
        className="opacity-0" // Hide the handle
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="opacity-0" // Hide the handle
      />
    </div>
  );

}

export default memo(RoundedBoxNode);
