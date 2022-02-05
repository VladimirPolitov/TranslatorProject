import React, {useState} from "react";
import Translator from "./Translator";
import "./App.css";


function App() {

    let [firstWord, setFirstWord] = useState("Слово")
    let [word, setWord] = useState("Слово")
    let [revers, setRevers] = useState("р")

    let setAreaWordR = () => {
        if (/^\p{sc=Cyrillic}*$/u.test(document.getElementById("areaWord").value)) {
            return (setRevers("р"),
                setWord(document.getElementById("areaWord").value))
        }
        else return alert("В введенном значении имеются символы не из русского алфавита. " +
            "Попробуйте изменить раскладку клавиатуры.")
    }

    let setAreaWordD = () => {
        if (/^\p{sc=Cyrillic}*$/u.test(document.getElementById("areaWord").value)) {
            return (setRevers("д"),
                setWord(document.getElementById("areaWord").value))
        }
        else return alert("В введенном значении имеются символы не из русского алфавита. " +
            "Попробуйте изменить раскладку клавиатуры.")
    }

    let setAreaWordV = () => {
        if (/^\p{sc=Cyrillic}*$/u.test(document.getElementById("areaWord").value)) {
            return (setRevers("в"),
                setWord(document.getElementById("areaWord").value))
        }
        else return alert("В введенном значении имеются символы не из русского алфавита. " +
            "Попробуйте изменить раскладку клавиатуры.")
    }

    let setAreaWordT = () => {
        if (/^\p{sc=Cyrillic}*$/u.test(document.getElementById("areaWord").value)) {
            return (setRevers("т"),
                setWord(document.getElementById("areaWord").value))
        }
        else return alert("В введенном значении имеются символы не из русского алфавита. " +
            "Попробуйте изменить раскладку клавиатуры.")
    }

    let setAreaWordO = () => {
        if (/^\p{sc=Cyrillic}*$/u.test(document.getElementById("areaWord").value)) {
            return (setRevers("п"),
                setWord(document.getElementById("areaWord").value))
        }
        else return alert("В введенном значении имеются символы не из русского алфавита. " +
            "Попробуйте изменить раскладку клавиатуры.")
    }

    let valueMaxHandler = (e) => setFirstWord(e.currentTarget.value)



    return <div className={"boxTranslator"}>
        <form>
            <input type={"text"}
                   onChange={valueMaxHandler}
                   value={firstWord}
                   id={"areaWord"}
                   className={"wordInput"}
            />
        </form>
        <i className='bx bxs-chevrons-down'></i>
        <Translator word={word} revers={revers}/>
        <div className={"buttonGroup"}>
            <button onClick={setAreaWordR} className={revers === "р"? "buttonOn" : "button"}>родительный</button>
            <button onClick={setAreaWordD} className={revers === "д"? "buttonOn" : "button"}>дательный</button>
            <button onClick={setAreaWordV} className={revers === "в"? "buttonOn" : "button"}>винительный</button>
            <button onClick={setAreaWordT} className={revers === "т"? "buttonOn" : "button"}>творительный</button>
            <button onClick={setAreaWordO} className={revers === "п"? "buttonOn" : "button"}>предложный</button>
        </div>
    </div>
}

export default App;

