// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes=[
  {
  quote: "No matter how old you are, there's always something good to look forward to. ",
  source:" Lynn Johnston",
  citation:" For Better or For Worse",
  year:2004,
      tags:"Hope"
  },
  {
  quote:" You've got to find what you love and that is as true for work as it is for lovers. Your work is going to fill a large part of your life and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what what you do. If you haven't found it yet, keep looking and don't settle. As with all matters of the heart, you'll know when you've found it.",
  source:" Steve Jobs",
  citation:" Stanford Commencement Adress",
  year:2005,
      tags:"work"
  },
  {
  quote:" If you have only two pennies left in the world, with the first penny, you should buy rice to feed your family. With the second penny, say the wise Japanese, you should buy a lily. The Japanese understand the importance of dreaming...",
  source:"Japanese Proverb",
  citation:"from Lilies Words and Music: Annie Walker",
  year:1999,
      tags:"Dream"
  },
  {
  quote:" If you don't like someone's story, write your own",
  source:" Chinua Achebe",
  citation:"Things Fall Apart",
  year:1958,
      tags:"Change"

  },
  {
  quote:" If you can make a woman laugh, you can make her do anything",
  source:"Marilyn Monroe",
  citation:"Unsourced",
      tags:"Love"
},
  {
    quotes:" Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up",
    source:"  Neil Gaiman",
    citation:" The Sandman, Vol. 9: The Kindly Ones",
    year:1989,
      tags:"Love"
    },
    {
      quotes:" For every minute you are angry you lose sixty seconds of happiness",
      source:"Julian Germain",
      citation:"Book",
      year:2005,
        tags:"Happiness"
      },
      {
        quotes:"Coincidence is God's way of remaining anonymous",
        source:"Albert Einstein",
        citation:"The World As I See It",
        year:1931,
        tags:"Coincidence"
        },
];
var quote=quotes.quote;
var source=quotes.source;
var citation=quotes.citation;
var year=quotes.year;
var tags=quotes.tags;
var randomQuote+=quote + source+ citation+ year+tags;
getRandomQuote(randomQuote){
 return randomQuote;
};
for(i=0;i<randomQuote.length;i+=1){
print(getRandomQuote) {
  var getRandomQuote=randomQuote;
  var id=document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  };
};
print(i);
var html="";
var randomColor="rgb";
if(getRandomQuote===loadQuote){
  function getRandomColor(){
    return math.floor( math.random()*256);
  };
  print(randomColor);
  for (i=0;i<8;i+=1){
    randomColor=getRandomColor();
    html+="<div style="background-color :' +randomColor </div>';
  };

};
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 3000);
};

function slowAlert() {
  alert(quotes);
};
alert(quotes);
function clearAlert() {
  window.clearTimeout(timeoutID);
};
