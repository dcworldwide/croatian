// Conifgure authentication requirements
Accounts.ui.config({
  requestPermissions: {
    facebook: ['basic_info','email','user_location']
  },
  requestOfflineToken: {
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

if (Meteor.isClient) {
  
  Meteor.startup(function () {    

    Deps.autorun(function () {
      Meteor.subscribe('userData', function() { 
	if (Meteor.user())
	  console.log("Current user: " + Meteor.user().profile.name)
      });
      
      Meteor.subscribe("playerScores", function () {
	console.log("player scores loaded");
      });
      
      Meteor.subscribe("verbs", function () {
	Session.set("activeVerb", Verbs.findOne());
	updateQuizQuestions();
	updateVerbConjugationTable();
      });
      
      Meteor.subscribe("nouns", function () {
	Session.set("activeNoun", Nouns.findOne());
	
      });
    });
    
  });  
  
  function getRandomVerbIndex() {
      return Math.floor(Math.random() * Verbs.find().count());
  }	
  
  function updateActiveVerb() {
      Session.set("activeVerb", Verbs.find().fetch({})[getRandomVerbIndex()]);
      updateQuizQuestions();
      updateVerbConjugationTable();
  }
  
  function updateVerbConjugationTable() {
    
      var activeVerb = Template.wordView.activeVerb();
    
      var o = {
	past: {
	  sg: {
	    f: getVerbConjugation(activeVerb, 0, true, 1),
	    s: getVerbConjugation(activeVerb, 0, true, 2),
	    t: getVerbConjugation(activeVerb, 0, true, 3)
	  },
	  pl: {
	    f: getVerbConjugation(activeVerb, 0, false, 1),
	    s: getVerbConjugation(activeVerb, 0, false, 2),
	    t: getVerbConjugation(activeVerb, 0, false, 3)
	  }
	},
	present: {
	  sg: {
	    f: getVerbConjugation(activeVerb, 1, true, 1),
	    s: getVerbConjugation(activeVerb, 1, true, 2),
	    t: getVerbConjugation(activeVerb, 1, true, 3)
	  },
	  pl: {
	    f: getVerbConjugation(activeVerb, 1, false, 1),
	    s: getVerbConjugation(activeVerb, 1, false, 2),
	    t: getVerbConjugation(activeVerb, 1, false, 3)
	  }
	},
	future: {
	  sg: {
	    f: getVerbConjugation(activeVerb, 2, true, 1),
	    s: getVerbConjugation(activeVerb, 2, true, 2),
	    t: getVerbConjugation(activeVerb, 2, true, 3)
	  },
	  pl: {
	    f: getVerbConjugation(activeVerb, 2, false, 1),
	    s: getVerbConjugation(activeVerb, 2, false, 2),
	    t: getVerbConjugation(activeVerb, 2, false, 3)
	  }
	}
      };
      
      Session.set("verbConjTable", o);
  }

  function updateQuizQuestions() {
      var correctQuizOption = Math.floor(Math.random() * 2);
      
      if (correctQuizOption == 1)
      {
	  Session.set("quizOption1", Session.get("activeVerb").english);
	  Session.set("quizOption2", Verbs.find().fetch({})[getRandomVerbIndex()].english);
      }
      else {
	  Session.set("quizOption2",  Session.get("activeVerb").english);
	  Session.set("quizOption1", Verbs.find().fetch({})[getRandomVerbIndex()].english);
      }
  }
  
  function validateQuizResponse(selectedOption) {
    if (Template.wordView.activeVerb().english == selectedOption.textContent)
    {
      // Show positive feedback
      $(selectedOption).removeClass("btn-default").addClass("success").delay(500).fadeOut(300, function() {
	$(selectedOption).removeClass("success").addClass("btn-default").fadeIn(300, function(){
	  updateActiveVerb();  
	  
	  if(Meteor.user())
	  {
	    var newVal = (Meteor.user().profile.stats.verbs.t >= 0 ? parseInt(Meteor.user().profile.stats.verbs.t) + 1 : 0);
	    Meteor.users.update(Meteor.userId(),{$set : {'profile.stats.verbs.t': newVal}});	    
	    Meteor.users.update(Meteor.userId(),{$set : {'profile.stats.score': Meteor.user().profile.stats.score + 1}});	    
	  }
	  
	});
      });	    
    }
    else
    {
      // Show positive feedback
      $(selectedOption).removeClass("btn-default").addClass("failure").shake().delay(500).fadeOut(300, function() {
	$(selectedOption).removeClass("failure").addClass("btn-default").fadeIn(300, function(){
	  
	  var newVal = (Meteor.user().profile.stats.verbs.f >= 0 ? parseInt(Meteor.user().profile.stats.verbs.f) + 1 : 0);
	  Meteor.users.update(Meteor.userId(),{$set : {'profile.stats.verbs.f': newVal}});
	  Meteor.users.update(Meteor.userId(),{$set : {'profile.stats.score': Meteor.user().profile.stats.score - 1}});	    	  
	});
      });    
    }
  }
  
  Template.wordView.isUserLoggedIn = function () {
      return Meteor.user();
  }
  
  Template.wordView.activeVerb = function () {
      return Session.get("activeVerb");
  }

  Template.wordView.quizOption1 = function() {
      return Session.get("quizOption1");
  }

  Template.wordView.quizOption2 = function() {
      return Session.get("quizOption2");
  }
  
  Template.wordView.verbConjTable = function() {
      return Session.get("verbConjTable");
  }
  
  Template.wordView.userStatsPcCorrect = function() {
    if (Meteor.user() && (Meteor.user().profile.stats.verbs.t + Meteor.user().profile.stats.verbs.f) > 0)
    {
      return Math.round(100 * Meteor.user().profile.stats.verbs.t / (Meteor.user().profile.stats.verbs.t + Meteor.user().profile.stats.verbs.f));
    }
    else
    {
      return 0;
    }
  }

  Template.wordView.events({
      'click button.quizOption': function (e) {
	  // template data, if any, is available in 'this'
	  validateQuizResponse(e.currentTarget);
      }
  });
  
  Template.wordView.rendered = function() {
    
  };
  
  Template.leaderboard.players = function () {
    
      return Meteor.users.find({}, {sort: {'profile.stats.verbs.t': 1}});
  };
  
  
  String.prototype.endsWith = function(suffix) {
      return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
  
  /**
    * Returns all conjugations of a Verb.
    *
    *
    */
  function getVerbConjugation(activeVerb, tense, isSingular, person) {
    
    if (tense == 0)
    {
      // Past
      var extension = (activeVerb.baseForm.endsWith("iti") ? "iti" : "ti");
      
      return "TODO";
    }
    else if (tense == 1)
    {
      if (activeVerb.case == 3)
      {
	// Present
	var extension = (activeVerb.baseForm.endsWith("iti") ? "iti" : "ti");
	
	if (isSingular)
	{
	  switch (person)
	  {
	    case 1:
	      return activeVerb.baseForm.replace(extension, "im"); 
	    case 2:
	      return activeVerb.baseForm.replace(extension, "is^");
	    case 3:
	      return activeVerb.baseForm.replace(extension, "i");
	    default:
	      return "Invalid person"
	  }
	}
	else
	{
	  switch (person)
	  {
	    case 1:
	      return activeVerb.baseForm.replace(extension, "imo");   
	    case 2:
	      return activeVerb.baseForm.replace(extension, "ite");   
	    case 3:
	      return activeVerb.baseForm.replace(extension, "e");
	    default:
	      return "Invalid person"
	  }
	}
      }
      else if (activeVerb.case == 4)
      {
	if (isSingular)
	{
	  switch (person)
	  {
	    case 1:
	      return activeVerb.baseForm.replace("ti", "jem");      
	    case 2:
	      return activeVerb.baseForm.replace("ti", "je^s");      
	    case 3:
	      return activeVerb.baseForm.replace("ti", "je");      
	    default:
	      return "Invalid person"
	  }
	}
	else
	{
	  switch (person)
	  {
	    case 1:
	      return activeVerb.baseForm.replace("ti", "jemo");      
	    case 2:
	      return activeVerb.baseForm.replace("ti", "jete");      
	    case 3:
	      return activeVerb.baseForm.replace("ti", "ju");      
	    default:
	      return "Invalid person"
	  }
	}
      }
      else if (activeVerb.case == "irregular")
      {
	return "TOOD";
      }
      else
      {
	return "TODO";
      }
    }
    else if (tense == 2)
    {
      // Future
      if (isSingular)
      {
	switch (person)
	{
	  case 1:
	    return "cu " + activeVerb.baseForm;
	  case 2:
	    return "ces " + activeVerb.baseForm;
	  case 3:
	    return "ce " + activeVerb.baseForm;
	  default:
	    return "Invalid person"
	}
      }
      else
      {
	switch (person)
	{
	  case 1:
	    return "cemo " + activeVerb.baseForm;
	  case 2:
	    return "cete " + activeVerb.baseForm;
	  case 3:
	    return "ce " + activeVerb.baseForm;
	  default:
	    return "Invalid person"
	}
      }
    }
    else
    {
      throw new Meteor.Error(-1, "Invalid Verb Tense")
    }
  }
}


(function($) {
$.fn.shake = function(o) {
// Set options
var o = $.extend({
direction: "left",
distance: 20,
times: 3,
speed: 140,
easing: "swing"
}, o);

return this.each(function() {

// Create element
var el = $(this), props = {
position: el.css("position"),
top: el.css("top"),
bottom: el.css("bottom"),
left: el.css("left"),
right: el.css("right")
};

el.css("position", "relative");

// Adjust
var ref = (o.direction == "up" || o.direction == "down") ? "top" : "left";
var motion = (o.direction == "up" || o.direction == "left") ? "pos" : "neg";

// Animation
var animation = {}, animation1 = {}, animation2 = {};
animation[ref] = (motion == "pos" ? "-=" : "+=") + o.distance;
animation1[ref] = (motion == "pos" ? "+=" : "-=") + o.distance * 2;
animation2[ref] = (motion == "pos" ? "-=" : "+=") + o.distance * 2;

// Animate
el.animate(animation, o.speed, o.easing);
for (var i = 1; i < o.times; i++) { // Shakes
el.animate(animation1, o.speed, o.easing).animate(animation2, o.speed, o.easing);
};
el.animate(animation1, o.speed, o.easing).
animate(animation, o.speed / 2, o.easing, function(){ // Last shake
el.css(props); // Restore
if(o.callback) o.callback.apply(this, arguments); // Callback
});
});
};
})(jQuery);