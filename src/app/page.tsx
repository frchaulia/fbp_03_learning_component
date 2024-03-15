import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery";
import MyProfile from "@/components/myprofile";
import MyProfile2 from "@/components/myprofile2";


export default function Nine() {
  return (
    <div>
        <MyProfile2 />
    </div>
  );
}

// export default function Home() {
//   return (
//     <section>
//       <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
//       <hr />
//       <Gallery />
//       <hr />
//       <TodoList />
//     </section>
//   );
// }

// export default function Bio() {
//   return (
//     <>
//     {/* Hello world */}
//     <div className="intro">
//       <h1>Selamat datang di website saya</h1>
//     </div>
//     <p className="summary">
//       Anda dapat membaca uneg-unegku disini. <br /> <br /> 
//       <b> Juga ada <i>foto</i> </b> {" "} ilmuwan!
//     </p>
//   </>
//   );
// }

// export default function Page() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h1>Ilmuan yang Luar Biasa</h1>
//       <Gallery />
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h1>Ilmuan yang Luar Biasa</h1>
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <div style={{ flex: 1 }}>
//           <Profile />
//         </div>
//         <div style={{ flex: 1 }}>
//           <Profile />
//         </div>
//         <div style={{ flex: 1 }}>
//           <Profile />
//         </div>
//       </div>
//     </div>
//   );
// }

