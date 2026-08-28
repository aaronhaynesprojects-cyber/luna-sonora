"use client";

import { useMemo, useState } from "react";

const configurations = [
  { name: "Silver / White", units: 1, note: "Brushed silver, white diffuser and natural leather." },
  { name: "Aluminium / Tan", units: 2, note: "Warm aluminium, tan diffuser and natural leather." },
];

export default function Home() {
  const [selected, setSelected] = useState(1);
  const [bagOpen, setBagOpen] = useState(false);
  const [heroVersion, setHeroVersion] = useState(0);
  const heroViews = [
    { src: "/uma-original-detail-1600.webp", alt: "High-resolution full-sized UMA Sound Lantern", label: "UMA" },
  ];
  const config = useMemo(() => configurations.find((item) => item.units === selected) ?? configurations[0], [selected]);
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Luna Sonora home"><span className="brand-moon" /><span>LUNA SONORA</span></a>
        <div className="nav-links"><a href="#experience">Experience</a><a href="#sound">Sound</a><a href="#collection">UMA family</a><a href="#pablo">Pablo Designs</a></div>
        <button className="bag-button" onClick={() => setBagOpen(!bagOpen)}>Bag <span>{bagOpen ? "Close" : "0"}</span></button>
      </nav>
      {bagOpen && <aside className="bag-panel" aria-live="polite"><p className="eyebrow">Your UMA</p><h2>{config.name}</h2><p>1 × full-sized UMA Sound Lantern</p><p className="muted">Australian pricing and checkout are awaiting retailer confirmation.</p><a className="button light" href="#contact" onClick={() => setBagOpen(false)}>Register interest</a></aside>}

      <section className="hero hero-original" id="top">
        <img src={heroViews[heroVersion].src} alt={heroViews[heroVersion].alt} width="1151" height="1600" fetchPriority="high" decoding="async" onError={(event) => { event.currentTarget.src = "/uma-original-detail-hires.jpg"; }} /><div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow">UMA Sound Lantern · The original</p><h1>Primal light.<br />Remarkable sound.</h1><p className="hero-intro">The full-sized UMA brings Warm Dim light and high-fidelity 360° sound together in one sculptural, portable object.</p><div className="hero-actions"><a className="button light" href="#configure">Choose your UMA</a><a className="text-link" href="#experience">Discover the original <span>›</span></a></div></div>
        <div className="hero-compare" aria-label="Compare hero views">{heroViews.map((view, index) => <button key={view.label} className={heroVersion === index ? "active" : ""} onClick={() => setHeroVersion(index)}><span>0{index + 1}</span>{view.label}</button>)}</div>
        <p className="hero-credit">UMA by Pablo Designs · San Francisco</p>
      </section>

      <section className="statement" id="experience"><p className="eyebrow">One object. Two senses.</p><h2>Light changes how a room feels.<br /><em>Sound changes how it moves.</em></h2><p>UMA brings both together at a statement scale: full-range Warm Dim light, touch-sensitive control and omnidirectional audio in a rechargeable lantern made to move with you.</p></section>

      <section className="uma-film" aria-labelledby="uma-film-title">
        <div className="film-heading"><p className="eyebrow">The original in motion</p><h2 id="uma-film-title">A journey with UMA.</h2></div>
        <a className="film-frame film-launch original-film" href="https://www.youtube.com/watch?v=HfJsuEibrNo" target="_blank" rel="noreferrer" aria-label="Play A journey with UMA on YouTube"><img src="/uma-original-outdoor-hires.jpg" alt="Full-sized UMA Sound Lantern illuminated beside an outdoor chaise" width="4000" height="2175" loading="lazy" decoding="async" /><span className="film-play" aria-hidden="true">▶</span><span className="film-label">Play the film</span></a>
      </section>

      <section className="split original-split" id="sound">
        <div className="split-image"><img src="/uma-original-control.jpg" alt="Close view of the intuitive controls on the full-sized UMA Sound Lantern" loading="lazy" decoding="async" /></div>
        <div className="split-copy"><p className="eyebrow">High-fidelity, all around</p><h2>Designed to be heard<br />in every direction.</h2><p>An omnidirectional woofer and tweeter distribute rich sound around the room, while Bluetooth connects wirelessly to your music.</p><dl className="spec-grid"><div><dt>360°</dt><dd>Sound dispersion</dd></div><div><dt>12W</dt><dd>Maximum speaker power</dd></div><div><dt>190</dt><dd>Lumens maximum</dd></div><div><dt>8h</dt><dd>Battery life, up to</dd></div></dl><small>Published Pablo Designs specifications. Exact Australian model specification to be confirmed.</small></div>
      </section>

      <section className="connected uma-product-focus original-lifestyle-focus"><div className="connected-copy"><p className="eyebrow">Refined materials</p><h2><span>Warmth like a campfire.</span><span>Control at your fingertips.</span></h2><p>Turn the full-range dial from an intimate 2000K glow to a brighter 2700K light. Adjust volume directly from UMA’s touch-sensitive top—or from your connected device.</p></div><img src="/uma-original-lifestyle.jpg" alt="Full-sized UMA Sound Lantern glowing in a refined interior" loading="lazy" decoding="async" /></section>

      <section className="collection" id="collection">
        <div className="collection-intro"><p className="eyebrow">The UMA family</p><h2>The original leads.</h2><p>Experience the full-sized UMA here. For a smaller, highly connected form, enter the dedicated UMA Mini landing page.</p></div>
        <div className="product-card original"><div className="product-copy"><span>UMA</span><h3>The statement piece.</h3><p>190-lumen Warm Dim light, 12W maximum speaker power and rich 360° sound in the award-winning original form.</p><a href="#configure">Choose the original ›</a></div><img src="/uma-original-product.jpg" alt="Original full-sized UMA Sound Lantern on white" loading="lazy" decoding="async" /></div>
        <div className="product-card mini"><div className="product-copy"><span>UMA Mini</span><h3>Meet the little sister.</h3><p>A compact companion with Party Mode for synchronising up to 24 units from one source.</p><a href="/uma-mini">Enter the UMA Mini page ›</a></div><img src="/uma-mini-hero.jpg" alt="UMA Mini glowing beside a lounge chair" loading="lazy" decoding="async" /></div>
      </section>

      <section className="configure" id="configure">
        <div className="config-copy"><p className="eyebrow">Choose your original</p><h2>Which UMA is yours?</h2><div className="config-options" role="radiogroup" aria-label="Choose an UMA finish">{configurations.map((item) => <button key={item.units} className={selected === item.units ? "active" : ""} onClick={() => setSelected(item.units)} role="radio" aria-checked={selected === item.units}><span>{item.name}</span><b>{selected === item.units ? "Selected" : "Choose"}</b></button>)}</div><div className="selection-note"><strong>{config.name}</strong><p>{config.note}</p></div><button className="button dark" onClick={() => setBagOpen(true)}>Select {config.name}</button><p className="price-note">Australian price, availability and delivery to be confirmed.</p></div>
        <div className="orbital-stage original-stage" aria-label={`Full-sized UMA in ${config.name}`}><img src="/uma-original-detail-1600.webp" alt={`Full-sized UMA Sound Lantern in ${config.name}`} width="1151" height="1600" loading="lazy" decoding="async" /><div className="sound-ring ring-one" /><div className="sound-ring ring-two" /><p>Full-sized UMA · {config.name}</p></div>
      </section>

      <section className="contact" id="contact"><p className="eyebrow">Australian release</p><h2>Be first to hear it.</h2><p>Register for Australian pricing, availability and private demonstrations.</p><form onSubmit={(event) => event.preventDefault()}><label><span>Name</span><input required name="name" placeholder="Your name" /></label><label><span>Email</span><input required type="email" name="email" placeholder="you@example.com" /></label><button className="button light" type="submit">Register interest</button></form><small>Demonstration form for the design build. Enquiry delivery will be connected before launch.</small></section>

      <section className="pablo" id="pablo"><div><p className="eyebrow">Designed in San Francisco</p><h2>UMA by<br />Pablo Designs.</h2></div><div><p>Pablo Designs creates objects that deepen the relationship between people and their environments. Luna Sonora presents the original UMA as an independent Australian retail destination.</p><a className="text-link" href="https://www.pablodesigns.com/product/uma" target="_blank" rel="noreferrer">Discover UMA at Pablo Designs <span>↗</span></a></div></section>
      <footer><a className="brand" href="#top"><span className="brand-moon" /><span>LUNA SONORA</span></a><p>Independent Australian light + sound.</p><div className="footer-links"><a href="#contact">Contact</a><a href="#">Delivery</a><a href="#">Warranty</a><a href="#">Privacy</a></div><div className="footer-destinations"><a className="koda-link" href="https://kodalighting.com/" target="_blank" rel="noreferrer">Visit KODA Lighting ↗</a><span>Follow Pablo Designs</span><a href="https://www.instagram.com/pablodesignssf/" target="_blank" rel="noreferrer" aria-label="Pablo Designs on Instagram">Instagram ↗</a><a href="https://www.facebook.com/PabloDesignsSF/" target="_blank" rel="noreferrer" aria-label="Pablo Designs on Facebook">Facebook ↗</a></div><small>UMA and Pablo Designs are trademarks of their respective owners. Product imagery © Pablo Designs.</small></footer>
    </main>
  );
}
