// Program 1
function strLength(){
    let str="I love Pakistan!";
    let length=str.length;
    document.getElementById("length").innerHTML=`Length of the string is: ${length}`;
}
strLength();

// Program 2
function copyStr(){
    let strToCopy="I am Umair Shahzad";
    let copied ="" + strToCopy;
    
    document.getElementById("copied").innerHTML=copied;
}
copyStr();

// Program 3
function strConcatination(){
    let str1="I am a student of Mobile app and web developement";
    let str2="at Saylani Mass IT Training Program."
    let resultedStr=`${str1} ${str2}`;
    document.getElementById("resultedStr").innerHTML=resultedStr;
}
strConcatination();

// Program 4
function strComparison(){
    let str1="Str1 is the first string to be compared with str2.";
    let str2="It is the second string to be compared."
    if(str1.length > str2.length){
        document.getElementById("resultAfterComparison").innerHTML=`Length of string one is greater than second string by ${str1.length - str2.length} characters.`
    }else{
        document.getElementById("resultAfterComparison").innerHTML=`Length of string two is greater than first string by ${str2.length - str1.length} characters.`
    }
}
strComparison();

// Program 5
function strToUppercase(){
    let str="String to be converted into uppercase";
    let strInUppercase=str.toUpperCase();
    document.getElementById("resultAfterConversion").innerHTML=strInUppercase;

}
strToUppercase();

// Program 6
function firstLeterToUppercase(){
    let text=document.getElementById("txt").value;
    let result=text.charAt(0).toUpperCase() + text.slice(1);
    
    document.getElementById("resultAfterFirstLetterConversion").innerHTML=result;
}

// Program 7
function capitalizedEveryLetter(){
    let text=document.getElementById("txt1").value;
    let arr=text.split(" ");
    for(let i=0; i<arr.length; i++){
         arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let text1=arr.join(" ");
    document.getElementById("resultedString").innerHTML=text1;
}

// Program 8
function strToLowercase(){
    let str=document.getElementById("txtToLowercase").value;
    let strInLowercase=str.toLowerCase();
    document.getElementById("resultLowercase").innerHTML=strInLowercase;

}

// Program 9
function toggleCase(){
    let input=document.getElementById("txtToToggle").value;
    let arr=input.split("");
    let arr1=[];
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i].toUpperCase()){
            arr1.push(arr[i].toLowerCase());
        }else{
            arr1.push(arr[i].toUpperCase());
        }
    }
    let text=arr1.join("");
    document.getElementById("resultOfToggle").innerHTML=`Input after applying toggle case: ${text}`;
}
let text23="hgsh4665$%%";
let arr23=text23.indexOf(4);
console.log(arr23);
console.log(typeof(arr23[5]));

// Program 10
function totalCount(){
    let input=document.getElementById("totalCount").value;
    let countAlphabet=0;
    let countNumber=0;
    let countSpecialChar=0;
    for(let i=0; i<input.length; i++){
        if((input[i] >= "a" && input[i] <= "z") || (input[i] >= "A" && input[i] <= "Z")){
            countAlphabet++;
        }else if(input[i] >= "0" && input[i] <=9){
            countNumber++;
        }else{
            countSpecialChar++;
        }
    }
    document.getElementById("resultAlpha").innerHTML=`Number of Alphabets are: ${countAlphabet}`;
    document.getElementById("resultNum").innerHTML=`Number of Integers are: ${countNumber}`;
    document.getElementById("resultSpecial").innerHTML=`Number of Special Characters are: ${countSpecialChar}`;

}

// Program 11
function CountVowelConsonent(){
    let input=document.getElementById("txtVowel").value;
    let countConsonent=0;
    let countVowel=0;
    for(let i=0; i<input.length; i++){
        if(input[i]=="a" || input[i]=="e" || input[i]=="i" || input[i]=="o" || input[i]=="u"){
            countVowel++;
        }else{
            countConsonent++;
        }
    }
    document.getElementById("resultingVowel").innerHTML=`Number of vowels are: ${countVowel}`;
    document.getElementById("resultingConsonent").innerHTML=`Number of vowels are: ${countConsonent}`;
}

// Program 12
function CountTotalNumOfWords(){
    let input=document.getElementById("txtWords").value;
    let arrOfWords=input.split(" ");
    let numberOfWords=arrOfWords.length;
    document.getElementById("numberOfWords").innerHTML=`Total Number of words in the text are: ${numberOfWords}`;
}

