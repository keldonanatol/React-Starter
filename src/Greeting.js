import "./Greeting.css"

function Greeting({language}) {
    //1a if (language === "es") {
    //   return <h1>Hola!</h1>;
    // }
    // return <h1>Hello!</h1>;
    //1b return <h1>{language === "es" ? "Hola" : "Hello"}!</h1>
     switch (language) {
       case "es":
         return <h1>Hola!</h1>;
       case "ch":
           return <h1>Nǐ hǎo!</h1>;
       case "fr":
         return <h1>Bonjour!</h1>;
       case "en":
         return <h1>Hello!</h1>;
       case "na":
        default:
         return <h1>Namaste!</h1>
     }
   }

   export default Greeting