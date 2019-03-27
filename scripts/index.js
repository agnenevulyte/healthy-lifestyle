// calculate BMI
// function calculateBMI() {
//     var height = document.getElementById("height").value;
//     var weight = document.getElementById("weight").value;
//     var calculation = weight / (height*height);
//     var roundedCalc = calculation.toFixed(5)
//     document.getElementById("BMI").innerHTML = roundedCalc;
// }


// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;

//     this.start = function(){
//         if (running) {
//             throw new Error('Stopwatch has already started');
//         };
//         running = true;
//         startTime = new Date();

//     };

//     this.stop = function(){
//         if (!running) {
//             throw new Error('Stopwatch is not started');
//         };
//         running = false;
//         endTime = new Date();
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration+=seconds;
//     };

//     this.reset = function(){
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };

//     Object.defineProperty(this, "duration", {
//         get: function() {
//             return duration;
//         }
//     });
// }

// const sw = new Stopwatch();
// console.log(sw)



// get quote
var posts = [
    {
        "title": "Ghandi",
        "content": '“Strength does not come from the physical capacity. It comes from an indomitable will.” '
    },
    {
        "title": "Arnold Schwarzenegger",
        "content": '"Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body."'
    },
    {
        "title": "Unknown",
        "content": '"Your body can stand almost anything. It’s your mind that you have to convince."'
    },
    {
        "title": "Unknown",
        "content": '"Fitness is like a relationship. You can’t cheat and expect it to work."'
    },
    {
        "title": "Unknown",
        "content": '"My protein shake brings the boys to the yard. And they’re like: your muscles are hard. Damn right, my muscles are hard. I could train ya, but I’d have to charge."'
    },
    {
        "title": "Unknown",
        "content": '"Respect your body. It’s the only one you get."'
    },
    {
        "title": "Unknown",
        "content": '"Dead last finish is greater than did not finish, which trumps did not start."'
    },
    {
        "title": "Abraham Lincoln",
        "content": '"The best way to predict the future is to create it."'
    },
    {
        "title": "Frank Ocean",
        "content": '"Work hard in silence. Let success be your noise."'
    },
    {
        "title": "Unknown",
        "content": '"Rome wasn’t built in a day, but they worked on it every single day."'
    },
    {
        "title": "Unknown",
        "content": '"Use the 21/90 rule: It takes 21 days to create a habit. It takes 90 days to create a lifestyle."'
    },
    {
        "title": "Unknown",
        "content": '"Strive for progress, not perfection."'
    }
]

function getQuote() {
    var item = posts[Math.floor(Math.random() * posts.length)];
    var title = $(".title").text(item.title);
    var quote = $(".content").html(item["content"]);
};
$( document ).ready(function() {
    getQuote();
});

function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var BMI = weight / (height * height);
    var roundedBMI = BMI.toFixed(5)
    document.getElementById("BMI").innerHTML = roundedBMI;
    document.getElementById("BMItext").innerHTML = "YOUR BMI:"
    var BMIexplanation = document.getElementById("BMIexplanation");
    if (BMI <= 18.4) {
        BMIexplanation.innerHTML = "You are underweight";
        BMIexplanation.style.color = "red";
    } else if (BMI <= 24.9) {
        BMIexplanation.innerHTML = "You are healthful weight";
        BMIexplanation.style.color = "green";
    } else if (BMI <= 29.9) {
        BMIexplanation.innerHTML = "You are overweight";
        BMIexplanation.style.color = "red";
    } else if (BMI <= 39.9) {
        BMIexplanation.innerHTML = "You have obesity";
        BMIexplanation.style.color = "red";
    } else {
        BMIexplanation.innerHTML = "You have an extreme obesity";
        BMIexplanation.style.color = "red";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


// $(function() {
//     $('.scroll-down').click (function() {
//       $('html, body').animate({scrollTop: $('#box').offset().top }, 'slow');
//       return false;
//     });
//   });