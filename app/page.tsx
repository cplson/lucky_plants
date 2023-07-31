import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-white rounded flex flex-col mt-16 lg:mt-32 lg:flex-row sm:w-4/5 mx-auto max-w-4xl">
      {/* <button className='hover:cursor-pointer hover:border-slate-800 border-2 my-4'>Shop Now</button> */}
      <div className="border-red-600 p-4 sm:pt-8 sm:px-8 z-10 lg:max-w-sm lg:my-16 lg:pr-0">
        <h1 className="font-bold text-3xl sm:text-5xl leading-tight ">
          Think <span className="text-green-500">Green</span> and{" "}
          <span className="text-green-500">Plant</span>
        </h1>
        <p className="py-4 mb-4 sm:text-lg font-light text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos
          eaque odit autem fuga quaerat sunt distinctio ipsum!
        </p>
        {/* <hr/> */}
        <Link
          href={"/shop"}
          className="px-4 py-2 border-slate-600 text-xl border-2
          text-slate-600 font-semibold hover:border-green-700 
          focus:border-green-700 hover:text-green-700 focus:text-green-700 
          hover:bg-slate-50 focus:bg-slate-50"
        >
          <span>Shop Now</span>
        </Link>
      </div>
      <div className="sm:-mt-16 lg:mt-0 z-0 lg:min-width-md">
        <Image
          className={"w-full h-full object-cover"}
          width={1000}
          height={751}
          src={"/assets/landing_plant.png"}
          alt="landing plant"
        />
      </div>
    </div>
  );
}