// Program 13
function reverseOfStr(){
    let input=document.getElementById("txtReverse").value;
    let arr=input.split("");
    let arr1=[];
    for(let i=arr.length-1; i>=0; i--){
        arr1.push(arr[i]);
    }
    let reverseText=arr1.join("");
    document.getElementById("reverseStr").innerHTML=`Reverse Of String is: ${reverseText}`;
}

// Program 14
function palindromeStr(){
    let input=document.getElementById("txtPal").value;
    let arr=input.split("");
    let length=input.length;
    for(let i=0; i<=length/2; i++){
        for(let j=arr.length-1-i; j>=arr.length-1-i; j-- ){
            if(arr[i] === arr[j]){
                document.getElementById("palindromeStr").innerHTML=`String <b>"${input}"</b> is Palindrome.`
                
            }else{
                document.getElementById("palindromeStr").innerHTML=`String <b>"${input}"</b> is Not Palindrome.`
            }
            
        }
    }
}

// Program 15
function reverseWords(){
    let input=document.getElementById("reverseWords").value;
    let arr=input.split(" ");
    let arr1=[];
    for(let i=arr.length-1; i>=0; i--){
        arr1.push(arr[i]);
    }
    let reverseOrder=arr1.join(" ");
    document.getElementById("reverseWordStr").innerHTML=`Words of string in reverse order:${reverseOrder} `;
}

// Program 16
function firstOccurrence(){
    let input=document.getElementById("inputChar").value;
    let str="Change the world by being yourself!";
    let index=str.indexOf(input);
    document.getElementById("indexOfOccur").innerHTML=`Character '${input}' first occur at index: ${index}`;

}

// Program 17
function lastOccurrence(){
    let input=document.getElementById("inputCharForLast").value;
    let str="Change the world by being yourself!";
    let index=str.lastIndexOf(input);
    document.getElementById("indexOfLastOccur").innerHTML=`Character '${input}' first occur at index: ${index}`;

}

// Program 18
function allOccurrence(){
    let input=document.getElementById("inputCharForAll").value;
    let str="Change the world by being yourself!";
    let indexes=[];
    for(let i=0; i<str.length; i++){
        if(str[i] === input){
            indexes.push(i);
        }
    }
    document.getElementById("indexesOfAllOccur").innerHTML=`'${input}' Occure at indexes: ${indexes}`;
}

//Program 19
function frequencyOfChar(){
    let input=document.getElementById("countCharFreq").value;
    let str="Change the world by being yourself!";
    let arr=str.split("");
    let freqCounter=0;
    for(let i=0; i<arr.length; i++){
        if(str[i] == input){
             freqCounter++;
        }
    }
    document.getElementById("frequencyOfChar").innerHTML=`Frequency of Character '${input}' is: ${freqCounter} `;

}

// Program 20

function getFrequency(str) {
    var freq = [];
    for (var i=0; i<str.length;i++) {
        var character = str.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
console.log(getFrequency("Change the world by being yourself!"))

// Program 21
function removingFirstOccurrenceOfELe(){
    let input=document.getElementById("charToRemoveFromFirst").value;
    let str="Change the world by being yourself!";
    let arr=str.split("");
    let index=arr.indexOf(input);
        arr.splice(index,1);
    let text=arr.join("");
    document.getElementById("indexOfRemoveFirst").innerHTML=`String after removing first occurring element: ${text}`;
}

// Program 22
function removingLastOccurrenceOfELe(){
    let input=document.getElementById("charToRemoveFromLast").value;
    let str="Change the world by being yourself!";
    let arr=str.split("");
    let index=arr.lastIndexOf(input);
    let arr1=arr.splice(index,1);
    let text=arr.join("");
    document.getElementById("indexOfRemoveLast").innerHTML=`String after removing Last occurring element: ${text}`;
}

// Program 23
function removeAllOccurrences(){
    let input=document.getElementById("inputCharToRemoveAll").value;
    let str="Change the world by being yourself!";
    let arr=str.split("");
    for(let i=0; i<arr.length; i++){
        if(arr[i] === input){
            arr.splice(i,1);
        }
    }
    let str1=arr.join("");
    document.getElementById("indexesOfAllOccurToRemove").innerHTML=`'After Removing ${input} from all occurrence: ${str1}`;
}

// Program 24
function toRemoveAllRepeatedChar(){
    let str=document.getElementById("removeRepeatedChar").value;
    let arr=str.split("");
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<i; j++){
            if(arr[i]==arr[j]){
                
            arr.splice(i,1);
            }
        }
    }
    let str1=arr.join("")
    document.getElementById("removeRepeatedCharResult").innerHTML=str1;
}

