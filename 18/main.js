var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//PLACES I WOULD LIKE TO VISIT
var places = ["Dubai", "Paris", "London", "Japan", "Turkey"];
//ORIGINAL ORDER OF THE ARRAY
console.log("Original Order:", places);
//ALPHABETICAL ORDER OF THE ARRAY
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
//THE ARRAY IS STILL IN IT'S ORIGINAL ORDER
console.log("Original Order:", places);
//REVERSE ALPHABETICAL ORDER OF THE ARRAY
console.log("Reverse Alphabetical Order:", __spreadArray([], places, true).reverse());
//THE ARRAY IS STILL IN IT'S ORIGINAL ORDER
console.log("Original Order:", places);
//NOW REVERSING THE ORIGINAL ARRAY
console.log("Reverse Order:", places.reverse());
//THE ORDER OF THE ORIGINAL ARRAY IS CHANGED NOW
console.log("Order is changer now:", places);
//CONVERTING THE CHANGED ORDER BACK INTO IT'S ORIGINAL ORDER
console.log("Back to Original:", places.reverse());
//NOW CHANGING THE ORIGINAL ARRAY INTO ALPHABETICAL ORDER
console.log("Changes into Alphabetical Order:", places.sort());
//THE ORDER OF THE ORIGINAL ARRAY IS AGAIN CHANGED NOW
console.log("Original Order is Changed now:", places);
//NOW CHANGING THE ORIGINAL ARRAY INTO REVERSE ORDRE
console.log("Changed in Reverse Order:", places.reverse());
//THE ORDER OF THE ORIGINAL ARRAY IS AGAIN CHANGED NOW
console.log("Original Order is Changed now:", places);
