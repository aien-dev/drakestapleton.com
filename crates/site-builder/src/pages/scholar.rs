use maud::{html, Markup};

struct Published {
    kind: &'static str,
    title: &'static str,
    venue: &'static str,
    summary: &'static str,
    href: &'static str,
    label: &'static str,
}

const PUBLISHED: [Published; 2] = [
    Published {
        kind: "Master's thesis, 2018",
        title: "Imidazolium Ionic Liquids as Multifunctional Solvents, Ligands, and Reducing Agents for Noble Metal Deposition onto Well-Defined Heterostructures and the Effect of Synthetic History on Catalytic Performance",
        venue: "Western Kentucky University, Department of Chemistry. Advisor: Dr. Lawrence J. Hill.",
        summary: "Investigated [BMIM]Tf2N as a multifunctional solvent, ligand, and reducing agent for platinum deposition onto CdSe@CdS nanorods, thermally and photochemically. Ionic-liquid synthesis outperformed organic-solvent routes in photocatalytic methylene blue degradation.",
        href: "https://digitalcommons.wku.edu/theses/2101/",
        label: "Read the thesis at WKU Digital Commons",
    },
    Published {
        kind: "Peer-reviewed paper, 2019",
        title: "Deposition of metal particles onto semiconductor nanorods using an ionic liquid",
        venue: "Beilstein Journal of Nanotechnology 10:718-724. DOI 10.3762/bjnano.10.71. PMID 30931213.",
        summary: "Platinum, gold, and silver nanoparticles deposited onto CdSe@CdS nanorods from metal salts in an ionic liquid, with no added surfactants or reducing agents. Platinum deposited this way outperformed organic-solvent materials in photocatalytic dye degradation.",
        href: "https://pubmed.ncbi.nlm.nih.gov/30931213/",
        label: "Read the paper on PubMed",
    },
];

const CURRENT: [(&str, &str, &str, &str); 3] = [
    ("Research program", "Research", "What the AIEN research program measures today: Turing yield, verified understanding, and distance to the hardware ceiling.", "/research"),
    ("Proposal", "The Continuation Test", "A proposal for evaluating machine intelligence, with the first measured run.", "/works/the-continuation-test"),
    ("Measurements", "Benchmarks", "Every measurement bundle the project publishes, each with a reproducible command.", "https://github.com/aien-dev/benchmarks"),
];

const BEAKER: &str = r#"<svg class="wa-icon" viewBox="0 0 56 56" aria-hidden="true"><path class="ph-line" d="M20 6 H36 M23 6 V22 L9 46 C7 50 9 52 13 52 H43 C47 52 49 50 47 46 L33 22 V6"/><path class="ph-fill-accent" d="M14 40 H42 L46 47 C47 50 46 51 43 51 H13 C10 51 9 50 10 47 Z"/></svg>"#;

pub fn render_scholar_page() -> Markup {
    html! {
        div class="ph-page" {
            header class="wa-pagehead" {
                p class="eyebrow" { "SCHOLAR" }
                h1 { "Academic work" }
                p class="ph-lede" { "The published record first, then the research that is still in progress." }
            }
            section class="wa-block" {
                h2 { "Published" }
                p class="wa-lead" { "What survived peer review and a thesis committee. Full text is available through the university repository and PubMed." }
                div class="wa-papers" {
                    @for p in PUBLISHED.iter() {
                        article class="wa-paper" {
                            (maud::PreEscaped(BEAKER))
                            p class="wa-kind" { (p.kind) }
                            h3 { (p.title) }
                            p class="wa-venue" { (p.venue) }
                            p { (p.summary) }
                            p { a href=(p.href) target="_blank" rel="noopener noreferrer" { (p.label) } }
                        }
                    }
                }
            }
            section class="wa-block" {
                h2 { "Current research" }
                ul class="wa-tiles wa-tiles-3" {
                    @for (kind, title, body, href) in CURRENT {
                        li {
                            p class="wa-kind" { (kind) }
                            h3 { a href=(href) { (title) } }
                            p { (body) }
                        }
                    }
                }
            }
        }
    }
}
