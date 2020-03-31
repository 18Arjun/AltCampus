# Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
  var vowelsCount = 0;
  vlist = 'aeiouAEIOU';
  
  for (var i=0; i<str.length; i++)
  {
    if(vlist.indexOf(str[i]) !==-1)
    {
      vowelsCount +=1;
    }
  }  
  return vowelsCount;
}
console.log(getCount('Arjun'));
