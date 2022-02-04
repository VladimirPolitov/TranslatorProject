import React from "react";
import "./App.css";

export default function App(props) {
    const word = props.word;

    const toCase = (str, choice) => {
        let strPub = {
                // правила для окончаний
                а: ["ы", "е", "у", "ой", "е"],
                "(ш/ж/к/ч)а": ["%и", "%е", "%у", "%ой", "%е"],
                "б/в/м/г/д/л/ж/з/к/н/п/т/ф/ч/ц/щ/р/х": ["%а", "%у", "%а", "%ом", "%е"],
                и: ["ей", "ям", "%", "ями", "ях"],
                ая: ["ой", "ой", "%", "ой", "ой"],
                ый: ["ого", "ому", "%", "ым", "ом"],
                й: ["я", "ю", "я", "ем", "е"],
                о: ["а", "у", "%", "ом", "е"],
                "с/ш": ["%а", "%у", "%", "%ом", "%е"],
                ы: ["ов", "ам", "%", "ами", "ах"],
                ь: ["я", "ю", "я", "ем", "е"],
                уль: ["ули", "уле", "улю", "улей", "уле"],
                "(ч/ш/д/т)ь": ["%и", "%и", "%ь", "%ью", "%и"],
                я: ["и", "е", "ю", "ей", "е"]
            },
            cases = {
                // номера для падежей, не считая Именительный
                р: 0,
                д: 1,
                в: 2,
                т: 3,
                п: 4
            },
            exs = {
                // исключения, сколько символов забирать с конца
                ц: 2,
                ок: 2
            },
            lastIndex,
            reformedStr,
            forLong,
            splitted,
            groupped,
            forPseudo;
        for (let i in strPub) {
            if (i.length > 1 && str.slice(-i.length) == i) {
                // для окончаний, длиной >1
                lastIndex = i;
                reformedStr = str.slice(0, -lastIndex.length);
                break;
            } else if (/[\(\)]+/g.test(i)) {
                // фича: группировка окончаний
                i.replace(/\(([^\(\)]+)\)([^\(\)]+)?/g, function(a, b, c) {
                    splitted = b.split("/");
                    for (let o = 0; o < splitted.length; o++) {
                        groupped = splitted[o] + c;
                        strPub[groupped] = strPub[i];
                        if (str.slice(-groupped.length) == groupped) {
                            for (
                                let x = 0, eachSplited = strPub[groupped];
                                x < eachSplited.length;
                                x++
                            ) {
                                eachSplited[x] = eachSplited[x].replace("%", splitted[o]);
                            }
                            reformedStr = str.slice(0, -groupped.length);
                            forPseudo = groupped;
                        }
                    }
                });
            } else {
                // дефолт
                lastIndex = str.slice(-1);
                reformedStr = str.slice(0, -(forPseudo || lastIndex).length);
            }
            if (/\//.test(i) && !/[\(\)]+/g.test(i) && new RegExp(lastIndex).test(i))
                forLong = i; // группированные окончания, разделающиеся слешем
            for (let o in exs) {
                // поиск исключений
                if (str.slice(-o.length) == o) reformedStr = str.slice(0, -exs[o]);
            }
        }
        return (
            reformedStr +
            strPub[forPseudo || forLong || lastIndex][cases[choice]].replace(
                "%",
                lastIndex
            )
        );
    };

    return (
        <div className="App">
            <span>{toCase(word, props.revers)}</span>
        </div>
    );
}