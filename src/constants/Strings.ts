/** @note some error texts are just empty strings, those are hard coded in. In case you're confused why sometimes the error text doesn't show up */

import {DV_LOCAL_COUNT} from './Constants';

/********************************************************************************/
/******************************** AUTH SCREENS **********************************/
/********************************************************************************/

/**********************************/
/***** FORGOT PASSWORD SCREEN *****/
/**********************************/

export const S_FPS_SEND_BUTTON = 'Send';

/************************/
/***** LOGIN SCREEN *****/
/************************/

export const S_LS_LOGIN_HEADING = 'LOGIN';
export const S_LS_FORGOT_PASSWORD = 'Forgot Password?';
export const S_LS_LOGIN_BUTTON = 'Login';
export const S_LS_DONT_HAVE_AN_ACCOUNT = "Don't have an account? ";
export const S_LS_REGISTER_HERE = 'Register here';

/***************************/
/***** REGISTER SCREEN *****/
/***************************/

export const S_RS_REGISTER_HEADING = 'REGISTER';
export const S_RS_REGISTER_BUTTON = 'Register';
export const S_RS_BY_REGISTERING_NOTICE = 'By registering you agree to our ';
export const S_RS_PRIVACY_POLICY = 'Privacy Policy';
export const S_RS_AND = ' and ';
export const S_RS_TERMS_OF_SERVICE = 'Terms of Service';
export const S_RS_SUBSCRIBE_TO = 'Subscribe to';
export const S_RS_EGGNATION_SHOP_COM = ' eggnationshop.com ';
export const S_RS_EMAILS = 'emails';

/********************************************************************************/
/******************************** GAME SCREENS **********************************/
/********************************************************************************/

/***********************************/
/***** AVAILABLE PRIZES SCREEN *****/
/***********************************/

export const S_APS_TITLE = 'Available Prizes';

/***********************/
/***** HOME SCREEN *****/
/***********************/

export const S_HS_OUT_OF_TAPS_FAILED_TO_GET_RESET_TIME = 'you are out of taps for today';
export const S_HS_OUT_OF_TAPS_MESSAGE_GOT_RESET_TIME = 'Your taps will reset in';


/*****************************/
/***** WON PRIZES SCREEN *****/
/*****************************/

export const S_WPS_TITLE = 'Won Prizes';

/**************************/
/***** PRIZES SCREEN *****/
/**************************/
// These are for both won prizes and available prizes screens

export const S_PS_FAILED_PRIZE_FETCH = 'Failed to fetch prizes';
export const S_PS_NO_AVAILABLE_PRIZES =
  'No Prizes Available. More Coming Soon!';
export const S_PS_NO_WON_PRIZES = "You haven't won anything yet!";

/******************************/
/***** CLAIM PRIZE SCREEN *****/
/******************************/

export const S_CPS_CLAIM_BUTTON = 'Claim';
export const S_CPS_SHIPPING_ADDRESS_TITLE = 'Shipping Address';
export const S_CPS_PAYPAL_EMAIL_TITLE = 'PayPal Email';

/******************************/
/***** HOW TO PLAY SCREEN *****/
/******************************/

export const S_HTPS_TAP_EGG = `Tap The Egg (${DV_LOCAL_COUNT}/day)`;
export const S_HTPS_LOSE = 'Lose';
export const S_HTPS_WIN = 'Win';
export const S_HTPS_AD = 'Ad';
export const S_HTPS_CLAIM_WON_PRIZES = 'Claim Won Prizes';
export const S_HTPS_WE_DELIVER_THE_PRIZE = 'We Deliver The Prize';
export const S_HTPS_YOU_RECEIVE_THE_PRIZE = 'You Receive The Prize';

/************************************************************************************/
/******************************** SETTINGS SCREENS **********************************/
/************************************************************************************/

/***************************/
/***** SETTINGS SCREEN *****/
/***************************/

export const S_SS_PROFILE_HEADING = 'PROFILE';
export const S_SS_EMAIL = 'Email';
export const S_SS_EMAIL_VERIFIED = 'Verified';
export const S_SS_PASSWORD = 'Password';
export const S_SS_PASSWORD_DOTS = '●●●●●●●';
export const S_SS_LANGUAGE = 'Language';

