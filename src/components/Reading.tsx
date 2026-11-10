import { BookOpen, Bookmark, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import "./Reading.css";

const formats = [
  { name: "Novels", note: "Where it all begins", colour: "rose" },
  { name: "Webnovels", note: "One more update", colour: "violet" },
  { name: "Manga", note: "Stories in panels", colour: "blue" },
  { name: "Manhua", note: "Another world to enter", colour: "peach" },
  { name: "Manhwa", note: "The art. The story.", colour: "rose" },
  { name: "Light novels", note: "A little illustration, a lot of imagination", colour: "violet" },
];

export default function Reading() {
  return (
    <section id="reading" className="section reading-section">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="06 / BEYOND THE CODE" title="A developer with a very full bookshelf." description="Novels, webnovels, manga, manhua, manhwa, light novels… there’s always another story to get lost in." />
          <div className="reading-layout">
            <div className="reading-cover">
              <img src={`${import.meta.env.BASE_URL}reading-room.svg`} alt="" loading="lazy" width="700" height="780" />
              <div className="reading-cover-title"><span>VIJAYA'S READING CORNER</span><h3>Just one<br /><em>more chapter.</em></h3></div>
              <div className="reading-count"><BookOpen size={22} aria-hidden="true" /><div><strong>1,500+</strong><span>novels read & counting</span></div></div>
            </div>
            <div className="reading-notes">
              <div className="reading-note-heading"><Bookmark size={20} aria-hidden="true" /><span>THE OTHER SIDE OF ME</span><Sparkles size={18} aria-hidden="true" /></div>
              <h3>Some days it’s debugging.<br />Some nights, plot twists.</h3>
              <p>Reading is a big part of my life outside development. I’ve read 1,500+ novels, and my reading also spans webnovels, manga, manhua, manhwa, and light novels.</p>
              <p>This little corner of my portfolio is for that side of me: the reader behind the developer.</p>
              <ul className="reading-shelf" aria-label="What I enjoy reading">
                {formats.map((format, index) => <li key={format.name} className={`reading-book book-${format.colour}`}><span className="book-volume">VOL. 0{index + 1}</span><strong>{format.name}</strong><span className="book-note">{format.note}</span><BookOpen size={17} aria-hidden="true" /></li>)}
              </ul>
              <p className="reading-postscript">Currently somewhere between a closing bracket and the next chapter.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
