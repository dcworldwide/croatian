// common code on client and server declares livedata-managed mongo collection.
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

Words = new Meteor.Collection("words");

Words.helpers({

    verbConjugationTable: null,

    updateVerbConjugationTable: function () {

        console.log(this);

        if (this.type == 'v')
        {
            this.verbConjugationTable = {
                past: {
                    sg: {
                        f: getVerbConjugation(this, 0, true, 'm'),
                        s: getVerbConjugation(this, 0, true, 'f'),
                        t: getVerbConjugation(this, 0, true, 'n')
                    },
                    pl: {
                        f: getVerbConjugation(this, 0, false, 'm'),
                        s: getVerbConjugation(this, 0, false, 'f'),
                        t: getVerbConjugation(this, 0, false, 'n')
                    }
                },
                present: {
                    sg: {
                        f: getVerbConjugation(this, 1, true, 1),
                        s: getVerbConjugation(this, 1, true, 2),
                        t: getVerbConjugation(this, 1, true, 3)
                    },
                    pl: {
                        f: getVerbConjugation(this, 1, false, 1),
                        s: getVerbConjugation(this, 1, false, 2),
                        t: getVerbConjugation(this, 1, false, 3)
                    }
                },
                future: {
                    sg: {
                        f: getVerbConjugation(this, 2, true, 1),
                        s: getVerbConjugation(this, 2, true, 2),
                        t: getVerbConjugation(this, 2, true, 3)
                    },
                    pl: {
                        f: getVerbConjugation(this, 2, false, 1),
                        s: getVerbConjugation(this, 2, false, 2),
                        t: getVerbConjugation(this, 2, false, 3)
                    }
                }
            };
        }
        else
        {
            throw new Meteor.Error(0, "Unable to produce Verb Conjugation Table")
        }
    },
    isVerb: function() {
        return this.type == 'v';
    },
    isNoun: function() {
        return this.type == 'n';
    },
    isAdjective: function() {
        return this.type == 'a';
    }
});

/**
 * Returns all conjugations of a Verb.
 *
 *
 */