// Program 25
function toReplaceStringFirstOccurrence(){
    let input=document.getElementById("pointString").value;
    let input1=document.getElementById("replaceString").value;
    let str="Change the world by being yourself!";
    let arr=str.split("");
    let index=arr.indexOf(input);
    let arr1=arr.splice(index,1,input1 );
    let text=arr.join("");
    document.getElementById("stringReplaceFirst").innerHTML=`String after replacing first occurring element: ${text}`;
}

// Program 26
function toReplaceStringLastOccurrence(){
    let input=document.getElementById("pointStringLast").value;
    let input1=document.getElementById("replaceStringLast").value;
    let str="Change the world by being yourself!";
    let arr=str.split("");
    let index=arr.indexOf(input);
    let arr1=arr.splice(index,1,input1 );
    let text=arr.join("");
    document.getElementById("stringReplaceLast").innerHTML=`String after replacing Last occurring element: ${text}`;
}

// Program 27
function replacingAllOccurrence(){
    let input=document.getElementById("pointStringAll").value;
    let input1=document.getElementById("replaceStringAll").value;
    let str="Change the world by being yourself!";
    let arr=str.split("");
    for(let i=0; i<arr.length; i++){
        if(arr[i] == input){
           arr[i]=input1;
        }
    }
    let text=arr.join("");
    document.getElementById("stringReplaceAll").innerHTML=`'"${input}" after replacing from all occurrences: ${text}`;

    
}

// Program 28
function findFirstOccurrenceOfword(){
    let str="Change the world by being yourself!";
    let input=document.getElementById("wordOccur").value;
    let index=str.indexOf(input);
    document.getElementById("indexOfWord").innerHTML=`"${input}" First Occur at index: ${index}`;
}

// Program 29
function findLastOccurrenceOfword(){
    let str="Change the world by being yourself!";
    let input=document.getElementById("wordOccurLast").value;
    let index=str.lastIndexOf(input);
    document.getElementById("indexOfWordLast").innerHTML=`"${input}" Last Occur at index: ${index}`;
}

// Program 30
function findAllOccurrenceOfword(){
    let inputString=document.getElementById("inputString").value;
    let arr=inputString.split(" ");
    let word=document.getElementById("inputWordToFind").value;
    let countWord=0;
    let arr1=[];
    for(let i=0; i<arr.length; i++){
        if(word == arr[i]){
            countWord++;
            arr1.push(i);
        }
    }
    document.getElementById("wordAllOccurrence").innerHTML=`"${word}" occur in string "${countWord}" number of times at indexes "${arr1}".`
}
 
// Program 31
function removeFirstOccurrenceOfWord(){
    let inputString=document.getElementById("inputStringFirstOccurRemove").value;
    // let inputString="Change the world by being yourself!"
    let arr=inputString.split(" ");
    let word=document.getElementById("inputWordToRemoveFirst").value;
    let index=arr.indexOf(word);
        arr.splice(index, 1)
    let text=arr.join(" ");
    document.getElementById("wordFirstOccurrenceRemoval").innerHTML=`String after <b>"${word}"</b> first Occurrence removal: ${text}`
}

// Program 32
function removeLastOccurrenceOfWord(){
    let inputString=document.getElementById("inputStringLastOccurRemove").value;
    // let inputString="Change the world by being yourself!"
    let arr=inputString.split(" ");
    let word=document.getElementById("inputWordToRemoveLast").value;
    let index=arr.lastIndexOf(word);
        arr.splice(index, 1)
    let text=arr.join(" ");
    document.getElementById("wordLastOccurrenceRemoval").innerHTML=`String after <b>"${word}"</b> Last Occurrence removal: ${text}`
}

// Program 33
function removeAllOccurrenceOfword(){
    let inputString=document.getElementById("inputStringToRemoveAll").value;
    let arr=inputString.split(" ");
    let word=document.getElementById("inputWordToRemoveAll").value;
    let indexes=[];
    for(let i=0; i<arr.length; i++){
        if(word==arr[i]){
            arr.splice(i,1);
            indexes.push(i);
        }
    }
    let text=arr.join(" ");
    document.getElementById("removeWordAllOccurrence").innerHTML=`Specific word <b>"${word}"</b> removing from all indexes "${indexes}": ${text}`
}

