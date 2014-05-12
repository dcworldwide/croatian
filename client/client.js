// Configure authentication requirements
Accounts.ui.config({
    requestPermissions: {
        facebook: ['basic_info', 'email', 'user_location']
    },
    requestOfflineToken: {
    },
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

if (Meteor.isClient) {

    Meteor.startup(function () {

        Session.set("enableVerbs", true);
        Session.set("enableNouns", false);
        Session.set("enableAdjectives", false);

        Deps.autorun(function () {
            Meteor.subscribe('userData', function () {
                if (Meteor.user())
                    console.log("Current user: " + Meteor.user().profile.name)
            });

            Meteor.subscribe("playerScores", function () {
                console.log("player scores loaded");
            });

            Meteor.subscribe("words", function () {
                updateActiveWord();
            });
        });

    });

    function getWordFilter() {
        if (Session.get("enableVerbs")) {
            return "v";
        }

        if (Session.get("enableNouns")) {
            return "n";
        }

        if (Session.get("enableAdjectives")) {
            return "a";
        }
    }

    function updateActiveWord() {

        var cursor = Words.find({type: getWordFilter()}, {reactive: false}); // Disable reactivity for improved perf
        var word = cursor.fetch({})[Math.floor(Math.random() * cursor.count())];

        // Refresh conjugations
        word.updateVerbConjugationTable();

        Session.set("activeWord", word);
        updateQuizQuestions();
    }


    function getRandomWord() {
        // Code assumes that by default, we are working with verbs
        if (Session.get("enableVerbs")) {
            var cursor = Words.find({type: 'v'});
            var word = cursor.fetch({})[Math.floor(Math.random() * cursor.count())]
            return word;
        }
        else if (Session.get("enableNouns")) {
            var cursor = Words.find({type: 'n'});
            var word = cursor.fetch({})[Math.floor(Math.random() * cursor.count())]
            return word;
        }
        else {

        }
    }

    function updateQuizQuestions() {
        var correctQuizOption = Math.floor(Math.random() * 2);

        if (correctQuizOption == 1) {
            Session.set("quizOption1", Session.get("activeWord").english);
            Session.set("quizOption2", getRandomWord().english);
        }
        else {
            Session.set("quizOption2", Session.get("activeWord").english);
            Session.set("quizOption1", getRandomWord().english);
        }
    }

    function validateQuizResponse(selectedOption) {
        if (Template.wordView.activeWord().english == selectedOption.textContent) {
            // Show positive feedback
            $(selectedOption).removeClass("btn-default").addClass("success").delay(500).fadeOut(300, function () {
                $(selectedOption).removeClass("success").addClass("btn-default").fadeIn(300, function () {

                    updateActiveWord();
                    Meteor.user().updateWordScore(Template.wordView.activeWord(), true);
                });
            });
        }
        else {
            // Show positive feedback
            $(selectedOption).removeClass("btn-default").addClass("failure").shake().delay(500).fadeOut(300, function () {
                $(selectedOption).removeClass("failure").addClass("btn-default").fadeIn(300, function () {

                    Meteor.user().updateWordScore(Template.wordView.activeWord(), false);
                });
            });
        }
    }

    Template.wordView.isUserLoggedIn = function () {
        return Meteor.user();
    }

    Template.wordView.activeWord = function () {
        return Session.get("activeWord");
    }

    Template.wordView.quizOption1 = function () {
        return Session.get("quizOption1");
    }

    Template.wordView.quizOption2 = function () {
        return Session.get("quizOption2");
    }

    function toggleVerbs() {
        Session.set("enableVerbs", true);
        Session.set("enableNouns", false);
        Session.set("enableAdjectives", false);
        updateActiveWord();
    }

    function toggleNouns() {
        Session.set("enableVerbs", false);
        Session.set("enableNouns", true);
        Session.set("enableAdjectives", false);
        updateActiveWord();
    }

    Template.wordView.events({
        'click button.quizOption': function (e) {
            // template data, if any, is available in 'this'
            validateQuizResponse(e.currentTarget);
        },
        'click a.verbs': function (e) {
            toggleVerbs();
        },
        'click a.nouns': function (e) {
            toggleNouns();
        }
    });

    Template.wordView.userVerbScore = function () {
        return Meteor.user().getVerbScore();
    }

    Template.wordView.userNounScore = function () {
        return Meteor.user().getNounScore();
    }

    Template.wordView.rendered = function () {
    };

    Template.leaderboard.players = function () {

        return Meteor.users.find({}, {sort: {'profile.stats.score': 1}});
    };
}


(function ($) {
    $.fn.shake = function (o) {
// Set options
        var o = $.extend({
            direction: "left",
            distance: 20,
            times: 3,
            speed: 140,
            easing: "swing"
        }, o);

        return this.each(function () {

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
            }
            ;
            el.animate(animation1, o.speed, o.easing).
                animate(animation, o.speed / 2, o.easing, function () { // Last shake
                    el.css(props); // Restore
                    if (o.callback) o.callback.apply(this, arguments); // Callback
                });
        });
    };
})(jQuery);