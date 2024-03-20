'use strict';

import {fbEvensHandler} from "@rivercode/facebook-conversion-api-nextjs/handlers";

const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token = 'EAAEE0V4R624BAJwWj22CaNyvFP5ns3ctx4XU0n3IJMf9BAVZBBQ9HiBTNfv4jT6B8M4n1IU3Tsg6qUWPSARGbZCnfrMOv7BfZAeniT4BWQj6hq6ITtt1lRwm15d5kWiuE9TCgIYFE4Kt6gbnQsIOXpWYPZBGnqLrfSBQpxmtRlnoAWxv4zs7e3RtCzMolG8ZD';
const pixel_id = '915458103441656';
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const Fb_pixel= () =>{

const userData = (new UserData())
                .setEmails(['joe@eg.com'])
                .setPhones(['12345678901', '14251234567'])
                // It is recommended to send Client IP and User Agent for Conversions API Events.
                .setClientIpAddress(request.connection.remoteAddress)
                .setClientUserAgent(request.headers['user-agent'])
                .setFbp('fb.1.1558571054389.1098115397')
                .setFbc('fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890');
                
const content = (new Content())
                .setId('product123')
                .setQuantity(1)
                .setDeliveryCategory(DeliveryCategory.HOME_DELIVERY);

const customData = (new CustomData())
                .setContents([content])
                .setCurrency('usd')
                .setValue(123.45);

const serverEvent = (new ServerEvent())
                .setEventName('Purchase')
                .setEventTime(current_timestamp)
                .setUserData(userData)
                .setCustomData(customData)
                .setEventSourceUrl('https://graph.facebook.com/1.2/915458103441656/events?access_token=EAAEE0V4R624BAJwWj22CaNyvFP5ns3ctx4XU0n3IJMf9BAVZBBQ9HiBTNfv4jT6B8M4n1IU3Tsg6qUWPSARGbZCnfrMOv7BfZAeniT4BWQj6hq6ITtt1lRwm15d5kWiuE9TCgIYFE4Kt6gbnQsIOXpWYPZBGnqLrfSBQpxmtRlnoAWxv4zs7e3RtCzMolG8ZD')
                .setActionSource('website');

const eventsData = [serverEvent];
const eventRequest = (new EventRequest(access_token, pixel_id))
                .setEvents(eventsData);


                const fetchData = async () => {
                    try{
eventRequest.execute().then(
  response => {
    console.log('Response: ', response);
  },
  err => {
    console.error('Error: ', err);
  }
);
    }
    catch (error){
    console.log('Error etching data: ', error);
                }
    }
}

export default Fb_pixel;
