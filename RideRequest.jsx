import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RideRequest() {
  const [rideType, setRideType] = useState("moto");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    const message = `M bezwen yon ${rideType} soti ${pickup} pou ale ${destination}. Non mwen se ${name}.`;
    const whatsappURL = `https://wa.me/50942097722?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-2xl shadow-xl mt-10 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Woulib Ayiti</h1>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Non Ou</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Antre non ou" />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Kote wap pran machin nan</label>
        <Input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Ex: Okay" />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Kote wap desann</label>
        <Input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Ex: Port Salut" />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Chwazi kalite woulib</label>
        <select
          className="w-full p-2 border rounded-md"
          value={rideType}
          onChange={(e) => setRideType(e.target.value)}
        >
          <option value="moto">Moto</option>
          <option value="machin">Machin</option>
        </select>
      </div>
      <Button className="w-full" onClick={handleSubmit}>
        Voye Demann sou WhatsApp
      </Button>
    </div>
  );
}