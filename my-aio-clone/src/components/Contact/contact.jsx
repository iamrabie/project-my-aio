import Title from "../Title/title";
import ContactCard from "./contactCard";
import ContactForm from "./form";

const Contact = () => {
    return(
        <>
        <Title text="Do You Have Question? Contact Us" size="medium" highlightedText="Contact Us" />
        <div className="sm:flex sm:flex-col lg:flex lg:flex-row sm:gap-y-9 lg:gap-y-0">
          <ContactCard />
          <ContactForm />
        </div>
        </>
    );
}



export default Contact;