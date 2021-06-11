let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

const storyWords = story.split(" ");

const betterWords = storyWords.filter(word => {
    if (!unnecessaryWords.includes(word)) {
        return word;
    }
});

let really = 0;
let very = 0;
let basically = 0;
betterWords.forEach(word => {
    if (word === "really") {
        really++;
    } else if (word === "very") {
        very++;
    } else if (word === "basically") {
        basically++;
    }
});



console.log("really is used:" + really);
console.log("very is used: " + very);
console.log("basically is used:" + basically);



const storyChar = story.split("");

let counter = 0;
storyChar.forEach(punc => {
    if (punc === "." || punc === "!") {
        counter++;
    }
    return counter;
});

console.log("The word count:" + storyWords.length);
console.log("The word count of better words:" + betterWords.length);

console.log("The sentence count:" + counter);

console.log(betterWords.join(" "));