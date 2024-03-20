
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermsConent = () => {



  return (
    <Tabs >
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button" >
                Privacy & Cookie Policy
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button" >
                Terms & Conditions
              </Tab>
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">

          <TabPanel tabId="basic-tab-two">
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">Privacy & Cookie policy</h1>
              <p className="text-15 text-dark-1 mt-5">
                Halo Holidays understands and respects the importance of your privacy and we are committed to safeguarding your personal information. In providing our service to you, we must collect personal information from you and this policy outlines how we treat your personal data after it has been collected by any of our channels which include our website, call centre and any future digital services or channels as they evolve. We may collect all or some of the following information relating to you or other members of your party: names and contact/address details including telephone number and email address; credit/ debit card or other payment details (including card number, cardholder name, expiry date); special requirements such as those relating to any disability or medical condition which may affect the chosen arrangements; dietary restrictions (which may disclose your religious beliefs). You are responsible for ensuring that other members of your party are aware of the content of this Policy and consent to your acting on their behalf in all your dealings with us. Some of the information we collect (such as about health or religion) may be considered “sensitive personal data” under the Data Protection Act 1998. We collect it to cater to your needs or act in your interest, and we are only prepared to accept sensitive personal data from you on the condition that we have your positive consent. We will seek this consent when necessary.<br /><br />
              </p>
              <h2 className="text-16 fw-500">COOKIES</h2>
              <p className="text-15 text-dark-1 mt-5">
                We use a number of different cookies on our site. If you do not know what cookies are, or how to control or delete them, then we recommend you visit http://www.aboutcookies.org for detailed guidance.

              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                The following tables describe the cookies we use on this site and what we use them for.

              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                Currently we operate an 'implied consent' policy which means that we assume you are happy with this usage.

              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                If you are not happy, then you should either not use this site, or you should delete HALO HOLIDAYS cookies having visited the site, or you should browse the site using your browser's anonymous usage setting (called "Incognito" in Chrome, "InPrivate" for Internet Explorer, "Private Browsing" in Firefox and Safari etc.)
                <br />
              </p>
              <h2 className="text-16 fw-500 mt-35">
                SESSION" COOKIES
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We use a session cookie to remember your log-in for you and what you've put in the shopping basket. These we deem strictly necessary to the working of the website. If these are disabled then various functionality on the site will be broken.

              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                More information on session cookies and what they are used for at http://www.allaboutcookies.org/cookies/session-cookies-used-for.html

                <br />
              </p>
              <h2 className="text-16 fw-500 mt-35">
                PERSISTENT COOKIES FOR SITE ANALYTICS AND PERFORMANCE
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Analytics (Google, DC Storm etc) – we use this to understand how the site is being used in order to improve the user experience. User data is all anonymous.
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                You can find out more about Google's position on privacy as regards its analytics service at http://www.google.co.uk/intl/en/analytics/privacyoverview.html
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                Non-Cross Domain Tracking: 1st Party Cookies
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                Non-cross domain tracking uses first party cookies only. These cookies are written in the domain of the site being tracked
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                Cookie Name Description Expiry
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#srchist Stores the history of traffic sources the user has arrived to the site by 1000 days
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#sess Stores information about the session 1000 days
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#vdef Stores the visit definition – ts type, number of visits, expiry 1000 days
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#uid Stores a user identifier (only within a site) 1000 days
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#slid Unique sale ID 1000 days
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#clkid Unique identifier for a click generating a landing 1 year
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#lps Flags that the last page was secure and therefore has no referrer 20 min
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#tsa Stores the referrer details to avoid duplicate Landing events 10 mi
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#env Flags whether the environment variables (screen size, browser etc) need to be collected again 30 days
              </p><br />

              <h2 className="text-16 fw-500 mt-35">
                CROSS DOMAIN TRACKING: 3RD PARTY COOKIE
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Cross-domain tracking uses 3rd party cookies to enable spanning of domains. The availability of third party cookies is tested – if not available a 1st party cookie is used instead, with reduced tracking ability.
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                Cookie Name Description Expiry
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#stc[site id] This is the third party cookie used to store all the other cookie data in concatenated form. The Cookie's name has the site ID in it. 1000 days
              </p><br />
              <p className="text-15 text-dark-1 mt--15">
                _#nxd This is a 1st party cookie used when access to the third party cookie is blocked. It stores the data similarly to the _#stc cookie. 1000 days
              </p><br />

              <h2 className="text-16 fw-500 mt-35">
                SOCIAL BUTTONS
              </h2>

              <p className="text-15 text-dark-1 mt-5">
                On many of the pages of the site you will see 'social buttons'. These enable users to share or bookmark the web pages. In order to implement these buttons, and connect them to the relevant social networks and external sites, there are scripts from domains outside. You should be aware that these sites are likely to be collecting information about what you are doing all around the internet. So if you click on any of these buttons, these sites will be registering that action and may use that information. In some cases these sites will be registering the fact that you are visiting our site and the specific pages you are on, even if you don't click on the button if you are logged into their services, like Google and Facebook. You should check the respective policies of each of these sites to see how exactly they use your information and to find out how to opt out, or delete, such information.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                EXTERNAL WEB SERVICES
              </h2>

              <p className="text-15 text-dark-1 mt-5">
                We use a number of external web services mostly to display content within our web pages. As with the social buttons we cannot prevent these sites, or external domains, from collecting information on your usage of this embedded content. If you are not logged in to these external services then they will not know who you are but are likely to gather anonymous usage information e.g. number of views, plays, loads etc.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                PAYMENT PROCESSING
              </h2>

              <p className="text-15 text-dark-1 mt-5">
                In order to process payments online we require the billing address for the credit card used and our external payment provider, HALO HOLIDAYS requires your credit card details.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                OUR USE OF YOUR INFORMATION
              </h2>

              <p className="text-15 text-dark-1 mt-5">

                We use personally identifiable information about you to improve our marketing and promotional efforts, to statistically analyze site usage, to improve our content and product offerings and to customize our site's content, layout, and services. We believe these uses allow us to improve our site and better tailor it to meet our users' needs.

              </p>
              <p className="text-15 text-dark-1 mt-5">

                We use your email address to send you newsletters or other communications (for example, digests of the forum posts) that you have requested from the Site. Out of respect for our users we offer an opt-out.
              </p>
              <p className="text-15 text-dark-1 mt-5">

                We may use information we obtain from your current and past activities on the Site, to resolve any disputes, troubleshoot problems and enforce our Terms & Conditions. At times, we may look across multiple users to identify problems or resolve disputes.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                WHO MAY YOUR DATA BE DISCLOSED TO
              </h2>

              <p className="text-15 text-dark-1 mt-5">

                We disclose your data to our partners who will only use your data for the purposes of fulfilling your booking requests.
              </p>
              <p className="text-15 text-dark-1 mt-5">

                We will not disclose your data to any other third parties except where it is necessary for the purposes of fulfilling any bookings, purchases or requests that you make on the website, and through our customer service team or as otherwise described in this policy. We may be required to disclose your information if required by any applicable law or regulation. We may also disclose your data to third parties and professional advisers acting on our behalf and who are obliged to keep that data confidential.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                Other tourist services
              </h2>

              <p className="text-15 text-dark-1 mt-5">

                All airlines are now obliged by law to disclose the flight and reservation data of all passengers flying through UK, Australian or United States airspace to the relevant government agency prior to arrival. Data is only used for security purposes.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                TRAVELER PROFILES
              </h2>

              <p className="text-15 text-dark-1 mt-5">

                Halo Holidays collects personal information about travelers when a booking is made. Halo Holidays also has a facility whereby traveler profiles (both for yourself and others) are stored to save you typing these details each time you make a booking. This information includes traveler name, date of birth, contact details, meal preferences, credit card and invoicing information, frequent flyer programs and travel preferences. This information is only used to fulfill booking and other requests and for administrative purposes and internal analyses.
              </p>
              <p className="text-15 text-dark-1 mt-5">

                As traveler profile information may relate to persons other than yourself, you should ensure that any information you provide, which relates to others, is provided with those persons' consent to its use in accordance with this privacy policy.
              </p>
              <p className="text-15 text-dark-1 mt-15">

                Opt out
              </p>
              <p className="text-15 text-dark-1 mt-15">

                If you wish us to stop sending you newsletters or details of other offers and promotions please email us: <a href="mailto:contact@haloholidays.co.uk" className="text-blue-1">contact@haloholidays.co.uk</a>
              </p>


            </div>
          </TabPanel>
          {/* End  Privacy policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">Terms & Conditions</h1>
              <h2 className="text-16 fw-500 mt-35">Booking Conditions</h2>
              <p className="text-15 text-dark-1 mt-5">
                The following booking conditions govern all bookings made with Halo Holidays whose registered address is 13, High Road, Willesden, London NW10 2TE. When making a booking you guarantee that you have the authority to accept and do accept on behalf of all parties travelling and the terms of these booking conditions. A contract will exist as soon as we issue our confirmation email. This contract is made on the terms of these booking conditions, which are governed by English Law, and the jurisdiction of the English Courts.
                <br />
                Packages that we organise: where we combine and sell two or more different types of travel services to you for the purpose of the same trip or holiday, such as a flight and hotel, or hotel and car hire, so as to create a package holiday, your contract(s) will be with the supplier(s) or principal(s) on behalf of who we act as agent, but we will accept responsibility for performance of those contracts as a package organiser in accordance with the Package Travel and Linked Travel Arrangements Regulations 2018 (“Package Travel Regulations”) and arrange financial protection for your package. Section B sets out the terms and conditions that will apply in addition to Section A, when you book a package that we organise. See Clause 2 below for further information as to what comprises a package and Section B, Clause 5 for details of how your package will be financially protected.
                <br /><br />
                <span className="text-blue-1 fw-600">Note:</span> if after selecting and paying for one travel service, you then book additional travel services for your trip or holiday via our company, you will NOT benefit from the rights applying to packages under the Package Travel Regulations and we will not be responsible for the performance of individual travel services
                <br />
                Packages organised by a third party: Please note that occasionally we sell a package organised by a tour operator/principal acting as their agent. In that event, the tour operator/principal is responsible to you for your package and your financial protection and we act only as agent. Section A applies to all such bookings. Where a flight is included in the tour operator/principal’s package, the package will be protected by their ATOL and the ATOL holder’s name and ATOL number will be detailed in your booking confirmation.
                <br />
                All communications concerning customer services, or your booking should be sent to Customer Services, Getflight, 13, High Road, Willesden, London NW10 2TE, United Kingdom or drop an email to: <a href="mailto:contact@haloholidays.co.uk" className="text-blue-1">contact@haloholidays.co.uk</a>
              </p>
              <br />
              <h2 className="text-16 fw-500">SECTION A – APPLICABLE TO ALL BOOKINGS</h2>
              <p className="text-15 text-dark-1 mt-5">
                When making your booking we, will arrange for you to enter into a contract with each of the third party supplier(s) of your travel arrangements (such as tour operator, airline, cruise operator, accommodation provider, car hire provider and transfer provider) as specified on your booking confirmation. Your contract comes into existence once we issue the booking confirmation.

                <br /><br />
                Your booking with us is subject to these Booking Conditions and as well as those of the third party suppliers who have their own terms and conditions which govern the services they provide and you’ll be bound by these. In the event of any conflict between a supplier’s terms and conditions and these booking conditions, the supplier’s term or condition that conflicts with ours will take precedence, unless it is deemed under English law to be invalid or unenforceable, in which case the relevant term or condition in our Booking Conditions will prevail. Some of our suppliers’ conditions may limit or exclude their liability to you and, because they’ll apply to your contract with us, may also limit or exclude our liability to you. Suppliers’ terms and conditions are often subject to international conventions too, which limit their (and our) liability. Copies of the relevant supplier’s terms and conditions and any applicable international conventions are available on request.
                <br /><br />
                As an agent, we accept no responsibility for the acts or omissions of the suppliers or for the travel services provided by them unless we are the organiser of your package holiday under the Package Travel Regulations, in which case we will accept responsibility for those travel services in accordance with Section B of these Booking Conditions.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                Package Bookings
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Where we combine and sell to you two or more of the travel services specified below for the purpose of the same trip or holiday, this will comprise a “Package” and we will take responsibility for the package as an “organiser” under the Package Travel Regulations as long as those travel services are: purchased together from a single visit to our website and selected by you before you agree to pay; or advertised, sold or charged by us at an inclusive or total price; or advertised or sold under the term “package” or a similar term. A summary of our responsibilities as organiser is outlined in Section B of these Booking Conditions

                <br /><br />
                <span className="text-blue-1 fw-600">Note:</span> Where we are the organiser under the Package Travel Regulations, we will still act as agent in relation to the travel services and you will have contracts with each of the suppliers of those travel services. The travel services, two or more of which can constitute a Package, are:
              </p>
              <ul class="list list--bullet mt-20">
                <li >Transport (e.g. flight);</li>
                <li >Accommodation;</li>
                <li >Rental of cars or other motor vehicles;</li>
                <li >Any other tourist service not intrinsically part of one of the above travel services</li>
              </ul>

              <h2 className="text-16 fw-500 mt-35">
                Other tourist services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Other tourist services Please note that where you have made a booking which consists of either accommodation, transport or car rental, plus one or more “other tourist services” as described at (d) above, according to the Package Travel Regulations this will only create a Package where the tourist services account for 25% or more of the value of the combined services or are advertised as, or otherwise represent, an essential feature of the Package.

                <br /><br />
                Additional tourist services selected and purchased after the transport, accommodation or car rental service has started or where the tourist services are intrinsically part of the other components will not make a Package. These bookings will be treated as single component bookings and will not provide rights under the Package Travel Regulations
              </p>

              <h2 className="text-16 fw-500 mt-35">
                BOOKING
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Bookings may be made online on our website www.haloflights.co.uk, or by telephone on 020 729 5570 or in person at our agency premises. All bookings are subject to availability at the time of booking. We do not guarantee that any of the travel services that we advertise, including on our website, will still be available at the time of booking and once you have made a booking request, we will confirm availability of your chosen travel services to you
                <br /><br />
                Where you book online, the order summary email sent to you is NOT contractual acceptance of the supplier’s ability to provide these travel services, it is an acknowledgement that we have received your offer, and should the travel services be available as detailed on our website then we will issue to you a booking confirmation which is when your contract with us comes into existence and you have entered into a legally binding agreement to purchase those travel arrangements subject to the supplier’s terms and conditions and these Booking Conditions.
                <br /><br />
                It is your responsibility to ensure that all names listed in the booking confirmation are accurate as per the passports of the travellers in your party and that the travel itinerary accords with your requirements. Changes are rarely possible once flight tickets and other travel documents are issued, and alterations may incur additional charges. See Clause 6 regarding amendment fees and cancellation charges
                <br /><br />
                On receipt of all travel documents please check whether the details such as names, dates and timings are accurate and advise us immediately if there are any errors or omissions. Also, please note that all flight tickets or any product supplied are non-refundable, non-changeable and non-transferable unless otherwise stated.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                FLIGHT BOOKINGS
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Financial protection: When you buy an ATOL protected flight from us you will receive an ATOL Certificate. This lists what is financially protected, where you can get information on what this means for you and who to contact if things go wrong. You will be advised at the time of booking whether your flight is ATOL protected and if your flight is protected you will be issued with an ATOL certificate. See Clause 8 for further details of ATOL protection.
                <br />
                <br />
                Not all of our flights are ATOL protected: some flight only sales are sold by us as agent for the airline.
                <br />
                <br />
                Scheduled Airline Failure Insurance: Scheduled Airline Failure Insurance (or SAFI) can be purchased at your option at an additional cost to protect your payments in the event of airline failure. Please ask to see the terms of the SAFI policy for precise details of what is covered.
                <br />
                <br />
                Availability: Seat availability and pricing is at the airline’s discretion. Flight times shown are provisional and may be subject to change, as per the airline’s booking conditions. Most airlines stipulate that bookings are non-refundable.
                <br />
                <br />
                Fares: Airfares can increase quickly after initial quotation and so please make payment within 1 hour of your booking having been confirmed in order to guarantee the fare offered. If your fare has changed by the time you make payment, you will have a right to cancel and claim a full refund if you do not want to proceed with the booking
                <br />
                <br />
                Indirect flights: Please note that some flights may be indirect and fly via other airports. Where an indirect flight is offered, full details of any flight stopovers will be made clear to you at the time of booking
                <br />
                <br />
                Baggage allowance: The free baggage allowance offered to the passenger differs significantly from airline and airline and depending on the route. Our prices include the standard baggage allowance allowed by the airline. The allowance you are entitled to will be shown in the booking conditions of your airline. Some airlines may allow additional luggage to be added after the booking – this depends on the terms and conditions of the individual airline to which you should refer.
                <br />
                <br />
                Certain airlines consider hold luggage to be an optional extra. When you are booking with an airline that does make a charge for hold luggage, it is not included or displayed in our headline prices and the option to add this extra facility will be offered to you at the time of booking. Should you choose not to take any hold luggage on your trip then you will receive the standard hand luggage allowance as detailed in the airlines booking conditions which is normally between 5 and 10kgs but please check your booking confirmation which will specify the hand luggage allowance. Bags must be no larger than the dimensions allowed by the airline in question for carry-on luggage. For further information please refer to the airline booking conditions.
                <br />
                <br />
                Please note many countries including the UK have importing food, plant and animal products. You should ensure that you do not carry any restricted items
                <br />
                <br />
                Check-in: Check-in procedures are included in the booking confirmation email we send to you. Some airlines will require this check-in to be carried out online; where this is required, failure to check-in online will result in check-in fees at the airport which you will be liable to pay for. It is your sole responsibility to follow the airline’s check-in procedures and to check-in in good time for your flight. Tickets cannot be refunded or changed because of a no show or late check-in at the airport. To allow adequate time for security and check-in procedures, we recommend that you arrive at the airport 3 hours before your departure time. Check-in counters generally close 60 minutes prior to departure
                <br />
                <br />
                Amendment and cancellation: Most flight bookings are non-refundable by the airline and any amendment or cancellation will incur charges. See the individual airline’s booking conditions for further details and Clause 6 below. As we are your booking agent, please contact us in the event of any amendment or cancellation – see Clause 6 below
              </p>

              <h2 className="text-16 fw-500 mt-35">
                PRICE AND PAYMENT
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                The price of your holiday includes all taxes and additional fees, charges and costs that are known at the time of your booking. Where such additional taxes, fees charges and costs cannot be calculated prior to you making a booking you will be given an indication of the type of additional costs that you may still have to bear.
                <br />
                <br />
                In order to book your chosen travel arrangements, you will be required to pay an instalment/deposit on account of the full price or the full balance at the time of booking depending on when you make your booking relative to the travel departure date. You must also pay any applicable insurance premiums and booking fees.
                <br />
                <br />
                If only a part payment is made, the balance must be paid on or before the due date that we stipulate in your booking confirmation. Failing to do so may result in cancellation of the booking by the principal(s) or supplier(s) and may incur cancellation fees set out in their terms and conditions.
                <br />
                <br />
                Fly Now Pay Later Limited acts as a credit intermediary and not a lender and is authorised and regulated by the Financial Conduct Authority under registration number 726937.
                <br />
                <br />
                Halo Holidays is an Appointed Representative of Fly Now Pay Later Limited who are authorised and regulated by the Financial Conduct Authority, FRN: 726937. Credit accounts are provided by Pay Later Financial Services Limited, who are authorised and regulated by the Financial Conduct Authority under registration number 672306. Play Later Financial Services Limited registered office: 4th Floor, 33 Cannon Street, London, EC4M 5SB, United Kingdom. Registered in England & Wales. Registered No: 09020100.
                <br />
                <br />
                <span className="text-blue-1 fw-600">Note:</span> Except where otherwise advised or stated in the terms and conditions of the supplier concerned, all monies you pay to us for travel arrangements will be held on behalf of the supplier/principal concerned, with the exception of bookings protected by an ATOL. Any money paid to us in respect of a booking protected by an ATOL is held by us on behalf of and for the benefit of the Trustees of the Air Travel Trust at all times, but subject to our obligation to pay it to the ATOL holder for so long as the ATOL holder does not fail financially. If the ATOL holder does fail financially, any money held at that time by us or subsequently accepted from the consumer by us, is and continues to be held by us on behalf of and for the benefit of the Trustees of the Air Travel Trust without any obligation to pay that money to the ATOL holder.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                CANCELLATION AND AMENDMENT
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Cancellations: You may cancel your booking at any time. Cancellation requests must be sent to us in writing to Customer Services, Halo Holidays, 13, High Road, Willesden, London NW10 2TE, United Kingdom, or by email to : <a href="mailto:contact@haloholidays.co.uk" className="text-blue-1">contact@haloholidays.co.uk</a> by the lead name on your booking and it will not take effect until received by us. Upon receipt of your cancellation request, the principal(s) or supplier(s) may be entitled to charge a cancellation fee. Cancellation fees may be as much as 100% of the total price of the travel service depending on when cancellation occurs. Bookings are usually non-refundable unless stated otherwise any time after the date of booking. In addition, as we incur administration costs in processing your cancellation request, we charge an administration fee of £75 per passenger.
                <br />
                <br />
                Amendments: If you want to amend any aspect of your booking you must notify us in writing by post at Customer Services, Halo Holidays, 13, High Road, Willesden, London NW10 2TE, United Kingdom or email to <a href="mailto:contact@haloholidays.co.uk" className="text-blue-1">contact@haloholidays.co.uk</a>. We cannot guarantee that an amendment can be made after your booking is confirmed and this will depend on the terms and conditions of the supplier(s) of the travel service(s). Other than in respect of a request to increase the number of persons in your party/booking, you would need to pay an amendment fee of £75 per passenger, together with the airline/supplier amendment charges (if any). If you have taken out travel insurance (see Clause 7 below), you may be able to claim any cancellation and amendment charges under your policy.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                INSURANCE
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We strongly recommend that you take out sufficient travel insurance in order to cover you and your party and many of the principals or suppliers of the travel services that we sell require you to do so as a condition of booking with them. In addition, certain destinations have made it compulsory to take out travel Insurance – we will advise you where insurance is compulsory. We recommend that your insurance policy covers you, as a minimum, against the cost of cancellation by you; the cost of medical assistance (including repatriation) in the event of accident or illness; loss of baggage and money; and other expense.
                <br />
                <br />
                We can arrange travel insurance on your behalf with Rock Insurance T/A Insurerfor – please see our website for further details. We act as appointed representative of Rock Insurance who is authorised and regulated by the Financial Conduct Authority . The travel policies are underwritten by Travel Insurance Facilities Group (TIF) and insured by Union Reiseversicherung AG (URV). Please check all insurance documentation carefully to ensure that all the details are correct, and that all relevant information has been provided by you. Failing to do so may affect the validity of the insurance cover
              </p>

              <h2 className="text-16 fw-500 mt-35">
                FINANCIAL PROTECTION
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Flight only: We provide financial protection for some (but not all) of our flight-only services by way of our Air Travel Organiser’s Licence number 3,10336issued by the Civil Aviation Authority, Gatwick Airport South, West Sussex, TH6 0YR telephone 0333 103 6350, email claims@caa.co.uk. When you buy an ATOL protected flight from us you will receive an ATOL Certificate. This lists what is financially protected, where you can get information on what this means for you and who to contact if things go wrong.
                <br />
                <br />
                Note: Flights that we sell as authorised ticket agent for the airline are not protected. We will tell you at the time of booking if your flight is ATOL protected and issue you with an ATOL Certificate. If you do not receive an ATOL Certificate, your flight will not be ATOL protected.
                <br />
                <br />
                Flight package: Where we sell a flight package as agent for the organiser, you will be protected by the organiser’s ATOL and the ATOL holder’s name and number will be detailed in your booking confirmation. Where we sell a flight package as organiser, please refer to Clause 5 of Section B which will apply. Where your flight is ATOL protected, we or the suppliers of the services you have bought will provide you with the services you have bought (or a suitable alternative). In some cases, where neither we nor the supplier can do so for reasons of insolvency, an alternative ATOL holder may provide you with the services you have bought or a suitable alternative (at no extra cost to you). You agree to accept that in those circumstances, the alternative ATOL holder will perform those obligations and you agree to pay any money outstanding to be paid by you under your contract to that alternative ATOL holder. However, you also agree that in some cases it will not be possible to appoint an alternative ATOL holder, in which case you will be entitled to make a claim under the ATOL scheme (or your credit card issuer where applicable).
                <br />
                <br />
                If we, or the suppliers identified on your ATOL certificate, are unable to provide the services listed (or a suitable alternative, through an alternative ATOL holder or otherwise) for reasons of insolvency, the Trustees of the Air Travel Trust may make a payment to (or confer a benefit on) you under the ATOL scheme. You agree that in return for such a payment or benefit you assign absolutely to those Trustees any claims which you have or may have arising out of or relating to the non-provision of the services, including any claim against us, the travel agent (or your credit card issuer where applicable). You also agree that any such claims may be re-assigned to another body, if that other body has paid sums you have claimed under the ATOL scheme.
                <br />
                <br />
                Non-flight package: Where we act as agent for a package organised by a third party, we will advise you of the financial protection arranged by the organiser in the case of the organiser’s insolvency. We are only responsible for arranging financial protection for your package where we are organiser (see Section B Clause 5).
              </p>

              <h2 className="text-16 fw-500 mt-35">
                DELIVERY OF DOCUMENTS
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                All travel documents (e.g. tickets/Insurance policies) will be sent to you by email within 48-72 hours following full payment of your booking or by post on request, except in the case of a very late booking, in which case documents can be sent within 24 hours. Once documents are posted to you, no liability will be accepted by us unless the loss of documents are caused due to our negligence. In such instances if the tickets or other documents need to be reissued, all the costs should be borne by you. Documents can only be reissued up to 7 days before departure. You may request for delivery by other means if necessary, e.g. courier provided that this is at your cost.
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                PASSPORTS, VISAS AND HEALTH
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                It is your responsibility to inform us of any medical conditions and reduced mobility before you book so that we can ensure suitability of your trip for your particular needs.
                <br />
                <br />
                Although we can provide general information about the passport, visa (including approximate time to obtain) and health formalities in your destination countries, it is your responsibility to check, fulfil and confirm your own specific circumstances with the relevant Embassies and/or Consulates and your doctor as applicable. Requirements do change and you must check the up to date position in good time before departure. Please take special note that for all air travel within the British Isles, airlines require photographic identification either a passport or driving licence
                <br />
                <br />
                Passports Most countries now require passports to be valid for at least 6 months after your return date.
                <br />
                <br />
                Visas In some countries a transit visa is required for passing through the country with connecting flights. We will advise you if a transit visa is required for your travel. Please also check the UK government foreign travel website for the most up to date information on visa entry requirements at www.gov.uk/foreign-travel-advice.
                <br />
                <br />
                An ESTA visa is a necessary requirement for all USA bound travel as well as transiting the USA; an ETA visa is a necessary requirement for all Australia bound travel as well as transiting Australia. Please check if your flight has an alteration involving two separate airports with the path, it is your duty to arrange the transfer to the correct airport and to arrange a transit visa if applicable. Special conditions apply for travel to the USA and all passengers must have individual machine-readable passports. Please check www.uk.usembassy.gov. For European holidays you should obtain a completed and issued form EHIC prior to departure. Non-British passport holders, including other EU nationals, should obtain up to date advice on passport and visa requirements from the Embassy, High Commission or Consulate of your destination or country(ies) through which you are travelling.
                <br />
                <br />
                Security: Up to date travel advice can be obtained from the Foreign and Commonwealth Office, visitwww.gov.uk/travelaware. See Clause 17.
                <br />
                <br />
                Children: Additional documentation is usually required by airlines in relation to children travelling without their parents or unaccompanied, so this must be notified to us in advance. We will not be responsible for any refusal to embark or delay due to any failure to obtain the requisite documentation.
                <br />
                <br />
                Pregnancy: Most airlines reserve a right to refuse embarkation to a woman who is in advanced pregnancy. Accordingly, please tell us at the time of making your booking if you or someone in your party is pregnant (or becomes pregnant before departure) so that we can check the policy of the relevant airline and advise you accordingly. A medical certificate from a doctor confirming fitness to travel may be required. We do not accept responsibility for anyone who is refused travel due to pregnancy if we have not been notified of the pregnancy or if the advice we have given has not been followed.
                <br />
                <br />
                We do not accept any responsibility if you cannot travel or incur any other loss because you have not complied with any passport, visa, immigration requirements or health formalities. You agree to reimburse us in relation to any fines or other losses which we incur as a result of your failure to comply with any such requirements or formalities.
                <br />
                <br />
                Our website is our responsibility, as your tour operator. It is not run on behalf of, and does not commit the airlines mentioned herein or any airline whose services are used in the course of your travel arrangements. Please note that in accordance with Air Navigation Orders in order to qualify for infant status, a child must be less than 2 years of age on the date of its return flight.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                FINAL TRAVEL ARRANGEMENTS
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Please ensure that all your travel, passport, visa and insurance documents are in order and that you arrive in plenty of time for checking in at the airport – see Clause 4 (Check-in). It may be necessary to reconfirm your flight with Halo Holidays, prior to departure. Please ask us for your airline contact details so that you can check directly with the airline if necessary, for any changes to the scheduled itinerary and reconfirm your flight at least 72 hours before your outbound flight. You should take a note of any reference number or contact name when reconfirming. If you fail to reconfirm you may be refused permission to board the aircraft and you are unlikely to receive any refund.
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                COMPLAINTS
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                In our capacity of agent, we will assist you with any complaints and you may contact our Customer Services at complaints@haloflights.co.uk or by post to Customer Services, Halo Holidays, 13, High Road, Willesden, London NW10 2TE, United Kingdom. However, as the contract(s) for your travel arrangements is between you and the principal(s) or supplier(s), any queries or concerns relating to the travel arrangements should be addressed to them in the first instance. If you have a problem with your travel arrangements whilst on holiday, this must be reported to the principal/supplier or their local supplier or agent immediately. If you fail to follow this procedure, there will be less opportunity for the principal/supplier to investigate and rectify your complaint. As a result, the amount of compensation you may be entitled to may be reduced or you may not receive any at all.
                <br /><br />
                If you wish to complain when you return home, please write to the principal/supplier. You will see the name and address plus contact details in any confirmation documents we send you. We will of course assist you with this if you wish - please contact Customer Services at <a href="mailto:contact@haloholidays.co.uk" className="text-blue-1">contact@haloholidays.co.uk</a> . If the matter cannot be resolved and it involves us or another ABTA Member then you have the option to use ABTA’s ADR scheme, approved by the Chartered Trading Standards Institute, see www.abta.com.. You can also access the European Commission Online Dispute (ODR) Resolution platform at www.ec.europa.eu/consumers/odr/. This ODR platform is a means of notifying us of your complaint; it will not determine how your complaint should be resolved.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                RESPONSIBILITY FOR YOUR BOOKING
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Your contract is with the supplier/principal and its booking conditions apply. As agent, we accept no responsibility for the actual provision of the travel arrangements. Our responsibilities are limited to making the booking in accordance with your instructions. We accept no responsibility for any information about the travel arrangements that we pass on to you in good faith. However, in the event that we are found liable to you on any basis whatsoever, our maximum liability to you is limited to twice the cost of the commission we earn on your booking (or the appropriate proportion of this if not everyone on the booking is affected).
                <br /><br />
                We do not exclude or limit liability for death or personal injury that arises as a result of our negligence or that of any of our employees whilst acting in the course of their employment.
                <br /><br />
                <span className="text-blue-1 fw-600">Note:</span> Where we are the organiser of a Package under the Package Travel Regulations, we will accept responsibility for that package as organiser and the additional terms and conditions in Section B will apply.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                UNAVOIDABLE AND EXTRAORDINARY CIRCUMSTANCES
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Except where otherwise expressly stated in these Booking Conditions we will not be liable or pay you compensation if our contractual obligations to you are affected by unavoidable and extraordinary circumstances beyond our (or a supplier’s) control the consequences of which could not have been avoided even if all reasonable measures had been taken (“Unavoidable and Extraordinary Circumstances”) . For the purposes of these Booking Conditions, unavoidable and extraordinary circumstances include, but are not limited to, warfare and acts of terrorism (and threat thereof), civil strife, significant risks to human health such as the outbreak of serious disease at the travel destination or natural disasters such as floods, earthquakes or weather conditions which make it impossible to travel safely to the travel destination or remain at the travel destination, the act of any government or other national or local authority including port or river authorities, industrial dispute, labour strikes, lock closure, natural or nuclear disaster, fire, chemical or biological disaster, unavoidable technical problems with transport, air traffic control strikes, flight cancellations and all similar events outside our or the supplier(s) control
                <br /><br />
                Brexit Implications: please note that certain travel services may be affected as a result of the United Kingdom’s decision to leave the European Union. This could include an unavailability of certain flight routes, access to certain ports and airports and changes to the visa requirements of British citizens travelling to, within or through the EU. Please be rest assured that this is something we will continue to monitor and will advise our customers as soon as possible if we become aware of any confirmed bookings that will be affected. However, since this is something which is completely unprecedented and outside our control, we would treat any such changes as unavoidable and extraordinary circumstances in the terms set out above, and whilst we will endeavour to provide suitable alternative arrangements or refunds where possible, we will not be liable to pay you any compensation.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                ACCOMMODATION RATINGS & STANDARD
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                All ratings are as provided by the relevant supplier or are our own average ratings based on our industry knowledge and customer feedback. Our own ratings are clearly marked and are intended to give a guide to the services and facilities you should expect from your accommodation. Standards and ratings may vary between countries, as well as between suppliers. We cannot guarantee the accuracy of any ratings given. We have made reasonable efforts to establish the official rating of the accommodation and include this within the description of the accommodation on our website
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                DOCUMENTATION & INFORMATION
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                All descriptions and content on our website or otherwise issued by us is done so on behalf of the supservices provided by the supplier. Not all details of the relevant services can be included on our website. All services shown are subject to availability. If you require any further details, in respect of any travel arrangements or any other services please contact us
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                SAFETY & SECURITY
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                You are responsible for making yourself aware of Foreign Office advice with regard to the safety of the countries and areas in which you will be travelling and to make your decisions accordingly (see https:www.gov.uk/travelaware). Advice from the Foreign Office to avoid or leave a particular country may constitute an Unavoidable and Extraordinary Circumstance under Clause 14 above.
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                ANTI-FRAUD CHECKS
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                You agree that we may use Personal information provided by you in order to conduct appropriate anti-fraud checks. Personal Information that you provide may be disclosed to a credit reference or fraud prevention agency, which may keep a record of that information
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                YOUR BEHAVIOUR
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                You are expected to conduct yourself in an orderly and acceptable manner and not to disrupt the enjoyment of others. If in the supplier/principal’s opinion or in the opinion of any other person in authority, your behaviour or that of any member of your party is causing or is likely to cause distress, danger or annoyance to any other customers or any third party, or damage to property, or to cause a delay or diversion to transportation, the supplier reserves the right to terminate your booking immediately with no further liability to you. You and/or your party may also be required to pay for loss and/or damage caused by your actions and you and each member of your party will be jointly and individually liable for any damage or losses caused. Full payment for any such damage or losses must be paid directly to the supplier/principal prior to departure. If you fail to make payment, you will be responsible for meeting any claims (including legal costs) subsequently made against us because of your actions together with all costs we incur in pursuing any claim against you. We cannot be held responsible for the actions or behaviour of other guests or individuals who have no connection with your booking arrangements or with us.
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                DATA PROTECTION
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                As part of your booking information we will need you to provide us with personal information such as name, email address, telephone number, passport number and other identifying information. We may also need to collect special category information that you provide such as health and medical information, details of any disabilities, or religion.
                <br /><br />
                We will process your personal information, including special category information, for the purpose of making your booking and also pass this to the relevant suppliers of your travel arrangements or other particular persons who are a part of the provision of your travel services, as necessary to arrange your travel. Further, if required by any authorities, or as required by law, the information may be provided to public authorities such as customs or immigration. Certain information may also be passed on to security or credit checking companies. If you are travelling to the United States, we will need to send this information to the US Customs and Border Protection for the purposes of preventing and combating terrorism and other transnational serious crimes. If you travel outside the European Economic Area, we will pass your data to suppliers outside of the EEA in compliance with the requirements of the General Data Protection Regulation as regards such transfers.
                <br /><br />
                In making this booking, you understand that the personal information that you provide in your booking form may be shared with suppliers and any person required to facilitate your travel arrangements.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                ABTA
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We are a member of ABTA, membership number Y6589, P7371. We are obliged to maintain a high standard of service to you by ABTA’s Code of Conduct. We can also offer you ABTA’s scheme for the resolution of disputes which is approved by the Chartered Trading Standards Institute. If we can’t resolve your complaint, go to www.abta.com to use ABTA’s simple procedure. Further information on the Code and ABTA’s assistance in resolving disputes can be found on www.abta.com. You can also access the European Commission Online Dispute (ODR) Resolution platform at www.ec.europa.eu/consumers/odr/This ODR platform is a means of notifying us of your complaint; it will not determine how your complaint should be resolved.
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                SECTION B: PACKAGE HOLIDAY TERMS AND CONDITIONS
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                This section ONLY applies where we are organiser of your Package under the Package Travel Regulations (see Clause 2) and should be read in conjunction with Section A of these Booking Conditions
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                TRANSFERRING YOUR PACKAGE BOOKING
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                If any member of your party is prevented from travelling on their Package, that person(s) may transfer their place to someone else, subject to the following conditions:
                <br />
              </p>
              <ul class="list list--bullet mt-20">
                <li >** that person is introduced by you and satisfies all the conditions applicable to the travel arrangements making up the Package;</li>
                <li >** we are notified not less than 7 days before departure;</li>
                <li >** you pay any outstanding balance payment, an administration fee per person transferring as well as any additional fees, charges or other costs arising from the transfer; and</li>
                <li >** the transferee agrees to these Booking Conditions, the supplier/principal’s terms and conditions and all other requirements applicable to the travel arrangements making up the Package</li>
                <li >** You and the transferee remain jointly and severally liable for payment of all sums.</li>
              </ul>
              <p className="text-15 text-dark-1 mt-5">
                If you are unable to find a replacement traveller, cancellation charges may apply as indicated in clause 6 of Section A. Otherwise, no refunds will be given for passengers not travelling or for unused services.
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                IF YOU CANCEL YOUR PACKAGE DUE TO UNAVOIDABLE & EXTRAORDINARY CIRCUMSTANCES
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                If we have organised a Package for you, you have the right to cancel your Package before departure without paying a cancellation charge in the event of Unavoidable and Extraordinary Circumstances (as defined in Clause 14 of Section A) occurring at your holiday destination or its immediate vicinity and significantly affecting the performance of the Package or significantly affecting transport to the destination. In these circumstances, we shall provide you with a full refund of the monies you have paid but we will not be liable to pay you any compensation. Please note that your right to cancel in these circumstances will only apply where the Foreign and Commonwealth Office advises against travel to your destination or its immediate vicinity.
                <br />
              </p>

              <h2 className="text-16 fw-500 mt-35">
                IF THE SUPPLIER/PRINCIPAL CHANGES OR CANCELS YOUR PACKAGE / REFUND POLICY
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                If the supplier makes an insignificant change to your travel arrangements, we will make reasonable efforts to inform you as soon as reasonably possible if there is time before your departure, but we will have no liability to you. Examples of insignificant changes include alteration of your outward/return flights by less than 24 hours, changes to aircraft type, change of accommodation to another of the same or higher standard, changes of carriers or minor changes to services available at the hotel. Please note that carriers such as airlines may be subject to change.
                <br /><br />
                Occasionally the supplier/principal may have to make a significant change to your confirmed travel arrangements. Examples of “significant changes” include the following, when made before departure
              </p>
              <ul class="list list--bullet mt-20">
                <li >** A change of accommodation area for the whole or a significant part of your time away</li>
                <li >** A change of accommodation to that of a lower standard or classification for the whole or a significant part of your time away.</li>
                <li >** A change of outward departure time or overall length of your travel arrangements by more than 12 hours</li>
                <li >** A change of UK departure airport except between:</li>
                <li >** A significant change to your itinerary, missing out one or more destination entirely.</li>
              </ul>
              <p className="text-15 text-dark-1 mt-5">
                If the supplier/principal has to make a significant change or cancel your travel arrangements, we will tell you as soon as possible and if there is time to do so before departure, we will offer you the choice of:
                <br />
              </p>
              <ul class="list list--bullet mt-20">
                <li >Accepting the changed travel arrangements; or</li>
                <li >Having a refund of all monies paid; or</li>
                <li >Accepting an offer of alternative travel arrangements of comparable or higher standard if available (at no extra cost); or</li>
                <li >If available, accepting an offer of alternative travel arrangements of a lower standard, with a refund of the price difference between the original travel arrangements and the alternative travel arrangements</li>
              </ul>
              <p className="text-15 text-dark-1 mt-5">
                You must notify us of your choice as soon as possible and within the period of time that we give you for acceptance. If we do not hear from you within that time period, we will contact you again to request notification of your choice. If you fail to respond again we may treat the booking as terminated and refund your payment of the effected component.
                <br /><br />
                If you choose to cancel following notification of a significant change, we will provide a full refund of any travel insurance premiums paid to us if you are unable to transfer or reuse your policy.
                <br /><br />
                <span className="text-blue-1 fw-600">Force Majeure:</span> We will not pay you compensation if we have to cancel or change your travel arrangements in any way because of unusual or unforeseeable circumstances beyond our control. These can include, for example, war, riot, industrial dispute, terrorist activity and its consequences, natural or nuclear disaster, fire, adverse weather conditions, epidemics and pandemics, unavoidable technical problems with transport
              </p>

              <h2 className="text-16 fw-500 mt-35">
                OUR RESPONSIBILITIES AS ORGANISER FOR PACKAGES
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Liability as organiser: Where you have booked a package where we are acting as organiser under the Package Travel Regulations, although we still act as agent for the supplier/principals of your chosen travel arrangements and your contracts will be with the supplier/principals, we will accept responsibility for the travel arrangements making up your package as an “organiser” under the Package Travel Regulations as set out below. As such, we are responsible to properly provide all of the travel services included in your Package, as set out in your booking confirmation. Subject to these Booking Conditions, if we (or the supplier/principals) have failed to perform or has improperly performed those travel arrangements and we don’t remedy or resolve your complaint within a reasonable period of time and this has affected the enjoyment of your Package, you may be entitled to an appropriate price reduction or compensation or both. The level of such compensation will be calculated taking into consideration all relevant factors such as (but not limited to): you having followed the complaints procedure as described in these Booking Conditions and the extent to which ours or our employees’ or the supplier/principal’s negligence affected the overall enjoyment of your Package. Please note that it is your responsibility to show that we or the Supplier/Principals have failed to perform or improperly performed your Package if you wish to make a claim against us.
                <br /><br />
                We will not be responsible or pay you any compensation for any injury, illness, death, loss, damage, expense, cost or other claim of any description if (and to the extent that) it results from:
              </p>
              <ul class="list list--bullet mt-20">
                <li >An act(s) and/or omission(s) of the person(s) affected; or</li>
                <li >An act(s) and/or omission(s) of a third party unconnected with the provision of the services forming part of your Package and which were unavoidable and extraordinary; or</li>
                <li >Due to Unavoidable and Extraordinary circumstances (as defined in Clause 14).</li>
              </ul>
              <p className="text-15 text-dark-1 mt-5">
                Limits on liability: If we are found liable under this clause and/or the Package Travel Regulations, we will limit the amount of compensation we may have to pay you as follows:
                <br />
              </p>
              <ul class="list list--bullet mt-20">
                <li >Claims which don’t involve injury, illness or death. The maximum amount we will have to pay you in respect of these claims is up to three times the price paid by or on behalf of the person(s) affected in total. This maximum amount will only be payable where everything has gone wrong and you or your party has not received any benefit at all from your booking</li>
                <li >Claims in respect of international travel by air, sea and rail, or any stay in a hotel.
                  <ul class="list mt-20">
                    <li >i. The extent of our liability will in all cases be limited as if we were carriers under the applicable international conventions, which include The Warsaw/Montreal Convention (international travel by air); The Athens Convention (with respect to sea travel); The Berne/Cotif Convention (with respect to rail travel) and The Paris Convention (with respect to hotel accommodation). You can ask for copies of these Conventions from our offices</li>
                    <li >ii. In addition, you agree that the operating carrier or transport company's own 'Conditions of Carriage' will apply to you on that journey. When arranging transportation for you, we rely on the terms and conditions contained within these international conventions and those 'Conditions of Carriage'. You acknowledge that all of the terms and conditions contained in those 'Conditions of Carriage' form part of your Package booking with us, as well as with the transport company and that those 'Conditions of Carriage' shall be deemed to be included by reference into this Package booking.</li>
                    <li >iii. In any circumstances in which an airline is liable to you by virtue of the EC Regulation 261/2004 (regarding denied boarding, cancellations and long delays), any liability we may have to you arising out of your Package booking, arising out of the same facts, is limited to the remedies provided under the Regulation as if (for this purpose only) we were a carrier.</li>
                    <li >iv. When making any payment, we are entitled to deduct any money which you have received or are entitled to receive from the transport provider or hotelier for the complaint or claim in question.</li>
                  </ul>
                </li>
                <li >It is a condition of our acceptance of liability under this clause that you notify any claim to ourselves and our Supplier/Principal(s) strictly in accordance with the complaints procedure set out in these conditions.</li>
                <li >Where any payment is made, the person(s) receiving it (and their parent or guardian if under 18 years) must also assign to ourselves or our insurers any rights they may have to pursue any third party and must provide ourselves and our insurers with all assistance we may reasonably require.</li>
              </ul>
              <p className="text-15 text-dark-1 mt-5">
                Please note, we do not accept any liability for any damage, loss or expense or other sum(s) of any description: (a) which, on the basis of the information given to us by you concerning your booking prior to our accepting it, we could not have foreseen you would suffer or incur; or (b) which relates to any business.
                <br /><br />
                We do not accept responsibility for services or facilities which were not included on your booking confirmation or where they are not advertised in our brochure / on our website. For example any excursion you book whilst away, or any service or facility which your hotel or any other supplier agrees to provide for you.
                <br /><br />
                Where it is impossible for you to return safely to your departure point as per the agreed return date of your Package, due to Unavoidable and Extraordinary Circumstances (see Clause 14 for definition), we shall provide you with any necessary accommodation (where possible, of a comparable standard) for a period not exceeding three nights per person. Please note that the 3-night cap does not apply to persons with reduced mobility, pregnant women or unaccompanied minors, nor to persons needing specific medical assistance, provided we have been notified of these particular needs at least 48 hours before the start of your Package.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                INSOLVENCY PROTECTION FOR PACKAGE PAYMENTS
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Flight Packages: We provide financial protection for all our flight packages by way of our ATOL number 10336, issued by the Civil Aviation Authority, Gatwick Airport South, West Sussex, RH6 0YR, UK, telephone 0333 103 6350, email claims@caa.co.uk. When you buy a flight inclusive Package from us you will receive an ATOL Certificate. This lists what is financially protected, where you can get information on what this means for you and who to contact if things go wrong. For further information, visit the ATOL website at www.atol.org.uk. The price of our flight inclusive arrangements includes the amount of £2.50 per person as part of the ATOL Protection Contribution (APC) we pay to the CAA. This charge is included in our advertised prices. Not all holiday or travel services offered and sold by us will be protected by the ATOL Scheme. ATOL protection extends primarily to customers who book and pay in the United Kingdom.
                <br /><br />
                We, or the suppliers identified on your ATOL Certificate, will provide you with the services listed on the ATOL Certificate (or a suitable alternative). In some cases, where neither we nor the supplier are able to do so for reasons of insolvency, an alternative ATOL holder may provide you with the services you have bought (at no extra cost to you). You agree to accept that in those circumstances the alternative ATOL holder will perform those obligations and you agree to pay any money outstanding to be paid by you under your contract to that alternative ATOL holder. However, you also agree that in some cases it will not be possible to appoint an alternative ATOL holder, in which case you will be entitled to make a claim under the ATOL Scheme (or your credit card issuer where applicable).
                <br /><br />
                If we, or the suppliers identified on your ATOL certificate, are unable to provide the services listed (or a suitable alternative, through an alternative ATOL holder or otherwise) for reasons of insolvency, the Trustees of the Air Travel Trust may make a payment to (or confer a benefit on) you under the ATOL scheme. You agree that in return for such a payment or benefit you assign absolutely to those Trustees any claims which you have or may have arising out of or relating to the non-provision of the services, including any claim against us, the travel agent (or your credit card issuer where applicable). You also agree that any such claims may be re-assigned to another body, if that other body has paid sums you have claimed under the ATOL scheme.
                <br /><br />
                Non-flight Packages: We provide financial security for Packages not including flights by way of our bond held with ABTA Ltd, The Travel Association 30 Park Street London SE1 9EQ www.abta.co.uk.
                <br /><br />
                If you book travel arrangements that don’t form part of a Package e.g you book and pay for single travel services (even if you add other services later) your monies may not be financially protected. Please ask us for further details.
              </p>

              <h2 className="text-16 fw-500 mt-35">
                PROMPT ASSISTANCE FOR PACKAGES
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                If you have booked a Package and whilst you are on holiday, you find yourself in difficulty for any reason we will offer you such prompt assistance as is appropriate in the circumstances. In particular, we will provide you with appropriate information on health services, local authorities and consular assistance, and with distance communications and finding alternative travel arrangements. Where you require assistance that is not due to any failure by us, our employees or sub-contractors, we will not be liable for the costs of any alternative travel arrangements or other such assistance you require. Any supplier/principal, airline or other transport supplier may however pay for or provide refreshments and/or appropriate accommodation and you should make a claim directly to them. Subject to the other terms of these Booking Conditions, we will not be liable for any costs, fees or charges you incur in the above circumstances, if you fail to obtain our prior authorisation before making your own travel arrangements. Furthermore, we reserve the right to charge you a fee for our assistance in the event that the difficulty is caused intentionally by you or a member of your party, or otherwise through you or your party’s negligence.
                <br />
              </p>

            </div>
          </TabPanel>
          {/* End  Cookie Policy */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermsConent;

