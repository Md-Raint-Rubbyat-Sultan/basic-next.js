import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
  title: "Home",
  description: "This is home page",
};

const Home = () => {
  // throw new Error();

  // const router = useRouter();

  // must be a clint route to use use router
  return (
    <main className="">
      <h1 className="text-center text-5xl">Hello</h1>
      <button>
        <Link href={"contact"}>contact</Link>
      </button>
      {/* <button onClick={() => router.push("/dashboard")}>dashboard</button> */}
      <div className="w-3/4 mx-auto">
        <Image
          src={
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
          }
          alt="random"
          width={1080}
          height={720}
          style={{ width: "50%", height: "100%", margin: "0 auto" }}
        />
      </div>
    </main>
  );
};

export default Home;