// Program 34

function toRemoveLeadingWhiteSpaces(){
    console.log("Program To remove Leading White Spaces.")
    let str="     Hello, hope you are doing fine!"
    console.log(str);
    let strLeading=str.trimLeft();
    console.log(strLeading);

}
toRemoveLeadingWhiteSpaces();

// Program 35

function toRemoveTrailingWhiteSpaces(){
    console.log("Program To remove Trailing White Spaces.")
    let str="Hello, hope you are doing fine!       ";
    console.log(str);
    let strTrailing=str.trimRight();
    console.log(strTrailing);

}
toRemoveTrailingWhiteSpaces();

// Program 36

function toRemoveBothSideWhiteSpaces(){
    console.log("Program To remove Leading and Trailing White Spaces.")
    let str="       Hello, hope you are doing fine!        ";
    console.log(str);
    let strBoth=str.trim();
    console.log(strBoth);

}
toRemoveBothSideWhiteSpaces();

// Program 37
function toRemoveAllExtraSpaces(){
    let str="    Hello  Pakistan    what  is going on   :"
    console.log(str);
    let str1=str.replace(/ +/g, " ");
    console.log(str1);
}
toRemoveAllExtraSpaces();

function removeExtra(){
    let str="    Hello  Pakistan    what  is going on   :";
    let arr=str.split("");
    let arr1=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == " " ){
            arr1.push(arr[i]);
        }
    }
    let text=arr1.join(" ");
    console.log(text);
}
removeExtra();

//Object Programs

// Program 1
let student={
    name: "Umair Shahzad",
    rollNo:5164,
    section:"C",
    ClassTiming:"6 To 8"
}
function printObjectPrperties(){
    document.getElementById("objProperties").innerHTML=`Object Properties are: ${Object.keys(student)}`;
}

//Program 2
console.log(student);
function delObjProp(){
    delete student.rollNo;
    console.log("Object after deletion of Roll Number",student);
}

// Program 3
function findLengthOfObj(){
    let objLength=Object.keys(student).length;
    document.getElementById("objLength").innerHTML=`Size of Object is : ${objLength}`;
}

// Program 4
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        
    }];
    console.log(library[0].author);
    function checkBookReadStatus(){
        for(let i=0; i<library.length; i++){
            var book=`"${library[i].title}" by "${library[i].author} "`
            if(library[i].readingStatus){
                document.getElementById("bookStatus").innerHTML +=(`Already Read ${book}<br>`)
            }else{
                document.getElementById("bookStatus").innerHTML +=(`Pending to read ${book}`)
            }
        }
    }

// Program 5
function calVolOfCylinder(){
    let h=document.getElementById("height").value;
    let r=document.getElementById("radius").value;
    const pie=3.14;
    let volume=pie*(r*r)*h;
    document.getElementById("cylinderVol").innerHTML=`Cylinder Volume is : ${volume.toFixed(4)}`;
}
    
// Program 6
function bubbleSortArray(){
    let arr=[7,4,9,-4,-1,3,5,1,0];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<(arr.length-i-1); j++){
            if(arr[j]>arr[j + 1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    document.getElementById("sortedArray").innerHTML=`Sorted Array: ${arr}`;
}

// Program 7
function subSetOfString(){
    let str=document.getElementById("subSetString").value;
    let subSet=[];
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length+1; j++ ){
            subSet.push(str.slice(i,j));
        }
    }
    document.getElementById("resultingSubset").innerHTML=`Subsets of String are: ${subSet}`;
}

// Program 8
function clock(){
    setInterval(() => {
    let date= new Date();
    let hr=date.getHours();
    let mint=date.getMinutes();
    let sec=date.getSeconds();
    let time=`${hr}:${mint}:${sec}`;
    console.log(time);
}, 1000);
}

// Program 9
function cal_Area_Perimeter_cicle(){
    let r=document.getElementById("inpCircleRadius").value;
    const pie=3.14;
    let area=pie*(r*r);
    let peri=2*pie*r;
    document.getElementById("circleRadius").innerHTML=`Radius Of circle is: ${area}`
    document.getElementById("circlePerimeter").innerHTML=`Perimeter Of Circle is :${peri}`;
}

