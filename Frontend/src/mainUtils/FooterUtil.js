import React, { Fragment } from "react";
import Footercity from "../components/footer_components/FooterComponent/FooterCity";
import Lowerfooter from "../components/footer_components/FooterComponent/lowerfooter";
import Topfooter from "../components/footer_components/FooterComponent/Topfooter";

const FooterUtil = () => {
  return (
    <Fragment>
      <Topfooter />
      <Footercity />
      <Lowerfooter />
    </Fragment>
  );
};

export default FooterUtil;
