import React, { useEffect } from "react";
import "./packages.css";
import './packages_extra.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../../plugins/navbar";
import Searchbox from "../Searchbox_component/Searchbox";
import PackageBar from "./PackageBar";
import { packages } from "./PackageData";
export default function Package() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Affordable Packages for Photography | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Best Photographer Pricing for Travel, Pre-wedding, Wedding, etc. with Fodrix. Book a professional photographer all over India & get your photos within 48 hours."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/packages");
  }, []);
  return (
    <>
      <div className="package_wrapper">
        {
          packages.map((package_object) => {
            return <PackageBar package_object={package_object} />
          })
        }
      </div>
      
      <div className="search_heading search_heading-packages">
        <h3>Get an awesome photoshoot experience!</h3>
      </div>
      <div className="search_how">
        <Searchbox />
      </div>
    </>
  );
}
