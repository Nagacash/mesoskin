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
    <form className="flex flex-col gap-4">
      <input type="text" className="input" placeholder={fullNamePlaceholder} />
      <input type="text" className="input" placeholder={lastNamePlaceholder} />
      <select className="input" defaultValue="">
        <option value="" disabled>{interestPlaceholder}</option>
        <option>Liposana 3</option>
      </select>
      <input type="text" className="input" placeholder={emailPlaceholder} />
      <input type="text" className="input" placeholder={phonePlaceholder} />
      <textarea className="textarea mb-2" placeholder={messagePlaceholder} />
      <button type="submit" className="btn mx-auto">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
