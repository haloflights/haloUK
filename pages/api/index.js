// // export default function handler(request  , response){
// //     const {method} = request;
// //     console.log("method" , method);
// //     response.status(200).json({name : "Home Page"});
// //
// //
// //     switch(method) {
// //
// //         case "GET" :
// //             response.status(200).json({name : "Get Request succesfull"});
// //         break;
// //
// //         case "POST":
// //             response.status(200).json({name: "POST request successfull"});
// //         break;
// //
// //         default:
// //             response.setHeader('Allow', ['GET' , 'POST'])
// //             response.status(405).end(`Method ${method} Not Allowed`);
// //     }
// // }

// import {NextResponse} from "next/server";

// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
// export async function GET(){

//     const res = await fetch(DATA_SOURCE_URL);
//     let todos:Todo[] = await res.json();
//     return NextResponse.json(todos);

// }