export const S_SS_CONTACT_HEADING = 'CONTACT';
export const S_SS_EGGNATION = 'Eggnation Shop';
export const S_SS_CONTACT_US = 'Contact Us';

export const S_SS_LEGAL_HEADING = 'LEGAL';
export const S_SS_PRIVACY_POLICY = 'Privacy Policy';
export const S_SS_TERMS_AND_CONDITIONS = 'Terms & Conditions';

export const S_SS_LOGOUT_BUTTON = 'Logout';
export const S_SS_DELETE_ACCOUNT_BUTTON = 'Delete Account';

/*********************************/
/***** DELETE ACCOUNT SCREEN *****/
/*********************************/

export const S_DAS_DELETE_BUTTON = 'Delete Account';

/*****************************/
/***** EDIT EMAIL SCREEN *****/
/*****************************/

export const S_EES_UPDATE_EMAIL_BUTTON = 'Update Email';

/********************************/
/***** EDIT PASSWORD SCREEN *****/
/********************************/

export const S_EPS_UPDATE_PASSWORD_BUTTON = 'Update Password';

/**********************************************************************************/
/******************************** POLICY SCREENS **********************************/
/**********************************************************************************/

/*********************************/
/***** PRIVACY POLICY SCREEN *****/
/*********************************/

export const S_PP_INTRODUCTION_TITLE = 'Introduction';
export const S_PP_INTRODUCTION_CONTENT = `This Privacy Policy describes how Eggnation and Applicnation (collectively the “App”, “we”, “our”, “us”) collects, uses, and discloses your Personal Information when you open and use our app.`;

export const S_PP_TERMINOLOGY_TITLE = 'Terminology';
export const S_PP_TERMINOLOGY_CONTENT = `“Affiliated” - Those with whom we work together with in order to keep the Eggnation application running. This includes but is not limited to service provider’s, applications, software, websites, businesses or legal entities of any sort.

“Using” - opening, viewing or interacting with our app is considered “using” the Service.

“Users” - those who use the Service.`;

export const S_PP_PERSONAL_INFORMATION_TITLE = 'Personal Information';
export const S_PP_PERSONAL_INFORMATION_CONTENT = `When using Eggnation, you may be required to provide us with certain personal identifiable information. This information will never be used by us in a manner that does not conform to this Privacy Policy.`;

export const S_PP_INFO_WE_COLLECT_TITLE = 'What Information Do We Collect?';
export const S_PP_INFO_WE_COLLECT_CONTENT = `In order for our Service to function correctly we collect (a) the email of those using our Service (b) aggregate information of those using our Service (c) information voluntarily give by the user (such as a survey) (d) address and postal code of the user (used solely to ship prizes to the user) and (e) information related to the use of the mobile application including Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, reaction to advertisements and other such statistics.`;

export const S_PP_HOW_WE_USE_INFO_TITLE = 'How Do We Use Your Information?';
export const S_PP_HOW_WE_USE_INFO_CONTENT = `We use the collected information (I) To register an account for the user (II) Where is is necessary for purposes which are in Eggnation’s or third parties legitimate interests such as (a) to provide the information you have (b) internal business purposes (c) to identify bugs and problems in our mobile application (d) to ensure security of the mobile application and backend (e) to enforce policies (f) to contact you about our products, programs, features or services. (III) To deliver products (IV) Where we are legally required to do so. We may provide information to your personally identifiable information when we are legally required to do so in order to cooperate with legal proceedings.`;

export const S_PP_HOW_WE_SHARE_INFO_TITLE = 'How Do We Share Your Information?';
export const S_PP_HOW_WE_SHARE_INFO_CONTENT = `We do not sell your personal data to other organizations for commercial purposes. We also only share your personal information to provide products or services you’ve requested, when we have your permission, or under the following circumstances (I) It is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Terms of Service, or as otherwise required by law. (II) We provide personal information to trusted businesses or persons for the sole purpose of processing personally identifying information on our behalf and provide us with services. When this is done, it is subject to agreements that oblige those parties to process such information only on our instructions and in compliance with this Privacy Policy and appropriate confidentiality and security measures. (III) We provide such information to third parties who have entered into non-disclosure agreements with us. (IV) We provide such information to a company controlled by, or under common control with, Eggnation and Applicnation for any purpose permitted by this Privacy Policy.`;

