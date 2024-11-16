import React from 'react';

const FilterControls = ({ filter, onFilterChange }) => {
    return (
        <div className="p-4 flex space-x-4">
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="Both"
                    checked={filter === 'Both'}
                    onChange={onFilterChange}
                    className="form-radio text-blue-600"
                />
                <span>Both</span>
            </label>
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="COSI"
                    checked={filter === 'COSI'}
                    onChange={onFilterChange}
                    className="form-radio text-blue-600"
                />
                <span>COSI</span>
            </label>
            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="CL"
                    checked={filter === 'CL'}
                    onChange={onFilterChange}
                    className="form-radio text-blue-600"
                />
                <span>CL</span>
            </label>
        </div>
    );
};

export default FilterControls;