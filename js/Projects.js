// This file contains data for my portfolio
// The main object, "portfolio" contains an array of projects
// Each project contains a pdf, image, and some metadata

var portfolio = {
	projects : [
		{
            title : "Magnetic Levitator", 
            pdfFile : "reports/MagLev.pdf",
            thumbnail : "images/MagLev.jpg",
            description : "The MagLev system maintains the position of a para-magnetic ball by using position sensors to control the driver circuit of an electromagnet",
            tags : ["hardware", "DIY", "course projects"],
        },
		{
            title : "Image Segmentation", 
            pdfFile : "reports/ImageSegmentation.pdf",
            thumbnail : "images/ImageSegmentation.jpg",
            description : 'Published paper in American Institute of Mathematical Sciences "Image Segmentation with Dynamic Artifacts Detection and Bias Correction" ',
            tags : ["hardware", "DIY", "course projects"]
        },
		{
            title : "Network Theory", 
            pdfFile : "reports/SeniorThesis.pdf",
            thumbnail : "images/SeniorThesis.jpg",
            description : 'Senior Thesis for B.A. in Physics "Developing Metrics for Networks Embedded in Physical Space"',
            tags : ["hardware", "DIY", "course projects"]
        }
	]
};