export const S_PP_SERVICE_PROVIDERS_TITLE = 'Service Providers';
export const S_PP_SERVICE_PROVIDERS_CONETENT = `We may employ third-party companies and individuals due to the following reasons: (a) To facilitate our Service; (b) To provide the Service on our behalf; (c) To perform Service-related services; or (d) To assist us in analyzing how our Service is used.

We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

If you wish to learn more about how these third-party providers use your information, please head over to their Privacy Policies:

https://policies.google.com/privacy
https://firebase.google.com/policies/analytics
https://firebase.google.com/support/privacy/`;

export const S_PP_DATA_STORAGE_TITLE = 'Data Storage';
export const S_PP_DATA_STORAGE_CONTENT = `Eggnation and Applicnation uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage and related technology required to run Eggnation and the related website and mobile application. We own the code and all the rights to the Eggnation website and mobile application.`;

export const S_PP_LOGGED_DATA_TITLE = 'Logged Data';
export const S_PP_LOGGED_DATA_CONTENT = `If an error or problem occurs while using our app, this information may be logged for us either directly, or through a third–party service. This Log Data may include technical information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other such statistics.`;

export const S_PP_SECURITY_TITLE = 'Security';
export const S_PP_SECURITY_CONTENT = `We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. Should Eggnation or Applicnation or any of their services be hacked or broken into maliciously, we will do our best to protect all of the information that has been entrusted to us. However, in this case, you agree to have any legal action taken against us by you waived.`;

export const S_PP_LINKS_TO_OTHER_SITES_TITLE = 'Links to Other Sites';
export const S_PP_LINKS_TO_OTHER_SITES_CONTENT = `This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.`;

export const S_PP_COOKIES_TITLE = 'Cookies';
export const S_PP_COOKIES_CONTENT = `Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.`;

export const S_PP_INFO_RETENTION_TITLE =
  'Retention of Your Personal Information';
export const S_PP_INFO_RETENTION_CONTENT = `We retain information as long as it is necessary to provide the Services requested by you and others, subject to any legal obligations to further retain such information. Information associated with your account will generally be kept until it is no longer necessary to provide the Services or until you ask us to delete it or your account is deleted, whichever comes first. Additionally, we may retain information from deleted accounts to comply with the law, prevent fraud, resolve disputes, troubleshoot problems, assist with investigations, enforce the Terms of Use, and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy.`;

export const S_PP_CHILDRENS_PRIVACY_TITLE = 'Children’s Privacy';
export const S_PP_CHILDRENS_PRIVACY_CONTENT = `These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to proceed with the necessary actions.`;

export const S_PP_CHANGES_TITLE = 'Changes to This Privacy Policy';
export const S_PP_CHANGES_CONTENT = `We may update our Privacy Policy from time to time without your knowledge. Thus, you are advised to review this page periodically for any changes. 

This policy is effective as of 2022-04-28`;

/************************/
/***** TERMS SCREEN *****/
/************************/

export const S_TS_INTRODUCTION_TITLE = 'Introduction';
export const S_TS_INTRODUCTION_CONTENT = `This Application is operated by Eggnation and Applicnation. Throughout the application, the terms “we”, “us” and “our” refer to Eggnation and Applicnation. Eggnation and Applicnation offers this app, including all information, tools and services available from this application to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.

By visiting our app and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the application

Please read these Terms of Service carefully before accessing or using our application. By accessing or using any part of the application, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the application or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.

Any new features or tools which are added to the current application shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our application. It is your responsibility to check this page periodically for changes. Your continued use of or access to the application following the posting of any changes constitutes acceptance of those changes.`;

