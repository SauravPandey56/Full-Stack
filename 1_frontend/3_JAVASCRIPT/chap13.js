// // let btn = document.querySelector("button");

// // btn.addEventListener("click", async () => {
// //     let fact = await getFacts();
// //     console.log(fact);
// //     let p = document.querySelector("#result");
// //     p.innerText = fact;
// // });

// // let url = "https://catfact.ninja/fact";

// // async function getFacts() {
// //     try {
// //         let res = await axios.get(url);
// //         return res.data.fact;
// //     } catch (e) {
// //         console.log("error - ", e);
// //         return "No fact found";
// //     }
// // }

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (e) {
//         console.log("error - ", e);
//         return "/";
//     }
// }


// Sending Headers 

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch (err) {
//         console.log(err);
//     }
// }
                       
               

                         //[ Activity using Query Strings]

// API URL
let url = "http://universities.hipolabs.com/search?country=";

// Select the search button
let btn = document.querySelector("button");

// Run when the user clicks the button
btn.addEventListener("click", async () => {

    // Get country and state entered by the user
    let country = document.querySelector("#country").value;
    let state = document.querySelector("#state").value;

    // Get all colleges from the API for the given country
    let colArr = await getColleges(country);

    // Filter colleges according to the state
    let filteredColleges = colArr.filter((col) => {
        return col["state-province"] &&
               col["state-province"].toLowerCase() === state.toLowerCase();
    });

    // Display the filtered colleges
    show(filteredColleges);
});


// Function to display colleges on the webpage
function show(colArr) {

    // Select the list where colleges will be displayed
    let list = document.querySelector("#list");

    // Clear previous results
    list.innerText = "";

    // Loop through all colleges
    for ( col of colArr) {

        // Create a new list item
        let li = document.createElement("li");

        // Put college name inside the list item
        li.innerText = col.name;

        // Add the list item to the webpage
        list.appendChild(li);
    }
}


// Function to fetch colleges from the API
async function getColleges(country) {
    try {

        // Send GET request to the API
        let res = await axios.get(url + country);

        // Return the data received from the API
        return res.data;

    } catch (e) {

        // Handle error if API request fails
        console.log("error : ", e);

        // Return an empty array
        return [];
    }
}