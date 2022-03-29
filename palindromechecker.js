function palindrome(str) {
    var re = /[\W_]/g;
    var forwardRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = forwardRegStr.split('').reverse().join(''); 
    return (reverseStr === forwardRegStr) ? true : false; 
  }
  
  palindrome("eye");
