  function toggleAll(numteams){    
    var maintag = document.getElementById('teamAll');
    hidden = maintag.innerHTML == 'Show all teams';    
    if (hidden) {maintag.innerHTML = 'Hide all teams';}
    else {maintag.innerHTML = 'Show all teams';}    
   	toggleTeams(numteams,hidden);       
  }
  
  function collapseObj(obj, atag){
	obj.style.display = 'none';
  	atag.innerHTML = '<img src="/images/expand.png">';  	    	
  	   	
  	files = document.getElementById(obj.id+'_files');
  	if (files) {
  		files.style.display = 'none';
  	    files_tag = document.getElementById(obj.id+'_filesLink');
  	    if (files_tag){files_tag.innerHTML = 'show submission';}
  	}  
  	reviews = document.getElementById(obj.id+'_reviews');
  	if (reviews) {
          reviews.style.display = 'none';
  	   	reviews_tag = document.getElementById(obj.id+'_reviewsLink');
  	   	if (reviews_tag){reviews_tag.innerHTML = 'show reviews';}
	}

      reviews0 = document.getElementById(obj.id+'_reviews0');
      if (reviews0) {
          reviews0.style.display = 'none';
          reviews0_tag = document.getElementById(obj.id+'_reviews0Link');
          if (reviews0_tag){reviews0_tag.innerHTML = 'show reviews';}
      }
      reviews1 = document.getElementById(obj.id+'_reviews1');
      if (reviews1) {
          reviews1.style.display = 'none';
          reviews1_tag = document.getElementById(obj.id+'_reviews1Link');
          if (reviews1_tag){reviews1_tag.innerHTML = 'show reviews';}
      }

      reviews2 = document.getElementById(obj.id+'_reviews2');
      if (reviews2) {
          reviews2.style.display = 'none';
          reviews2_tag = document.getElementById(obj.id+'_reviews2Link');
          if (reviews2_tag){reviews2_tag.innerHTML = 'show reviews';}
      }

      reviews3 = document.getElementById(obj.id+'_reviews3');
      if (reviews3) {
          reviews3.style.display = 'none';
          reviews3_tag = document.getElementById(obj.id+'_reviews3Link');
          if (reviews3_tag){reviews3_tag.innerHTML = 'show reviews';}
      }
      mreviews = document.getElementById(obj.id+'_mreviews');
  	if (mreviews) {
  		mreviews.style.display = 'none';
  	   	mreviews_tag = document.getElementById(obj.id+'_mreviewsLink');
  	   	if(mreviews_tag){mreviews_tag.innerHTML = 'show metareviews';}
	}
      mreviews0 = document.getElementById(obj.id+'_mreviews0');
      if (mreviews0) {
          mreviews0.style.display = 'none';
          mreviews0_tag = document.getElementById(obj.id+'_mreviews0Link');
          if(mreviews0_tag){mreviews0_tag.innerHTML = 'show metareviews';}
      }
      mreviews1 = document.getElementById(obj.id+'_mreviews1');
      if (mreviews1) {
          mreviews1.style.display = 'none';
          mreviews1_tag = document.getElementById(obj.id+'_mreviews1Link');
          if(mreviews1_tag){mreviews1_tag.innerHTML = 'show metareviews';}
      }
	previews = document.getElementById(obj.id+'_previews');
  	if (previews) {
  		previews.style.display = 'none';
  	   	previews_tag = document.getElementById(obj.id+'_previewsLink');
  	   	if(previews_tag){previews_tag.innerHTML = 'show teammate reviews';}
	}		 	
  }
  
  function toggleTeams(numteams,hidden){
  	for (var i = 0; i < numteams; i++){
  	  elementId = 'team'+i;
  	  var atag = document.getElementById(elementId+'Link');
  	  var sublistsize = 1;
  	  while (document.getElementById(elementId+"_"+sublistsize) != null){
  	    var obj = document.getElementById(elementId+"_"+sublistsize);
  	    if (hidden) {
  	    	obj.style.display = '';
  	    	atag.innerHTML = '<img src="/images/collapse.png">';}
  	    else {
  	    	collapseObj(obj, atag);  	    	  	       
  	    }  	    
  	    sublistsize += 1;  	    
  	  }
  	}
  } 
  
  function toggleTeam(elementId){
	var sublistsize = 1;
	var obj = document.getElementById(elementId+"_"+sublistsize);	
	var atag = document.getElementById(elementId+'Link');	
	
  	while (obj != null){ 
  	  var bExpand = obj.style.display.length == 0;	  	   	  
  	  if (bExpand) {
        collapseObj(obj, atag);   	         	  	       
  	  }
  	  else {
  	    obj.style.display = '';
  	  	atag.innerHTML = '<img src="/images/collapse.png">';  	    	    
  	  }  	    
  	  sublistsize += 1;  
  	  var obj = document.getElementById(elementId+"_"+sublistsize);	    
  	}  	  
  }  