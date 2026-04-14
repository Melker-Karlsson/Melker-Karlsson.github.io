import '../css/Erfarenhet.css'
import '../css/Date.css'

export default function Erfarenheter(){
    return(
        <div id="erfarenhetContainer">
            <h2>Erfarenheter</h2>
            
            <h3>Pineweb UF EkonomiAnsvarig <span className="date">| 08/2022 - 06/2023</span></h3>
            <ul>
                <li>Hanterade kostnader och intäkter</li>
                <li>Hanterade bokföring</li>
                <li>Skapade skickade fakturor</li>
            </ul>
            <br />

            <h3>Bemanningspoolen Bemanning <span className="date">| blandat 2024 - 2026</span></h3>
            <ul>
                <li>Montering</li>
                <li>Packning</li>
            </ul>

        </div>
    )
}