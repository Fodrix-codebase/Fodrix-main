import React, {useState}from 'react'
import CardPackageNew from "./CardPackageNew";
import "./packages_extra.css"
const PackageBar = (props) => {
    const {id, title} = props.package_object
    const [show, setShow] = useState(false);
    console.log(props)
    return (
        <div key={id} className="package_components">
            <div className="faqContent">
                <div className="main-heading_package container-fluid" onClick={() => setShow(prevState => !prevState)}>
                    <h3>{title} Package</h3>
                    <p className="Show-hide-faq">
                        {show ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i>}
                    </p>
                </div>
                {show && <CardPackageNew package_object={props.package_object}/>}
            </div>
        </div>
    )
}

export default PackageBar