//Program 10
var libraryToSort = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
function sortingArrayOfObj(){
        
        let index=libraryToSort[0];
        libraryToSort.shift();
        libraryToSort.push(index);
        console.log(libraryToSort);
    }

    // Program 11
    function returnObjMethod(obj){
        return Object.keys(obj).filter((key)=> typeof(obj)== "function")
    }
    console.log(returnObjMethod(library));

    // Program 12
    function urlParsing(){
        let url=document.getElementById("url").value;
        let parser=new URL(url);
        document.getElementById("parsingResult").innerHTML +=`Protocol used in URL is: ${parser.protocol} <br>`;
        document.getElementById("parsingResult").innerHTML +=`Host of the URL: ${parser.host} <br>`;
        document.getElementById("parsingResult").innerHTML +=`Port in the URL is: ${parser.port} <br>`;
        document.getElementById("parsingResult").innerHTML +=`Host Name in the URL is: ${parser.hostname} <br>`;
        document.getElementById("parsingResult").innerHTML +=`Search in the URL is: ${parser.search} <br>`;

    }

    // Program 17
    let objHasProp={
        firstName: "Umair",
        lastName:"Shahzad",
        id: 5164,
        section: "C"
    }
    function hasProperty(){
        let enteredProp=document.getElementById("propName").value;
        if(objHasProp.hasOwnProperty(enteredProp)){
            document.getElementById("propResult").innerHTML=`Object Own "${enteredProp}" property.`
        }else{
            document.getElementById("propResult").innerHTML=`Object Not own "${enteredProp}" property .`
        }
    }



 // conditional operators programming exercises

// Program 1
function compareNum(){
    let inputOneForComp2=document.getElementById("inp1").value;
    let inputTwoForComp2=document.getElementById("inp2").value;
    if(inputOneForComp2>inputTwoForComp2){
        document.getElementById("max").innerHTML=`Input value one "${input1}" is greater. `
    }else{
        document.getElementById("max").innerHTML=`Input value two "${input2}" is greater. `
    }

}

// Program 2
function compareNum3(){
    let inputOneForComp3=document.getElementById("inpForThree1").value;
    let inputTwoForComp3=document.getElementById("inpForThree2").value;
    let inputThreeForComp3=document.getElementById("inpForThree3").value;
    if(inputOneForComp3 > inputTwoForComp3 && inputOneForComp3 > inputThreeForComp3){
        document.getElementById("max3").innerHTML=`Input value one "${inputOneForComp3}" is greater than two and three. `
    }else if(inputOneForComp3 < inputTwoForComp3 && inputTwoForComp3 > inputThreeForComp3){
        document.getElementById("max3").innerHTML=`Input value two "${inputTwoForComp3}" is greater than one and three. `
    }else if(inputOneForComp3 < inputThreeForComp3 && inputTwoForComp3 < inputThreeForComp3){
        document.getElementById("max3").innerHTML=`Input value three "${inputThreeForComp3}" is greater than one and two. `
    }else{
        document.getElementById("max3").innerHTML=`All values are equal. `
    }

}

// Program 3
function checEvenOrOdd(){
    let inpToCheckEO=document.getElementById("inpForCheck").value;
    if(inpToCheckEO % 2 ==0){
        document.getElementById("resultEO").innerHTML=`Entered Number "${inpToCheckEO}" is Even.`
    }else if(inpToCheckEO % 2 ==1){
        document.getElementById("resultEO").innerHTML=`Entered Number "${inpToCheckEO}" is Odd.`
    }
}

// Program 4
function leapYearCheck(){
    let year=document.getElementById("chkLeapYear").value;
    if((year % 4==0 ) && (year % 100 !=0 || year % 400 ==0)){
        document.getElementById("resultingYear").innerHTML=`"${year}" is a leap year.`;
    }else{
        document.getElementById("resultingYear").innerHTML=`"${year}" is not a leap year.`;
    }
}

// Program 5
function checkChar(){
    let char=document.getElementById("chkChar").value;
    if((char >= "a" && char<="z") || (char >= "A" && char<="Z")){
        document.getElementById("resultingChar").innerHTML=`Entered character "${char}" is an Alphabet.`
    }else{
        document.getElementById("resultingChar").innerHTML=`Entered character "${char}" is Not an Alphabet.`
    }
}

