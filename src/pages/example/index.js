import cssAni from '../../libs/CssAni';

export default class example {
	constructor() {
	}
	init(dtd){
		console.log('example init');

		var singleCssAni = new cssAni(
			$('.test1'),
			{
				'opacity': 0.5,
				'transform': 'translate3d(100px,0px,0px)'
			},
			1000,0,'0.31, 0.19, 0.16, 1',null
		);


		$('.play-btn').on('click',function(){
			singleCssAni.play();
		});

		$('.cancel-btn').on('click',function(){
			singleCssAni.cancel();
		});

		
		dtd.resolve();
	}
}