
/**************************************************************
 *  This file contains the JavaScript for my Projects Portfolio 
 *  Written by James Stevick
 **************************************************************/

// Template variables so they only get compiled at page load
var one_project_template, projects_template;

// Helper functions to instantiate templates and display in content sections
function showProjects(template, data, subject){
	var html = template(data);
	$('#projects-content').html(html);
}

function showOneProject(template, data){
	var html = template(data);
	$('#projects-one-content').html(html);
}

// Run code when whole document is ready
$(document).ready(function(){

	// Compile templates
	var source = $("#projects-template").html();
	projects_template = Handlebars.compile(source);

	// source = $("#one-project-template").html();
	// one_project_template = Handlebars.compile(source);


	// Function when any tab is clicked
	$(".nav-tabs").click(function (event) {

		// Get ID of tab clicked on
		var tab_clicked = event.target.id;

		// Display the projects according to the tab selected 
		showProjects(projects_template, portfolio, tab_clicked);

		// Switch Active class to correct tab
		$(".nav-tabs .active").removeClass("active");
		$("#"+tab_clicked).addClass("active");

		// Function when project thumbnail is clicked on
		$(".project-thumbnail").click(function (){

			// Get the index of the project just clicked on
			var index = $(this).data("id");

			// Remove project tabs and fill in column with all 12 blocks of Bootstrap grid
			// document.getElementById("project-nav-tabs").remove();
			// $("#projects-content-column").addClass("col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12");

			// Load the selected project html file into the projects-content section
			var webpage = "https://jamesrstevick.github.io/" + portfolio["projects"][index]["htmlFile"];
			$("#projects-content").load(webpage);	
		});

	});

	// Start page on all projects by simulating click on All Projects tab
	$("#all_proj").click();

});