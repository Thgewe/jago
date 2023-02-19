import React from 'react';
import {useParams} from "react-router-dom";
import DictionaryLine from "../DictionaryLine/DictionaryLine";

const Dictionary = () => {

    const params = useParams()

    return (
        <div>
            <DictionaryLine word={'海の心海の心海の心海の心海の心海の心海の心海の心海の心海の心海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря, морское сердце, сердце из моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
            <DictionaryLine word={'海の心'} reading={'うみのこころ'} translation={'сердце моря'} />
        </div>
    );
};

export default Dictionary;