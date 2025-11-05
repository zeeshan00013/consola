"use client";
import Image from "next/image";
import googleLogo from "../Images/google.png";

export default function Testimonials() {
  return (
    <section className="bg-[#4e7e50] py-16 mb-10 h-[600px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-10 items-center">
        {/* Left Text Section */}
        <div className="lg:col-span-1 text-white space-y-3">
          <p className="text-sm font-medium">Feedback</p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            What Our <br /> Patients Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white  shadow-md p-6 flex flex-col justify-center items-center h-[400px]">
            <p className="text-gray-700 text-sm leading-12 mb-4">
              Consola Mental Health has truly changed my life. The therapists
              are compassionate, understanding, and incredibly skilled at what
              they do. I’ve gained confidence and coping strategies that have
              made a real difference in my daily life. Highly recommend!
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image src={googleLogo} alt="Google" width={40} height={40} />
              <span className="font-semibold text-gray-900">Emily R.</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white  shadow-md p-6 flex flex-col justify-center items-center h-[400px]">
            <p className="text-gray-700 text-sm leading-12 mb-4">
              From the moment I reached out, I felt heard and supported. The
              team at Consola Mental Health made the process so easy, and my
              therapist has been a guiding light in my healing journey. I
              finally feel like I’m on the right path.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Image src={googleLogo} alt="Google" width={40} height={40} />
              <span className="font-semibold text-gray-900">James L.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
