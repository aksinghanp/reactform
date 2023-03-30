import React, { useState } from 'react';
import "./Form.css"
function Form() {
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('Email Address');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const skillsList = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g. submit to a server
    setIsFormSubmitted(true);
    setName('');
    setEmail('');
  
    setSelectedSkills([]);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  }

  const handleSkillChange = (event) => {
    const { value } = event.target;

    if(!selectedSkills.includes(value)) {
      setSelectedSkills([...selectedSkills, value]);
    } else {
      setSelectedSkills(selectedSkills.filter(skill => skill !== value));
    }
  }

  const handleFormValidation = () => {
    if(name !== '' && email !== '' && selectedSkills.length > 0) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }

  return (
    <div className="form">
            <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="name" value={name} onChange={(e) => { handleInputChange(e); handleFormValidation(); }} />
      </label>
      <br />
      <label>
        <input type="email" name="email" value={email} onChange={(e) => { handleInputChange(e); handleFormValidation(); }} />
      </label>
      <br />
      <label>
        <br />
        <select name="skills" multiple value={selectedSkills} onChange={(e) => { handleSkillChange(e); handleFormValidation(); }}>
          {skillsList.map(skill => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit" disabled={!isFormFilled}>CLAIM YOUR FREE TRIAL</button>
      {isFormSubmitted && <p>Form submitted successfully!</p>}
      <h6>By clicking the button you are agreeing to our Terms and Services</h6>
    </form>
    </div>
  );
}

export default Form;
