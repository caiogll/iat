define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){

	var API = new new Manager();
	
  API.setName('mgr');
  API.addSettings('skip',true);
  init_data_pipe(API, 'of0fd6cZlvm1gJD3ilWqg56CoQEqFrcxHMrYtQh4A1UwzkSlApvRDR0TcYBHXlNpJa894E',  {file_type:'csv'});	

  API.addTasksSet({
    intro: [{
      inherit: 'instructions',
      name: 'intro',
      templateUrl: 'intro.jst',
      title: 'Intro',
      header: 'Welcome'
    }],
    sexuality: [{
        type: 'time',
        name: 'sexuality',
        scriptUrl: 'sexuality.js'
    }],
    lastpage: [{
      type: 'message',
      name: 'lastpage',
      templateUrl: 'lastpage.jst',
      title: 'End',
      //Uncomment the following if you want to end the study here.
      last:true, 
      header: 'You have completed the study'
    }], 
		//This task waits until the data are sent to the server.
    uploading: uploading_task({header: 'just a moment', body:'Please wait, sending data... '})
  });

  API.addSequence([
    {inherit: 'intro'},
    {
      mixer:'random',
      data:[{
        mixer: 'wrapper',
        data:[{ inherit: 'sexualityiat'}]
      }]
    },
		{inherit: 'uploading'},
    {inherit: 'lastpage'},
  ]);

  return API.script;
});
