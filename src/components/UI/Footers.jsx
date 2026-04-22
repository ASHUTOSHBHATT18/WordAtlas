 import footerContact from "../../api/footerApi.json";
export const Footers = () => {
    return (
        <footer>
        <div className="container">
            <div className="footer-content">
                {footerContact.map((item)=>(
                    <div className="footer-item" key={item.id}>
                        <span>{item.icon}</span>
                        <h4>{item.title}</h4>
                        <p>{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
        </footer>
    )
}