define(['pipAPI','https://caiogll.github.io/iat/iat.js'], function(APIConstructor, iatExtension) {

	let API = new APIConstructor();
	
	//Randomize which of the three possible stimulus sets we are going to use for the gay category
	var gaySet = API.shuffle(['gay','lesbian','general'])[0];
	var gayWords = ['Gay People', 'Homosexual']; //All gay sets have this word
	var gayImages = [];

	//Fill the sets of words and images for the gay categories, based on the gay-set condition
	if (gaySet == 'lesbian'){
		gayWords.push('Lesbians');
		gayWords.push('Gay Women');
		gayImages.push('07_lesbian.jpg');
	} else if (gaySet == 'gay'){
		gayWords.push('Gay');
		gayWords.push('Gay Men');
		gayImages.push('05_gay.jpg');
	} else { //General: use both men and women images.
		gayWords.push('Gay');
		gayImages.push('07_lesbian.jpg');
		gayImages.push('05_gay.jpg');
	}

	API.addGlobal({
		gaySet : gaySet,
		gayWords : gayWords,
		gayImages : gayImages,
		posWords : API.shuffle([
			'Laughter', 'Happy', 'Glorious',
			'Joy', 'Wonderful', 'Peace',
			'Pleasure', 'Love', 'Cheer',
			'Friend', 'Adore', 'Cheerful',
			'Joyful', 'Cherish', 'Smiling',
			'Glad', 'Excellent', 'Joyous',
			'Spectacular', 'Appealing', 'Delight',
			'Excitement', 'Attractive', 'Delightful',
			'Laughing', 'Fabulous', 'Pleasing',
			'Beautiful', 'Fantastic', 'Lovely',
			'Terrific', 'Celebrate', 'Enjoy',
			'Magnificent', 'Triumph',]), 
		negWords : API.shuffle([
			'Awful','Failure','Agony',
			'Hurt','Horrible','Terrible',
			'Nasty','Evil'
		])
	});

	let global = API.getGlobal();

	//Get the stimuli for the gay category
	let gayMedia = []; 
	
	for(let iImage = 0; iImage < global.gayImages.length; iImage++){
	  gayMedia.push({image:global.gayImages[iImage]});
	}

	for(let iWord = 0; iWord < global.gayWords.length; iWord++){
	  gayMedia.push({word:global.gayWords[iWord]});
	}

	return iatExtension({
		attribute1 : {
		name : 'Good Words', //Will appear in the data.
		title : {
			media : {word : 'Good'}, //Name of the category presented in the task.
			css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
			height : 4 //Used to position the "Or" in the combined block.
		}, 
		stimulusMedia : [ //Stimuli content as PIP's media objects
			{word: global.posWords[0]},
			{word: global.posWords[1]},
			{word: global.posWords[2]},
			{word: global.posWords[3]},
			{word: global.posWords[4]},
			{word: global.posWords[5]},
			{word: global.posWords[6]},
			{word: global.posWords[7]},
			{word: global.posWords[8]},
			{word: global.posWords[9]},
			{word: global.posWords[10]},
			{word: global.posWords[11]},
			{word: global.posWords[12]},
			{word: global.posWords[13]},
			{word: global.posWords[14]},
			{word: global.posWords[15]},
			{word: global.posWords[16]},
			{word: global.posWords[17]},
			{word: global.posWords[18]},
			{word: global.posWords[19]},
			{word: global.posWords[20]},
			{word: global.posWords[21]},
			{word: global.posWords[22]},
			{word: global.posWords[23]},
			{word: global.posWords[24]},
			{word: global.posWords[25]},
			{word: global.posWords[26]},
			{word: global.posWords[27]},
			{word: global.posWords[28]},
			{word: global.posWords[29]},
			{word: global.posWords[30]},
			{word: global.posWords[31]},
			{word: global.posWords[32]},
			{word: global.posWords[33]},
			{word: global.posWords[34]},
		], 
		//Stimulus css (style)
		stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		attribute2 :	{
			name : 'Bad Words', //Will appear in the data.
			title : {
				media : {word : 'Bad'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: global.negWords[0]},
				{word: global.negWords[1]},
				{word: global.negWords[2]},
				{word: global.negWords[3]},
				{word: global.negWords[4]},
				{word: global.negWords[5]},
				{word: global.negWords[6]},
				{word: global.negWords[7]}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : {
			name : 'Straight people', //Will appear in the data.
			title : {
				media : {word : 'Straight people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : 
			[ //Stimuli content as PIP's media objects
				{image: '06_hetero.jpg'},
				{word: 'Straight'},
				{word: 'Heterosexual'},
				{word: 'Straight People'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		category2 :	{
			name : 'Gay people', //Will appear in the data.
			title : {
				media : {word : 'Gay people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : gayMedia, 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://caiogll.github.io/iat/images/'
		},
		isTouch : API.getGlobal().isTouch
	});
});
