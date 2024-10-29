import Navbar from "../../components/Navbar";
import FormRegister from "./FormRegister";

export default function Register() {
  return (
    <main className="w-screen h-screen" >

      <Navbar />
      <section className=" flex items-center justify-center">
        <FormRegister />
      </section>
    
    </main>
  );
}
