import HeaderNavigation from "../components/organisms/HeaderNavigation";
import HeritageGrid from "../components/organisms/HeritageGrid";

export default function Home() {
  return <main>
    <HeaderNavigation />
    <section className="hero">
      <div className="hero-inner">
        <p className="eyebrow">Pangasinan Heritage Digital Showcase</p>
        <h1>Discover the beauty and heritage of Pangasinan.</h1>
        <p>Explore iconic destinations, local culture, and memorable places across the province.</p>
        <a className="btn primary" href="#heritage">Explore Heritage</a>
      </div>
    </section>
    <section id="heritage" className="section">
      <div className="section-heading">
        <p className="eyebrow">Featured destinations</p>
        <h2>Heritage sites to discover</h2>
      </div>
      <HeritageGrid />
    </section>
    <footer>© 2026 Pangasinan Heritage Digital Showcase</footer>
  </main>;
}