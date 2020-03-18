function nonsense(string) {
    var blab = function () {
        alert("string");
    };
    return blab;
}


function nonsense(string) {
    setTimeout(blab, 2000);
    function blab () {
        alert(string);
    }
}

var blabLater = nonsense("hello");
var blabAgainLater = nonsense("world");

blabLater();
blabAgainLater();

var lastNameTrier = function(firstname) {
    var innerFunction = function(lastname) {
        console.log(firstname + " " + lastname);
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');



//Create a `storyWriter` function that returns an object with two methods. One method, `addWords` adds a word to your story and returns the story while the other one, `erase`, resets the story back to an empty string. Here is an implementation:

function storyWriter() {
    var obj = {
        story : "",
        addWords : function(string) {
            obj.story += string;  
            return obj.story;
        },
        erase : function() {
            obj.story = "";
            return obj.story;
        }
    };
    return obj;
};


var farmLoveStory = storyWriter();
farmLoveStory.addWords("There was once a lonely cow.");
farmLoveStory.addWords("It saw a friendly face.");
farmLoveStory.erase();


