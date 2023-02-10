module.exports = function check(str, bracketsConfig) {
  let result;
  let newString;
  numOfBracketTypes = bracketsConfig.length;
  
  function search(string, element) {
      newString = string;
      if (newString.includes(element)) {
          newString = newString.replaceAll(element, '');
          return result = search(newString, element);
      } else {
          if (string.length === 0) {
              return result = true;
          } else {
              return result = false;
          }
      }
  }
  if (numOfBracketTypes === 1) {
      const searchElement1 = bracketsConfig[0][0] + bracketsConfig[0][1];
      if(searchElement1 === '||') {
        str = str.replaceAll('||', '')
      }
      search(str, searchElement1);
  }

  if (numOfBracketTypes === 2) {
      const searchElement1 = bracketsConfig[0][0] + bracketsConfig[0][1];
      const searchElement2 = bracketsConfig[1][0] + bracketsConfig[1][1];
      if(searchElement1 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement2 === '||') {
        str = str.replaceAll('||', '')
      }
      search(str, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement2);
  }

  if (numOfBracketTypes === 3) {
      const searchElement1 = bracketsConfig[0][0] + bracketsConfig[0][1];
      const searchElement2 = bracketsConfig[1][0] + bracketsConfig[1][1];
      const searchElement3 = bracketsConfig[2][0] + bracketsConfig[2][1];
      if(searchElement1 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement2 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement3 === '||') {
        str = str.replaceAll('||', '')
      }
      search(str, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
  }
  if (numOfBracketTypes === 4) {
      const searchElement1 = bracketsConfig[0][0] + bracketsConfig[0][1];
      const searchElement2 = bracketsConfig[1][0] + bracketsConfig[1][1];
      const searchElement3 = bracketsConfig[2][0] + bracketsConfig[2][1];
      const searchElement4 = bracketsConfig[3][0] + bracketsConfig[3][1];
      if(searchElement1 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement2 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement3 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement4 === '||') {
        str = str.replaceAll('||', '')
      }
      search(str, searchElement4);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement4);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement4);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
  }
  if (numOfBracketTypes === 5) {
      const searchElement1 = bracketsConfig[0][0] + bracketsConfig[0][1];
      const searchElement2 = bracketsConfig[1][0] + bracketsConfig[1][1];
      const searchElement3 = bracketsConfig[2][0] + bracketsConfig[2][1];
      const searchElement4 = bracketsConfig[3][0] + bracketsConfig[3][1];
      const searchElement5 = bracketsConfig[4][0] + bracketsConfig[4][1];
      if(searchElement1 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement2 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement3 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement4 === '||') {
        str = str.replaceAll('||', '')
      }
      if(searchElement5 === '||') {
        str = str.replaceAll('||', '')
      }
      search(str, searchElement5);
      search(newString, searchElement4);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement5);
      search(newString, searchElement4);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
      search(newString, searchElement5);
      search(newString, searchElement4);
      search(newString, searchElement3);
      search(newString, searchElement2);
      search(newString, searchElement1);
  }

  return result;
}