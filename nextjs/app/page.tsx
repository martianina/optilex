"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 px-5">
        <div className="text-center">
          <h1 className="text-2xl mb-2">Optilex</h1>
          <h2 className="text-4xl font-bold">(code)+(law)</h2>
          <p className="text-lg mt-2">Seamless legaltech for blockchain projects.</p>
        </div>

        {/* Short Value Prop Section */}
        <div className="mt-8 text-center max-w-3xl">
          
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-4xl">
          {[
            { title: "AI & Verifiable Data", desc: "Legally enforceable data frameworks for AI & blockchain applications.", },
            { title: "DeSci & RWA", desc: "Legaltech for tokenized research, scientific IP, and real-world assets.", },
            { title: "Tokenization", desc: "Structuring compliant utility, governance, and RWA tokens globally.", },
            { title: "Marketplaces & Exchanges", desc: "Designing regulatory-compliant Web3 trading and asset platforms.", },
            { title: "Supply Chain", desc: "Smart contract-driven logistics, transparency, and automation.", },
            { title: "Alternative Risk Finance", desc: "DeFi-powered risk models, parametric insurance, and finance solutions.", }
          ].map((service, index) => (
            <div key={index} className="bg-base-100 shadow-lg border border-accent rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-lg mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Join Telegram CTA */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-accent border-8 border-accent rounded-xl p-6 w-full max-w-2xl mx-auto mt-12">
          <h2 className="text-xl font-bold">Optilex</h2>
          
          <button
            onClick={() => window.open("https://t.me/optilex", "_blank")}
            className="btn btn-primary text-black mt-4"
          >
            Join Telegram
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
