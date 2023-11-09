
 const posts =[
    {title:'post1',body:'this is post1'},
 {title:'post2',body:'this is post2'}
 ];

 function getPost(){
     setTimeout(()=>{
         let output='';
         for(let i=0;i<posts.length;i++){
             output +=`<li>${posts[i].title}</li>`
         }
         
         document.body.innerHTML = output
     },1000)
 }
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const err = false;
            if(!err){
                resolve()

                }
                else{
                    reject('something error')
                }

            
        },2000)

    })
 }
 
 const user ={
    username :'Yash',
    lastactivityTime : '15th of jan',
          

}
function updatelastactivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         user.lastactivityTime = new Date(). getTime();
         resolve(user.lastactivityTime);
        },1000)
    })
}
function userupdatePost () {
Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}),updatelastactivityTime()])
    .then(([createpostresolve,updateuserresolve])=>{
              console.log(updateuserresolve)
    })
    .catch(err=> console.log(err))


 }
 userupdatePost()

 function deleteBlog(){
    return new Promise((resolve, reject) => {
         setTimeout( () => {
             if( posts.length!== 0){
                 const poppedElement  =  posts.pop();
                 resolve(poppedElement);
             } else {
                 reject("ERROR")
             }
         }, 1000)
     })
 }
createPost().then(()=>{
    getPost()
 deleteBlog().then(()=>{
    getPost()
 }) 
 })
.catch(err=>console.log(err))