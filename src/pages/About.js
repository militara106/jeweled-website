import React from "react";
import Section from "../Components/Section";
import Quote from "../Components/Quotation/Quotation";

export default function About() {
  return (
    <Section
      title="About"
      className="secondaryBG"
      id="section2"
      content={
        <div className="verticalFlex">
          <Quote
            quote='"This is the new normal. This is not a topic that people discuss and debate; this is life."'
            author="– Dipanjan Chatterjee, VP, principal analyst, Forrester"
          />
          <div>
            <div className="content-title">Our Mission</div>
            <hr className="titleLineSmall" />
            <div className="content-subtext">
            Jeweled is a transgender centric mobile dating app to
            transition into a more meaningful relationship. It revolves around
            three core values- empowerment, belonging, and safety. 
            </div>
            <div className="content-title">The App</div>
            <hr className="titleLineSmall" />
            <div className="content-subtext">
            The use will have the option to identify their unique gender
            identity and what they’re looking for the How it works Jeweled App
            will have a novel personality questionnaire to identify one’s unique
            gemstone or personality type.
            </div>
          </div>
        </div>
      }
    />
  );
}
