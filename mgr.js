define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){

	let API = new Manager();
	
  API.setName('mgr');
  API.addSettings('skip',true);
  init_data_pipe(API, 'xOV3HDLlOM7i',  {file_type:'csv'});	

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
        data:[{ inherit: 'sexuality'}]
      }]
    },
		{inherit: 'uploading'},
    {inherit: 'lastpage'},
  ]);

  return API.script;
});
