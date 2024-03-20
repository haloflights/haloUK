export default function handler(request  , response){
    response.status(200).json({name : "hotel Page"});
}
//
// const posts = () => {
//     const [data, setData] = useState(null);
//
//     useEffect(() => {
//         const fetchDataFromApi = async () => {
//             try {
//                 const headers = {
//                     'X-RapidAPI-Key': '2c996c63e3msh1ef4b7225029d1ep110dcejsnd463bb377a97',
//                     'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
//                 };
//
//                 // const params = {
//                 //     key1: 'value1',
//                 //     key2: 'value2',
//                 //     // Add any other parameters as needed
//                 // };
//
//                 const result = await fetchData('https://sky-scrapper.p.rapidapi.com/api/v1/checkServer', headers);
//                 setData(result);
//             } catch (error) {
//                 // Handle error as needed
//             }
//         };
//
//         fetchDataFromApi();
//     }, []);}
