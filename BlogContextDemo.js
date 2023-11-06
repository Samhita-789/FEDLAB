import React,{useContext} from "react";
import {BlogContext} from './App';
 
function BlogContextDemo(){
    const binfo= useContext(BlogContext);
    return(
        <div>
            <p><h1> Topic:{ binfo.React.post}</h1></p>
            <p><h2>Author:{binfo.React.author}</h2></p>
        </div>

    );

}
export default BlogContextDemo;


//App.js
{/*const blogInfo={
  React:{
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS:{
    post:"NodeCommands",
    author:"Veena M"
  }

};
export const BlogContext =React.createContext(blogInfo);
export default function App(){
  return(
    <div className="App">
      <div>
        <h1> useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}><BlogContextDemo/></BlogContext.Provider>
      </div>
    </div>
  );
}  
*/}