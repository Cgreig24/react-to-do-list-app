import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="socialMedia">
          <img className="instagram" src={instagram} />
          <img className="twitter" src={twitter} />
        </div>
        <h4>GSD</h4>
        <div className="footerLinks">
          <h5 className="">Legal Stuff</h5>
          <h5 className="">Privacy Policy</h5>
          <h5 className="">Security</h5>
          <h5 className="">Website Accessibility</h5>
        </div>
      </div>
    </div>
  );
};

//https://blog.hubspot.com/website/website-footer#:~:text=The%20website%20footer%20is%20the,an%20email%20sign%2Dup%20form.
//maybe include redirect to the top of the page
// include some sort of contact details
//Hubspot looks good and so does Tamras Gin

export default Footer;
