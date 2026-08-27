import { Link, useNavigate } from 'react-router';
function Tools () {
    const navigate = useNavigate();
    return (
        <div className="tools">
            <span className="tools_title">FORGE tools</span>
            <span className="tools_description">Our mission is to develop and maintain free, user-friendly bioinformatics tools that are accessible to all researchers</span>
            <div className="tools_container">
                <div className="divider"></div>
                <div className="tools_grid">
                    <button onClick={() => {navigate("/tools/vcftoolkit")}} className="vcftoolkit">
                        <p className="vcftoolkit_title">
                            VCFtoolkit
                        </p>
                        <p className="vcftoolkit_description">
                            A toolkit for annotating, and converting VCF files
                        </p>
                    </button>
                </div>
            </div>
        </div>
        
    )
}
export default Tools;