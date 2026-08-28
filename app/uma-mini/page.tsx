"use client";

import { useMemo, useState } from "react";

const configurations = [
  { name: "Solo", units: 1, note: "A personal pool of light and sound." },
  { name: "Pair", units: 2, note: "Balanced atmosphere for dining and conversation." },
  { name: "Trio", units: 3, note: "A wider field for entertaining." },
  { name: "Constellation", units: 6, note: "Connected ambience for larger spaces." },
];

export default function Home() {
  const [selected, setSelected] = useState(1);
  const [bagOpen, setBagOpen] = useState(false);
  const config = useMemo(() => configurations.find((item) => item.units === selected) ?? configurations[0], [selected]);
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Luna Sonora home"><span className="brand-moon" /><span>LUNA SONORA</span></a>
        <div className="nav-links"><a href="/">Original UMA</a><a href="#experience">Experience</a><a href="#sound">Sound</a><a href="#collection">UMA family</a><a href="#pablo">Pablo Designs</a></div>
        <button className="bag-button" onClick={() => setBagOpen(!bagOpen)}>Bag <span>{bagOpen ? "Close" : "0"}</span></button>
      </nav>
      {bagOpen && <aside className="bag-panel" aria-live="polite"><p className="eyebrow">Your selection</p><h2>{config.name}</h2><p>{selected} × UMA Mini</p><p className="muted">Australian pricing and checkout are awaiting retailer confirmation.</p><a className="button light" href="#contact" onClick={() => setBagOpen(false)}>Register interest</a></aside>}

      <section className="hero hero-mini" id="top">
        <img src="/uma-mini-hero.jpg" alt="UMA Mini illuminated in a lounge setting" width="940" height="529" fetchPriority="high" decoding="async" /><div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow">The UMA family · Light in harmony</p><h1>Light sounds<br />different here.</h1><p className="hero-intro">Warm light. Rich 360° sound. Two beautifully resolved forms, designed to travel with you.</p><div className="hero-actions"><a className="button light" href="#collection">Meet the family</a><a className="text-link" href="#experience">Discover UMA <span>›</span></a></div></div>
        <p className="hero-credit">UMA by Pablo Designs · San Francisco</p>
      </section>

      <section className="statement" id="experience"><p className="eyebrow">One object. Two senses.</p><h2>Light changes how a room feels.<br /><em>Sound changes how it moves.</em></h2><p>UMA Mini brings both together: a warm, dimmable glow and omnidirectional audio in a tactile, rechargeable lantern.</p></section>

      <section className="split mini-split" id="sound">
        <div className="split-image"><img src="/uma-mini-detail.jpg" alt="Details and controls of the UMA Mini sound lantern" width="1020" height="6300" loading="lazy" decoding="async" /></div>
        <div className="split-copy"><p className="eyebrow">Sound, considered</p><h2>Designed to be heard<br />in every direction.</h2><p>An omnidirectional bass woofer and full-range driver disperse sound around the room—not toward a single listening position.</p><dl className="spec-grid"><div><dt>360°</dt><dd>Sound dispersion</dd></div><div><dt>8W</dt><dd>Maximum speaker power</dd></div><div><dt>24</dt><dd>Units in Party Mode</dd></div><div><dt>15h</dt><dd>Light + music, up to</dd></div></dl><small>Published manufacturer specifications. Exact Australian model specification to be confirmed.</small></div>
      </section>

      <section className="connected mini-connected"><div className="connected-copy"><p className="eyebrow">Connected atmosphere</p><h2><span>One light becomes a moment.</span><span>Many transform the room.</span></h2><p>UMA Mini Party Mode connects up to 24 units to one source—creating a field of synchronised sound and warm, portable light.</p></div><img src="/uma-mini-group.jpg" alt="Multiple UMA Mini lanterns arranged through a room" width="940" height="563" loading="lazy" decoding="async" /></section>

      <section className="collection" id="collection">
        <div className="collection-intro"><p className="eyebrow">The UMA family</p><h2>Choose your atmosphere.</h2><p>Two proportions. Two distinct experiences. One philosophy of portable light and sound.</p></div>
        <div className="product-card original"><div className="product-copy"><span>UMA</span><h3>The original.</h3><p>Sculptural Warm Dim light, full-range control and rich 360° sound in the original statement form.</p><a href="#contact">Register interest ›</a></div><img src="/uma-original-lifestyle.jpg" alt="Original full-size UMA sound lantern in a refined interior" /></div>
        <div className="product-card mini"><div className="product-copy"><span>UMA Mini</span><h3>Made to connect.</h3><p>A more compact lantern with Party Mode for synchronising up to 24 units from one source.</p><a href="#configure">Configure UMA Mini ›</a></div><img src="/uma-mini-product-solo.webp" alt="UMA Mini illuminated on a clean white background" width="1600" height="900" loading="lazy" decoding="async" /></div>
      </section>

      <section className="configure" id="configure">
        <div className="config-copy"><p className="eyebrow">Compose your atmosphere</p><h2>How will you listen?</h2><div className="config-options" role="radiogroup" aria-label="Choose an UMA Mini configuration">{configurations.map((item) => <button key={item.units} className={selected === item.units ? "active" : ""} onClick={() => setSelected(item.units)} role="radio" aria-checked={selected === item.units}><span>{item.name}</span><b>{item.units}</b></button>)}</div><div className="selection-note"><strong>{config.name}</strong><p>{config.note}</p></div><button className="button dark" onClick={() => setBagOpen(true)}>Select {config.name}</button><p className="price-note">Australian price, availability and delivery to be confirmed.</p></div>
        <div className="orbital-stage" aria-label={`${selected} connected UMA Mini units visualisation`}>{Array.from({ length: selected }).map((_, index) => <div className="mini-orb" key={index} style={{ "--i": index, "--n": selected } as React.CSSProperties}><span /></div>)}<div className="sound-ring ring-one" /><div className="sound-ring ring-two" /><p>{selected} connected {selected === 1 ? "unit" : "units"}</p></div>
      </section>

      <section className="contact" id="contact"><p className="eyebrow">Australian release</p><h2>Be first to hear it.</h2><p>Register for Australian pricing, availability and private demonstrations.</p><form onSubmit={(event) => event.preventDefault()}><label><span>Name</span><input required name="name" placeholder="Your name" /></label><label><span>Email</span><input required type="email" name="email" placeholder="you@example.com" /></label><button className="button light" type="submit">Register interest</button></form><small>Demonstration form for the design build. Enquiry delivery will be connected before launch.</small></section>

      <section className="pablo" id="pablo"><div><p className="eyebrow">Designed in San Francisco</p><h2>UMA Mini by<br />Pablo Designs.</h2></div><div><p>Pablo Designs creates objects that deepen the relationship between people and their environments. Luna Sonora presents UMA Mini as an independent Australian retail destination.</p><a className="text-link" href="https://www.pablodesigns.com/" target="_blank" rel="noreferrer">Discover Pablo Designs <span>↗</span></a></div></section>
      <footer><a className="brand" href="#top"><span className="brand-moon" /><span>LUNA SONORA</span></a><p>Independent Australian light + sound.</p><div className="footer-links"><a href="#contact">Contact</a><a href="#">Delivery</a><a href="#">Warranty</a><a href="#">Privacy</a></div><div className="footer-destinations"><a className="koda-link" href="https://kodalighting.com/" target="_blank" rel="noreferrer">Visit KODA Lighting ↗</a><span>Follow Pablo Designs</span><a href="https://www.instagram.com/pablodesignssf/" target="_blank" rel="noreferrer" aria-label="Pablo Designs on Instagram">Instagram ↗</a><a href="https://www.facebook.com/PabloDesignsSF/" target="_blank" rel="noreferrer" aria-label="Pablo Designs on Facebook">Facebook ↗</a></div><small>UMA and Pablo Designs are trademarks of their respective owners. Product imagery © Pablo Designs.</small></footer>
    </main>
  );
}
