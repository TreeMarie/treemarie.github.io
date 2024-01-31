var names =new Array(); 
names[0]="Yaakov"
names[1]="John"
names[2]="Jen"
names[3]="Jason"
names[4]="Paul"
names[5]="Frank"
names[6]="Larry"
names[7]="Paula"
names[8]="Laura"
names[9]="Jim"
    
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]) } 
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();
