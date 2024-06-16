//RETURNING A VALUE USING A FUNCTION
function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
;
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Pune", "India"));
console.log(city_country("Hong Kong", "China"));
