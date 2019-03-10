exports.getConfs = (req, res, next) => {
    res.status(200).json({
        
            "conferences" : [
              {
                "title" : "JS Kongress",
                "date" : "Mon Mar 11 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Tue Mar 12 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://js-kongress.com/",
                "location" : "Munich, Germany",
                "byline" : "Join the (r)evolution of Architectures!"
                ,"cocUrl" : "https://js-kongress.com/code-of-conduct/"
              },
              {
                "title" : "EmberConf",
                "date" : "Mon Mar 18 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Mar 20 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://emberconf.com/",
                "location" : "Portland, Oregon",
                "byline" : "A gathering of the uniquely ambitious"
                ,"cocUrl" : "https://emberconf.com/code-of-conduct.html"
              },
              {
                "title" : "Pixels Camp v3.0",
                "date" : "Thu Mar 21 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Sat Mar 23 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://pixels.camp/",
                "location" : "Lisbon, Portugal",
                "byline" : "3 days of non-stop tech, talks, workshops and a 48-hour programming competition."
                ,"cocUrl" : "https://pixels.camp/docs/code-of-conduct"
              },
              {
                "title" : "UpFront",
                "date" : "Fri Mar 22 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://upfrontconf.com/",
                "location" : "Bridgewater Hall, Manchester",
                "byline" : "A front-end conference for everyone who makes for the web"
                ,"cocUrl" : "https://upfrontconf.com/code-of-conduct.html"
              },
              {
                "title" : "Vue Conf US",
                "date" : "Mon Mar 25 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Mar 27 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "http://vueconf.us/",
                "location" : "Tampa, Florida",
                "byline" : "Art. Code. Vue."
                ,"cocUrl" : "http://vueconf.us/codeofconduct"
              },
              {
                "title" : "typeof",
                "date" : "Wed Mar 27 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Mar 29 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://typeofconf.com/",
                "location" : "Porto, Portugal",
                "byline" : "A two day, single track conference dedicated to front end and web technologies"
                ,"cocUrl" : "https://typeofconf.com/code-of-conduct"
              },
              {
                "title" : "Reactathon",
                "date" : "Sat Mar 30 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Sun Mar 31 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://www.reactathon.com",
                "location" : "San Francisco",
                "byline" : "The biggest React conference on the West Coast"
                ,"cocUrl" : "https://www.reactathon.com/code-of-conduct"
              },
              {
                "title" : "#PerfMatters",
                "date" : "Tue Apr 02 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Apr 03 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://perfmattersconf.com/",
                "location" : "Redwood City, California",
                "byline" : "The building blocks of web performance&amp;#58; Getting to &quot;fast enough?&quot;"
                ,"cocUrl" : "https://perfmattersconf.com/code/"
              },
              {
                "title" : "FrontCon",
                "date" : "Wed Apr 03 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Apr 05 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://frontcon.lv/",
                "location" : "Riga, Latvia",
                "byline" : "Front-end Conference"
                ,"cocUrl" : "https://frontcon.lv/code-of-conduct/"
              },
              {
                "title" : "Frontend NE",
                "date" : "Wed Apr 03 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.frontendne.co.uk/",
                "location" : "Newcastle upon Tyne, UK",
                "byline" : "Biggest Frontend Conference in the Netherlands"
                ,"cocUrl" : "https://2019.frontendne.co.uk/code-of-conduct.html"
              },
              {
                "title" : "YGLF Code Camp",
                "date" : "Wed Apr 03 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Apr 03 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://www.israel.yglfconf.com/",
                "location" : "Nahsholim, Israel",
                "byline" : "YGLF Code Camp will offer advanced professional talks from top-notch devs, fascinating workshops led by industry leaders, focusing on the most relevant and up-to-date frontend frameworks and technologies."
                ,"cocUrl" : "https://www.israel.yglfconf.com/codeofconduct"
              },
              {
                "title" : "JAMstack_conf_nyc",
                "date" : "Tue Apr 09 2019 08:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Apr 10 2019 16:00:00 GMT+0000 (UTC)",
                "url" : "https://jamstackconf.com/nyc/",
                "location" : "New York City, New York",
                "byline" : "Learn how to design, develop, and deploy fast, modern web projects that run without web servers."
              },
              {
                "title" : "React Amsterdam",
                "date" : "Wed Apr 10 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Apr 12 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://react.amsterdam/",
                "location" : "Amsterdam, Netherlands",
                "byline" : "The Biggest React Conference Worldwide"
                ,"cocUrl" : "https://react.amsterdam/coc"
              },
              {
                "title" : "JSHeroes",
                "date" : "Thu Apr 11 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Apr 12 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://jsheroes.io/",
                "location" : "Cluj-Napoca, Romania",
                "byline" : "JSHeroes is an Open-Source Community Event"
                ,"cocUrl" : "https://jsheroes.io/code-of-conduct"
              },
              {
                "title" : "Web Directions Design",
                "date" : "Thu Apr 11 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Apr 12 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://webdirections.org/design",
                "location" : "Melbourne, Australia",
                "byline" : "Australia&#39;s Product Design Conference. Only in Melbourne, returns April 2019."
                ,"cocUrl" : "https://www.webdirections.org/web-directions-event-code-of-conduct"
              },
              {
                "title" : "Smashing Conference",
                "date" : "Tue Apr 16 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Apr 17 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://smashingconf.com/sf-2019/",
                "location" : "San Francisco, California",
                "byline" : "A friendly, inclusive event which is focused on real-world problems and solutions."
                ,"cocUrl" : "https://smashingconf.com/codeofconduct"
              },
              {
                "title" : "Front-End Design Conference",
                "date" : "Thu Apr 25 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Apr 26 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "http://frontenddesignconference.com/",
                "location" : "St. Petersburg, Florida",
                "byline" : "A Conference for Web Professionals Who Love their Community, the Web, and Learning."
                ,"cocUrl" : "http://frontenddesignconference.com/terms.php"
              },
              {
                "title" : "ImageCon",
                "date" : "Wed May 01 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Thu May 02 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://imagecon.com",
                "location" : "San Francisco, California",
                "byline" : "Transforming the digital media experience"
                ,"cocUrl" : "https://www.imagecon.com/code-of-conduct/"
              },
              {
                "title" : "All Day Hey!",
                "date" : "Fri May 03 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri May 03 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://alldayhey.com",
                "location" : "Leeds, England",
                "byline" : "Single-track, single-day front-end conference"
                ,"cocUrl" : "https://alldayhey.com/#code-of-conduct"
              },
              {
                "title" : "An Event Apart",
                "date" : "Sun May 05 2019 15:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed May 08 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://aneventapart.com/event/boston-2019",
                "location" : "Boston, Massachusetts",
                "byline" : "Three days of design, code, and content"
              },
              {
                "title" : "Beyond Tellerrand (Düsseldorf)",
                "date" : "Mon May 13 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed May 15 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "http://beyondtellerrand.com/",
                "location" : "Düsseldorf, Germany",
                "byline" : "Web design, development, creativity, design and much more"
                ,"cocUrl" : "https://beyondtellerrand.com/code-of-conduct"
              },
              {
                "title" : "International JavaScript Conference",
                "date" : "Mon May 13 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed May 15 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://javascript-conference.com",
                "location" : "London, United Kingdom",
                "byline" : "JavaScript is everywhere"
                ,"cocUrl" : "https://javascript-conference.com/service-info/code-of-conduct"
              },
              {
                "title" : "John Slatin AccessU",
                "date" : "Wed May 15 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri May 17 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://knowbility.org/programs/accessu/",
                "location" : "Austin, Texas",
                "byline" : "Practical accessible design and development skills"
                ,"cocUrl" : "https://knowbility.org/programs/accessu/code-of-conduct/"
              },
              {
                "title" : "Frontend United",
                "date" : "Thu May 16 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Sat May 18 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://www.frontendunited.org/",
                "location" : "Utrecht, Netherlands",
                "byline" : "A non-profit, developer-first, community-focused conference."
                ,"cocUrl" : "https://www.frontendunited.org/code-of-conduct"
              },
              {
                "title" : "FullStack",
                "date" : "Thu May 16 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri May 17 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://skillsmatter.com/conferences/11077-fullstack-nyc-2019-the-conference-on-javascript-node-and-internet-of-things",
                "location" : "New York City, New York",
                "byline" : "The Conference on JavaScript, Node &amp; Internet of Things"
                ,"cocUrl" : "https://skillsmatter.com/go/code-of-conduct"
              },
              {
                "title" : "You Gotta Love Frontend Conference",
                "date" : "Thu May 16 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri May 17 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://lithuania.yglfconf.com",
                "location" : "Vilnius, Lithuania",
                "byline" : "Frontend Conference by developers for developers."
                ,"cocUrl" : "https://lithuania.yglfconf.com/code-of-conduct"
              },
              {
                "title" : "CSSconf EU",
                "date" : "Fri May 31 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.cssconf.eu/",
                "location" : "Berlin, Germany",
                "byline" : "A conference dedicated to the designers &amp; developers who love CSS. For the community, not for profit."
                ,"cocUrl" : "https://2019.cssconf.eu/code-of-conduct/"
              },
              {
                "title" : "JSConf EU",
                "date" : "Sat Jun 01 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Sun Jun 02 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.jsconf.eu/",
                "location" : "Berlin, Germany",
                "byline" : "JSConf EU is the labour-of-love conference for the JavaScript community in Europe."
                ,"cocUrl" : "https://2019.jsconf.eu/code-of-conduct/"
              },
              {
                "title" : "Refactr.Tech",
                "date" : "Wed Jun 05 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Jun 07 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "http://refactr.tech/",
                "location" : "Atlanta, Georgia",
                "byline" : "Diversity. Inclusion. Tech."
                ,"cocUrl" : "http://refactr.tech/code-of-conduct.html"
              },
              {
                "title" : "Pixel Pioneers",
                "date" : "Fri Jun 07 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://pixelpioneers.co/",
                "location" : "Bristol, United Kingdom",
                "byline" : "Conferences, workshops, and advice for a better web"
                ,"cocUrl" : "https://pixelpioneers.co/code-of-conduct"
              },
              {
                "title" : "Accessible UI Patterns",
                "date" : "Mon Jun 10 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Mon Jun 10 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://academy.frozenrockets.nl/workshop/accessible-ui-patterns-10-june",
                "location" : "Den Haag, NL",
                "byline" : "A one day workshop on Web Accessibility by Sara Soueidan."
                ,"cocUrl" : "https://academy.frozenrockets.nl/code-of-conduct"
              },
              {
                "title" : "CSS Day",
                "date" : "Thu Jun 13 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Jun 14 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://cssday.nl/2019",
                "location" : "Amsterdam, Netherlands",
                "byline" : "Advanced CSS conference &amp; UI Special"
                ,"cocUrl" : "https://cssday.nl/2019/contact#code-of-conduct"
              },
              {
                "title" : "JSConf.Asia",
                "date" : "Fri Jun 14 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Sun Jun 16 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.jsconf.asia/",
                "location" : "Singapore",
                "byline" : "Southeast Asia&#39;s largest web developer conference"
                ,"cocUrl" : "https://jsconf.com/codeofconduct.html"
              },
              {
                "title" : "Web Directions Code",
                "date" : "Thu Jun 20 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Jun 21 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://webdirections.org/code",
                "location" : "Melbourne, Australia",
                "byline" : "Australia&#39;s conference for JavaScript Developers and Front End Engineers."
                ,"cocUrl" : "https://www.webdirections.org/web-directions-event-code-of-conduct"
              },
              {
                "title" : "WordCamp Europe",
                "date" : "Thu Jun 20 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Sat Jun 22 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.europe.wordcamp.org/",
                "location" : "Berlin, Germany",
                "byline" : "WCEU is the largest WordPress conference in Europe. The next WCEU will be in Berlin, Germany on 20-22 June 2019"
                ,"cocUrl" : "https://2019.europe.wordcamp.org/code-of-conduct/"
              },
              {
                "title" : "DinosaurJS",
                "date" : "Thu Jun 20 2019 13:55:52 GMT+0000 (UTC)",
                "endDate" : "Fri Jun 21 2019 13:55:52 GMT+0000 (UTC)",
                "url" : "https://dinosaurjs.org/",
                "location" : "Denver, CO",
                "byline" : "A non-profit, community-driven JavaScript and Open Web conference"
                ,"cocUrl" : "https://jsconf.com/codeofconduct.html"
              },
              {
                "title" : "React Loop",
                "date" : "Fri Jun 21 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Jun 21 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://reactloop.com",
                "location" : "Chicago, IL",
                "byline" : "The First React Conference in Chicago"
                ,"cocUrl" : "https://reactloop.com/conduct"
              },
              {
                "title" : "enterJS",
                "date" : "Tue Jun 25 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Jun 28 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://www.enterjs.de/",
                "location" : "Darmstadt, Germany",
                "byline" : "The conference for Enterprise JavaScript"
                ,"cocUrl" : "https://www.enterjs.de/diversity#code-of-conduct-english"
              },
              {
                "title" : "Smashing Conference",
                "date" : "Tue Jun 25 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Jun 26 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://smashingconf.com/toronto-2019",
                "location" : "Toronto, Canada",
                "byline" : "A friendly, inclusive event which is focused on real-world problems and solutions."
                ,"cocUrl" : "https://smashingconf.com/codeofconduct"
              },
              {
                "title" : "Patterns Day",
                "date" : "Fri Jun 28 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://patternsday.com",
                "location" : "Brighton, United Kingdom",
                "byline" : "A one-day event for designers and developers focused on design systems, pattern libraries, style guides, and components."
                ,"cocUrl" : "https://patternsday.com/#codeofconduct"
              },
              {
                "title" : "CSSCamp",
                "date" : "Wed Jul 17 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://csscamp.tech/",
                "location" : "Barcelona, Spain",
                "byline" : "CSS one-day, one-track conference for Web designers and developers"
                ,"cocUrl" : "https://csscamp.tech/code-of-conduct/"
              },
              {
                "title" : "JSCamp",
                "date" : "Thu Jul 18 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Jul 19 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://jscamp.tech/",
                "location" : "Barcelona, Spain",
                "byline" : "A two-day, JavaScript International conference covering all about modern web technologies"
                ,"cocUrl" : "https://jscamp.tech/code-of-conduct/"
              },
              {
                "title" : "An Event Apart",
                "date" : "Mon Jul 29 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Jul 31 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://aneventapart.com/event/washington-dc-2019",
                "location" : "Washington, DC",
                "byline" : "Three days of design, code, and content"
                ,"cocUrl" : "https://aneventapart.com/registration-information#code-of-conduct"
              },
              {
                "title" : "That Conference",
                "date" : "Mon Aug 05 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Thu Aug 08 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://www.thatconference.com/",
                "location" : "Wisconsin Dells, WI",
                "byline" : "Summer Camp for Geeks"
                ,"cocUrl" : "https://www.thatconference.com/Home/CodeOfConduct"
              },
              {
                "title" : "JSConf US",
                "date" : "Mon Aug 12 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Aug 14 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.jsconf.us/",
                "location" : "Carlsbad, CA, USA",
                "byline" : "JSConf has been the launch pad for many of the greatest things that we now take for granted on the web"
                ,"cocUrl" : "https://2019.jsconf.us/code-of-conduct/"
              },
              {
                "title" : "Frontend Conference",
                "date" : "Sun Aug 18 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Aug 30 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://frontendconf.ch/",
                "location" : "Zürich, Switzerland",
                "byline" : "Where Design Meets Technology"
                ,"cocUrl" : "https://frontendconf.ch/code-of-conduct"
              },
              {
                "title" : "Clarity",
                "date" : "Tue Aug 20 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Aug 21 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://www.clarityconf.com/",
                "location" : "San Francisco, CA",
                "byline" : "A design systems Conference"
                ,"cocUrl" : "https://www.clarityconf.com/code-of-conduct"
              },
              {
                "title" : "An Event Apart",
                "date" : "Mon Aug 26 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Aug 28 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://aneventapart.com/event/chicago-2019",
                "location" : "Chicago, Illinois",
                "byline" : "Three days of design, code, and content"
                ,"cocUrl" : "https://aneventapart.com/registration-information#code-of-conduct"
              },
              {
                "title" : "Full Stack Fest",
                "date" : "Wed Sep 04 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Sep 06 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.fullstackfest.com/",
                "location" : "Sitges, Barcelona",
                "byline" : "A conference for Frontend developers, Backend developers, Curious developers, Web enthusiast and Everyone. 💚"
                ,"cocUrl" : "https://2019.fullstackfest.com/code-of-conduct"
              },
              {
                "title" : "ComponentsConf",
                "date" : "Fri Sep 06 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://www.componentsconf.com.au/",
                "location" : "Melbourne, Australia",
                "byline" : "Web &amp; mobile conference featuring all modern tech stacks"
                ,"cocUrl" : "https://docs.google.com/document/d/1fPahPsxd73mB8Od84J9HBBpd1DcFuCOa6u9ZQ-hr2VU/edit?usp=sharing"
              },
              {
                "title" : "Smashing Conference",
                "date" : "Mon Sep 09 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Tue Sep 10 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://smashingconf.com/freiburg-2019/",
                "location" : "Freiburg, Germany",
                "byline" : "A friendly, inclusive event which is focused on real-world problems and solutions."
                ,"cocUrl" : "https://smashingconf.com/codeofconduct"
              },
              {
                "title" : "React Day New York",
                "date" : "Fri Sep 13 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://reactnewyork.com/",
                "location" : "New York, New York",
                "byline" : "There will be hot dogs"
                ,"cocUrl" : "https://berlincodeofconduct.org/"
              },
              {
                "title" : "Web Unleashed",
                "date" : "Fri Sep 13 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Sat Sep 14 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://fitc.ca/event/webu19/",
                "location" : "Toronto, Ontario",
                "byline" : "A Front-End Developer Event"
                ,"cocUrl" : "https://fitc.ca/code-of-conduct/"
              },
              {
                "title" : "CSSConf Budapest",
                "date" : "Wed Sep 25 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Sep 25 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "http://cssconfbp.rocks/",
                "location" : "Budapest, Hungary",
                "byline" : "CSSConf Budapest is a community conference dedicated to the designers and developers who love CSS. For the community, by the community."
                ,"cocUrl" : "http://cssconfbp.rocks/code-of-conduct.html"
              },
              {
                "title" : "JSConf Budapest",
                "date" : "Thu Sep 26 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Sep 27 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://jsconfbp.com/",
                "location" : "Budapest, Hungary",
                "byline" : "We aim to be the JSConf of the region around Eastern-Middle Europe, an area so diverse in culture, people and views."
                ,"cocUrl" : "https://jsconfbp.com/code-of-conduct"
              },
              {
                "title" : "Artifact Conference",
                "date" : "Mon Sep 30 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Tue Oct 01 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://artifactconf.com/",
                "location" : "Austin, Texas",
                "byline" : "Practical insights for developing a multi-device world."
                ,"cocUrl" : "https://knowbility.org/programs/accessu/code-of-conduct/"
              },
              {
                "title" : "Nordic.js",
                "date" : "Thu Oct 10 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Oct 11 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://nordicjs.com/",
                "location" : "Stockholm, Sweden",
                "byline" : "Nordic.js is a single track conference with talks by internationally renowned speakers and rising stars in the JavaScript community"
                ,"cocUrl" : "http://nordicjs.com/code-of-conduct/"
              },
              {
                "title" : "Smashing Conference",
                "date" : "Tue Oct 15 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Oct 16 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://smashingconf.com/ny-2019/",
                "location" : "New York City, New York",
                "byline" : "We pour our heart into creating friendly, inclusive events that are focused on real-world problems and solutions."
                ,"cocUrl" : "https://smashingconf.com/codeofconduct"
              },
              {
                "title" : "An Event Apart",
                "date" : "Mon Oct 28 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Oct 30 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://aneventapart.com/event/denver-2019",
                "location" : "Denver, Colorado",
                "byline" : "Three days of design, code, and content"
                ,"cocUrl" : "https://aneventapart.com/registration-information#code-of-conduct"
              },
              {
                "title" : "Web Directions Summit",
                "date" : "Thu Oct 31 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Nov 01 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://webdirections.org/wds",
                "location" : "Sydney, Australia",
                "byline" : "Three big tracks–Product, Design, and Developer focused, plus stellar keynotes and much more"
                ,"cocUrl" : "https://www.webdirections.org/web-directions-event-code-of-conduct"
              },
              {
                "title" : "dotCSS",
                "date" : "Wed Dec 04 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.dotcss.io/",
                "location" : "Paris, France",
                "byline" : "The world&#39;s largest CSS conference"
                ,"cocUrl" : "https://2019.dotcss.io/codeofconduct/"
              },
              {
                "title" : "dotJS",
                "date" : "Thu Dec 05 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Fri Dec 06 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://2019.dotjs.io/",
                "location" : "Paris, France",
                "byline" : "The world&#39;s largest JavaScript conference"
                ,"cocUrl" : "https://2019.dotjs.io/codeofconduct/"
              },
              {
                "title" : "An Event Apart",
                "date" : "Mon Dec 09 2019 00:00:00 GMT+0000 (UTC)",
                "endDate" : "Wed Dec 11 2019 00:00:00 GMT+0000 (UTC)",
                "url" : "https://aneventapart.com/event/san-francisco-2019",
                "location" : "San Francisco, California",
                "byline" : "Three days of design, code, and content"
                ,"cocUrl" : "https://aneventapart.com/registration-information#code-of-conduct"
              }
              ]
    })
};