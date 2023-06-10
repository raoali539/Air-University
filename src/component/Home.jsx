import React from "react";
import airUniBg from "../assets/airUniBg.png";
import { HiAtSymbol } from "react-icons/hi";
import { BsKey } from "react-icons/bs";

const Home = () => {
  return (
    <div className="">
      <img
        src={airUniBg}
        alt="/"
        className="fixed h-full w-screen object-cover z-10"
      />

      <div className="absolute container mx-8 bg-[#FBF8F3] mt-4 border border-white h-[12rem] md:h-[12rem] w-screen z-20 bg-opacity-70 ">
        <div className="">
          <div className="bg-[#0D68AC] h-[3rem] flex justify-center items-center mx-auto">
            <p className=" text-white text-sm md:text-2xl">
              Welcome to Air University Online Admission System (Multan Campus)
            </p>
          </div>
          <div className="flex justify-center">
            <h1 className="md:text-3xl text-sm bg-[#0D68AC] h-[3rem] w-[26rem] flex justify-center items-center mt-2 rounded-lg text-white">
              ADMISSION OPEN (FALL 2023)
            </h1>
          </div>
          <div className="py-1 flex justify-center">
            <h1 className="text-red-600 text-xl">
              <a href="">For Apllying Islamabad Campus Click Here</a>
            </h1>
          </div>
          <div className="py-1 flex justify-center">
            <h1 className="text-red-600 text-xl">
              <a href="">For Apllying Kampra Campus Click Here</a>
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute container mx-8 top-[14rem] grid md:grid-cols-2 grid-cols-1 w-screen h-[22rem] rounded-lg z-20 gap-3">
        <div className="1/2 h-[22rem] border border-white ">
          <div className="bg-[#0D68AC] flex justify-between items-center h-[3rem] px-3 text-white">
            <p>Registered Users Log In Here</p>
            <p>SignUp Here</p>
          </div>
          <div className="h-[19rem] 1/2  bg-[#FBF8F3] bg-opacity-70">
            <h1 className="text-[#0D68AC] text-xl py-2 px-5">
              Log In Information :{" "}
            </h1>
            <div className="1/2 h-[15rem] border border-red-300 ">
              <div className="flex h-8 w-60 mx-auto mt-1 bg-slate-300">
                <div className="border border-black w-8 h-8 text-black-200 flex items-center justify-center">
                  <HiAtSymbol />
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="border text-center  border-black w-56"
                />
              </div>
              <div className="flex h-8 w-60 mx-auto mt-2 bg-slate-300 ">
                <div className="border border-black w-8 h-8 text-black-200 flex items-center justify-center">
                  <BsKey />
                </div>

                <input
                  type="text"
                  placeholder="Enter Your Password"
                  className=" text-center border border-black w-56"
                />
              </div>
              <div className="flex justify-center items-center py-4 gap-2 text-white">
                <button className="bg-[#0D68AC] w-24 h-10 rounded-lg ">
                  Sign In
                </button>
                <button className="bg-[#0D68AC] w-36 h-10 rounded-lg ">
                  Forget Password?
                </button>
              </div>
              <div className="flex justify-center  items-center 1/2 h-16">
                <h1>
                  <a href="" className="text-[#0D68AC] font-bold text-lg">
                    SignUp Here
                  </a>
                </h1>
                <span className="ml-3">(For First Time User)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="1/2 h-[22rem] overflow-scroll border border-white z-20 ">
          <div className="bg-[#0D68AC] flex justify-between items-center h-[3rem] px-3 text-white">
            <p>Important Information</p>
          </div>
          <div className="bg-[#FBF8F3] opacity-70 ">
            <h1 className="text-lg font bold text-black">
              You need following documents to fill this application.
            </h1>
            <div className="bg-white px-10 py-2">
              <li>All Academic Certificates</li>
              <li>CNIC/ B Form and Father CNIC</li>
            </div>
            <div>
              <h1 className="text-lg font bold text-black">Important Links</h1>
              <div className="bg-white px-10 py-5">
                <li>Admission Schedule</li>
                <li>Important Instructions</li>
                <li>Eligibility Criteria</li>
                <li>Fee Details</li>
                <li>Required Documents for Under Graduate Studentse</li>
                <li>Fee Details</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute container mx-8 top-[38rem] bg-[#FBF8F3] opacity-70 z-20 flex flex-col">
        <h1 className="font-bold text-red-600 text-lg mx-5 mt-2">
          Payment Note:
        </h1>
        <div>
          <p className="mx-5 py-3">
            Online admission charges are payable (through Challan Form) at any
            branch of Bank Alfalah Islamic. "Challan Form" will be available to
            you after completion/submission of your application. Challan paid in
            other banks will not be accepted.
          </p>
        </div>
      </div>
      <div className="absolute container mx-8 top-[46rem]  h-[14rem] z-20">
        <div className="grid grid-cols-2  ">
          <div className=" bg-[#003D83] opacity-80 ">
            <h1 className="text-lg font-bold px-5">Important Links</h1>
            <div>
              <li className="px-5">Admission Schedule</li>
              <li className="px-5">Important Instructions</li>
              <li className="px-5">Eligibility Criteria</li>
              <li className="px-5">Fee Details</li>
              <li className="px-5">
                Required Documents for Under Graduate Studentse
              </li>
              <li className="px-5">Fee Details</li>
            </div>
          </div>
          <div className="  bg-[#003D83] opacity-80 ">
            <h1 className="text-lg font-bold px-5"> Contact Information</h1>
            <div className=" mx-5 my-3">
              <p>Admission Query Phone: 061-4508500 Ext: 520</p>
              <p>
                For Admission Related Query: Contact us at
                admissions@aumc.edu.pk
              </p>
              <p>For Technical Query: Contact Automation Department</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
