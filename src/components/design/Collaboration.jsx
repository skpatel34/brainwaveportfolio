import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve2} width={100} height={66} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-6 pointer-events-none xl:block">
      <img src={curve1} width={500} height={200} alt="Curve 1" />
    </div>
  );
};
