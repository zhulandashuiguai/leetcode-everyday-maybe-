/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    s = s.replaceAll(' ','%20')
    return s
 };

//
var replaceSpace = function(s) {
    s = s.split(' ')
    return s.join('%20')
 };