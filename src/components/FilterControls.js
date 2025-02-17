import React from 'react';

const FilterControls = ({ filter, onFilterChange }) => {
    return (
        <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="Both"
                    checked={filter === 'Both'}
                    onChange={onFilterChange}
                    className="form-radio text-blue-600"
                />
                <span className="text-white">Both</span>
            </label>
            
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="COSI"
                    checked={filter === 'COSI'}
                    onChange={onFilterChange}
                    className="form-radio text-blue-600"
                />
                <span className="text-white">COSI</span>
            </label>
            
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="CL"
                    checked={filter === 'CL'}
                    onChange={onFilterChange}
                    className="form-radio text-blue-600"
                />
                <span className="text-white">CL</span>
            </label>
        </div>
    );
};

export default FilterControls;
