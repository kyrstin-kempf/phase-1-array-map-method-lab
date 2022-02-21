const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(element => element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
  )
}

// const titleCased = () => {
//   return tutorials;
// }

//--WITHOUT .MAP
// const newTitles = [];

// for(const titles of tutorials) {
//   newTitles.push('Title:' + titles);
// }

//--.MAP TELLS OTHERS A NEW ARRAY IS CREATED WITH MODS
// function titleNames(titles) {
//   return 'Title:' + titles;
// }
// const newTitles = tutorials.map(titleNames);

//--ANON FUNCTION
// const newTitles = tutorials.map(function (titles) {
//   return 'Title:' + titles;
// })

//--CLEAN UP ANON FUNCTION
// const newTitles = tutorials.map((titles) => 'Title:' + titles);

