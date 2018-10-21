function showHidePages(event){
	const pagesArray = ['page-about', 'page-projects', 'page-contact'];
	let selectedPage = "page-projects";	
	if(event !== undefined){
		selectedPage = 'page-' + event.target.id;
	}
	
	for(let i=0;i<pagesArray.length;i++){

		if(pagesArray[i] === selectedPage){
			$('#' + pagesArray[i]).show();
		}else{
			$('#'+pagesArray[i]).hide();
		}
	}
}

$(function(){	
	$('.js-menuItems').on('click','li',showHidePages);
	showHidePages();
});