import React, { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebase"; // Adjust the path according to your file structure

const formFields = [
  {
    label: "First Name",
    id: "first_name",
    name: "first_name",
    type: "text",
    placeholder: "Enter First Name...",
  },
  {
    label: "Last Name",
    id: "last_name",
    name: "last_name",
    type: "text",
    placeholder: "Enter Last Name...",
  },
  {
    label: "Email",
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter Email...",
  },
  {
    label: "Job Role",
    id: "job_role",
    name: "job_role",
    type: "select",
    options: [
      { value: "", label: "Select Job Role" },
      { value: "frontend", label: "Frontend Developer" },
      { value: "backend", label: "Backend Developer" },
      { value: "full_stack", label: "Full Stack Developer" },
      { value: "ui_ux", label: "UI UX Designer" },
    ],
  },
  {
    label: "Address",
    id: "address",
    name: "address",
    type: "textarea",
    placeholder: "Enter Address...",
  },
  {
    label: "City",
    id: "city",
    name: "city",
    type: "text",
    placeholder: "Enter City Name...",
  },
  {
    label: "Pincode",
    id: "pincode",
    name: "pincode",
    type: "number",
    placeholder: "Enter Pincode...",
  },
  {
    label: "Date",
    id: "date",
    name: "date",
    type: "date",
    defaultValue: "2022-01-10",
  },
  {
    label: "Upload Your CV",
    id: "upload",
    name: "upload",
    type: "file",
  },
];

const Form = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    job_role: "",
    address: "",
    city: "",
    pincode: "",
    date: "",
    upload: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      upload: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "jobApplications"), {
        ...formData,
        upload: formData.upload ? formData.upload.name : "",
      });
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Failed to submit the application.");
    }
  };

  return (
    <div className="container">
      <div className="apply_box">
        <h1>
          Job Application
          <span className="title_small">(Web)</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            {formFields.map((field) => {
              if (field.type === "select") {
                return (
                  <div className="form_control" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <select
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              } else if (field.type === "textarea") {
                return (
                  <div className="textarea_control" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <textarea
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                );
              } else if (field.type === "file") {
                return (
                  <div className="form_control" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      onChange={handleFileChange}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="form_control" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      defaultValue={field.defaultValue || ""}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="button_container">
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
