"use client";

import Button from "./Button";

const Form = ({
  fullNamePlaceholder = "Full name",
  lastNamePlaceholder = "Last name",
  interestPlaceholder = "What are you interested in?",
  emailPlaceholder = "Email address",
  phonePlaceholder = "Phone number",
  messagePlaceholder = "Your message",
  buttonText = "Send message",
}) => {
  return (
    <form className="flex flex-col gap-4" aria-label="Contact form">
      <div>
        <label htmlFor="firstName" className="sr-only">
          {fullNamePlaceholder}
        </label>
        <input 
          type="text" 
          id="firstName"
          name="firstName"
          className="input" 
          placeholder={fullNamePlaceholder}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="sr-only">
          {lastNamePlaceholder}
        </label>
        <input 
          type="text" 
          id="lastName"
          name="lastName"
          className="input" 
          placeholder={lastNamePlaceholder}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="interest" className="sr-only">
          {interestPlaceholder}
        </label>
        <select 
          id="interest"
          name="interest"
          className="input" 
          defaultValue=""
          required
          aria-required="true"
        >
          <option value="" disabled>{interestPlaceholder}</option>
          <option>Liposana 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          {emailPlaceholder}
        </label>
        <input 
          type="email" 
          id="email"
          name="email"
          className="input" 
          placeholder={emailPlaceholder}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          {phonePlaceholder}
        </label>
        <input 
          type="tel" 
          id="phone"
          name="phone"
          className="input" 
          placeholder={phonePlaceholder}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          {messagePlaceholder}
        </label>
        <textarea 
          id="message"
          name="message"
          className="textarea mb-2" 
          placeholder={messagePlaceholder}
          required
          aria-required="true"
        />
      </div>
      <Button type="submit" className="mx-auto" ariaLabel={buttonText}>
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
