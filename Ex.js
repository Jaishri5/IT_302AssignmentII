let events = [
    {                  
    "title" : "Exercise1",
    "link": 'JP01_04L1E1.html',     
    "description":"1.Create a web document that contains the following text:Use h1 for the title,p for text. Insert a horizontal rule between the h1 element and the p element. Open your new document in a web browser to view the marked-up document."           
    },
    {                  
    "title" : "Exercise2",
    "link": 'JP01_04L1E2.html'  ,
    "description":"2.Create a web document containing an ordered list of three items—ice cream, pizza and soft drink. Each ordered list should contain a nested, unordered list of your favourite flavours. Provide three flavours in each unordered list."               
    },
    {
    "title" : "Exercise3",
    "link": 'JP01_11L2E3.html',
    "description":"Create a web page to display a quiz with at least 5 questions"           
    },
    {                  
    "title" : "Exercise4",
    "link": 'JP01_11L2E4.html',
    "description":"4. Create an HTML5 document that uses an image as an e-mail link. Use attribute alt to provide a description of the image and link."
    },
    {                  
    "title" : "Exercise5",
    "link": 'JP01_11L2E5.html',
    "description":"Create an HTML5 document that contains links to your five favourite E-commerce websites. Your page should contain the heading “My Favourite Shopping Web Sites.” Click on each of these links to test your page."                               
    },
    {                  
    "title" : "Exercise6",
"link": 'JP01_15L3E6.html'    ,
"description":"Create a webpage for a book chapter in which all the topic are displayed using ordered list. When user clicks on any topic it should be redirected to corresponding paragraph within same page."                                
},
{                  
"title" : "Exercise7",
"link": 'JP01_15L3E7.html',
"description":"Create a web page to display your class time table in tabular format."              
},
{                  
"title" : "Exercise8",
"link": 'JP01_15L3E8.html',
"description":"Create a web page having 9 images arranged in 3*3 matrixes. When a user clicks on any image, it should open in a new tab."              
},
{                  
"title" : "Exercise9",
"link": 'JP01_18L4E9Home.html',
"description":"Create a home page for personal website with 4 sections Header, Navigation bar (menu bar), content and footer section. It should have a menu bar for “Bio-Data, Contact, Photos, Notes etc.” For each menu option create a separate web page and link with home page. Structure the web page using HTML table."       
},
{                  
"title" : "Exercise10",
"link": 'JP01_25L5E10.html',
"description":"Modify the webpage created in Exercise-3 using HTML form. Use radio buttons for options, so user can choose only one among 4 options. Also add a submit button for quiz submission.  "
},
{                  
"title" : "Exercise11",
"link": 'JP02_01L5E11.html'  ,
"description":"Create a user feedback page which asks questions about a software product. You are required to use checkbox, radio buttons, and drop-down, textarea and various text input type for this. Structure the web page using HTML table."                
},
{                  
"title" : "Exercise12",
"link": 'JP02_01L6E12.html' ,
"description":"Create an autocomplete input element with an associated datalist that contains the days of the week."
},
{                  
"title" : "Exercise13",
"link": 'JP01_04L1E1.html',
"description":"Create Write an external style sheet to format the web document of Exercise 1"
},
{                  
"title" : "Exercise14a",
"link": 'JP02_15L8E14a.html',
"description":"Create a webpage that displays your favourite quotations in a web page just above images. You have to use border, height, width, margin, padding, outline properties of CSS. Also use text and font properties to add effects in text to display quotations."
},
{                  
"title" : "Exercise14b",
"link": 'JP02_19L9E14b.html',
"description":"Modify 14A using flexbox"
},
{                  
"title" : "Exercise15",
"link": 'JP02_22E15.html',
"description":"15.Make a layout template that contains a header and two paragraphs. Use float to line up the two paragraphs as columns side by side. Give the header and two paragraphs a border and/or a background color so you can see where they are."
},
{                  
"title" : "Exercise16",
"link": 'JP02_22E16NavBar.html',
"description":"Build a simple horizontal navigation bar using an unordered list and Internal CSS."
},
{

"title" : "Exercise17",
"link": 'JP02_26E17.html',
"description":"Create a transformation program that includes four images.When the user mouse hover an image, the size of the image should increase by 20%"
},
{

"title" : "Exercise18",
"link": 'JP02_26L10E18.html',
"description":"Create a Home Page for Banasthali's Website"
},
{

"title" : "Exercise19",
"link": 'JP02_29E19.html',
"description":"Implement a Javascript function that accept number of rows(m) and columns(n) from user and displays a 2D m x n square layout of alternate colors black and red."
},
{

"title" : "Exercise20",
"link": 'JP03_04E20.html',
"description":"Create a Webpage with two buttons start and stop. When user click on start button a timer should start to count seconds. When a user click on stop button then it should stop"
},
{

"title" : "Exercise21",
"link": 'JP03_04E21.html',
"description":"Create a Webpage to display digital clock that display updated time of your system without refreshing webpage"
},
{

"title" : "Exercise22",
"link": 'JP03_04E22.html',
"description":"22.Write a JavaScript to display greeting message according to time with user name that is accessing the webpage. When user clicks on the greeting message it should hide."
},
{

"title" : "Exercise23",
"link": 'JP03_04E23.html',
"description":"23.Write a JavaScript code that displays text “TEXT-GROWING” with increasing font size in the interval of 100ms in RED COLOR, when the fontsize reaches 50pt it displays “TEXT-SHRINKING” in BLUE color. Then thefont size decreases to 5pt."
},
{

"title" : "Exercise24",
"link": 'JP03_07E24.html',
"description":"Create a web page to display events in card layout. An event should have image, title, date and description fields. Store all these values in Javascript array or object for multiple events and generate dynamic cards for each events on webpage"
},
{

"title" : "Exercise25",
"link": 'JP03_07E25.html',
"description":"Create a Web page that accept a value in a text box for temperature in one unit and convert it to another. It should accept input in kelvin, Celsius, Fahrenheit and Convert accordingly"
},
{

"title" : "Exercise26",
"link": 'JP03_11E26.html',
"description":"Create a user registration form which accepts first name, last name (not mandatory), user ID (Banasthali ID), password, confirm password, Address, Email ID, Contact number. Apply appropriate client side validations using JavaScript for all fields of html form. Also layout this form using a CSS."
}


]
id=0

