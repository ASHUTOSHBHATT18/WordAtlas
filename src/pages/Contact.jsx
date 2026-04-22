export const Contact = () => {

    function handleSumbitForm(formData){
        const formInputData=Object.fromEntries(formData.entries());
        // console.log(formInputData);
    }
    
    return(
        <div className="container">
            <form className="contact-form" action={handleSumbitForm}>
                <div>
                    <p>Contact Us</p>
                </div>
                <input type="text" placeholder="Enter Your Name" name="uname" required autoComplete="off"/>
                <input type="text" placeholder="Enter Your Email" name="email" required autoComplete="off"/>
                <textarea placeholder="Enter Your Message" rows="10" name="message" id="message"></textarea>
                <button type="submit" value="send">Send Message</button>
            </form>
        </div>
    );
}