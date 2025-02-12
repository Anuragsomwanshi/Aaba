import React from "react";
import "./Contact.css";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import mail from "../../assets/mail-icon.png";

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6b01c4a6-50cb-4f89-ade4-62e27f8bc3ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };

return (
    <div id="Contact" className="Contact">
      <div className="contact-col-1">
        <h1>Contact</h1>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Mobile number."
              required
            />

            <label>Write your msg here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your msg"
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit Now
            </button>
          </form>
          <span>{result}</span>
        </div>


        <div className="address">
         
            <img src={phone} alt="" /><p> 91+980065408</p>
          
            <img src={mail} alt="" /><p>aabamensparlor@gmai.com</p>
            
            <img src={location} alt="" /><p>ring road Latur 413512</p>
        </div>



      </div>

      
    </div>
  );
};

export default Contact;
