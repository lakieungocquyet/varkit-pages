import {useState} from "react";

function HeaderNavigation () {
    const [openSection, setOpenSection] = useState(null);
    let closeTimer = null;

    const open = (name) => {
        clearTimeout(closeTimer);
        setOpenSection(name);
    };

    const close = () => {
        closeTimer = setTimeout(() => {
            setOpenSection(null);
        }, 150);
    };
    return(
        <div className={`header_navigation`} >
            <div className={`dropdown_container`}>
                <button className="dropdown_button">
                    <span className="dropdown_button_label">
                        Home
                    </span>
                </button>
            </div>
            <div className={`dropdown_container ${openSection === "installation" ? "open" : ""}`}>
                <button className="dropdown_button" onMouseEnter={() => open("installation")} onMouseLeave={close}>
                    <span className="dropdown_button_label">
                        Installation
                    </span>
                </button>
            </div>
            <div className={`dropdown_container`}>
                <button className="dropdown_button">
                    <span className="dropdown_button_label">
                        Documentation
                    </span>
                </button>
            </div>
            <div className={`dropdown_container ${openSection === "about" ? "open" : ""}`}>
                <button className="dropdown_button" onMouseEnter={() => open("about")} onMouseLeave={close}>
                    <span className="dropdown_button_label" >
                        About
                    </span>
                </button>
            </div>
            {(openSection === "installation")  && (
                <div className="dropdown_panel" onMouseEnter={() => open("installation")} onMouseLeave={close}>
                    
                </div>
                )
            }
            {(openSection === "about") && (
                <div className="dropdown_panel" onMouseEnter={() => open("about")} onMouseLeave={close}>
                    <div className="about_panel">
                        <button>
                            About us
                        </button>
                        <button>
                            License
                        </button>
                    </div>
                </div>
                )

            }
        </div>
    )
}
export default HeaderNavigation;