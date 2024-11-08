import Navbar from "../../components/Navbar";
import FormRegister from "./FormRegister";

export default function Register() {
  return (
    <main className="w-screen h-screen bg-gradient-to-br from-[#0c041c] to-[#10041c]" >

      <Navbar />
      <section className=" flex items-center justify-center">
        <FormRegister />
      </section>
    
    </main>
  );
}
