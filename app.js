// If it's the homepage
// if (window.location.pathname = "/") {
  // Store the mouse that has the class of "mouse" in a variable
  mouse = document.querySelector(".mouse");
  // Store the navbar in a variable
  nav_bar = document.querySelector(".nav");
  // Store all the navbar links in an array
  nav_links = document.querySelectorAll(".nav-link");
  // Store the news div in a variable
  news_div = document.querySelector(".news");
  // Storing a mediaquery list
  is_less_than_498 = window.matchMedia("(max-width: 498px)");
  // On scroll, do the following
  window.addEventListener("scroll", function () {
    // If window scroll value is less than 190
    if (window.scrollY > 190) {
      // Set the mouse opacity to 0
      mouse.style.opacity = "0";
      // remove to the nav bar the shrink class
      nav_bar.classList.remove("shrink");
    }
    else {
      // Set the mouse opacity to 1
      mouse.style.opacity = "1";
      // Add to the nav bar the shrink class
      nav_bar.classList.add("shrink");
    }
  })
  // When the mouse div is clicked, run the following lines
  mouse.addEventListener("click", function () {
    // If window scroll value is less than 190
    if (window.scrollY < 190) {
      // If the screen width is less than 498
      is_less_than_498.matches
        // Scroll on the y axis by the height of the news div
        ? window.scroll(0, news_div.scrollHeight)
        // Else scroll on the y axis by the height of the news div - the height of the nav bar
        : window.scroll(0, news_div.scrollHeight - nav_bar.scrollHeight);
    }
  })

  // Card animation on scroll

  // Get all the elements that has home-card class but doesn't have the button class and storing them in the home_card array 
  home_cards = document.querySelectorAll(".home-card:not(.home-card.button");

   // applying the following lines to each element in the home_cards array
  home_cards.forEach(function (card) {
    // Setting the card's opacity to 0
    card.style.opacity = 0;
    // If the screen width is less than 498px set the card's margin left to -40px else set it to 0
    card.style.marginLeft = is_less_than_498.matches ? "-40px" : 0;
    // Setting the card's width to 0
    card.style.width = 0;
  })
  // On scroll, run these following lines
  window.addEventListener("scroll", function () {
    // applying the following lines to each element in the home_cards array
    home_cards.forEach(function (card, index , arr) {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      // Getting the coordinates of the card and storing it
      card_coordiantes = card.getBoundingClientRect();
      // If window scroll value is more than or equal to the distance between the card and the start of the page
      if (scrolled+card.scrollHeight >= card_coordiantes.top + 5) {
        // Setting the card's opacity to 1
        card.style.opacity = 1;
        // If the screen width is less than 498px set the card's margin left to 0 else set it to 40px
        card.style.marginLeft = is_less_than_498.matches ? "0" : "40px";
        // Set the card's width to -webkit-fill-available
        card.style.width = "-webkit-fill-available";
      }
    })
  })
  // Storing the timer div in a variable
  timer = document.querySelector(".timer");
  ticket = document.querySelector(".ticket");

  // Set the date we're counting down to
  // TODO: Set The right values for those variables
  var start = new Date("Oct 9, 2022 9:37:25").getTime();
  var end = new Date("Oct 9, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var timer_func = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = end - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the timer element
    timer.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s " + "Left!";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(timer_func);
      
      timer.innerHTML = "Event Finished";
    }
    // Otherwise, Check if the event has started
    else if(start <= now)
    {
      // If the Element after the timer has the sub-timer class
      if (timer.nextElementSibling.classList[0] == "sub-timer")
      {
        // Remove the next element
        timer.nextElementSibling.remove();
      }
      // Change the timer div's text to "Event Started"
      timer.innerHTML = "Event Started";
      sub_timer = document.createElement("div");
      sub_timer.classList.add("sub-timer");
      sub_timer.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s " + "Left!";

      timer.after(sub_timer)
    }
  }, 1000);

//   add_to_calendar_btn = document.querySelector(".home-card.button");
//  add_to_calendar_btn.addEventListener("click", function () {
//   addCalendarEvent()

//   })
// function addCalendarEvent() {
//   var event = {
//     summary: "Google I/O 2015",
//     location: "3 طريق القاهرة - بلبيس الصحراوى El Salam City, محافظة القاهرة‬ 11785",
//     start: {
//       dateTime: "2022-01-28T09:00:00-07:00",
//       timeZone: "America/Los_Angeles"
//     },
//     end: {
//       dateTime: "2020-01-28T17:00:00-07:00",
//       timeZone: "America/Los_Angeles"
//     }, 
//     reminders: {
//       useDefault: false,
//       overrides: [
//         { method: "email", minutes: 24 * 60 },
//         { method: "popup", minutes: 10 }
//       ]
//     }
//   };
//   window.googleCalendar.createEvent(event);
// }

// window.addEventListener("load", function() {
//   let credentials = {
//     scope:
//       "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
//     clientId:
//       "782480632564-2d6vs98skec59k0gmt1rroc2l031gh7h.apps.googleusercontent.com",
//     apiKey: "AIzaSyA8gvoEonBGqqfvJwQcdqcNdXlx_0krOnU",
//     discoveryDocs: [
//       "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
//     ]
//   };
//   window.googleCalendar = new googleCalendar(credentials);
// });

// class googleCalendar {
//   constructor(credentials) {
//     //load dependencies...
//     this.gapi = gapi;
//     this.gapi.load("client:auth2", init.bind(this));
//     let cal = this;
//     //create call stack...
//     this.callStack = {};
//     function init() {
//       //authorize api access...
//       this.gapi.client
//         .init({
//           apiKey: credentials.apiKey,
//           clientId: credentials.clientId,
//           scope: credentials.scope,
//           discoveryDocs: credentials.discoveryDocs
//         })
//         .then(function() {
//           cal.gapi.auth2.getAuthInstance().isSignedIn.listen(updateCallstack);
//           function updateCallstack() {
//             cal.callStack.func(cal.callStack.args);
//           }
//         });
//     }
//   }
//   userAuthStatus() {
//     if (!this.gapi.auth2.getAuthInstance().isSignedIn.get()) {
//       this.gapi.auth2.getAuthInstance().signIn();
//     }
//     return this.gapi.auth2.getAuthInstance().isSignedIn.get();
//   }
//   createEvent(event) {
//     if (this.userAuthStatus()) {
//       let request = this.gapi.client.calendar.events.insert({
//         calendarId: "primary",
//         resource: event
//       });
//       request.execute(function(e) {
//         alert("done");
//         console.log(e);
//       });
//     } else {
//       this.callStack.func = this.createEvent.bind(this);
//       this.callStack.args = event
//     }
//   }
// }



