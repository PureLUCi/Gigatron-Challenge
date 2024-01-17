import { SendPostImage } from '../../Hooks/useFetch';
import { useState } from 'react';

const Home = () => {

    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [notificationMessage, setNotificationMessage] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");
    const [uploading, setUploading] = useState<boolean>(false);

    const UploadImage = (e: any) => {
        setUploading(true);
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        SendPostImage("upload", formData).then((response) => {
            if (response.status != 200) {
                setShowNotification(true);
                setNotificationMessage("File upload failed, is it an image?");
                setUploading(false);
            }
            else {
                setShowNotification(true);
                setNotificationMessage("Image uploaded successfully!");
                setImageURL(response.imageURL);
                setUploading(false);
            }
        });
    }


    return (
        <div className="w-screen h-screen bg-black-900 flex flex-col items-center justify-center relative">
            <h1 className="title gradient">Image Resizer</h1>
            {
                showNotification &&
                <div className={`absolute top-[64px] flex flex-col items-center gap-[10px] ${notificationMessage.includes("failed") ? "text-red" : "text-green"} bg-black-800 p-10 rounded-md fade-in`}>
                    <h1 className='text-lg'>{notificationMessage}</h1>
                    {
                        notificationMessage.includes("successfully") &&
                        <a href={imageURL} target="_blank" className="underline text-black-400">Image URL</a>
                    }
                </div>
            }

            <div className="w-[343px] h-[136px] bg-black-800 relative rounded-md bordered my-10 flex flex-col gap-[10px] items-center justify-center">
                <input onInput={UploadImage} className="w-[343px] h-[136px] cursor-pointer opacity-0 absolute" type="file" />
                <h1 className="text-black-500 text-lg">Drop your image here</h1>
                <p className="text-black-400 text-sm">Or click to select</p>
                {uploading&&<p className='text-green'>Uploading...</p>}

            </div>
            <p className="text-black-500">Project created by <span className="text-black-400">Luka Igrutinovic</span> for Gigatron</p>
            <a href="https://github.com/PureLUCi/Gigatron-Challenge" target="_blank" className="flex gap-[14px] items-center pt-3">
                <img src="github.svg" alt="" />
                <p className="underline text-black-500">Check out the project's code</p>
            </a>
        </div>
    )
}

export default Home;