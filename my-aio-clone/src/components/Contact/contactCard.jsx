const ContactCard = () => {
    return(
        <>
         <div className="w-[50%] flex flex-col">
             <div className="border border-[#FFFFFF14] bg-gradient-to-r from-[#300E5F] to-blue-900/75 rounded-[30px] py-14 px-[86px] w-[fit-content] mx-auto">
                <div className="flex flex-col gap-y-6">
                    <img src="https://myaio.com/wp-content/uploads/2023/08/contact_team.png" alt="" />
                    <p className="text-driftingDream font-semibold">Responds in 4-8 hours</p>
                </div>
             </div>
             <div className="mx-auto">
              <img src="https://myaio.com/wp-content/uploads/2023/08/contact_shape.png"  className="ms-20"/>
             </div>
         </div>
        </>
    );
}


export default ContactCard;