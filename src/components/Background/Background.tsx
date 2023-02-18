import React, {FC, memo, PropsWithChildren, useEffect, useState} from 'react';
import cl from './background.module.scss';
import {shuffleAndSlice} from "../../utils/shuffleAndSlice";

// TODO: benchmark

const Background: FC<PropsWithChildren> = memo(() => {

    const maxWidth = 1440
    const resizeBreakpoint = 576

    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth > maxWidth ? maxWidth : window.innerWidth
    const windowCoefficient = Math.floor(Math.max(windowWidth, windowHeight) / 400)
    const verticalAmount = windowWidth > resizeBreakpoint ? Math.floor(windowWidth / 100) - 2 : Math.floor(windowWidth / 100) + 2
    const horizontalAmount = windowWidth > resizeBreakpoint ? Math.floor(windowHeight / 100) - 2 : Math.floor(windowHeight / 100) + 2
    const minDuration = 40
    const additionDurationMax = 30 + windowCoefficient * 15
    const amount = horizontalAmount + verticalAmount

    const symbols: string[] = [
        '気', '分', '良', '危', '奇', '戸', '友', '問', '四', '子', '死', '知', '仕',
        '入', '居', '戸', '事', '行', '高', '校', '光', '声', '日', '一', '国', '人',
        '年', '大', '十', '二', '本', '中', '長', '出', '三', '時', '見', '月', '後',
        '前', '生', '五', '間', '上', '東', '四', '今', '金', '九', '学', '円', '外',
        '六', '八', '来', '下', '小', '七', '山', '話', '女', '北', '午', '百', '書',
        '先', '名', '川', '千', '水', '半', '男', '西', '電', '語', '土', '聞', '食',
        '何', '車', '南', '万', '毎', '白', '天', '母', '火', '右', '読', '左', '休',
        '父', '雨', 'あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ', 'さ',
        'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね',
        'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ',
        'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん',
    ]

    const [stripes, setStripes] = useState<any[]>([])

    useEffect(() => {
        const arr = []
        const length = windowCoefficient * 14
        for (let i = 0; i < amount; i++) {
            arr.push(shuffleAndSlice(symbols, length))
        }
        setStripes([...arr])
    }, [])

    return (
        <div className={cl.bg}>
            <div className={cl.container}>
                {stripes.map((stripe, i) =>
                    <div
                        key={i}
                        className={cl.stripe + (i > (horizontalAmount - 1) ? ' ' + cl.vertical : '')}
                        style={{
                            zIndex: (i + 1) % 5,
                            animationDirection: Math.random() % 0.5 > 0.25 ? 'reverse' : 'normal',
                            animationDuration: minDuration + (Math.random() * additionDurationMax) + 's',
                            left: i > (horizontalAmount - 1) ? ((i - horizontalAmount) / verticalAmount) * 100 + (1 / verticalAmount * 100 / 5) + '%' : 0,
                            top: i > (horizontalAmount - 1) ? 0 : (i / horizontalAmount) * 100 + (1 / horizontalAmount * 100 / 5) + '%',
                        }}
                    >
                        {[...stripe, ...stripe]}
                    </div>
                )}
            </div>
        </div>
    );
});

export default Background;