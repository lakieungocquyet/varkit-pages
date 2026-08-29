import { Link, useNavigate } from 'react-router';
import Breadcrumb from "../../../components/ui/Breadcrumb"
function Tools () {
    const navigate = useNavigate();
    const breadcrumbItems = [
        {
            label: "FORGE Home",
            path: "/"
        },
        {
            label: "Tools",
            path: "/tools"
        },
    ];
    return (
        <div className="tools">
            <Breadcrumb items={breadcrumbItems} />
            <div className="tools_title_and_description"> 
                <div className="tools_title">FORGE tools</div>
                <div className="tools_description">Our mission is to develop and maintain free, user-friendly bioinformatics tools that are accessible to all researchers</div>
            </div>
            <div className="tools_container">
                <div className="divider"></div>
                <div className="tools_grid">
                    <button onClick={() => {navigate("/tools/vcftoolkit")}} className="vcftoolkit_button">
                        <p className="vcftoolkit_button_title">
                            VCFtoolkit
                        </p>
                        <p className="vcftoolkit_button_description">
                            A toolkit for annotating, and converting VCF files
                        </p>
                    </button>
                </div>
            </div>
        </div>
        
    )
}
export default Tools;