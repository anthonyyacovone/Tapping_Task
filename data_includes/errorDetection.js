/* Set the trial sequence for the experiment below 

1. SetCounter = iteratively increases the list by one when someone opens the experiment, can result in uneven lists if many people open the study at the same time
2. Consent through Welcome = html pages, uploaded to chunk_includes on main page, then specified as "items" below
3. no_error_Audio = audio file example for participants, this has no errors for them to detect in it. This will be different for tapping and could be a practice trial
4. startsWith("coco-List") = alternates between list 1 and list 2 because of how the item is specified below
5. debrief, exit = html pages, same as above

*/

var shuffleSequence = seq("setcounter","consent","demo","welcome","no_error_Audio",startsWith("coco-List"),"debrief", "exit");

// This chunk of code sets some default parameters for Ibex-specific controllers (or widget-things)

var defaults = [
    "Message", {
        hideProgressBar: true 
    },
    "AY_Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    },
    "Form", {
        hideProgressBar: true,
    },
];

    
// This chunk of code defines all of the item variables, including the intro and consent and exit screens. For within-subjects designs, use the syntax for coco-List1 and
// coco-List2. They both have different "tags" that start with "coco" but they have the same item number "1". See below.    
    
    
var items = [
      
    ["setcounter", "__SetCounter__", { }],
    ["welcome", "Form", {hideProgressBar: true, countsForProgressBar: false,  continueOnReturn: true, consentRequired: true, continueMessage:null, html: {include: "welcome.html"}} ],
    ["exit", "Form", {consentRequired: false, continueMessage:"Click here to submit your HIT!", html: {include: "exit.html"}} ],
    ["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, consentRequired: true, html: {include: "consent_2019.html"}} ],
    ["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, continueOnReturn: true, consentRequired: true, continueMessage:null, html: {include: "debrief_harvard.html"}} ],
    ["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "demographics.html"}} ],

    // Play the beginning of the story that has no errors (serves as an example of the audio without errors)
    ["no_error_Audio", "AY_Form", {html: { include: "coco_noErrors.html" }} ],

    // Play either List 1 or List 2 with the errors from the original syntactic category violation study
    [["coco-List1", 1], "AY_Form", {html: { include: "cocoList1.html" }} ],
    [["coco-List2", 1], "AY_Form", {html: { include: "cocoList2.html" }} ],

];