export const S_TS_APPLICATION_TERMS_TITLE = 'Application Terms';
export const S_TS_APPLICATION_TERMS_CONTENT = `By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this application.

You must not transmit any worms or viruses or any code of a destructive nature.

A breach or violation of any of the Terms will result in an immediate termination of your Services.`;

export const S_TS_GENERAL_CONDITIONS_TITLE = 'General Conditions';
export const S_TS_GENERAL_CONDITIONS_CONTENT = `We reserve the right to refuse service to anyone for any reason at any time.

You understand that your content may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.

You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the application through which the service is provided, without express written permission by us.

The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.`;

export const S_TS_ACCOUNT_TITLE = 'Account';
export const S_TS_ACCOUNT_CONTENT = `You will need to have an account with Eggnation ("Account") in order to use the Service. When you register an account with us, you acknowledge that you are at least 13 years of age and consent to having advertisements displayed to you on our platform. 

You are solely responsible for all activities under your Account. We will not be responsible in any way if your password and/or Account are misappropriated or used by a third party. You therefore agree to keep your password secure and keep your account information up-to-date at all times.

Eggnation may occasionally contact you on the email address provided in your Account registration. You will not be able to opt out from such communications, and you shall take the responsibility to ensure that your email address is up-to-date. If you missed any communications due to an inaccurate, outdated, or incomplete email address, Eggnation will not be liable for any losses or damages caused by you missing the communication.`;

export const S_TS_CONSENT_TO_ADS_TITLE = 'Consent to Advertisements';
export const S_TS_CONSENT_TO_ADS_CONTENT = `Eggnation uses advertisements to generate revenue. These funds will be used to keep the Platform running. By using our application, you consent to allowing us to show you ads. Every time you open the application, you consent to allowing us to show you ads. If you do not wish to view ads, then please do not use our Platform.`;

export const S_TS_PRIZE_SHIPMENT_TITLE = 'Prizes';
export const S_TS_PRIZE_SHIPMENT_CONTENT = `Prizes that are won are either shipped (in case of physical goods) or transferred (in case of non-shippable goods) to the user. Should a prize nor reach the user due to the package being lost (in case of shipped goods) or an error transferring the prize (in the case of cash prizes) you, the user, agree to hold Eggnation and Applicnation guiltless concerning your reception of the prize.

We will do our best to ensure that the prizes reach their destination, however, sometimes events that are out of our control occur that may cause the prize to be lost. Therefore, the moment a prize is shipped or transferred via a third-party service provider, the prize is considered out of the hands of Eggnation and Applicnation and therefore is not liable to anything that happens to the prize from then on. Should a prize be lost along the way to the user, Eggnation and Applicnation is not required to ship or transfer another prize to the user. `;

export const S_TS_PRESENTED_INFORMATION_TITLE = 'Presented Information';
export const S_TS_PRESENTED_INFORMATION_CONTENT = `We are not responsible if information made available in this application is not accurate, complete or current. The material  in this application is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material  in this application is at your own risk.

This application may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this application at any time, but we have no obligation to update any information in our application. You agree that it is your responsibility to monitor changes to our application.`;

export const S_TS_SERVICE_CHANGES_TITLE = 'Modification to the Service';
export const S_TS_SERVICE_CHANGES_CONTENT = `We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.

We shall not be liable to you or to any third-party for any modification, suspension or discontinuance of the Service.`;

export const S_TS_PRODUCTS_OR_SERVICES_TITLE = 'Products or Services';
export const S_TS_PRODUCTS_OR_SERVICES_CONTENT = `We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you from us will meet your expectations, or that any errors in the Service will be corrected.`;

export const S_TS_OPTIONAL_TOOLS_TITLE = 'Optional Tools';
export const S_TS_OPTIONAL_TOOLS_CONTENT = `We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.

You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.

Any use by you of optional tools offered through the application is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).

We may also, in the future, offer new services and/or features through the application (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.`;

export const S_TS_THIRD_PARTY_LINKS_TITLE = 'Third-Party Links';
export const S_TS_THIRD_PARTY_LINKS_CONTENT = `Certain content, products and services available via our Service may include materials from third-parties.

Third-party links  in this application may direct you to third-party applications or websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials, applications  or websites, or for any other materials, products, or services of third-parties.

We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party applications websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.`;

