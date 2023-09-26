import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { useEffect, useState } from "react";


function OutputPanel({ bookName }) {
    const [bookSummary, setBookSummary] = useState('')
    useEffect(() => {
        setBookSummary('')
        const fetchData = async () => {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/gpt2",
                {
                    headers: { Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}` },
                    method: "POST",
                    body: JSON.stringify({
                        "inputs": `Summarize the book '${bookName}'`,
                        "parameters": {
                            "return_full_text": false,
                            "repetition_penalty": 100.0,
                            "max_new_tokens": 250,
                        }
                    }),
                }
            );
            const result = await response.json();
            if(result[0].generated_text.length > 0) {
                console.log('inside')
                setBookSummary(result[0].generated_text);
                return;
            }
            setBookSummary(' ')
            return;
        };

        fetchData();
    }, [bookName])

    return (
        <div className="p-3 h-[35em] w-full bg-slate-100 rounded-md overflow-auto border-2 border-slate-200">
            {bookSummary}
        </div>
    );
}

export default OutputPanel;