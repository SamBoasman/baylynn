import React, { FormEvent } from "react";
import styles from './Contact.module.scss';

const Contact = () => {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const currentTarget = event.currentTarget;
        debugger;
        const formData = new FormData(currentTarget);
    
        formData.append("access_key", "cdb7b192-ab9e-4a92-b406-cb6db9e8ab5e");
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setResult("Form Submitted Successfully");
            currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
  
    return (
        <div className={styles['form-container']}>
            <form onSubmit={onSubmit} className={styles['contact-form']}>
                <input type="text" name="name" placeholder="Name" required/>
                <input type="email" name="email" placeholder="Email" required/>
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Submit Form</button>
            </form>
            <span>{result}</span>
        </div>
    );
  }

export default Contact;