export const S_TS_COMMENTS_TITLE = 'Comments';
export const S_TS_COMMENTS_CONTENT = `If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.

We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.

You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related application or website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.`;

export const S_TS_PERSONAL_INFO_TITLE = 'Personal Information';
export const S_TS_PERSONAL_INFO_CONTENT = `Your submission of personal information through the application is governed by our Privacy Policy.`;

export const S_TS_ERRORS_TITLE = 'Errors, Inaccuracies and Omissions';
export const S_TS_ERRORS_CONTENT = `Occasionally there may be information in our application or in the Service that contains typographical errors, inaccuracies or omissions that may relate to prizes and prize availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related applications or websites is inaccurate at any time without prior notice (including after you have submitted your order).

We undertake no obligation to update, amend or clarify information in the Service or on any related application or website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related application or website, should be taken to indicate that all information in the Service or on any related application or website has been modified or updated.`;

export const S_TS_PROHIBITED_USES_TITLE = 'Prohibited Uses';
export const S_TS_PROHIBITED_USES_CONTENT = `In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the application or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related application or website, other applications or websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related application or website, other applications or websites, or the Internet. We reserve the right to terminate your use of the Service or any related application or website for violating any of the prohibited uses.`;

export const S_TS_DISCLAIMER_TITLE = 'Disclaimers and Limitation of Liability';
export const S_TS_DISCLAIMER_CONTENT = `We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.

We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.

You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.

You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.

In no case shall Eggnation and Applicnation, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.`;

export const S_TS_INDEMNIFICATION_TITLE = 'Indemnification';
export const S_TS_INDEMNIFICATION_CONTENT = `You agree to indemnify, defend and hold harmless Eggnation and Applicnation and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.`;

export const S_TS_SEVERABILITY_TITLE = 'Severability';
export const S_TS_SEVERABILITY_CONTENT = `In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.`;

export const S_TS_TERMINATION_TITLE = 'Termination';
export const S_TS_TERMINATION_CONTENT = `The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our application.

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).`;

export const S_TS_ENTIRE_AGREEMENT_TITLE = 'Entire Agreement';
export const S_TS_ENTIRE_AGREEMENT_CONTENT = `The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.

These Terms of Service and any policies or operating rules posted by us on this application or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.`;

export const S_TS_GOVERNING_LAW_TITLE = 'Governing Law';
export const S_TS_GOVERNING_LAW_CONTENT = `These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Canada.`;

export const S_TS_CHANGES_TITLE = 'Changes to Terms of Service';
export const S_TS_CHANGES_CONTENT = `You can review the most current version of the Terms of Service at any time at this page.

We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our application. It is your responsibility to check our application periodically for changes. Your continued use of or access to our application or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.

This policy is effective as of 2022-05-09`;

/************************************************************************************/
/******************************** OTHER COMPONENTS **********************************/
/************************************************************************************/

/***********************/
/***** TEXT INPUTS *****/
/***********************/

export const S_TI_EMAIL_PLACEHOLDER = 'email';
export const S_TI_PASSWORD_PLACEHOLDER = 'password';
export const S_TI_CURRENT_PASSWORD_PLACEHOLDER = 'current password';
export const S_TI_CONFIRM_PASSWORD_PLACEHOLDER = 'confirm password';
export const S_TI_NEW_EMAIL_PLACEHOLDER = 'new email';
export const S_TI_NEW_PASSWORD_PLACEHOLDER = 'new password';
export const S_TI_CONFIRM_NEW_PASSWORD_PLACEHOLDER = 'confirm new password';
export const S_TI_ADDRESS_PLACEHOLDER = 'address';
export const S_TI_POSTAL_CODE_PLACEHOLDER = 'postal code';
export const S_TI_PAYPAL_EMAIL_PLACEHOLDER = 'paypal email';

export const S_TI_EMAIL_ERROR_TEXT = 'please enter a valid email';
export const S_TI_PASSWORD_ERROR_TEXT =
  'password must be at least 8 characters long, contain numbers, uppercase and lowercase letters and no whitespace';
