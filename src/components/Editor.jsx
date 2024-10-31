import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Editor({
  personal,
  educations,
  experiences,
  handleSubmit,
}) {
  const [formData, setFormData] = useState({
    personal: personal,
    educations: educations,
    experiences: experiences,
  });

  console.log(formData);

  function submitForm(e) {
    e.preventDefault();
    handleSubmit(formData);
  }

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personal: {
        ...prevData.personal,
        [name]: value,
      },
    }));
  }

  function handleEducationChange(e, index) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      educations: prevData.educations.map((education, i) => {
        if (i === index) {
          return { ...education, [name]: value };
        } else {
          return education;
        }
      }),
    }));
  }

  function handleExperienceChange(e, index) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.map((experience, i) => {
        if (i === index) {
          return { ...experience, [name]: value };
        } else {
          return experience;
        }
      }),
    }));
  }

  function addEducation(e) {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      educations: [
        ...prevData.educations,
        {
          id: generateId(),
          title: "",
          subtitle: "",
          date: "",
        },
      ],
    }));
  }

  function addExperience(e) {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        {
          id: generateId(),
          title: "",
          subtitle: "",
          date: "",
        },
      ],
    }));
  }

  function deleteSection(id, type) {
    setFormData((prevData) => ({
      ...prevData,
      [type]: formData[type].filter((instance) => instance.id != id),
    }));
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <fieldset>
        <legend>Personal information</legend>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.personal.name}
          placeholder="Name"
          onChange={handlePersonalChange}
        />
        <label htmlFor="mail" value={personal.mail}>
          E-mail:{" "}
        </label>
        <input
          id="mail"
          name="mail"
          type="email"
          value={formData.personal.mail}
          placeholder="E-mail"
          onChange={handlePersonalChange}
        />
        <label htmlFor="number">Phone: </label>
        <input
          id="number"
          name="number"
          type="tel"
          value={formData.personal.number}
          placeholder="Number"
          onChange={handlePersonalChange}
        />
      </fieldset>
      <fieldset>
        <legend>Education</legend>
        {formData.educations.map((education, index) => (
          <EditorEducation
            key={education.id}
            index={index}
            {...education}
            handleChange={handleEducationChange}
            handleDelete={(index) => deleteSection(index, "educations")}
          />
        ))}
        <button type="button" className="btn-add" onClick={addEducation}>
          Add education
        </button>
      </fieldset>
      <fieldset>
        <legend>Experience</legend>
        {formData.experiences.map((experience, index) => (
          <EditorExperience
            key={experience.id}
            index={index}
            {...experience}
            handleChange={handleExperienceChange}
            handleDelete={(index) => delete (index, "experiences")}
          />
        ))}
        <button type="button" className="btn-add" onClick={addExperience}>
          Add experience
        </button>
      </fieldset>
      <button type="submit" id="submit-btn">
        Submit
      </button>
    </form>
  );
}

export function EditorEducation({
  index,
  id,
  title,
  subtitle,
  date,
  handleChange,
  handleDelete,
}) {
  return (
    <fieldset>
      <label htmlFor={`education-title-${index}`}>Degree: </label>
      <input
        id={`education-title-${index}`}
        type="text"
        name="title"
        value={title}
        placeholder="Degree title"
        onChange={(event) => handleChange(event, index)}
      />
      <label htmlFor={`education-subtitle-${index}`}>Institution: </label>
      <input
        id={`education-subtitle-${index}`}
        type="text"
        name="subtitle"
        value={subtitle}
        placeholder="University"
        onChange={(event) => handleChange(event, index)}
      />
      <label htmlFor={`education-date-${index}`}>Dates active: </label>
      <input
        id={`education-date-${index}`}
        type="text"
        name="date"
        value={date}
        placeholder="Dates"
        onChange={(event) => handleChange(event, index)}
      />
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </fieldset>
  );
}

export function EditorExperience({
  index,
  id,
  title,
  subtitle,
  date,
  handleChange,
  handleDelete,
}) {
  return (
    <fieldset>
      <label htmlFor={`experience-title-${index}`}>Position: </label>
      <input
        id={`experience-title-${index}`}
        type="text"
        name="title"
        value={title}
        placeholder="CEO"
        onChange={(event) => handleChange(event, index)}
      />
      <label htmlFor={`experience-subtitle-${index}`}>Organization: </label>
      <input
        id={`experience-subtitle-${index}`}
        type="text"
        name="subtitle"
        value={subtitle}
        placeholder="Company Inc."
        onChange={(event) => handleChange(event, index)}
      />
      <label htmlFor={`experience-date-${index}`}>Dates active: </label>
      <input
        id={`experience-date-${index}`}
        type="text"
        name="date"
        value={date}
        placeholder="Dates"
        onChange={(event) => handleChange(event, index)}
      />
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </fieldset>
  );
}

function generateId() {
  const array = new Uint32Array(1); // Create a typed array of 32-bit unsigned integers
  window.crypto.getRandomValues(array); // Fill the array with cryptographically strong random values
  return array[0].toString(36); // Convert to base-36 string (alphanumeric)
}
