import 'bootstrap';
import './App.css';
import React,{ useState ,  useEffect} from 'react';


const App=()=> {

    const [quote, setQuote]=useState("");
    const [author, setAuthor]=useState("");
useEffect(()=>{
fetch("https://api.quotable.io/random")
.then(res=>res.json())
.then((quote)=>{
setQuote(quote.content);
setAuthor(quote.author);
console.log(quote)
})
},[]); 

let nuevo=()=>{
  fetch("https://api.quotable.io/random")
.then(res=>res.json())
.then((quote)=>{
setQuote(quote.content);
setAuthor(quote.author);
console.log(quote)
})
}

return(
  <body onload="getQuotes()">
<div className="App">
<div class="card carta">




<div class="card-body textos">
 <p class="textos">{quote} </p>
 <br></br><br></br>
<blockquote class="blockquote mb-0">
<p class="autores">{author}</p>
</blockquote>
<br></br>
<button onClick={nuevo} id="new-quote" class="btn btn-primary">Nueva Frase</button>
</div>
</div>
</div>
</body>
) 

}
   
 




export default App;