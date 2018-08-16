function charCode(char) // get ascii code of character
{
  asciiCode = char.charCodeAt(0);
  return asciiCode.toString();
}

function encLenCha(str) // main algorithm
{
  w_sum = 0;
  for(ci=0; ci<str.length; ci++)
  {
    char = str[ci];
    w_sum += parseInt(charCode(char));
    w_sum += str.length*w_sum.toString().length;
    w_sum *= ci+Math.E
    w_sum *= ci+1337;
    w_sum /= (charCode(char)+94);
    w_sum -= Math.sin(str.length)*888582;
    w_sum += ci*529;
    w_sum *= Math.PI*Math.sin(ci+998432);
    w_sum += parseInt(w_sum.toString()+"4")
  }
  absVal = Math.abs(w_sum);
  noDot = absVal*(Math.pow(10, absVal.toString().length-1));
  return noDot.toString().split("e+").join('').split(".").join('');
}

function mklen(str,lenSelected) // making length constant
{
  proto0 = encLenCha(str);
  proto1 = encLenCha(proto0);
  str = proto0.toString()+proto1.toString();
  strParse = '';
  for(char=0; char<lenSelected; char++) strParse+=str[char];
  return strParse;
}

function secEQ(str,characters) // reverse + character selection
{
  strParse = '';
  for(i=str.length-1; i>=0; i--)
  {
    strParse+=characters[parseInt(str[i])];
  }
  return strParse;
}

function singleEncrypt(str, len, chrz = '1236895470',salt = 'kip2018',check=null) // basic encryption
{
  let ncr = secEQ(mklen(encLenCha(str).toString(16),len),chrz)
  + secEQ(mklen(encLenCha(str+salt.toString()).toString(16),len),chrz);
  if (check===null) return ncr;
  else return check == ncr;
}

function Encryptor() // encryptor function for OOP
{
  this.last = null; // last string used
  this.lastR = null; // last return
  this.lastS = null; // last settings
  this.encr = function(str,len,chrz='1236895470',salt,check=null)
  {
    this.last = str;
    this.lastR = singleEncrypt(str,len,chrz,salt);
    this.lastS = str+";;"+len+";;"+chrz+";;"+salt;
    return this.laste;
  }
  return this;
}