document.write("<ul class='cards'>")
for(i=0;i<4;i++)
{
document.write("<li class='cards_item'>")
document.write("<div class='card'>")

document.write("<div class='card_content'><div id='e"+parseInt(i+1)+"' class='card_title'>")
document.getElementById('e'+parseInt(i+1)).innerHTML=events[id+i].title
document.write("</div>")

document.write("<p id='t"+parseInt(i+1)+"' class='card_text'>")

document.getElementById('t'+parseInt(i+1)).innerHTML=events[id+i].description
document.write("</p>")
document.write("<a href='"+events[id+i].link+"' id='l"+parseInt(i+1)+"' target='_blank'><button class='btn'>SHOW</button></a>")

document.write("</div>")

document.write("</div>")
document.write("</li>")
}
document.write("</ul>")


function startIdx()
{
id=0

for(i=0;i<4;i++)
{
document.getElementById('e'+parseInt(i+1)).innerHTML=events[id+i].title
document.getElementById('t'+parseInt(i+1)).innerHTML=events[id+i].description
document.getElementById('l'+parseInt(i+1)).href=events[id+i].link


}                      
}
function lastIdx()
{
id=events.length-4

for(i=0;i<4;i++)
{
document.getElementById('e'+parseInt(i+1)).innerHTML=events[id+i].title
document.getElementById('t'+parseInt(i+1)).innerHTML=events[id+i].description
document.getElementById('l'+parseInt(i+1)).href=events[id+i].link


}  



                      
}
function decIdx()
{
if (id>0){
id--;
for(i=0;i<4;i++)
{
document.getElementById('e'+parseInt(i+1)).innerHTML=events[id+i].title
document.getElementById('t'+parseInt(i+1)).innerHTML=events[id+i].description
document.getElementById('l'+parseInt(i+1)).href=events[id+i].link


}  
}                                   
}
function incIdx()
{
if (id<events.length-4){
id++;                                       
for(i=0;i<4;i++)
{
document.getElementById('e'+parseInt(i+1)).innerHTML=events[id+i].title
document.getElementById('t'+parseInt(i+1)).innerHTML=events[id+i].description
document.getElementById('l'+parseInt(i+1)).href=events[id+i].link
}  
}                                  
}
function goBack()
{
document.getElementById('main').style.display="block";
document.getElementById('iwtEx').style.display="none";
document.getElementById('iwtAssign').style.display="none";                                  
}
        
