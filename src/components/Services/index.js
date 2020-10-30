import React from "react";
import IconTSS from "../../images/TSS.png";
import IconBSI from "../../images/BSI.png";
import IconHD from "../../images/HD.png";
import IconF5 from "../../images/F5.png";
import IconFBBC from "../../images/FBBC.png";
import IconWW from "../../images/WW.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="portfolio">
        <ServicesH1>Portfolio</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={IconTSS} />
            <ServicesH2>The Stiff Shaft</ServicesH2>
            <ServicesP>Golf blog designed completely in WordPress.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={IconBSI} />
            <ServicesH2>Big South Inflatables</ServicesH2>
            <ServicesP>
              Inflatable bounce houses developed entirely in WordPress.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={IconHD} />
            <ServicesH2>Hankins Development</ServicesH2>
            <ServicesP>
              HTML5/CSS modal site designed and coded for a local developer.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={IconF5} />
            <ServicesH2>F5 Strategies</ServicesH2>
            <ServicesP>
              Marketing agency site designed in WordPress using Elementor.
              Integrations with Zapier, Twilio, Shopify.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={IconFBBC} />
            <ServicesH2>Fit Body Bootcamp</ServicesH2>
            <ServicesP>
              Landing page with scroll elements and signup form designed in
              WordPress.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={IconWW} />
            <ServicesH2>Weight Wise</ServicesH2>
            <ServicesP>
              Medical weightloss site designed in WordPress and integrated with
              Schedulicity.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
