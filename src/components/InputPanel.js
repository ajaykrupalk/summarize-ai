function InputPanel() {
    return (
        <div className="space-y-7">
            <h1 className="text-2xl font-bold">Summarize a Book</h1>
            <div className="space-y-3 w-full">
                <label for="bookName" className="text-sm font-medium">Book Name</label>
                <input type="text" name="bookName" id="bookName" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" placeholder="E.g. The Intelligent Investor" />
                <button type="submit" className="block text-sm bg-black text-white p-2 rounded-lg font-medium w-36 m-auto">Summarize</button>
            </div>
        </div>
    );
}

export default InputPanel;