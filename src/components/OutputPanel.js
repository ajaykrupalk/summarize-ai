import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { useEffect, useState } from "react";


function OutputPanel({ bookName }) {
    const [bookSummary, setBookSummary] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (bookName === '') {
            setBookSummary('');
            return;
        }

        setIsLoading(true)
        const fetchData = async () => {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-v0.1",
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "inputs": `Summarize the book '${bookName}'`,
                        "parameters": {
                            "return_full_text": false,
                            "max_new_tokens": 250,
                            "max_time": 120,
                            "repetition_penalty": 10.0,
                            "do_sample": true
                        },
                        "options": {
                            "use_cache": false
                        }
                    }),
                }
            );

            const result = await response.json();
            setIsLoading(false);
            
            if (result[0].generated_text.length > 0) {
                console.log('inside')
                setBookSummary(result[0].generated_text);
                return;
            }

            setBookSummary('')
            return;
        };

        fetchData();
    }, [bookName])

    return (
        <div className="p-3 h-[35em] w-full bg-slate-100 rounded-md overflow-y-auto border-2 border-slate-200">
            {
                isLoading ? (
                    <p className="font-medium text-gray-700">Fetching Data..</p>
                ) : (
                    <>
                        <p className="leading-7">{bookName} {bookSummary}</p>
                        <p className="mt-3 text-red-500 font-medium">*Note: The text is AI Generated</p>
                    </>
                )
            }
        </div>
    );
}

export default OutputPanel;