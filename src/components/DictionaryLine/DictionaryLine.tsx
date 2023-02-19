import React, {FC, memo, useEffect, useRef, useState} from 'react';
import cl from './dictionaryLine.module.scss';
import {useAppSelector} from "../../hooks/redux";
import {trimExtraSpaces} from "../../utils/trimExtraSpaces";

interface IDictionaryLineProps {
    word: string,
    reading: string,
    translation: string,
}

const DictionaryLine: FC<IDictionaryLineProps> = memo(({reading,translation,word}) => {

    const [value, setValue] = useState<IDictionaryLineProps>({
        word, translation, reading
    })
    const [plugHeight, setPlugHeight] = useState({
        word: 0,
        reading: 0,
        translation: 0,
    })

    const hide = useAppSelector(state => state.hideReducer)

    const plug = useRef<HTMLDivElement>(null)

    const heightChanger = (type: number, text: string = '') => {

        if (!plug.current) return

        switch (type) {
            case 0:
                plug.current.innerText = text
                setPlugHeight({...plugHeight, word: plug.current.clientHeight})
                break;
            case 1:
                plug.current.innerText = text
                setPlugHeight({...plugHeight, reading: plug.current.clientHeight})
                break;
            case 2:
                plug.current.innerText = text
                setPlugHeight({...plugHeight, translation: plug.current.clientHeight})
                break;
            default:
                const heights = {
                    word: plugHeight.word,
                    reading: plugHeight.reading,
                    translation: plugHeight.translation,
                }
                plug.current.innerText = value.word
                heights.word = plug.current.clientHeight
                plug.current.innerText = value.reading
                heights.reading = plug.current.clientHeight
                plug.current.innerText = value.translation
                heights.translation = plug.current.clientHeight
                setPlugHeight(heights)
        }
    }

    useEffect(() => {
        heightChanger(3)
    }, [])

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>, type: number) => {
        heightChanger(type, e.currentTarget.value)
        switch (type) {
            case 0:
                setValue({...value, word: trimExtraSpaces(e.currentTarget.value)})
                break;
            case 1:
                setValue({...value, reading: e.currentTarget.value})
                break;
            case 2:
                setValue({...value, translation: e.currentTarget.value})
                break;
            default:
                setValue({...value, word: e.currentTarget.value})
        }
    }

    return (
        <div className={cl.line}>
            <textarea
                cols={1}
                rows={1}
                style={{height: plugHeight.word + 'px'}}
                className={cl.japanese + ' ' + cl.field + (hide.word ? ' ' + cl.hide : '')}
                value={value.word}
                onChange={(e) => changeHandler(e, 0)}
                placeholder={'слово'}
            />
            <textarea
                cols={1}
                rows={1}
                style={{height: plugHeight.reading + 'px'}}
                className={cl.japanese + ' ' + cl.field + (hide.reading ? ' ' + cl.hide : '')}
                value={value.reading}
                onChange={(e) => changeHandler(e, 1)}
                placeholder={'прочтение'}
            />
            <textarea
                cols={1}
                rows={1}
                style={{height: plugHeight.translation + 'px'}}
                className={cl.latin + ' ' + cl.field + (hide.translation ? ' ' + cl.hide : '')}
                value={value.translation}
                onChange={(e) => changeHandler(e, 2)}
                placeholder={'перевод'}
            />
            <div className={cl.plug}>
                <div ref={plug}></div>
            </div>
        </div>
    );
});

export default DictionaryLine;