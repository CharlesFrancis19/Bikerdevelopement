import dynamic from "next/dynamic";

const LeadFormPrimary = dynamic(() =>
  import("./LeadFormPrimary" /* webpackChunkName: "Header" */)
);

const LeadFormSecondary = dynamic(() =>
  import("./LeadFormSecondary" /* webpackChunkName: "Header" */)
);

export default function Leadform(props) {

  return (
    <>
      {props?.type == "primary" ? (
        <LeadFormPrimary {...props} />
      ) : (
        <LeadFormSecondary {...props} />
      )}
    </>
  );
}
