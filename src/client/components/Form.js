import React, { useState } from 'react';

const Form = ({
  handleData,
  text,
  disabled,
}) => {
  const [animal, setAnimal] = useState('');

  const handleChange = (event) => {
    const input = event.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    setAnimal(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting animal:', animal);
    handleData({ animal });
  };

  return (
    <div className={`${disabled ? 'opacity-50' : ''} bg-white shadow rounded-lg w-11/12 sm:w-6/12 mx-auto my-4 z-10`}>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {text.h3}
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>{text.p}</p>
        </div>
        <form
          className="mt-5 sm:flex sm:items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full sm:max-w-xs">
            <label htmlFor="createAnimal" className="sr-only">
              Favourite animal
            </label>
            <input
              type="text"
              name="createAnimal"
              id="createAnimal"
              value={animal}
              placeholder="Hedgehog"
              onChange={(e) => handleChange(e)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={disabled}
            className={`${disabled ? 'opacity-80 cursor-not-allowed' : ''} mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
          >
            {text.button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;