// app/components/PricingCard.jsx
export default function PricingCard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Шапка акции */}
        <div className="px-6 pt-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold uppercase rounded-full px-3 py-1">
            Offerta limitata
          </span>
        </div>

        {/* Контент */}
        <div className="px-6 py-8 text-center">
          <h3 className="text-4xl font-bold text-[#0E4E34] mb-2">€200</h3>
          <p className="text-lg text-gray-400 line-through mb-4">€250</p>
          <p className="text-gray-700 mb-2">Trattamento Botox 3 zone</p>
          <p className="text-sm text-gray-500">Valido fino al 30 luglio</p>
        </div>
      </div>
    </section>
  );
}
