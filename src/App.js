import React, {useState} from "react";
import Translator from "./Translator";
import "./App.css";


function App() {

    let [firstWord, setFirstWord] = useState("Слово")
    let [word, setWord] = useState("Слово")
    let [revers, setRevers] = useState("р")

    let setAreaWordR = () => {
        return (setRevers('р'),
            setWord(document.getElementById('areaWord').value))
    }

    let setAreaWordD = () => {
        return (setRevers('д'),
            setWord(document.getElementById('areaWord').value))
    }

    let setAreaWordV = () => {
        return (setRevers('в'),
            setWord(document.getElementById('areaWord').value))
    }

    let setAreaWordT = () => {
        return (setRevers('т'),
            setWord(document.getElementById('areaWord').value))
    }

    let setAreaWordO = () => {
        return (setRevers('п'),
            setWord(document.getElementById('areaWord').value))
    }

    let valueMaxHandler = (e) => setFirstWord(e.currentTarget.value)


    return <div className={'boxTranslator'}>
        <div>
            <input type={'string'} onChange={valueMaxHandler} value={firstWord} id={'areaWord'}/>
        </div>
        <Translator word={word} revers={revers}/>
        <button onClick={setAreaWordR}>родительный</button>
        <button onClick={setAreaWordD}>дательный</button>
        <button onClick={setAreaWordV}>винительный</button>
        <button onClick={setAreaWordT}>творительный</button>
        <button onClick={setAreaWordO}>предложный</button>
    </div>
}

export default App;

