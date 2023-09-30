import { HuggingFaceStream, StreamingTextResponse } from "ai";
import { HfInference } from "@huggingface/inference";
import { useEffect, useState } from "react";


const hf = new HfInference(process.env.REACT_APP_HF_API_KEY);

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
            const response = await hf.textGeneration({
                model: 'mistralai/Mistral-7B-v0.1',
                inputs: `Summarize the book "${bookName}".`,
                parameters: {
                    max_new_tokens: 250,
                    return_full_text: false,
                },
                options: {
                    use_cache: true
                }
            })

            setIsLoading(false);

            console.log(response)

            if(response.generated_text.length > 0){
                console.log(response.generated_text.includes("\n"))
                setBookSummary((response.generated_text).trim().replace(/\n/g, '<br>'))
                return;
            }

            setBookSummary(' ')
            return;
        }

        fetchData();
    }, [bookName])

    return (
        <div className="p-3 h-[35em] w-full bg-slate-100 rounded-md overflow-y-auto border-2 border-slate-200">
            {
                isLoading ? (
                    <p className="font-medium text-gray-700">Fetching Data..</p>
                ) : (
                    <>
                        <p className="leading-7" dangerouslySetInnerHTML={{ __html: bookSummary }} ></p>
                        <p className="mt-3 text-red-500 font-medium">*Note: The text is AI Generated</p>
                    </>
                )
            }
        </div>
    );
}

export default OutputPanel;