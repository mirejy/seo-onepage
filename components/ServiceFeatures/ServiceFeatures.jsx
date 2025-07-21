// app/components/ServiceFeatures.jsx
import { StarIcon, ShieldCheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Container } from "../Container/Container";

export default function ServiceFeatures() {
  return (
    <section id="ServiceFeatures" className="py-16 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Cosa offre questo trattamento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 1. Efficace */}
          <div className="flex flex-col items-center text-center">
            <StarIcon className="w-12 h-12 text-[#0E4E34]" />
            <h3 className="mt-4 text-lg font-medium">Efficace</h3>
            <p className="mt-2 text-sm text-gray-600">
              Rimozione delle rughe su fronte, zampe di gallina e regione glabellare
            </p>
          </div>

          {/* 2. Sicuro */}
          <div className="flex flex-col items-center text-center">
            <ShieldCheckIcon className="w-12 h-12 text-[#0E4E34]" />
            <h3 className="mt-4 text-lg font-medium">Sicuro</h3>
            <p className="mt-2 text-sm text-gray-600">
              Rischio minimo di complicazioni sotto controllo specialistico
            </p>
          </div>

          {/* 3. Effetto duraturo */}
          <div className="flex flex-col items-center text-center">
            <ClockIcon className="w-12 h-12 text-[#0E4E34]" />
            <h3 className="mt-4 text-lg font-medium">Effetto duraturo</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pelle liscia fino a 6 mesi
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
