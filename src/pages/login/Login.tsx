import FormLogin from "./FormLogin";
import Navbar from "../../components/Navbar";
import { validToken } from "../../components/Token.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();

  const tokenEffect = async () => {
    const result = await validToken();
    console.log(result);

    
    if (result?.error) {
      console.error(result.error);
      return;
    }

   
    if (result) {
      navigate("/inicio");
    }
  };

  useEffect(() => {
    tokenEffect();
  }, []);

  return (
    <>
      <main className="w-screen h-screen bg-gradient-to-br from-[#0c041c] to-[#10041c]">
        <Navbar />
        <section className="flex items-center justify-center">
          <FormLogin />
        </section>
      </main>
    </>
  );
}

export default Login;