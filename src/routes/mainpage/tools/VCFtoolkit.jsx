function VCFtoolkit () {
    return (
        <div className="vcftoolkit">
            <p className="vcftoolkit_title">VCFtoolkit</p>
            <p className="vcftoolkit_description">A toolkit for annotating, and converting VCF files</p>
            <div className="vcftoolkit_programs_container">
                <div className="divider"></div>
                <div className="vcftoolkit_programs_grid">
                    <button className="vcftoolkit_convert">
                        <p className="vcftoolkit_convert_title">
                            VCFtoolkit convert
                        </p>
                        <p className="vcftoolkit_convert_description">
                            Convert a VCF file into another format (xlsx, csv and tsv)
                        </p>
                    </button>
                    <button className="vcftoolkit_annotate">
                        <p className="vcftoolkit_annotate_title">
                            VCFtoolkit annotate
                        </p>
                        <p className="vcftoolkit_annotate_description">
                            Convert a VCF file into another format (xlsx, csv and tsv)
                        </p>
                    </button>
                </div>
            </div>
        </div>
        
    )
}
export default VCFtoolkit;