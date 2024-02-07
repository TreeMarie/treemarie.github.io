
(function (window) {  
    var helloSpeaker = {(names[i])};
    var speakWord = "Hello";
    
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);
