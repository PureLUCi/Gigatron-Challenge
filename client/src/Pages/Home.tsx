const Home = () => {
    return (
        <div className="w-screen h-screen bg-black-900 flex flex-col items-center justify-center">
            <h1 className="title gradient">Image Resizer</h1>
            <div className="w-[343px] h-[136px] bg-black-800 relative rounded-md bordered my-10 flex flex-col gap-[10px] items-center justify-center">
                <input onChange={()=>alert("AAAA")} className="w-[343px] h-[136px] cursor-pointer opacity-0 absolute" type="file" name="" id="" />
                <h1 className="text-black-500 text-lg">Drop your image here</h1>
                <p className="text-black-400 text-sm">Or click to select</p>
            </div>
            <p className="text-black-500">Project created by <span className="text-black-400">Luka Igrutinovic</span> for Gigatron</p>
            <a href="" className="flex gap-[14px] items-center pt-3">
                <img src="github.svg" alt="" />
                <p className="underline text-black-500">Check out the project's code</p>
            </a>
        </div>
    )
}

export default Home;