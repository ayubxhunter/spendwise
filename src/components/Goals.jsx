import React, { useState, useEffect } from 'react';

const Goals = () => {
  const [inputs, setInputs] = useState(() => {
    // Trys to get data from local storage, if available
    const savedInputs = localStorage.getItem('userInputs');
    return savedInputs
      ? JSON.parse(savedInputs)
      : {
          monthlyIncome: '',
          paysForHousing: '',
          paysForInsurance: '',
          paysForTransportation: '',
          paysForUtilities: '',
        };
  });

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    // Validate monthlyIncome as a number (integer or float)
    const income = parseFloat(inputs.monthlyIncome);
    if (isNaN(income) || !Number.isFinite(income)) {
      newErrors.monthlyIncome = 'Please enter a valid number for monthly income.';
    }

    // Validate paysForHousing, paysForInsurance, paysForTransportation, paysForUtilities as "Yes" or "No"
    const yesNoOptions = ['Yes', 'No'];
    const fieldsToValidate = [
      'paysForHousing',
      'paysForInsurance',
      'paysForTransportation',
      'paysForUtilities',
    ];

    fieldsToValidate.forEach((field) => {
      if (!yesNoOptions.includes(inputs[field])) {
        newErrors[field] = 'Please enter either "Yes" or "No".';
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Save data to local storage whenever inputs change
  useEffect(() => {
    localStorage.setItem('userInputs', JSON.stringify(inputs));
  }, [inputs]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate inputs
    const isValid = validateInputs();
  
    if (isValid) {
      console.log('Submitted Data:', inputs);
      // Save the data to local storage
      localStorage.setItem('submittedData', JSON.stringify(inputs));
      // Perform any additional actions upon submission
      // For example, you can process the inputs here
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Let's get some information about you</h1>
      <form onSubmit={handleSubmit}>
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Form fields */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                What is your monthly income?
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  name="monthlyIncome"
                  className="mt-1 block w-full"
                  placeholder="Your answer"
                  value={inputs.monthlyIncome}
                  onChange={handleInputChange}
                />
                {errors.monthlyIncome && (
                  <div style={{ color: 'red' }}>{errors.monthlyIncome}</div>
                )}
              </td>
            </tr>
            {/* Row for Housing */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Do you pay for housing?
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  name="paysForHousing"
                  className="mt-1 block w-full"
                  placeholder="(Yes or No)"
                  value={inputs.paysForHousing}
                  onChange={handleInputChange}
                />
                {errors.paysForHousing && (
                  <div style={{ color: 'red' }}>{errors.paysForHousing}</div>
                )}
              </td>
            </tr>
            {/* Row for Insurance */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Do you pay for insurance?
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  name="paysForInsurance"
                  className="mt-1 block w-full"
                  placeholder="(Yes or No)"
                  value={inputs.paysForInsurance}
                  onChange={handleInputChange}
                />
                {errors.paysForInsurance && (
                  <div style={{ color: 'red' }}>{errors.paysForInsurance}</div>
                )}
              </td>
            </tr>
            {/* Row for Transportation Services */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Do you pay for transportation services?
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  name="paysForTransportation"
                  className="mt-1 block w-full"
                  placeholder="(Yes or No)"
                  value={inputs.paysForTransportation}
                  onChange={handleInputChange}
                />
                {errors.paysForTransportation && (
                  <div style={{ color: 'red' }}>
                    {errors.paysForTransportation}
                  </div>
                )}
              </td>
            </tr>
            {/* Row for Utilities */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Do you pay for utilities?
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <input
                  type="text"
                  name="paysForUtilities"
                  className="mt-1 block w-full"
                  placeholder="(Yes or No)"
                  value={inputs.paysForUtilities}
                  onChange={handleInputChange}
                />
                {errors.paysForUtilities && (
                  <div style={{ color: 'red' }}>{errors.paysForUtilities}</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Goals;


