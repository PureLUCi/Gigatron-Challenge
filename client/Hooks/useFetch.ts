let API_LINK = "http://localhost:1313/api/";

export const SendPostImage = async(endpoint:string,toPost:FormData) =>{
    const response = await fetch(API_LINK+endpoint,{
        method: 'POST',
        body: toPost,
        headers:{
            'Accept': 'application/json'
        },
    });

    return response.json();
}