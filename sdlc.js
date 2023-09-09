// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Planning
// Analysis of Requirements
// Design
// Implementation
// Testing & Integration
// Maintain

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/

let sdlc = [
  "Planning",
  "Analysis of Requirements",
  "Design",
  "Implementation",
  "Testing & Integration",
  "Maintain",
];

let planning =
  "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.";

let analysisOfRequirements =
  "The second step, people who will actually be using and relying on the software are consulted.  In this step, you're trying to get an answer to the question: 'What is required of the software to actually meet their needs/requirements?'";

let design =
  "This third step is where the sofware is 'designed'.  This includes the both the back end and front end.  How the various parts of code will interact, how data will be stored, as well as what the user sees.  ";

let implementation =
  "When I think of coding, this is what I think of.  This is the part where you take all your planning and design, and actually build the product.  The UI, the database, the logic.  This is where is all happens.";

let testingAndIntegration =
  "This is the step where you discover all the mistakes you didn't know you made.  It's where you test the product thouroughly, in every use case you can think of, passing data to and from it with every other product you think your users will try.  It's where you get the product into a another human's hands and have them test it.  It really sounds humbling.";

let maintain =
  "This final step in the SDLC sounds boring, but it means more than 'continued support for new operating systems'.  It can also refer to exciting new features or finally fixing that bug that was deemed acceptable for an MVP.  I think the biggest thing about this is protecting the the reputation of your software and your brand, guaranteeing that things continue to work and improve for a long time.";