function getVerbConjugation(verb, tense, isSingular, personOrGender) {

    if (tense == 0)
    {
        // Past
        var extension = (verb.baseForm.endsWith("iti") ? "iti" : "ti");

        if (isSingular)
        {
            switch (personOrGender)
            {
                case 'm':
                    return verb.baseForm.replace(extension, "o");
                case 'f':
                    return verb.baseForm.replace(extension, "la");
                case 'n':
                    return verb.baseForm.replace(extension, "le");
                default:
                    return "Invalid person"
            }
        }
        else
        {
            switch (personOrGender)
            {
                case 'm':
                    return verb.baseForm.replace(extension, "li");
                case 'f':
                    return verb.baseForm.replace(extension, "le");
                case 'n':
                    return verb.baseForm.replace(extension, "lo");
                default:
                    return "Invalid person"
            }
        }
    }
    else if (tense == 1)
    {
        // Present
        if (verb.class == 1)
        {
            var extension = (verb.baseForm.endsWith("ati") ? "ati" : "ti");

            if (isSingular)
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace(extension, "am");
                    case 2:
                        return verb.baseForm.replace(extension, "as^");
                    case 3:
                        return verb.baseForm.replace(extension, "a");
                    default:
                        return "Invalid person"
                }
            }
            else
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace(extension, "amo");
                    case 2:
                        return verb.baseForm.replace(extension, "ate");
                    case 3:
                        return verb.baseForm.replace(extension, "aju");
                    default:
                        return "Invalid person"
                }
            }
        }
        else if (verb.class == 2)
        {
            var extension = (verb.baseForm.endsWith("iti") ? "iti" : "ti");

            if (isSingular)
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace(extension, "im");
                    case 2:
                        return verb.baseForm.replace(extension, "is^");
                    case 3:
                        return verb.baseForm.replace(extension, "i");
                    default:
                        return "Invalid person"
                }
            }
            else
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace(extension, "imo");
                    case 2:
                        return verb.baseForm.replace(extension, "ite");
                    case 3:
                        return verb.baseForm.replace(extension, "e");
                    default:
                        return "Invalid person"
                }
            }
        }
        else if (verb.class == 3)
        {
            var extension = (verb.baseForm.endsWith("iti") ? "iti" : "ti");

            if (isSingular)
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace(extension, "im");
                    case 2:
                        return verb.baseForm.replace(extension, "is^");
                    case 3:
                        return verb.baseForm.replace(extension, "i");
                    default:
                        return "Invalid person"
                }
            }
            else
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace(extension, "imo");
                    case 2:
                        return verb.baseForm.replace(extension, "ite");
                    case 3:
                        return verb.baseForm.replace(extension, "e");
                    default:
                        return "Invalid person"
                }
            }
        }
        else if (verb.class == 4)
        {
            if (isSingular)
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace("ti", "jem");
                    case 2:
                        return verb.baseForm.replace("ti", "je^s");
                    case 3:
                        return verb.baseForm.replace("ti", "je");
                    default:
                        return "Invalid person"
                }
            }
            else
            {
                switch (personOrGender)
                {
                    case 1:
                        return verb.baseForm.replace("ti", "jemo");
                    case 2:
                        return verb.baseForm.replace("ti", "jete");
                    case 3:
                        return verb.baseForm.replace("ti", "ju");
                    default:
                        return "Invalid person"
                }
            }
        }
        else if (verb.class == "irregular")
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
            switch (personOrGender)
            {
                case 1:
                    return "cu " + verb.baseForm;
                case 2:
                    return "ces " + verb.baseForm;
                case 3:
                    return "ce " + verb.baseForm;
                default:
                    return "Invalid person"
            }
        }
        else
        {
            switch (personOrGender)
            {
                case 1:
                    return "cemo " + verb.baseForm;
                case 2:
                    return "cete " + verb.baseForm;
                case 3:
                    return "ce " + verb.baseForm;
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





Meteor.users.helpers({
    updateWordScore: function (word, success) {

        // TODO...can we make this more succint?
        if (Meteor.user()) {
            if (word.type == 'v') {
                var measure = success ? Meteor.user().profile.stats.verbs.t : Meteor.user().profile.stats.verbs.f;
                var newVal = (measure >= 0 ? parseInt(measure) + 1 : 0);

                if (success) {
                    Meteor.users.update(Meteor.userId(), {$set: {"profile.stats.verbs.t": newVal}});
                }
                else {
                    Meteor.users.update(Meteor.userId(), {$set: {"profile.stats.verbs.f": newVal}});
                }
            }
            else if (word.type == 'n') {
                var measure = success ? Meteor.user().profile.stats.nouns.t : Meteor.user().profile.stats.nouns.f;
                var newVal = (measure >= 0 ? parseInt(measure) + 1 : 0);

                if (success) {
                    Meteor.users.update(Meteor.userId(), {$set: {"profile.stats.nouns.t": newVal}});
                }
                else {
                    Meteor.users.update(Meteor.userId(), {$set: {"profile.stats.nouns.f": newVal}});
                }
            }
            else if (word.type == 'a') {
                var measure = success ? Meteor.user().profile.stats.adjectives.t : Meteor.user().profile.stats.adjectives.f;
                var newVal = (measure >= 0 ? parseInt(measure) + 1 : 0);

                if (success) {
                    Meteor.users.update(Meteor.userId(), {$set: {"profile.stats.adjectives.t": newVal}});
                }
                else {
                    Meteor.users.update(Meteor.userId(), {$set: {"profile.stats.adjectives.f": newVal}});
                }

            }

            Meteor.users.update(Meteor.userId(), {$set: {'profile.stats.score': Meteor.user().profile.stats.score + (success ? 1 : -1)}});
        }
    },
    getVerbScore: function() {
        if (Meteor.user() && (Meteor.user().profile.stats.verbs.t + Meteor.user().profile.stats.verbs.f) > 0) {
            return Math.round(100 * Meteor.user().profile.stats.verbs.t / (Meteor.user().profile.stats.verbs.t + Meteor.user().profile.stats.verbs.f));
        }
        else {
            return 0;
        }
    },
    getNounScore: function() {
        if (Meteor.user() && (Meteor.user().profile.stats.nouns.t + Meteor.user().profile.stats.nouns.f) > 0) {
            return Math.round(100 * Meteor.user().profile.stats.nouns.t / (Meteor.user().profile.stats.nouns.t + Meteor.user().profile.stats.nouns.f));
        }
        else {
            return 0;
        }
    }
});
