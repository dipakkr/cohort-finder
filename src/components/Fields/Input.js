export const Input = (props) => {
    
    if(props){
        return (
            <div class={`p-2 w-${props.width ? props.width : 'full'}`}>
                <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-400">
                        {props.label}
                    </label>
                    <input
                        type={props.type}
                        id="name"
                        name={props.name}
                        autoComplete="off"
                        onChange={(e)=> props.handleChange(e)}
                        class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
        );
    }

    return ''
    
};
