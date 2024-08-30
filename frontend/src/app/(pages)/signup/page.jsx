import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <section
      className="py-20 md:pt-20 bg-white"
      // style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
    >
      <div className="max-w-sm mx-auto py-10 bg-white rounded-xl">
        {/* <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2> */}
        <h2 className="text-3xl font-bold text-center m-8">CREATE ACCOUNT</h2>
        <p>
          By clicking Log In, you agree to our terms. learn how we process your
          data in our Privacy and Policy and Cookie Policy
        </p>
        <form
          className="flex flex-col"
          // onSubmit={handleSubmit}
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required={true}
            className="p-2 m-2 font-md"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="p-2 m-2 font-md"
            required={true}
            // onChange={(e) => setPassword(e.target.value)}
          />
          {/* {isSignUp && ( */}
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            className="p-2 m-2 font-md"
            required={true}
            // onChange={(e) => setEmail(e.target.value)}
          />
          {/* )} */}

          <button className="bg-sky-500 p-2 rounded-md" type="submit">
            Sunmit
          </button>
          {/* <p>{error}</p> */}
        </form>
        <hr />
      </div>
    </section>
  );
};

export default Signup;
