import Switch from "react-switch";

export default function WhatsappOptIn(props) {
  const { whatsappOptIn, setWhatsappOptIn } = props;
  return (
    <>
      <div className="flex items-center text-sm gap-4">
        <Switch
          onChange={(checked) => setWhatsappOptIn(checked)}
          checked={whatsappOptIn}
          onColor="#3d709f"
          offColor="#BDBDBD"
          height={16}
          width={32}
          uncheckedIcon={false}
          checkedIcon={false}
        />
         <span className="block text-[#606162] mr-2">Whatsapp Updates</span>
      </div>
    </>
  );
}
