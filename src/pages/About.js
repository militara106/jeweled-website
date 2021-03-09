import React from 'react';
import Section from '../Components/Section';
import Quote from '../Components/Quotation/Quotation';

export default function About() {
  return (
    <Section
          title='About'
          className='secondaryBG'
          id='section2'
          content={
            <div className="verticalFlex">
              <Quote
              quote='"This is the new normal. This is not a topic that people discuss and debate; this is life."'
              author="– Dipanjan Chatterjee, VP, principal analyst, Forrester"
              />
              <div>
               Jeweled is unique from other dating apps. On Jeweled we focus on personality over physicality with a novel personality questionnaire all users take to help identify their unique gemstone or personality type. This gem will be more compatible with other gems and you can swipe through your dating pool options via compatible gems / personality types. The app is simple to use and open to both trans and trans-attracted individuals. All gender options are available to identify as and you can select which gender options you are personally interested in connecting with. Our unique app incorporates a trans-education verification process to approve you as being “trans educated” so you know who has and has not been informed about trans issues. You are encouraged to being verified to increase your dating pool and access to all features on the app. On Jeweled, only trans people are allowed to message first. Other apps we are swarmed with unwanted messages and photos, but with Jeweled you get to be selective on who you connect with. We also include community building chatrooms unique to each gender identify as a type of caucus to form community and friends outside of dating. Jeweled has psychosocial therapeutic features to help connect you with mental wellness at the tap of a finger. We are aware of the disparaging issues us trans people face and want to help you not just with dating, but with your overall well-being. Push notifications will take on daily transgender quotes, policy, statistics, and fun historical moments to keep everyone informed about the trans experience. At Jeweled we will have strong security and surveillance and flag users sending unwanted/inappropriate messages. If you chose to subscribe to Jeweled Unlocked you will have access to unlimited swipes, unlimited distance radius, and the ability to view which users liked you before swiping. In the past decade there has been a positive shift in gender culture. We envision this as a tipping point for trans folks as we finally can be celebrated publicly as humans that fall in love with longstanding partners as we transition into a more meaningful relationship.
              </div>
            </div>
          }
        />
  );
}
