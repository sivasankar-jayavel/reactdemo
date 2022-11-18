
import './App.css';
// Type 1-common 1 image multiple users-/
// function App() {
//   return (
//     <div className="App">
//      <User name="Siva"/>
//      <User name="Sankar"/>
//      <User name="Sai"/>
//     </div>
//   );
// }
// //user components (declaration)
// function User(props){
// //  console.log(props,typeof props);
//   return(
//     <section>
//       <img className="user-p-pic"
//       src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
//       alt='' />
//       <h1 className="user-name">Hello,{props.name}💕</h1>
//     </section>
//   );
// }
// -/

// Type 2 - Different image different users
// APP COMPONENT = View + Logic (Declaration)
// function App() {
//   return (
//     <div className="App">
//       <User 
//       name="siva"
//       pic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
//       />
//       <User
//        name="sankar"
//        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
//        />
//        <User
//        name="sai"
//        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyI2cKLFjYUDIkO7IwCZ9abtiWre6_eI8ZiQ&usqp=CAU"
//        />
//     </div>
//   );
// }

// //user components (declaration)
// function User(props){
// //   console.log(props,typeof props);
//   return(
//     <section>
//       <img className="user-p-pic"
//        src = {props.pic}
//        alt = {props.name}
//       />
//       <h1 className="user-name">Hello,{props.name}💕</h1>
//       </section>
//   );
// }

// Type 3-(Method 1)-Different image different users simple methods object Destructuring by using variable declaration / array of object
// function User(props){
//   console.log(props,typeof props);
// const{pic,name}=props;//Object Destructuring
//    return (
//       <section>
//     <img className="user-p-pic"src={pic} alt={name} />
//    <h1 className="user-name">Hello-<span className='user-fname'>{name}</span>💕</h1>
//    </section>
//     );
//   }

// Type 3-(Method 2)-object is used parameter as function
// function User({pic,name}){
//   return (
//     <section>
//   <img className="user-p-pic"src={pic} alt={name} />
//  <h1 className="user-name">Hello-<span className='user-fname'>{name}</span>💕</h1>
//  </section>
//   );
// }


//Type 4 - Most imp method - Convert a loop - 
// function App(){
//   const names = ["Suren","Saravana","Anu"];
//   const users = [  //to store array of Objects
//         {
//           name : "Suren",
//           pic : "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
//         },
//         {
//           name : "Saravana",
//           pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
//         },
//         {
//           name : "Anu",
//           pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyI2cKLFjYUDIkO7IwCZ9abtiWre6_eI8ZiQ&usqp=CAU"
//         },
//       ]; 
  
//   return (
// //user LOOP method Here
//     <div className = "App">
//        {users.map((usr)=>(<User name={usr.name} pic={usr.pic}/>))}  

//     </div>
//   );
// }

//   function User({pic,name}){
//   return (
//     <section>
//   <img className="user-p-pic"src={pic} alt={name} />
//  <h1 className="user-name">Hello-<span className='user-fname'>{name}</span>💕</h1>
//  </section>
//   );
// }


function App(){
  const users = [  //to store array of Objects
        {
         mname : "Black Panther",
         mrate : "6.8/10",
         mcont : "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
         mpic  : "https://w0.peakpx.com/wallpaper/340/298/HD-wallpaper-black-panther-animals-forest-hero-marvel-movie-super-thumbnail.jpg"
        },
        {
          mname : "Black Adam",
          mrate : "7.5/10",
          mcont : "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off from Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). It is directed by Jaume Collet-Serra, written by Adam Sztykiel, Rory Haines, and Sohrab Noshirvani, and produced by Johnson.",
          mpic  : "https://picfiles.alphacoders.com/576/thumb-576472.jpg"
        },
        {
          mname : "Justice League",
          mrate : "8.6/10",
          mcont : "Justice League is a 2017 American superhero film based on the DC Comics superhero team of the same name. Produced by Warner Bros. Pictures, DC Films, RatPac-Dune Entertainment,[N 2] Atlas Entertainment, and Cruel and Unusual Films and distributed by Warner Bros. Pictures, it is the fifth installment in the DC Extended Universe (DCEU).",
          mpic  : "https://wallpaper.dog/large/10736945.jpg"
        },
        {
          mname : "Iron Man",
          mrate : "9.2/10",
          mcont : "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963).",
          mpic  : "https://i.pinimg.com/originals/c0/37/2f/c0372feb0069e6289eb938b219e0b0a1.jpg"
          
        }

      ]; 
  
  return (

//user LOOP method Here
    <div className = "App" >
       {users.map((usr)=>(<User mname={usr.mname} mpic={usr.mpic} mrate={usr.mrate} mcont={usr.mcont}/>))}  
    </div>
  );
}

  function User({mpic,mname,mrate,mcont}){
  return (
  <section>
  <img className="user-p-pic"src={mpic} alt={mname} />
 <h3 className="user-name">{mname}<span className='user-starrate'>&nbsp;&#11088;</span><span>&nbsp;{mrate}&nbsp;💕</span></h3>
 <p className="mcontents">{mcont}</p>
 </section>
  );
}


export default App;
