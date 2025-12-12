//Script to make the hamburger button and the x button work.

//Function to make the Sidebar visible. Puts the sidebar element into a variable. In the CSS the sidebar is autoamtically transformed off the page. When this function is called, it brings the function back into a visible area.
function showSidebar(){
			const sidebar = document.querySelector('.sidebar')
			sidebar.style.transform = 'translateX(0%)'
			
		}
//Function to make the sidebar invisible. It transforms the sidebar out of view of the screen. 
function closeSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.transform = 'translateX(100%)'
}