const students = [
    {
      id: 1,
      name: "Bharat Kumar",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
        phone: "+123 456 789",
      email: "bharat.ece17@nituk.ac.in"
    },
    {
      id: 2,
      name: "Nisha Thakur",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        phone: "9639227916",
      email: "Nisha.ece17@nituk.ac.in"
    },
    {
      id: 3,
      name: "Ashutosh Chauhan",
      imgURL:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
        phone: "+123 456 789",
      email: "chauhan.ece17@nituk.ac.in"
    },
    {
      id: 4,
      name: "Himshikha",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        phone: "+123 456 789",
      email: "himshikha.ece17@nituk.ac.in"
    },
    {
      id: 5,
      name: "Hitesh Kumar",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "hitesh.ece17@nituk.ac.in"
    },
    {
      id: 6,
      name: "Pragya Tomar",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+123 456 789",
      email: "pragya.ece17@nituk.ac.in"
    },
    {
      id: 7,
      name: "Alok Kumar Mridul",
      imgURL:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      phone: "+123 456 789",
      email: "alok.ece17@nituk.ac.in"
    },
    {
      id: 8,
      name: "Sakshi Chaudhary",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+123 456 789",
      email: "sakshi.ece17@nituk.ac.in"
    },
    {
      id: 9,
      name: "Harsh Puri",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "harsh.ece17@nituk.ac.in"
    },
    {
      id: 10,
      name: "Mohit Meena",
      imgURL:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      phone: "+123 456 789",
      email: "mohit.ece17@nituk.ac.in"
    },
    {
      id: 11,
      name: "Neha Hasija",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+123 456 789",
      email: "neha.ece17@nituk.ac.in"
    },
    {
      id: 12,
      name: "Uddeshya Singh",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "uddeshya.ece17@nituk.ac.in"
    },
    {
      id: 13,
      name: "Sakshi Sindhwal",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+123 456 789",
      email: "sakshis.ece17@nituk.ac.in"
    },
    {
      id: 14,
      name: "Vivek Gupta",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "vivek.ece17@nituk.ac.in"
    },
    {
      id: 15,
      name: "Vaibhav Bisht",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "vaibhav.ece17@nituk.ac.in"
    },
    {
      id: 16,
      name: "Anuj Singh",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "anuj.ece17@nituk.ac.in"
    },
    {
      id: 17,
      name: "Abhijit Gupta",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "7409327573",
      email: "abhijit.ece17@nituk.ac.in"
    },
    {
      id: 18,
      name: "Akash Bhojasiya",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "9424144045",
      email: "akash.ece17@nituk.ac.in"
    },
    {
      id: 19,
      name: "Nitendra Rana",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "9456739488",
      email: "nitendra.ece17@nituk.ac.in"
    },
    {
      id: 20,
      name: "Tanya Verma",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "7466041956",
      email: "tnaya.ece17@nituk.ac.in"
    },
    {
      id: 21,
      name: "Sumit Rawat",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sumit.ece17@nituk.ac.in"
    },
    {
      id: 22,
      name: "Vinay Unal",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "vinay.ece17@nituk.ac.in"
    },
    {
      id: 23,
      name: "Saurabh Rawat",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "saurabh.ece17@nituk.ac.in"
    },
    {
      id: 24,
      name: "Shubham Joshi",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "shubham.ece17@nituk.ac.in"
    },
    {
      id: 25,
      name: "Gaurav Sharma",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sharma.ece17@nituk.ac.in"
    },
    {
      id: 26,
      name: "Suchit Kumar",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "suchit.ece17@nituk.ac.in"
    },
    {
      id: 27,
      name: "Akshay Kumar",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "akshay.ece17@nituk.ac.in"
    },
    {
      id: 28,
      name: "Chandra Kant Pradhan",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "chandra.ece17@nituk.ac.in"
    },
    {
      id: 29,
      name: "Neel Ratna",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "neel.ece17@nituk.ac.in"
    },
    {
      id: 30,
      name: "Sidhant Yadav",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sidhant.ece17@nituk.ac.in"
    },
    {
      id: 31,
      name: "Ranjeet Prakash Rai",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "ranjeet.ece17@nituk.ac.in"
    },
    {
      id: 32,
      name: "Shaugun sharma",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "shaugun.ece17@nituk.ac.in"
    },
    {
      id: 33,
      name: "Animesh Sharma",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "animesh.ece17@nituk.ac.in"
    },
    {
      id: 34,
      name: "Saurabh Negi",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "saurabhn.ece17@nituk.ac.in"
    },
    {
      id: 35,
      name: "Vikash Kumar",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "vikash.ece17@nituk.ac.in"
    },
    {
      id: 36,
      name: "Krishnkant Mani",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "kk.ece17@nituk.ac.in"
    },
    {
      id: 37,
      name: "Sachin Chaudhary",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sachinc.ece17@nituk.ac.in"
    },
    {
      id: 38,
      name: "Shreya",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+123 456 789",
      email: "shreya.ece17@nituk.ac.in"
    },
    {
      id: 39,
      name: "Vaibhav Tiwari",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "vaibhav.ece17@nituk.ac.in"
    },
    {
      id: 40,
      name: "Tuhin Upadhyay",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "tuhin.ece17@nituk.ac.in"
    },
    {
      id: 41,
      name: "Sahil Suman",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sahil.ece17@nituk.ac.in"
    },
    {
      id: 42,
      name: "Vivek Veerana",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "vv.ece17@nituk.ac.in"
    },
    {
      id: 43,
      name: "Ankit Kumar",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "ankit.ece17@nituk.ac.in"
    },
    {
      id: 44,
      name: "Shubham Meena",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "shubhamm.ece17@nituk.ac.in"
    },
    {
      id: 45,
      name: "Tarun Kumar",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "tarun.ece17@nituk.ac.in"
    },
    {
      id: 46,
      name: "Rimjhim Gupta",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+123 456 789",
      email: "rimjhim.ece17@nituk.ac.in"
    },
    {
      id: 47,
      name: "Sathyam Rajpal",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sathyam.ece17@nituk.ac.in"
    },
    {
      id: 48,
      name: "Fauzan Waseem",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "fauzan.ece17@nituk.ac.in"
    },
    {
      id: 49,
      name: "Sankalp Saini",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sankalp.ece17@nituk.ac.in"
    },
    {
      id: 50,
      name: "Kshitij Gusain",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "kshitij.ece17@nituk.ac.in"
    },
    {
      id: 51,
      name: "Ayush Vatsal",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "ayush.ece17@nituk.ac.in"
    },
    {
      id: 52,
      name: "Yogamber Singh Negi",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "yogi.ece17@nituk.ac.in"
    },
    {
      id: 53,
      name: "Shubham Chaudhary",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "chaudhary.ece17@nituk.ac.in"
    },
    {
      id: 54,
      name: "Manish Kumar",
      imgURL:
        "https://www.facebook.com/photo?fbid=348875559236580&set=a.103628290427976",
      phone: "9122693349",
      email: "manish.ece17@nituk.ac.in"
    },
    {
      id: 55,
      name: "Mohd Aarish Siddiqui",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "8393934054",
      email: "aarish.ece17@nituk.ac.in"
    },
    {
      id: 56,
      name: "Sumitesh Nithani",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "sumitesh.ece17@nituk.ac.in"
    },
    {
      id: 57,
      name: "Ganesh Agarwal",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "ganesh.ece17@nituk.ac.in"
    },
    {
      id: 58,
      name: "Mohit Verma",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "mohitv.ece17@nituk.ac.in"
    }
  ];
  
  export default students;
  