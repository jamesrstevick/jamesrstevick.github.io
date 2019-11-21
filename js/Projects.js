// This file contains data for my portfolio
// The main object, "portfolio" contains an array of projects
// Each project contains a pdf, image, and some metadata

var portfolio = {
	projects : [
		{
            title : "Magnetic Levitator", 
            pdfFile : "reports/MagLev.pdf",
            thumbnail : "images/MagLev.jpg",
            description : "MagLev maintains the position of a para-magnetic ball by controlling a driven electromagnet using position sensors",
            htmlFile: "htmlFiles/MagLev.html",
            date: "12/15/2016",
            tags : ["hardware", "DIY", "course projects"],
        },
		{
            title : "Image Segmentation", 
            pdfFile : "reports/ImageSegmentation.pdf",
            thumbnail : "images/ImageSegmentation.jpg",
            description : '"Image Segmentation with Dynamic Artifacts Detection and Bias Correction", Published in American Institute of Mathematical Sciences',
            htmlFile: "htmlFiles/ImageSegmentation.html",
            date: "08/15/2014",
            tags : ["hardware", "DIY", "course projects"]
        },
		{
            title : "Network Theory", 
            pdfFile : "reports/SeniorThesis.pdf",
            thumbnail : "images/SeniorThesis.jpg",
            description : 'Senior Thesis for B.A. in Physics using MATLAB for network theory, "Developing Metrics for Networks Embedded in Physical Space"',
            htmlFile: "htmlFiles/SeniorThesis.html",
            date: "05/15/2015",
            tags : ["hardware", "DIY", "course projects"]
        },
        {
            title : "Particle Sensor", 
            pdfFile : "reports/KSLZiggy.pdf",
            thumbnail : "images/KSLZiggy.jpg",
            description: "Mechanical and electrical design of real-time imaging system to calibrate high-flux particle accelerators",
            htmlFile: "htmlFiles/KSLZiggy.html",
            date: "04/23/2016",
            tags : ["hardware", "DIY", "course projects"]
        }
    ]
};