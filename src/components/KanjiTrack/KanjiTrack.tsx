import React, {FC} from 'react';
import cl from './kanjiTrack.module.scss';
import {NavLink} from "react-router-dom";


interface IKanjiTrackProps {
    filter: string,
}
const KanjiTrack: FC<IKanjiTrackProps> = ({filter}) => {

    const symbols: string[] = [
        // '気', '分', '良', '危', '奇', '戸', '友', '問', '四', '子', '死', '知', '仕',
        // '入', '居', '戸', '事', '行', '高', '校', '光', '声', '日', '一', '国', '人',
        // '年', '大', '十', '二', '本', '中', '長', '出', '三', '時', '見', '月', '後',
        // '前', '生', '五', '間', '上', '東', '四', '今', '金', '九', '学', '円', '外',
        // '六', '八', '来', '下', '小', '七', '山', '話', '女', '北', '午', '百', '書',
        // '先', '名', '川', '千', '水', '半', '男', '西', '電', '語', '土', '聞', '食',
        '何', '車', '南', '万', '毎', '白', '天', '母', '火', '右', '読', '左', '休',
        '父', '雨', 'あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ', 'さ',
        'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね',
        'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ',
        'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん',
    ]

    const wheelHandler = (e: React.WheelEvent) => {
        if (e.deltaY > 0) {
            e.currentTarget.scrollLeft += 30;
        } else {
            e.currentTarget.scrollLeft -= 30;
        }
    }

    return (
        <div className={cl.container} onWheel={wheelHandler}>
            <ul className={cl.track}>
                {symbols.filter((char) => char.includes(filter)).map((char) =>
                    <li key={char}><NavLink to={char}>{char}</NavLink></li>
                )}
                {/*<li><NavLink to={'者'}>者</NavLink></li>*/}
                {/*<li><NavLink to={'間'}>間</NavLink></li>*/}
                {/*<li><NavLink to={'気'}>気</NavLink></li>*/}
                {/*<li><NavLink to={'分'}>分</NavLink></li>*/}
                {/*<li><NavLink to={'良'}>良</NavLink></li>*/}
                {/*<li><NavLink to={'戸'}>戸</NavLink></li>*/}
                {/*<li><NavLink to={'友'}>友</NavLink></li>*/}
                {/*<li><NavLink to={'年'}>年</NavLink></li>*/}
                {/*<li><NavLink to={'八'}>八</NavLink></li>*/}
                {/*<li><NavLink to={'水'}>水</NavLink></li>*/}
                {/*<li><NavLink to={'毎'}>毎</NavLink></li>*/}
                {/*<li><NavLink to={'天'}>天</NavLink></li>*/}
                {/*<li><NavLink to={'母'}>母</NavLink></li>*/}
                {/*<li><NavLink to={'何'}>何</NavLink></li>*/}
                {/*<li><NavLink to={'先'}>先</NavLink></li>*/}
                {/*<li><NavLink to={'前'}>前</NavLink></li>*/}
                {/*<li><NavLink to={'光'}>光</NavLink></li>*/}
                {/*<li><NavLink to={'日'}>日</NavLink></li>*/}
            </ul>
        </div>
    );
};

export default KanjiTrack;