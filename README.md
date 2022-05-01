# PinPlace
PinPlace is a web app which allows a user to pin locations on a map and share their experience with all users.

Please use the following link: http://daniyalmoha.me/pinplace-project.html

**PinPlace Features**

ELEGANT USER INTERFACE: - Simple and pretty UI to create your pins - NO ads, extra purchases and other monetization

LOGIN FUNCTIONALITY: - Allows for secure user authenticated login to keep your pins private - Able to access the same pins through multiple devices by login functionality

FIND YOUR LOCATIONS: - Easily find any location and share your experience our extensive database of dynamic locations

TOGGLE THROUGH DIFFERENT VIEWS: - PinPlace allows you to choose whether you want to see only your pins or every users pins


**PinPlace Technical Overview**

• Pinplace's frontend is designed with ReactJS, Mapbox API and Material UI to create a visually appealing user interface

• PinPlace utilizes a secure login system with error checks using database on MongoDB to store user data and pin data

• PinPlace utilizes MongoDB to save and store data and allows the user to read the data onto their device

• PinPlace uses other dependencies such as ExpressJS to allow ease of access when transferring data

• PinPlace incorporated ExpressJS to create REST API with GET and POST endpoints which handles transactions between
database and frontend, reducing processing times by 40%

**The PinPlace Story**

Since my childhood, I have been obsessed with maps, travelling and the world. My life goal has always been to visit as many locations as possible. Additionally, I have a map in my room where I put pins to see everywhere I have ever visited. However, I wanted to have a visually appealong digital version of the app so which I can access through multiple devices. With this in mind, as soon my university semester 1B ended, (first-year winter term), I decided to build the app, both because I wanted to learn the MERN stack and because my digital map was a need I wanted fulfilled. I will now explain the timeline of creating my web app.

**Day One: Mar 19, 2021** On the first day, I used a tutorial on YouTube by LamaDev to create the starting frameworks for the project. I had never used JavaScript or any of the MERN stack before this and it was a major learning curve because I had no clue what much of the syntax meant. However, by the end of the first day, I got the backend completed and learned how to use Postman API to test my system. I found this part quite difficult because it was difficult to see what my code was doing and testing was quite painful. 

**Day Two: Mar 20, 2021** Day Two was highly frustrating because up to this point all I had done was write down the same code as I did in the video. However, I was getting the hang of the JavaScript syntax. Now was the time to do my favourite part, the frontend! Surprisingly, this part was even worse. For whatever reason, the map would refuse to display on the screen using the react-map-gl extension. At this point, I was considering scrapping Mapbox API and using Google Maps API instead. This was an issue because for Google Maps API, I needed to input my credit card information.

**Day Three: Mar 21, 2021** Finally I figured out how to get the map working. Turns out they had recently changed the functionality of how to run the map. Prior to this moment, I was honestly quite stressed about the many hurdles I had to jump through to make this project work. Instead I realized that I should be looking at this project differently. I was looking at the project as work rather than an opportunity to learn. After this mentality shift, the rest of the project was far less stressful. Also, I learned how .env files work and how they are useful to hide data and keep information private. 

**Day Four: Mar 22, 2021** Pin functionality now works! I finally figured out how the database and proxy is connected and how we can use Axios to both fetch and retrieve data.

**Day Five: Mar 23, 2021** The login, logout and register functionality now works and I learned how to utilize local storage to store user information. At this point the main functionality for the projects was completed. Now I had a few more goals: Deletion of pins, allowing user to add pins, making UI appealing, fixing the (many) bugs, a toggle feature to show only the user's pins and checks to stop user from entering faulty data.

**Day Six: Mar 24, 2021** I cleaned up the UI interface and added checks to stop user froom entering faulty data. It took some while with many "console.log" commands but I figured out the bugs and worked on debugging my code. I did research on letting the user add pictures to their review but I realized this feature would likely not even be very useful considering my user platform would be on a computer or laptop which has a terrible ability to take pictures. Thus, I decided to scrap this feature.

**Day Seven: Mar 25, 2021** I added toggle functionality to allow the user to see only their pins. I changed some icon designs and tries making a DELETE method to delete pins. However, the delete code would not delete the pin. At this point, I was happy that I had established my MVP and figured that perhaps this was something I can add later.

**Day Eight: Mar 26, 2021** I once again tried to get the delete functionality working. I was unfortunately unable to do so. I decided to just let it go and commented out my attempts. In the following days I would publish my code to Github and Heroku.


**Lessons Learned:**

• Atitude is everything - During the first few days of the project, I was miserable and unhappy because I kept forcing myself to get up and grind on the project. This is NOT a helpful mentality if your goal is to learn. It only leads to stress. Eventually, I came to a realization that I can go at my own speed and change my perspective on this project. Since doing so, I began to enjoy coding and solving these problems.

• Importance of a user-centric perspective - I felt like this project was far easier than my Quillow app project. This opinion is based on the fact that the MERN stack is quite easy to use and learn. I felt the learning curve for SwiftUI and XCode was greater because iOS development is more niche. Ultimately, despite the difficulty I enjoyed iOS development more. Personally, I use my iPad and phone apps far more than desktop apps and thus I was able to code through a more user-centric focus. I felt as though I lacked this bigger picture view for most of the project.

**PinPlace Privacy Policy**

Privacy Policy Daniyal Mohammed built the PinPlace app as a Free app. This SERVICE is provided by Daniyal Mohammed at no cost and is intended for use as is.

This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.

If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Quillow unless otherwise defined in this Privacy Policy.

Information Collection and Use

For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Email Address. The information that I request will be retained on your device and is not collected by me in any way.

The app does use third-party services that may collect information used to identify you.

Link to the privacy policy of third-party service providers used by the app

Cookies

Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

Service Providers

I may employ third-party companies and individuals due to the following reasons:

To facilitate our Service; To provide the Service on our behalf; To perform Service-related services; or To assist us in analyzing how our Service is used. I want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

Security

I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.

Links to Other Sites

This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

Children’s Privacy

These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do the necessary actions.

Changes to This Privacy Policy

I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.

This policy is effective as of 2022-05-01

**Contact Us**

If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at daniyalmoha@gmail.com. You are also free to contact me using any of the links below.
