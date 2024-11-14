// camelCasing
// Feel free to change the function input so you
// can see how the function camel-cases the input you give it!

// Example inputs:
camelize("I like camels");
camelize("camelize-me-please");

// Try your examples below!
camelize("hey there! whats up");
camelize("ALL good");

// DO NOT MODIFY THE FUNCTION BELOW
// Function for camelizing the input.
function camelize(text) {
    let camelizedText = text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset)
                                                              {
                                                                if (p2) return p2.toUpperCase();
                                                              });
    console.log(camelizedText);
}