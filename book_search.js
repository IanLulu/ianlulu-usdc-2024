/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    result.SearchTerm = searchTerm;

    // loop through scannedTextObj
    for (var i = 0; i < scannedTextObj.length; i++) {
        var obj = scannedTextObj[i];

        // loop through "Content" array
        for (var j = 0; j < obj.Content.length; j++) {
            var content = obj.Content[j];

            // checks if searchTerm is in Text field
            if (content.Text.includes(searchTerm)) {
                // if true, pushes to "Results" array in JSON object
                result.Results.push(
                    {
                        "ISBN": obj.ISBN,
                        "Page": content.Page,
                        "Line": content.Line
                    }
                );
            }
        }
    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** my tests **/
// negative tests - should not return any matches
const test3result = findSearchTermInBooks("Ness", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test3result)) {
    console.log("FAIL: Test 3");
    console.log("Expected: no matching results");
    console.log("Received:", test3result)
} else if (JSON.stringify(twentyLeaguesOut) != JSON.stringify(test3result)) { // should pass if search result did not return any matches
    console.log("PASS: Test 3");
}

// positive tests - should return a match
const test4result = findSearchTermInBooks("and", twentyLeaguesIn);
if (test4result.Results.length == 2) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected: 2");
    console.log("Received:", test4result.Results.length);
}

// case sensitive tests - should match on i.e. "The" but not "the"
const test5result = findSearchTermInBooks("The", twentyLeaguesIn); 
if (test5result.Results.length == 1) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected: 1");
    console.log("Received:", test5result.Results.length);
}

const test5aresult = findSearchTermInBooks("canadian", twentyLeaguesIn); 
if (test5aresult.Results.length == 0) {
    console.log("PASS: Test 5a");
} else {
    console.log("FAIL: Test 5a");
    console.log("Expected: 0");
    console.log("Received:", test5aresult.Results.length);
}

/* edge cases - more complex circumstances. Trying to predict user behavior */
// search with a phrase rather than a word
const test6result = findSearchTermInBooks("her own momentum", twentyLeaguesIn); 
if (test6result.Results.length == 1) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected: 1");
    console.log("Received:", test6result.Results.length);
}

// search with an empty search term
const test7result = findSearchTermInBooks("", twentyLeaguesIn);
if (test7result.Results.length == 0) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected: 0");
    console.log("Received:", test7result.Results.length); // hmmm it returns 3. I can't seem to find how it got that. There are two spaces before "The dark-". It's not counting spaces because there are more than 3...
}

// search with an empty JSON text object

// search with different language's alphabet i.e. Japanese, Arabic, etc.

// test search's character limit for overflow

// test search for weird characters like the null character in place of the space character when searching for phrases