export const S_TI_CONFIRM_PASSWORD_ERROR_TEXT = 'passwords must match';

/*******************************/
/***** PRIZE DISPLAY MODAL *****/
/*******************************/

export const S_PDM_CLAIMED_BUTTON = 'Claimed';
export const S_PDM_CLAIM_BUTTON = 'Claim';

/*******************************/
/***** PRIZE CLAIMED MODAL *****/
/*******************************/

export const S_PCM_CONGRATULATIONS = 'Congratulations!';
export const S_PCM_INFO_TEXT = `Your prize has been claimed. We will be emailing your currently registered email with further details. Please keep an eye out for an email from eggnationprizes@outlook.com. Contact us using this address if you do not receive anything within a week.`;
export const S_PCM_GO_BACK_BUTTON = 'Go Back';

/*************************************************************************/
/******************************** OTHER **********************************/
/*************************************************************************/

/*****************************/
/***** COUPON PRIZE TEXT *****/
/*****************************/

export const S_CPT_PRIZE_ID = 'eggnation-promo-code';
export const S_CPT_PRIZE_TITLE = 'Eggnation Shop Coupon';
export const S_CPT_PRIZE_DESC =
  'Use the discount code EGGNATIONAPPMERCH get 50% off of the Original Eggnation Tee on eggnationshop.com!';
export const S_CPT_PRIZE_TYPE = 'shirt';
export const S_CPT_PRIZE_TIER = 'gold';

/***********************/
/***** PRIZE TYPES *****/
/***********************/

export const S_PT_PHONE = 'phone';
export const S_PT_TABLET = 'tablet';
export const S_PT_LAPTOP = 'laptop';
export const S_PT_EARBUDS = 'earbuds';
export const S_PT_SHIRT = 'shirt';
export const S_PT_HOODIE = 'hoodie';
export const S_PT_CASH = 'cash';

/*******************************************************************************/
/******************************** UI MESSAGES **********************************/
/*******************************************************************************/

/**************************/
/***** ERROR MESSAGES *****/
/**************************/

export const S_E_INVALID_CREDENTIALS = 'Invalid Credentials!';
export const S_E_INVALID_EMAIL = 'Invalid email address!';
export const S_E_INVALID_PASSWORD = 'Invalid password!';
export const S_E_UNEXPECTED_ERROR = 'An unexpected error occurred!';
export const S_E_NOT_CONNECTED_TO_INTERNET =
  "You're not connected to the internet!";

export const S_E_FPS_EMAIL_NOT_FOUND =
  'Email not found! Did you register an account yet?';

export const S_E_LS_ACCOUNT_DISABLED = "Account disabled. Can't login";

export const S_E_RS_EMAIL_IN_USE = 'Email already in use!';

export const S_E_APS_FAILED_TO_FETCH_PRIZES =
  'Failed to fetch available prizes';

export const S_E_HS_CONNECTIVITY_NOTICE =
  'You need to be connected to the internet to play';

export const S_E_WPS_FAILED_TO_FETCH_PRIZES = 'Failed to fetch won prizes';

export const S_E_CPS_FAILED_TO_FETCH_PRIZE =
  'Failed to fetch prize, you will be redirected back to the won prize screen. If error persists please contact us';
export const S_E_CPS_FAILED_TO_CLAIM_PRIZE =
  'Failed to claim prize. If error persists please contact us';
export const S_E_CPS_PRIZE_ALREADY_CLAIMED =
  'This prize has already been claimed';

export const S_E_SS_FAILED_EMAIL_FETCH = 'Failed to get email';

export const S_E_EES_EMAIL_IN_USE = 'Email already in use!';

export const S_E_EPS_WEAK_PASSWORD = 'Please enter a stronger password!';

/****************************/
/***** SUCCESS MESSAGES *****/
/****************************/

export const S_S_EES_EMAIL_UPDATED = 'Email updated successfully!';

export const S_S_EPS_PASSWORD_UPDATED = 'Password updated successfully!';

export const S_S_FPS_EMAIL_SENT =
  "Email sent successfully! If you can't find it, check your spam folder";
