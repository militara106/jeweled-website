import React from 'react';
import Section from '../Components/Section';
import Founders from '../assets/founders.png'

export default function Team() {
  return (
    <Section
          title='Who Are We?'
          className="primaryBG"
          id='section3'
          content={
          <div className="horizontalFlex">
            <img src={Founders} className="foundersPic"/>
            <div>Hello! Our name’s are Daniella and Avi and we are the co-founders of Jeweled: The Dating App. We both originally came from the field of medicine prior to developing this app. As transgender women, we have struggled as we attempted to navigate the dating scene. Circa 2016 we were discussing these issues while at our local nail salon. We were lamenting our problems with dating. The dating world can be cruel and unwelcoming. This holds to be exceptionally true for those that identify as transgender: ridiculed and harassed at bars, clubs, and coffee shops. The online world of dating apps is no different for us as we are called “men,” “faggots,” “chicks with dicks,” and the list of hateful things go on. We have received paragraph long death threats. We were often banned from traditional dating apps, being reported just for being transgender. Dating apps do not have trans people in mind. If not ridiculed or banned, we are oversexualized and fetishized and often approached by users as discreet sexual fantasies. However, every once in a while you find a rare "gem" through all the trash. This sparked the idea of creating a better dating app for us to collect all these gems in one place: to Jeweled.
            </div>
          </div>}
        />
  );
}
