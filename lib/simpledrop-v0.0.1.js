simpleDrop = () => "simpleDrop is a simple library used to create simple drop down menus created via javascript. If you wan't to learn more about it, you should search in git for simpleDrop"
window.simpleDrop = ()=>"Simple drop object on window scope"
window.simpleDrop.menu = []
window.addEventListener("click",(event)=>{
		
		for(let i=0;i<this.simpleDrop.menu.length;i++)
		{
			let found = false
			let target = event.target
			let menu = this.simpleDrop.menu[i]

			
			while(target){
				if(target.id)
				{
					if(target.id == menu.id)
					{
						found = true
						break
					}
					
				}
				target = target.parentNode
				
			}
			
			if(found)
				continue
			
			menu.simpleDrop.toggleElement.style.display = "none"
			menu.simpleDrop.state = "closed"
		}
		
		
		
		})

simpleDrop.findChild= (child,term) =>{
	let children = child.childNodes;
	if (typeof children === 'string'){
		//single child!
		if(children.className){
			if(children.className == term)
				return children
			
		}
		
	}else{
		for(let i=0;i<children.length;i++){
			if(children[i].className){
				let className = children[i].className
				if(className.indexOf(" ") != -1){
					let names = className.split(" ")
					for(let b =0; b < names.length;b++)
						if(names[b] == term)
							return children[i]
					
					
					
				}else{
					if(className == term)
						return children[i]
				}
			}
			
			
		}
	}

	return null;


}




simpleDrop.createEvent = (menu,button,data) =>{
	menu.simpleDrop = ()=>{ 'simple drop object'}
	menu.simpleDrop.state = "closed"
	menu.simpleDrop.toggleElement = data
	menu.simpleDrop.showData = function(){

		if(this.parentNode.simpleDrop.state == "closed"){
			this.parentNode.simpleDrop.toggleElement.style.display="block"
			this.parentNode.simpleDrop.state = "open"

		}
		else{
			this.parentNode.simpleDrop.toggleElement.style.display="none"
			this.parentNode.simpleDrop.state = "closed"
		}

	}
	menu.simpleDrop.closeMeOnOutClick = function(){
		if(this.simpleDrop.state == "open"){
			this.simpleDrop.toggleElement.style.display="none"
			this.simpleDrop.state = "closed"

		}
		
	}
	button.addEventListener("click",menu.simpleDrop.showData)
	window.simpleDrop.menu.push(menu)
	
	
}

simpleDrop.create = (item,flag="none") =>{
	
	let el = document.getElementById(item)
	let toggle = simpleDrop.findChild(el,"drop-toggle")
	let button = simpleDrop.findChild(el,"toggle-button")
	toggle.style.display="none"
	if(toggle != null && button != null)
		simpleDrop.createEvent(el,button,toggle)
	else
		console.log("drop-toggle class or toggle-button class not specified in: "+item.id)
	
	
	
}





