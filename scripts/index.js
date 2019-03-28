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
        "title": "Kerri Walsh Jennings",
        "content": "'It’s going to be a journey. It’s not a sprint to get in shape.'"
    },
    {
        "title": "Jim Rohn",
        "content": "'Take care of your body. It's the only place you have to live.'"
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
        "title": "Mahatma Gandhi",
        "content": '"Strength does not come from physical capacity. It comes from an indomitable will."'
    },
    {
        "title": "Unknown",
        "content": '"Use the 21/90 rule: It takes 21 days to create a habit. It takes 90 days to create a lifestyle."'
    },
    {
        "title": "Unknown",
        "content": '"Strive for progress, not perfection."'
    },
    {
        "title": "Jerry Rice",
        "content": '"Today I will do what others won’t, so tomorrow I can accomplish what others can’t."'
    },
    {
        "title": "Aristotle",
        "content": '"We are what we repeatedly do. Excellence then is not an act but a habit."'
    },
    {
        "title": "Tommy Lasorda",
        "content": '"We are what we repeatedly do. Excellence then is not an act but a habit."'
    },
    {
        "title": "Maya Angelou",
        "content": '"Nothing will work unless you do."'
    }
]

function getQuote() {
    var item = posts[Math.floor(Math.random() * posts.length)];
    var title = $(".title").text(item.title);
    var quote = $(".content").html(item["content"]);
};
$(document).ready(function () {
    getQuote();
    $("#height").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#BMIbutton").click();
        }
    });

    $("#BMIbutton").click(function () {
        calculateBMI();
    });
});

function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var BMI = weight / (height * height);
    var roundedBMI = BMI.toFixed(5);
    document.getElementById("BMItext").innerHTML = "YOUR BMI: ";
    document.getElementById("BMI").innerHTML = roundedBMI;
    var BMIexplanation = document.getElementById("BMIexplanation");
    if (roundedBMI <= 18.4) {
        BMIexplanation.innerHTML = "You are underweight";
        BMIexplanation.style.color = "red";
        document.getElementById("BMI-calc").style.display = "block";
    } else if (roundedBMI <= 24.9) {
        BMIexplanation.innerHTML = "You are healthful weight";
        BMIexplanation.style.color = "green";
        document.getElementById("BMI-calc").style.display = "block";
    } else if (roundedBMI <= 29.9) {
        BMIexplanation.innerHTML = "You are overweight";
        BMIexplanation.style.color = "red";
        document.getElementById("BMI-calc").style.display = "block";
    } else if (roundedBMI <= 39.9) {
        BMIexplanation.innerHTML = "You have obesity";
        BMIexplanation.style.color = "red";
        document.getElementById("BMI-calc").style.display = "block";
    } else {
        BMIexplanation.innerHTML = "You have an extreme obesity";
        BMIexplanation.style.color = "red";
        document.getElementById("BMI-calc").style.display = "block";
    }
    if (height == false && weight == false) {
        BMIexplanation.innerHTML = "Please enter your measurements and try again";
        BMIexplanation.style.color = "yellow";
        document.getElementById("BMI-calc").style.display = "none";
    } else if (height == false) {
        BMIexplanation.innerHTML = "Please enter your height in meters and try again";
        BMIexplanation.style.color = "yellow";
        document.getElementById("BMI-calc").style.display = "none";
    } else if (weight == false) {
        BMIexplanation.innerHTML = "Please enter your weight in kilograms and try again";
        BMIexplanation.style.color = "yellow";
        document.getElementById("BMI-calc").style.display = "none";
    }
}


window.onscroll = function () { scrollFunction() };

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