// List of switch case programming exercises
// Program 1
function checkWeekDay(){
let day;
switch(new Date().getDay()){
    case 0:
        day="Sunday";
        break; 
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday"; 

} 
document.getElementById("weekDay").innerHTML=`Day of the week is: ${day}`;
}

// Program 2
function countNumOfDay(){
let days;
switch(new Date().getMonth()){
    case 0:
        days=31;
        break; 
    case 1:
        days=28;
        break;
    case 2:
        days=31;
        break;
    case 3:
        days=30;
        break;
    case 4:
        days=31;
    case 5:
        days=30;
        break;
    case 6:
        days=31;
        break;
    case 7:
        days=31;
        break;
    case 8:
        days=30;
        break;
    case 9:
        days=31;
        break;
    case 10:
        days=30;
    case 11:
        days=31;      
}
document.getElementById("days").innerHTML=`Number of Days in this Month is: ${days}`;
}

// Program 3
function checkingAlphabet(){
let alphabet;
let input=document.getElementById("inpCheckAO").value;
switch(input){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        alphabet="Vowel";
        break;
    default:
        alphabet="Consonant";
        
}
document.getElementById("checkCharAO").innerHTML=`Input character "${input}" is: ${alphabet}. `
}

//Program 4
function compareNumSwitch(){
    let maximumSwitch;
    let switchInput1=document.getElementById("inpSwitch1").value;
    let switchInput2=document.getElementById("inpSwitch2").value;
    switch(true){
        case (switchInput1>switchInput2):
            maximumSwitch=switchInput1;
            break;
        case (switchInput1<switchInput2):
            maximumSwitch=switchInput2;

    }
    document.getElementById("maxSwitch").innerHTML=`Input value ${maximumSwitch} is greater. `

}

// Program 5
function Even_OddS(){
    let sInput3=document.getElementById("sInp3").value;
    let numCheck;
    switch(sInput3 % 2){
        case 0:
            numCheck="Input Number is Even";
            break;
        case 1:
            numCheck="Input Number is Odd";
    }
    document.getElementById("evenOddS").innerHTML=numCheck;
}

// Program 6
function checkNumS(){
    let numToChcek;
    let sInput4=document.getElementById("sInp4").value;
    switch(true){
        case (sInput4>0):
            numToChcek="Number is Positive.";
            break;

        case (sInput4<0):
            numToChcek="Number is Negative.";
            break;

        case (sInput4 == 0):
            numToChcek="Number is zero.";
            break
        default:
            numToChcek="Enter Correct input.";


    }
    document.getElementById("checkingNumS").innerHTML=numToChcek;
}

// Program 7
function quadraticRoots(){
    let root1, root2;
    let a=document.getElementById("numOneS").value
    let b=document.getElementById("numTwoS").value
    let c=document.getElementById("numThreeS").value
    let discr=b * b - 4 *a *c;
    switch(discr > 0){
        case 1:
            root1 = (-b + Math.sqrt(discr)) / (2 * a);
            root2 = (-b - Math.sqrt(discr)) / (2 * a);
            document.getElementById("rootsAre").innerHTML=`Two distinct and Real roots are exists: ${root1}, ${root2}.`
            break;

        case 0:
            switch(discr < 0){
                case 1:
                    let realPart = (-b / (2 * a)).toFixed(2);
                    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
                    document.getElementById("rootsAre").innerHTML=`Two distinct and complex roots are exists: ${realPart}, ${imagPart}i`
                    break;
                
                case 0:
                    root1 = root2 = -b / (2 * a);
                    document.getElementById("rootsAre").innerHTML=`Two equal and Real roots are exists: ${root1}, ${root2}.`
                    break;

            }

    }
}

// Program 8
function calculatorS(){
    let inputCal1=document.getElementById("inpCalS1").value;
    let operator=document.getElementById("operatorS").value;
    let inputCal2=document.getElementById("inpCalS2").value;
    let result;
    switch(operator){
        case "+":
            result=parseInt(inputCal1) + parseInt(inputCal2);
            break;
        case "-":
            result=inputCal1 - inputCal2;
            break;
        case "*":
            result=inputCal1 * inputCal2;
            break;
        case "/":
            result=inputCal1 / inputCal2;
    }
    document.getElementById("resultS").innerHTML=`Result is: ${result}`
}