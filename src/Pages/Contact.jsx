import { useState } from "react";

const Contact = () => {
  const [fromData, setFromData] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    number: "",
    email: "",
    massage: "",
  });

  const handleInputValue = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputValue({...inputValue, [name]: value})
  }

  // Handeling On Submission or Send Button
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFromData([...fromData, inputValue])
    setInputValue({
      name: "",
    number: "",
    email: "",
    massage: "",
    })
    console.log(inputValue)
  };
  
  // Handeling On Reset or Reset Button
  const handleOnReset = () => {
    setInputValue({
      name: "",
    number: "",
    email: "",
    massage: "",
    })
  }

 
  return (
    <section className="contactSection">
      <div className="container">
        <h2>Contact Us</h2>
        <form onReset={handleOnReset} className="massageFrom" onSubmit={handleOnSubmit}>
          <input
            type="text"
            onChange={handleInputValue}
            value={inputValue.name}
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            type="number"
            onChange={handleInputValue}
            value={inputValue.number}
            placeholder="Number"
            name="number"
          />
          <input
            type="email"
            onChange={handleInputValue}
            value={inputValue.email}
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            name="massage"
            onChange={handleInputValue}
            value={inputValue.massage}
            id=""
            cols="30"
            placeholder="Massages"
            rows="10"
            required
          ></textarea>
          <div className="ContactFromBtn">
            <button type="submit">Send</button>
            <button type="reset">Rest</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
