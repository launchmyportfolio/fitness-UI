import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const submitData = async (e) => {
    e.preventDefault();

    const heightM = formData.height / 100;
    const bmi = (formData.weight / (heightM * heightM)).toFixed(2);

    const finalData = { ...formData, bmi };

    await fetch("${process.env.REACT_APP_API_URL}/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData)
    });

    alert("Registered Successfully!");
    setStep(1);
  };

  return (
    <div className="form-container">
      <form onSubmit={submitData}>

        {step === 1 && (
          <>
            <input name="name" placeholder="Full Name" onChange={handleChange} required />
            <input name="email" placeholder="Email" onChange={handleChange} required />
            <button type="button" onClick={() => setStep(2)}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <input name="height" type="number" placeholder="Height" onChange={handleChange} required />
            <input name="weight" type="number" placeholder="Weight" onChange={handleChange} required />
            <button type="submit" className="gold-btn">Submit</button>
          </>
        )}

      </form>
    </div>
  );
}

export default MultiStepForm;
