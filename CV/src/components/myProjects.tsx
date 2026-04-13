import Project from "./Project"
import '../css/MyProjects.css'

export default function MyProjects(){
    return(
        <div id="projectContainer">
            <Project projectName="FilmStudion" description="Fullstack projekt som tränar på att bygga API med en sammankoplad frontend klient. Projektet är en applikation där man kan registrera filmstudios och hyra samt lämna filmer. API:et använder JWT-tokens för authentication och authorization. Det finns två roller admin och filmstudio, där admins kan lägga till och ta bort filmer från databasen genom apiet." link="https://github.com/Melker-Karlsson/FilmStudion"/>
            <Project projectName="Banken med typer" description="Frontend projekt som tränar på att använda typescript. Aplikationen tillåter användaren att skapa bankkonton. konton kan sedan deposit, withdraw eller transfera pengar. Händelserna kan sedan vissas i en transaktion historik där man kan se datum summa och om det är pengar in eller ut." link="https://github.com/Melker-Karlsson/Banken-med-typer-och-objekt"/>
            <Project projectName="Auctions" description=".NET Webapp projekt som tränar på MVC mönstret och .NET. Aplikationen tillåter en att skapa ett konto där man kan lägga ut varor att sälja på auktion. Auktionen styrs av admin och resultatet av auktionen (status & slutpris) kan bara ändras av adminen." link="https://github.com/Melker-Karlsson/Auctions"/>
            <Project projectName="WordGame" description="en prototyp av en ordinlärningsplatform inspirerad av OrdSpelet men med funktionalitet där spelet adapterar till användarens prestation så att inlärningprocessen är så effektiv och bra som möjligt. OBS! Register och login sidorna är inte användbara just nu istället tildelas ett anonymt konto automatiskt." link="https://word-game-app-ep95t.ondigitalocean.app"/>
        </div>
    )
}