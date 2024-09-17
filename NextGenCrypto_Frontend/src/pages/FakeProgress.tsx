import { useEffect, useState } from "react";


export interface FakeProgressProps { }

const messages = [
    "🧠 Quantum minds are still at work...",
    "🔧 The MVP of our quantum-safe solution is under development...",
    "🌱 The post-quantum encryption framework is still being built...",
    "🌿 Not entirely quantum-secure yet...",
    "⚙️ The quantum algorithms are still spinning...",
    "📡 Quantum-safe network integration is in progress...",
    "🏗️ The quantum-resistant infrastructure is still under construction...",
    "🚧 The path to quantum resilience is being paved...",
    "🧩 Quantum puzzles are still being solved...",
    "📱 Quantum-secure mobile apps are still being programmed...",
    "🌟 Quantum innovations are still being envisioned...",
    "🔍 Cryptographic visions are still being refined...",
    "🚀 Preparing to launch quantum-secure systems into the future...",
    "💡 Intelligent quantum solutions are still being designed...",
    "🛠️ Quantum resistance improvements are still being implemented...",
    "⏳ Quantum progress needs a bit more time...",
    "🌏 The future of quantum-safe cryptography is still being shaped...",
    "🧩 Quantum-resistant components are still being assembled...",
    "🗺️ The post-quantum cryptography roadmap is still being drawn...",
    "🔋 Post-quantum cryptographic energy systems are still charging...",
    "📊 Post-quantum encryption data is still being analyzed...",
    "🌐 Quantum-safe networks are still being built...",
    "🏙️ The skyline of quantum security is still being designed...",
    "🖥️ The post-quantum cryptography dashboard is still being configured...",
    "💼 Collaborations for quantum security are still being established...",
    "🕹️ Quantum-safe controls are still being set up...",
    "🌞 Post-quantum solar cells are still being installed...",
    "🧬 Quantum security DNA is still being sequenced...",
    "🌏 Environmentally-friendly post-quantum technologies are still being researched...",
    "🔋 Quantum-secure renewable energy solutions are still being harnessed...",
    "🛠️ Quantum-resistant prototypes are still being developed...",
    "🧪 Research teams are still working on quantum innovations...",
    "📡 Post-quantum city sensors are still being installed...",
    "🖥️ Big Data for post-quantum cryptography is still being analyzed...",
    "🛰️ Satellite data for quantum security is still being evaluated...",
    "🔬 Scientists are still working on quantum-safe solutions...",
    "👨‍🎓 Students are still experimenting with quantum cryptography in labs...",
    "🏫 Universities are still conducting research on quantum-safe ideas...",
    "🔗 Post-quantum blockchains are still linking up...",
    "💧 Post-quantum water security solutions are still being optimized...",
    "🚰 Clean, quantum-secure water filtration is still being developed...",
    "♻️ Recycling programs for quantum systems are still being launched...",
    "🚍 Quantum-resistant smart transportation systems are still being tested...",
    "🚖 Autonomous quantum-secure vehicles are still being programmed...",
    "🛴 Quantum-powered e-scooters are still being charged...",
    "🚲 Quantum-enabled bike-sharing systems are still being installed...",
    "📶 5G quantum-safe network expansion is still underway...",
    "💡 Quantum-safe streetlights are still being connected...",
    "🔋 Post-quantum energy storage systems are still being installed...",
    "📊 Real-time quantum encryption data is still being gathered...",
    "📉 Environmental data for quantum security is still being measured...",
    "🌐 The post-quantum IoT platform is still in development...",
    "📈 Quantum-safe smart grids are still being optimized...",
    "🧠 AI algorithms for post-quantum cryptography are still being trained...",
    "📦 Quantum-secure supply chains are still being automated...",
    "🛡️ Quantum data privacy policies are still being reviewed...",
    "🚨 Quantum-safe security systems are still being installed...",
    "🧳 Travel data with post-quantum encryption is still being updated...",
    "🚆 Smart quantum-secure train connections are still being planned...",
    "🚇 Subway networks with quantum security are still being integrated...",
    "📍 Quantum-enabled location data is still being incorporated...",
    "🗺️ Quantum-secure map systems are still being updated...",
    "🚏 Post-quantum bus stops are still being connected...",
    "📱 Quantum-secure mobile apps are still under development...",
    "💻 Quantum-safe web platforms are still in progress...",
    "🌐 Post-quantum APIs are still being integrated...",
    "🔍 Quantum cryptography research findings are still being published...",
    "📚 Knowledge about post-quantum security is still being shared...",
    "📖 Studies on quantum-safe solutions are still ongoing...",
    "📝 Quantum cryptography reports are still being written...",
    "📅 Conferences on post-quantum cryptography are still being organized...",
    "🎓 Theses on post-quantum cryptography are still being reviewed...",
    "🧬 Post-quantum biotechnological research is still being conducted...",
    "🧪 Post-quantum chemical analysis is still underway...",
    "🔬 Microscopic investigations in quantum cryptography are still ongoing...",
    "🛰️ Quantum-secure space missions are still being prepared...",
    "🌠 Post-quantum cryptographic stargazing is still taking place...",
    "🛡️ Quantum-resistant security measures are still being implemented...",
    "🌍 Environmental assessments for quantum systems are still being conducted...",
    "🔋 Quantum-powered battery technologies are still being explored...",
    "🔧 Mechanical post-quantum systems are still being tested...",
    "⚙️ Quantum-secure components are still turning...",
    "🚗 Quantum-powered electric vehicles are still being developed...",
    "🔋 Quantum-secure batteries are still being charged...",
    "🛠️ Quantum cryptography prototypes are still being built...",
    "📈 Post-quantum data models are still being created...",
    "🗄️ Quantum-secure databases are still being populated...",
    "🔗 Blockchain networks with post-quantum security are still being secured...",
    "🔍 Big data analyses with quantum cryptography are still in progress...",
    "📊 Statistical models for post-quantum encryption are still being developed..."
  ];
  

const FakeProgress = ({ }: FakeProgressProps) => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prevMessage) => {
        const currentIndex = messages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1,
      );
    }, 100);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-1/2 px-4">
      <div className="relative w-full sm:w-3/4 h-2 sm:h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-1 text-base sm:text-lg font-medium text-gray-700 text-center">
        {currentMessage}
      </p>
    </div>
  );
};

export default FakeProgress;