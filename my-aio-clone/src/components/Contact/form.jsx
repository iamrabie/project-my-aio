import Input from "../Input/input";

const ContactForm = () => {
  return (
    <>
      <div className="w-[50%]">
        <div className="w-[82%] me-auto">
          <form className="p-14 text-[15px] bg-gradient-to-r from-purple-900/75 to-blue-900/75 rounded-[30px] flex flex-col gap-y-7">
            <Input />
            <Input />
            <Input />
            <textarea
              rows="3"
              className="rounded-md text-driftingDream outline-none py-3.5 px-5 bg-transparent/5 border border-[#FFFFFF14] shadow shadow-sm "
            >
              Please describe what you need*
            </textarea>
            <button className="text-sm py-4 px-5 rounded-full bg-arcade text-sm text-white font-semibold w-40 my-2">
              SYBMIT HERE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
