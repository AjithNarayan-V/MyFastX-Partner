import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";


const Master = () => {
  return (
    <div className="w-full h-[3475px] relative bg-white leading-[normal] tracking-[normal] mq925:h-auto mq925:min-h-[3475]">
      <div className="flex flex-col justify-center items-center">
      <FrameComponent2 />
      <div className="absolute top-[804px] left-[201px] border-mintcream border-r-[2px] border-dashed box-border w-0.5 h-[407px]" />
      <FrameComponent3 />
      <section className="absolute  overflow-hidden top-[1654px] left-[160.2px] w-[1120.5px] h-[258.8px]">
        <img
          className="absolute top-[0px] left-[184.8px] w-[174.2px] h-[68.1px] object-contain"
          loading="lazy"
          alt=""
          src="/objects@2x.png"
        />
        <img
          className="absolute  overflow-hidden z-1 top-[65.2px] left-[0px] w-[1120.5px] h-[193.6px] object-contain z-[2]"
          alt=""
          src="/line-49.svg"
        />
      </section>
      <div className="absolute    top-[2698px] left-[0px] bg-basedark w-[1440px] h-[579px] overflow-hidden hidden" />
      <FrameComponent4 />
      <FrameComponent5 />
      </div>  
    </div>
  );
};

export default Master;
