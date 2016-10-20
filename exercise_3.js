/**
 * Created by nick on 10/20/16.
 *
 *  This was easily the most difficult problem but also probably my favorite.
 *  I had to reread the question a few times to fully understand what we need to do
 *  The goal is to take the number 667734139064 and reverse the hash process done in the function assignment3
 *
 *  I approached this problem by reverse engineering the assignment3 function as applied to the example leepdag
 *  I used the debugger the step through and see what was happening to number on each iteration.
 *
 *  After stepping through assignment3(leepdag) a few times I realized that we could take the number generated
 *   and iteratively divide by 37,  6 times to get the base number. subtracting that by 259 (7 * 37)
 *   gives the index of the first number.  We can then work our way back up by multiplying by 37 and subtracting to get
 *   the indexes of the letters.
 *
 *   Runtime is O(n) since we have 2 loops. I couldn't find a way to do everything in one loop but I feel like it might be possible.
 *
 */


// goal is to reverse the hashed number to reproduce the string that generated it
// number = 667734139064
// the string we are looking for has 7 characters and can only include letters from the letters array. can have repeats


function reverseHash(number) {

    var originalNumber = number;
    var letters = ["a", "c", "d", "e", "g", "i", "l", "m", "n", "o", "p",
        "r", "s", "t", "u", "w"];    // our letter
    var number_count = [];          // array to hold the number checkpoints 
    var originalstring = '';        // string we will build/rebuild

    for (var i = 0; i < 6; i++) {    // loop through dividing our starting number by 37
        number = (number / 37);     // this will generate marks we can subtract from to find the letters
        number_count.push(number);  // put our numbers in our array to use later
    }

    var firstLetterIndex = number - 259;                // subtract to find the index of the first letter
    firstLetterIndex = Math.round(firstLetterIndex);    // round off
    originalstring += letters[firstLetterIndex];        // rebuild our string
    number  = Math.round(number);                       // round off

    var counter = 4;
    for (var j = 0; j < 5; j++){                    //loop through and build the main part of our string

        number = number * 37;
        var letterIndex = number_count[counter] - number;     //generate index of our letter
        letterIndex = Math.round(letterIndex);
        originalstring += letters[letterIndex];             //get the letter
        //number += letterIndex;
        number = Math.round(number) + letterIndex;          //round and add so we can get to the next number check point
        counter--;                                          //move the counter
    }

    number = number * 37;
    var LastLetterIndex = originalNumber - number;          //generate index of last letter
    LastLetterIndex = Math.round(LastLetterIndex);          //get the last letter
    originalstring += letters[LastLetterIndex];             // finish building our string

    console.log(originalstring);
    console.log(number + LastLetterIndex);
}


function assignment3(str) {
    var h = 7;
    var letters = ["a","c","d","e","g","i","l","m","n","o","p",
        "r","s","t","u","w"];
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        var index = letters.indexOf(letter);
        h = (h * 37) + index;  // 259 + (0 to 15 )
    }
    console.log(h);
    return h;
                // l = 265, e = 9808, e = 362,899 p = 13,427,273 d = 496809103 a = 18381936811  g = 680131662011
    // number_count index         4          3              2               1              0
}

// 37 * 7 = 259
// leepdag produces 680131662011
// number to decode 667734139064

assignment3("leepdag");
reverseHash(667734139064);
assignment3("correct");
