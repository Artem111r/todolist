
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const htmlTaskList = document.querySelector('.myTasks-wrapper')
let arrTask = []
let allDivTasks = []
!localStorage.keyTask ? arrTask = [] : arrTask = JSON.parse(localStorage.getItem('keyTask'))

function objTask(infoTask) {
	this.discription = infoTask
	this.completed = false
}
const updateLocal = ()=>{
	localStorage.setItem('keyTask', JSON.stringify(arrTask))
}

const tamplete = ((item, index)=>{
	return` 
	        <div class="todo_wrapper ${item.completed ? 'doneTask' : ''}">
        		<div class="discription">${item.discription}</div>
        		<div class="buttns_wrapper">
        			<input onclick='complete(${index})' type="checkbox" class='chbox' ${item.completed ? 'checked' : ''}>
        			<button onclick='deleteTask(${index})' class='del'>Delete</button>
        		</div>
        	</div>
	`
})
const complete = (index)=>{
arrTask[index].completed = !arrTask[index].completed
if(arrTask[index].completed){
	allDivTasks[index].classList.add('doneTask')
}else{
	allDivTasks[index].classList.remove('doneTask')
}
updateLocal()
displayTask()
}

const deleteTask = index =>{
	allDivTasks[index].classList.add('opacityTask')
	setTimeout(()=>{
		arrTask.splice(index, 1)
		updateLocal()
        displayTask()
	}, 500)


}

const filterTasks = ()=>{
	activeTasks = arrTask.filter(item => item.completed == false)
	posiveTasks = arrTask.filter(item => item.completed == true)
	arrTask = [...activeTasks, ...posiveTasks]
}


const displayTask = ()=>{
	htmlTaskList.innerHTML = ''
	filterTasks()
	if(arrTask.length > 0){
		arrTask.forEach((item, index)=>{
			htmlTaskList.innerHTML += tamplete(item, index)
		})
	}
	allDivTasks = document.querySelectorAll('.todo_wrapper')
	updateLocal()
}
displayTask()

btn.addEventListener('click', ()=>{

	arrTask.push(new objTask(input.value))
	displayTask()
	updateLocal()
	input.value = ''

console.log(arrTask)
	
})

console.log(allDivTasks)























































// const input = document.querySelector('#inputPoint')
// const button = document.querySelector('#buttonPoint')
// const htmlListTask = document.querySelector('.todo-wrapper')
// let arrTasks = []
// let allDivTodo = []

// !localStorage.keyTask ? arrTasks = [] : arrTasks = JSON.parse(localStorage.getItem('keyTask'))

// function Task(taskInfo){
// 	this.discription = taskInfo
// 	this.copmleted = false
// }
// const updateLocal = ()=>{
// 	localStorage.setItem('keyTask', JSON.stringify(arrTasks))
// }

// const template = ((item,index)=>{
// 	return ` 
// 	<div class="todo-allItems ${item.copmleted ? 'doneTask' : ''}">
//      	   <div class="discription">${item.discription}</div>
//                   <div class="todo-buttons">
//       		          <input onclick='completedTask(${index})' type="checkbox" class="btn-complete" ${item.copmleted ? 'checked' : ''}>
//       		          <button onclick='deleteTask(${index})' class="btn-delete">Delete</button>
//       	   </div>
//      </div>
// 	`
// })

// const completedTask = (index) =>{
// arrTasks[index].copmleted = !arrTasks[index].copmleted
// updateLocal()
// displayHtmlList()
// }

// const deleteTask = (index) =>{
// allDivTodo[index].classList.add('opacityTask')
// setTimeout(()=>{
//   arrTasks.splice(index, 1)
//   updateLocal()
//   displayHtmlList()
// }, 1000)


// }

// const filterTasks = ()=>{
//         const activeTasks = arrTasks.filter(item => item.copmleted == false)
// 	    const posiveTasks = arrTasks.filter(item => item.copmleted == true)
// 		arrTasks = [...activeTasks, ...posiveTasks]
	
	
// }

//  const displayHtmlList = ()=>{
// 	htmlListTask.innerHTML = ''
// 	filterTasks()
// 	arrTasks.forEach((item, index)=>{
// 		htmlListTask.innerHTML += template(item, index)
		
// 	})
//   allDivTodo = document.querySelectorAll('.todo-allItems')
//   console.log(allDivTodo)
// }
// displayHtmlList()

// button.addEventListener('click', ()=>{
// 	arrTasks.push(new Task(input.value))
// 	updateLocal()
// 	displayHtmlList()
// 	input.value = ''
// 	console.log(arrTasks)
// })

// console.log(arrTasks)



















































// const btn = document.querySelector('#buttonPoint')
// const input = document.querySelector('#inputPoint')
// let taskHtml = document.querySelector('.todo-wrapper')

// let tasksArr = []

// let divElements = []

// !localStorage.keyTasks ? tasksArr = [] : tasksArr = JSON.parse(localStorage.getItem('keyTasks'))

// function template(item, index){
//    return ` 
//      <div class="todo-allItems ${item.completed ? 'checked' : ''}">
//      	   <div class="discription">${item.discription}</div>
//      	<div class="todo-buttons">
//      		<input onclick='completeTask(${index})' type="checkbox" class="btn-complete" ${item.completed ? 'checked' : ''}>
//      		<button onclick='deleteTask(${index})' class="btn-delete">Delete</button>
//      	</div>
//      </div>
//     `
// }

// function Task(taskInfo){
// 	this.discription = taskInfo
// 	this.completed = false
// }

// function updateLocal() {
// 	localStorage.setItem('keyTasks', JSON.stringify(tasksArr))
	  
// }

// function displayTask(){
//     taskHtml.innerHTML = ''
 
//        if(tasksArr.length > 0){
//     	tasksArr.forEach((item, index) =>{
//         taskHtml.innerHTML += template(item, index)
//     	})
//     }
//       divElements = document.querySelectorAll('.todo-allItems')
//       console.log(divElements)
  
// }
// displayTask()

// const completeTask = (index)=>{
//   tasksArr[index].completed = !tasksArr[index].completed
//   if(tasksArr[index].completed){
//     divElements[index].classList.add('checked')
//   }else{
//   	divElements[index].classList.remove('checked')
//   }
//   updateLocal()
//   displayTask()
// }

// const deleteTask = index =>{
// 	divElements[index].classList.add('deletion')
// 	setTimeout(()=>{
// 	  tasksArr.splice(index, 1)
// 	  updateLocal()
// 	  displayTask()
// 	}, 1000)

// }


// btn.addEventListener('click', ()=>{
// 	tasksArr.push(new Task(input.value))
//     updateLocal()
//     input.value = ''
//     displayTask()
  

// })








































