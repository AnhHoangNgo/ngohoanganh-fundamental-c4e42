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
controller.loadAPI = function(url){
	fetch(url).then(
		(res)=>{
			return res.json();
		}
	)
}

 controller.setPage = function (){
	 const queryObjects={};
	 const queryStringPage = location.search;
	 const query = queryStringPage.replace('?','').split('&')
	 console.log(query);
	 query.forEach((element)=>{
		 console.log(element);
		const x =  element.split('=');
			 queryObjects[x[0]]= x[1]
	 })
	 return queryObjects;
	};
controller.setNewPage = function (){
	const queryObjects = controller.setPage();
	const titleNew = queryObjects.title.replace('-',' ');
	console.log(titleNew);
	return titleNew;
}
	

 