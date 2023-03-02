let url = "https://openapi.programming-hero.com/api/phones?search=iphone";

let theApi =() =>{
    fetch(url)
      .then((res) => res.json())
      .then((data) => dataApi(data.data));

    let dataApi = (data) => {
        for(let i of data){
            console.log(i);
        }
    }
}
theApi();