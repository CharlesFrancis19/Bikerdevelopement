import Home from "@/components";

const index = (props) => {
  const { serviceData } = props;

  return (
    <>
      <Home data={serviceData}/>
    </>
  );
};

export default index;

export const getStaticPaths = async () => {
  const services = [
    "business",
    "service",
  ];

  return {
    paths: services.map((service) => {
      return { params: { service: service } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const service = ctx?.params?.service;
  const content = await import(`@/data/${service}.json`);
 
    return {
      props: {
        serviceData: { ...content },
      },
    };
};
