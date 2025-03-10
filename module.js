export async function getData(data ,url) {
    let response = await fetch(url);
    
    if(response){
        data = await response.json();
        console.log(data);

        data.forEach((item) => {
            console.log(item.title)
        });
    }
    else
    {
        console.log('fetch data failed...!');
    }
}
