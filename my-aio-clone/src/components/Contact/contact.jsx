import Title from "../Title/title";
import ContactCard from "./contactCard";
import ContactForm from "./form";

const Contact = () => {
    return(
        <>
        <Title text="Do You Have Question? Contact Us" size="medium" highlightedText="Contact Us" />
        <div className="flex">
          <ContactCard />
          <ContactForm />
        </div>
        </>
    );
}



export default Contact;