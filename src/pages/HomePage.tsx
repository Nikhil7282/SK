import HomeBg from "../assets/Home/HomeBG.png";
import TextReveal from "../components/animations/TextReveal";

export default function HomePage() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HomeBg})` }}
    >
      <div className="absolute z-30 top-0 w-full h-full flex items-center justify-center">
        <div className="flex-1">
          <div className="text-6xl p-5 home-title text-white font-extrabold">
            <TextReveal>
              Constructing more than just buildings, we build
            </TextReveal>{" "}
            <span className="text-zinc-500">
              <TextReveal>relationships.</TextReveal>
            </span>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
