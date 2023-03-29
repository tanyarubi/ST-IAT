define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'complex', //Will appear in the data.
		    title : {
		      media : {word : 'complex'}, //Name of the category presented in the task.
		      css : {color:'#000000','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'unpredictable'}, 
    			{word : 'multitasker'}, 
    			{word : 'complex'}, 
    			{word : 'complicated'}, 
    			{word : 'nuanced'}, 
    				    ], 
		    //Stimulus css (style)
		    css : {color:'#000000','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'male', //Attribute label
			title : {
				media : {word :  "male"}, //Name of the category presented in the task.
				css : {color:'#000000','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli //male names
				{word: 'brian'},
				{word: 'mathew'},
				{word: 'paul'},
				{word: 'scott'},
				{word: 'eric'},
				{word: 'greg'},
				{word: 'kevin'},
				{word: 'steve'},
				{word: 'john'},
				{word: 'mark'},
				{word: 'jason'},
				{word: 'peter'},
				{word: 'alan'},
				{word: 'robert'},
				{word: 'daniel'}
				
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'female', //Attribute label
			title : {
				media : {word : 'female'}, //Name of the category presented in the task.
				css : {color:'#000000','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli //female names
				{word: 'beth'},
				{word: 'lisa'},
				{word: 'meg'},
				{word: 'marcia'},
				{word: 'elaine'},
				{word: 'gwen'},
				{word: 'sara'},
				{word: 'diane'},
			  	{word: 'karen'},
				{word: 'laurel'},
				{word: 'eva'},
				{word: 'sandra'},
				{word: 'ann'},
				{word: 'susan'},
				{word: 'kate'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
