import Link from "next/link";
import { Container } from "../Container/Container";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Beauty Secrets JuliaSun
            </h3>
            <address className="not-italic text-sm mb-2">
              Via Sassogrosso, 8, 56034 Collemontanino PI, Italia
            </address>
            <p className="text-sm mb-1">+39 351 601 47 37</p>
            <a
              href="mailto:juliasun.beauty@gmail.com"
              className="text-sm underline hover:text-gray-400"
            >
              juliasun.beauty@gmail.com
            </a>
            <br /><br />
            <a
              href="/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Privacy Policy
            </a>
          </div>

          {/* Часы работы */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Orari</h3>
            <p className="text-sm">Lunedì–Venerdì</p>
            <p className="text-sm">9:00–18:00</p>
          </div>

          {/* Социальные сети */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Social media</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=61578100057910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/juliasunsecrets/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
