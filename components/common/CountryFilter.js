import React from 'react'

export default function CountryFilter() {
  return (
    <div>
      <select
        id="country"
        name="country"
        className="block w-32 rounded-md border-0 px-2 py-2 text-gray-900 ml-auto ring-1 ring-inset ring-gray-300"
      >
        <option>Jordan</option>
        <option>Iraq</option>
        <option>Egypt</option>
      </select>
    </div>
  )
}
