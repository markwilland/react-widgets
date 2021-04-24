import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Html5Entities } from 'html-entities';

function Convert({language, text}) {
    const [translation, setTranslation] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
    const htmlEntities = new Html5Entities();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            }
        );
            setTranslation(data.data.translations[0].translatedText);
        }

        doTranslation();
    }, [language, debouncedText])

    return (
        <div>
            <h1 className="ui header">{htmlEntities.decode(translation)}</h1>
        </div>
    )
}

export default Convert;
