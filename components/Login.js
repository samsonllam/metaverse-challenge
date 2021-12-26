import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate, isAuthenticated, user } = useMoralis();

    return (
        <div className="bg-black relative">
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-6">
                <Image
                    className="object-cover rounded-full"
                    src="https://avatars.githubusercontent.com/u/17029792"
                    height={200}
                    width={200}
                />
                <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse" onClick={() => authenticate()}>Login to the METAVERSE</button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src="http://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}

export default Login;
