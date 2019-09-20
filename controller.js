const controller ={};
controller.loatScript = function(src){
	return new Promise((resolve, reject)=>{
	const script = document.createElement('script');
	script.src=src;
	document.head.append(script);
	script.onload=()=>{
		resolve();
	};
	script.onerror=()=>{
		throw new Error('error loading...!');
	}
})
};
controller.loadCss = function(href){
	return new Promise((resolve, reject)=>{
		const link = document.createElement('link');
		link.rel = "stylesheet";
		link.href=href;
		document.head.append(link);
		link.onload=()=>{
			resolve();
		}
		link.onerror=()=>{
			throw new Error ('error loading...!');
		}
	})
};
controller.getDataAPI = function(url){
	fetch(url)
	.then((re)=>{
		return re.json();
	})
	.then((data)=>{
		data.forEach(element => {
			console.log(element)
		});
	})
};
controller.setLocation = function () { 
	$(window).on('hashchange',function(){
		const hash = window.location.hash.substr(0);
		console.log($(this));
		view.setActiveScreen(hash);
	})
 };
 