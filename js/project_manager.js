
/**************************************************************
 *  This file contains the JavaScript for my Projects Portfolio 
 *  Written by James Stevick
 **************************************************************/

// Template variables so they only get compiled at page load
var one_project_template, projects_template;

// Helper functions to instantiate templates and display in content sections
function showProjects(template, data){
	var html = template(data);
	$('#projects-content').html(html);
}

// function showOneProject(template, data){
// 	var html = template(data);
// 	$('#projects-one-content').html(html);
// }

// Run code when whole document is ready
$(document).ready(function(){

	// Compile templates
	var source = $("#projects-template").html();
	projects_template = Handlebars.compile(source);

	// source = $("#one-project-template").html();
	// one_project_template = Handlebars.compile(source);

 
	//	Clicking on 
	//  clicking on the albums tab shows the 
	$("#hardware-project-tab").click(function () {

		// Display the 
		showProjects(projects_template, portfolio);

		// make the albums tab the active one
		// first make the currently active tab inactive
		$(".nav-pills .active").removeClass("active");
		// then make albums tab active
		$("#hardware-project-tab").addClass("active");

	});

	$("#hardware-project-tab").click();
	// var tab_clicked = $(this).attr('id');
	// console.log(tab_clicked);
	// $(tab_clicked).click();
});