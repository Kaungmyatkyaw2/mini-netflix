import Image from "next/image";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";


const Login = () => {
  const router = useRouter();
  const signIn = async () => {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then(_ => router.push("/")).catch(_ => router.push('/login'));
  };



  return (
    <div className="w-full h-[100vh] relative bg-black bg-opacity-25 flex justify-center items-center">
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        }
        alt=""
        className="absolute left-4 top-4 cursor-pointer md:left-10 md:top-6"
        width={100}
        height={100}
      />
      <Image
        className="-z-10 opacity-60"
        src="https://rb.gy/p2hphi"
        layout="fill"
        alt="bg"
        objectFit="cover"
      />
      <button onClick={signIn} className="font-outfit flex items-center space-x-[10px] bg-black bg-opacity-75 px-[20px] py-[15px] rounded-md font-light tracking-widest">
        {" "}
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
        <span>Login in with Google</span>
      </button>
    </div>
  );
};

export default Login;
