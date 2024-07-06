import Reveal from "./Reveal";

type Props = {
  title: String;
  description: String;
};
function ServiceCard({ title, description }: Props) {
  return (
    <div className="w-full px-12 h-80 border py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 md:group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-col gap-6">
            <Reveal>
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                {title}
              </h2>
            </Reveal>
            <p className="base mix-blend-difference text-white">
              {description}
            </p>
            <div className="w-56 flex rounded border-b-2 border-grey-dark overflow-hidden bg-zinc-800">
              <button className="w-full block text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-2 font-sans tracking-wide uppercase font-bold">
                contact us
              </button>
              <div className="shadow-border p-3">
                <div className="w-4 h-4">
                  <svg
                    className="fill-current text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
