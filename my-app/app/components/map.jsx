export default function GoogleMapComponent() {
  const address = "9331 Liberty Rd Randallstown Md 21133";

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-3">Location Map</h2>
      <p className="mb-2 text-gray-700">{address}</p>

      <div className="w-full aspect-10/6 rounded-xl overflow-hidden shadow">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            address
          )}&output=embed`}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
