import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background.js";
import "../styles/register.css";

const Register = () => {

  const navigate = useNavigate(); // ✅ Added for redirect

  const savedData = JSON.parse(localStorage.getItem("fitnessForm"));

  const [step, setStep] = useState(1);

  const [form, setForm] = useState(
    savedData || {
      name: "",
      mobile: "",
      email: "",
      city: "",
      age: "",
      height: "",
      weight: "",
      bmi: "",
      goal: "",
      medical: "",
      diet: "",
      smoking: "",
      alcohol: "",
      paymentStatus: false,
    }
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("fitnessForm", JSON.stringify(form));
  }, [form]);

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!form.name) newErrors.name = "Name required";
      if (!form.mobile) newErrors.mobile = "Mobile required";
      if (!form.email) newErrors.email = "Email required";
    }

    if (step === 2) {
      if (!form.age) newErrors.age = "Age required";
      if (!form.height) newErrors.height = "Height required";
      if (!form.weight) newErrors.weight = "Weight required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const calculateBMI = () => {
    const h = form.height / 100;
    return (form.weight / (h * h)).toFixed(1);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const bmi = calculateBMI();
      const updatedForm = { ...form, bmi };

      await axios.post("http://localhost:8081/api/clients", updatedForm);

      localStorage.removeItem("fitnessForm");

      alert("Member Registered Successfully! 🎉");

      navigate("/services"); // ✅ Redirect after success

    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const progressPercent = (step / 3) * 100;

  return (
    <div className="register-page">
      <Background blur={true} />

      <div className="glass-card">
        <h2>Elite Fitness Enrollment</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <form onSubmit={submitForm}>
          <AnimatePresence mode="wait">

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                <span className="error">{errors.name}</span>

                <input name="mobile" placeholder="Mobile" value={form.mobile} onChange={handleChange} />
                <span className="error">{errors.mobile}</span>

                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <span className="error">{errors.email}</span>

                <input name="city" placeholder="City" value={form.city} onChange={handleChange} />

                <button type="button" onClick={nextStep}>Next</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} />
                <span className="error">{errors.age}</span>

                <input name="height" type="number" placeholder="Height (cm)" value={form.height} onChange={handleChange} />
                <span className="error">{errors.height}</span>

                <input name="weight" type="number" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} />
                <span className="error">{errors.weight}</span>

                <select name="goal" value={form.goal} onChange={handleChange}>
                  <option value="">Select Goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>General Fitness</option>
                </select>

                <div className="btn-group">
                  <button type="button" onClick={prevStep}>Back</button>
                  <button type="button" onClick={nextStep}>Next</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input name="medical" placeholder="Medical Conditions" value={form.medical} onChange={handleChange} />

                <select name="diet" value={form.diet} onChange={handleChange}>
                  <option value="">Diet</option>
                  <option>Vegetarian</option>
                  <option>Non-Vegetarian</option>
                  <option>Vegan</option>
                </select>

                <select name="smoking" value={form.smoking} onChange={handleChange}>
                  <option value="">Smoking</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>

                <select name="alcohol" value={form.alcohol} onChange={handleChange}>
                  <option value="">Alcohol</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Occasionally</option>
                </select>

                <label className="checkbox">
                  <input type="checkbox" name="paymentStatus" checked={form.paymentStatus} onChange={handleChange} />
                  Payment Completed
                </label>

                <div className="btn-group">
                  <button type="button" onClick={prevStep}>Back</button>
                  <button type="submit">Submit</button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default Register;
