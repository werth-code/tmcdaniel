/* Static-site generator for the Thomas F. McDaniel Archive.
   Node >=12, no build dependencies.  Run:  node build.js               */
'use strict';

var fs = require('fs');
var path = require('path');
var D = require('./src/data.js');
var site = D.site;

var OUT = __dirname;
var warnings = [];
var ASSET_VER = '2'; // bump when assets/css/site.css changes to bust caches

/* ---- helpers ------------------------------------------------------------- */
function esc(s){
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}
// data strings already contain intentional <em>/&copy; markup — use as-is
function raw(s){ return s == null ? '' : String(s); }

function pdfHref(root, name){
  var p = path.join(OUT, 'pdf', name);
  if(!fs.existsSync(p)) warnings.push('missing PDF: ' + name);
  return root + 'pdf/' + encodeURIComponent(name);
}
function origHref(name){ return site.origin + '/' + encodeURI(name); }

function write(rel, html){
  var full = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(full), {recursive:true});
  fs.writeFileSync(full, html.trim() + '\n');
  pages.push(rel);
}
var pages = [];

/* ---- shared chrome ------------------------------------------------------- */
var NAV = [
  {href:'', label:'Home', key:'home'},
  {href:'books/', label:'Books', key:'books'},
  {href:'writings/', label:'Writings', key:'writings'},
  {href:'sermons/', label:'Sermons', key:'sermons'},
  {href:'key/', label:'The Key', key:'key'},
  {href:'resources/', label:'Resources', key:'resources'},
  {href:'about/', label:'About', key:'about'}
];

function nav(root, current){
  return NAV.map(function(n){
    var cur = n.key === current ? ' aria-current="page"' : '';
    return '<a href="' + (root + n.href) + '"' + cur + '>' + n.label + '</a>';
  }).join('\n        ');
}

function masthead(root, current){
  return [
'  <header class="masthead">',
'    <div class="wrap masthead__inner">',
'      <a class="brand" href="' + root + '">',
'        <span class="brand__name">T. F. McDaniel</span>',
'        <span class="brand__sub">Biblical Philology Archive</span>',
'      </a>',
'      <button class="nav__toggle" aria-expanded="false" aria-controls="nav" onclick="var n=document.getElementById(\'nav\');var o=n.classList.toggle(\'open\');this.setAttribute(\'aria-expanded\',o)">Menu</button>',
'      <nav class="nav" id="nav" aria-label="Primary">',
'        ' + nav(root, current),
'      </nav>',
'    </div>',
'  </header>'
  ].join('\n');
}

function footer(root){
  return [
'  <footer class="foot">',
'    <div class="wrap foot__inner">',
'      <div class="foot__brand">',
'        <span class="brand__name">Thomas F. McDaniel, Ph.D.</span>',
'        <p class="muted" style="margin:.6rem 0 0;font-size:.92rem">' + esc(site.role) + ', ' + esc(site.institution) + '. A free scholarly library of Hebrew and Semitic philology.</p>',
'      </div>',
'      <div>',
'        <h4>The Library</h4>',
'        <a href="' + root + 'books/">The Five Volumes</a>',
'        <a href="' + root + 'writings/">Writings &amp; Reviews</a>',
'        <a href="' + root + 'sermons/">Sermons</a>',
'        <a href="' + root + 'resources/">Lexicons &amp; Resources</a>',
'      </div>',
'      <div>',
'        <h4>More</h4>',
'        <a href="' + root + 'about/">Curriculum Vitae</a>',
'        <a href="' + root + 'writings/">Writings &amp; Reviews</a>',
'        <a href="' + site.origin + '" rel="nofollow">Original archive</a>',
'      </div>',
'    </div>',
'    <div class="wrap foot__legal">',
'      <span>&copy; Thomas F. McDaniel. Texts offered freely for study and teaching.</span>',
'      <span>Rebuilt as a static archive, ' + NOW_YEAR + '.</span>',
'    </div>',
'  </footer>'
  ].join('\n');
}
var NOW_YEAR = '2026';

/* ---- page shell + SEO head ---------------------------------------------- */
function page(opts){
  // opts: {file, root, current, title, desc, path, jsonld, body, ogImage}
  var canonical = site.baseUrl + '/' + (opts.path || '');
  var ogImg = opts.ogImage || (site.baseUrl + '/assets/img/mcdaniel-1990.jpg');
  var jsonld = opts.jsonld ? ('\n  <script type="application/ld+json">' + JSON.stringify(opts.jsonld) + '</script>') : '';
  var html = [
'<!DOCTYPE html>',
'<html lang="en">',
'<head>',
'  <meta charset="utf-8">',
'  <meta name="viewport" content="width=device-width, initial-scale=1">',
'  <title>' + esc(opts.title) + '</title>',
'  <meta name="description" content="' + esc(opts.desc) + '">',
'  <meta name="author" content="' + esc(site.author) + '">',
'  <link rel="canonical" href="' + canonical + '">',
'  <meta name="theme-color" content="#f3ecdc">',
'  <meta property="og:type" content="' + (opts.ogType || 'website') + '">',
'  <meta property="og:site_name" content="The Thomas F. McDaniel Archive">',
'  <meta property="og:title" content="' + esc(opts.title) + '">',
'  <meta property="og:description" content="' + esc(opts.desc) + '">',
'  <meta property="og:url" content="' + canonical + '">',
'  <meta property="og:image" content="' + ogImg + '">',
'  <meta name="twitter:card" content="summary_large_image">',
'  <meta name="twitter:title" content="' + esc(opts.title) + '">',
'  <meta name="twitter:description" content="' + esc(opts.desc) + '">',
'  <meta name="twitter:image" content="' + ogImg + '">',
'  <link rel="preconnect" href="https://fonts.googleapis.com">',
'  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
'  <link rel="stylesheet" href="' + opts.root + 'assets/css/site.css?v=' + ASSET_VER + '">' + jsonld,
'</head>',
'<body>',
masthead(opts.root, opts.current),
'  <main id="main">',
opts.body,
'  </main>',
footer(opts.root),
'</body>',
'</html>'
  ].join('\n');
  write(opts.file, html);
}

/* ---- shared JSON-LD blocks ---------------------------------------------- */
function personLd(){
  return {
    '@type':'Person',
    'name':'Thomas F. McDaniel',
    'honorificSuffix':'Ph.D.',
    'jobTitle':site.role,
    'birthDate':'1931-03-01',
    'birthPlace':'Baltimore, Maryland',
    'alumniOf':['University of Richmond','University of Pennsylvania','Johns Hopkins University','Eastern Baptist Theological Seminary'],
    'worksFor':{'@type':'CollegeOrUniversity','name':'Palmer Theological Seminary, the Seminary of Eastern University'},
    'knowsAbout':['Hebrew Bible','Old Testament philology','Semitic languages','Aramaic','Syriac','Arabic','Biblical interpretation'],
    'url':site.baseUrl + '/about/'
  };
}
function crumbs(root, items){
  // items: [{label, href}] ; last is current (no link)
  var html = items.map(function(it, i){
    if(i === items.length - 1) return esc(it.label);
    return '<a href="' + (root + it.href) + '">' + esc(it.label) + '</a>';
  }).join(' <span aria-hidden="true">&rsaquo;</span> ');
  var ld = {
    '@context':'https://schema.org','@type':'BreadcrumbList',
    'itemListElement': items.map(function(it,i){
      return {'@type':'ListItem','position':i+1,'name':it.label,
        'item': site.baseUrl + '/' + (it.href || '')};
    })
  };
  return {html:'<nav class="wrap crumbs" aria-label="Breadcrumb">' + html + '</nav>', ld:ld};
}

/* ======================================================================= */
/*  HOME                                                                    */
/* ======================================================================= */
function buildHome(){
  var root = '';
  var vols = D.books.map(function(b){
    return [
'        <article class="vcard">',
'          <span class="vcard__no">' + esc(b.no) + '</span>',
'          <h3 class="vcard__title"><a class="ilink" href="books/' + b.slug + '/">' + esc(b.shortTitle || b.title) + '</a></h3>',
'          <p class="vcard__meta">' + esc(b.year) + ' &middot; ' + b.pages + ' pages</p>',
'          <p class="vcard__blurb">' + esc(b.blurb) + '</p>',
'          <div class="vcard__links">',
'            <a class="btn btn--ghost btn--sm" href="books/' + b.slug + '/">Browse chapters</a>',
'            <a class="btn btn--primary btn--sm" href="' + pdfHref(root, b.full) + '">Read PDF</a>',
'          </div>',
'        </article>'
    ].join('\n');
  }).join('\n');

  var scripts = ['judges5-hebrew.jpg','judges5-aramaic.jpg','judges5-syriac.jpg','judges5-arabic.jpg']
    .map(function(f,i){var lang=['Hebrew','Aramaic','Syriac','Arabic'][i];
      return '<img src="assets/img/' + f + '" alt="Judges 5:1 in ' + lang + '" loading="lazy">';}).join('\n        ');

  var ld = {
    '@context':'https://schema.org','@graph':[
      {'@type':'WebSite','name':'The Thomas F. McDaniel Archive','url':site.baseUrl,
       'description':site.tagline,'inLanguage':'en','author':personLd()},
      personLd()
    ]
  };

  var body = [
'  <section class="hero wrap">',
'    <div class="hero__grid">',
'      <div>',
'        <p class="eyebrow reveal">Biblical &amp; Semitic Philology</p>',
'        <h1 class="reveal d1"><span class="sm">The Archive of</span>Thomas&nbsp;F. McDaniel</h1>',
'        <p class="hero__role reveal d2">' + esc(site.role) + '<br>' + esc(site.institution) + '</p>',
'        <p class="lede reveal d2">' + esc(site.tagline) + ' Five free volumes, decades of essays and reviews, and a working set of Semitic lexicons — gathered in one place.</p>',
'        <div class="btn-row reveal d3">',
'          <a class="btn btn--primary" href="books/">Explore the volumes</a>',
'          <a class="btn btn--ghost" href="about/">About the scholar</a>',
'        </div>',
'      </div>',
'      <figure class="hero__portrait reveal d2">',
'        <span class="hero__frame"></span>',
'        <img src="assets/img/mcdaniel-1990.jpg" alt="Portrait of Thomas F. McDaniel" width="742" height="1085">',
'        <figcaption>Thomas F. McDaniel</figcaption>',
'      </figure>',
'    </div>',
'  </section>',
'  <div class="wrap"><div class="scripts" aria-hidden="false">' ,
'        ' + scripts ,
'  </div></div>',
'  <hr class="rule">',
'  <section class="wrap" id="volumes">',
'    <div class="section-head">',
'      <p class="eyebrow">The Five Volumes</p>',
'      <h2>A lifetime of reading the Hebrew Bible against its Semitic cognates</h2>',
'    </div>',
'    <div class="volumes">',
vols,
'    </div>',
'  </section>',
'  <hr class="rule">',
'  <section class="wrap">',
'    <div class="cards">',
'      <a class="rcard" href="writings/"><h3>Writings &amp; Reviews</h3><p>Articles, dissertation chapters, and book reviews from 1951 to 2012.</p><span class="rcard__cue">Read the essays &rarr;</span></a>',
'      <a class="rcard" href="sermons/"><h3>Selected Sermons</h3><p>Seven sermons preached from Japan to Delaware, 1969&ndash;2004.</p><span class="rcard__cue">Listen in &rarr;</span></a>',
'      <a class="rcard" href="key/"><h3>A Key for Interpreting the Bible</h3><p>A short hermeneutical essay on reading Scripture in the light of the Cross.</p><span class="rcard__cue">Read the key &rarr;</span></a>',
'      <a class="rcard" href="resources/"><h3>Lexicons &amp; Resources</h3><p>Castell, Lane, Jastrow, Golius, and a large clergy reference directory.</p><span class="rcard__cue">Open the tools &rarr;</span></a>',
'    </div>',
'  </section>'
  ].join('\n');

  page({file:'index.html', root:root, current:'home', path:'',
    title:'Thomas F. McDaniel, Ph.D. — Biblical & Semitic Philology Archive',
    desc:'Free online books and essays in Old Testament philology by Thomas F. McDaniel, Professor Emeritus at Palmer Theological Seminary — Hebrew, Aramaic, Syriac, and Arabic studies of the Bible.',
    ogType:'website', jsonld:ld, body:body});
}

/* ======================================================================= */
/*  BOOKS INDEX                                                             */
/* ======================================================================= */
function buildBooksIndex(){
  var root = '../';
  var c = crumbs(root, [{label:'Home',href:''},{label:'Books',href:'books/'}]);
  var list = D.books.map(function(b){
    return [
'      <article class="vcard">',
'        <span class="vcard__no">' + esc(b.no) + '</span>',
'        <h2 class="vcard__title" style="font-size:1.4rem"><a class="ilink" href="' + b.slug + '/">' + esc(b.title) + '</a></h2>',
'        <p class="vcard__meta">' + esc(b.year) + ' &middot; ' + b.pages + ' pages</p>',
'        <p class="vcard__blurb">' + esc(b.blurb) + '</p>',
'        <div class="vcard__links">',
'          <a class="btn btn--ghost btn--sm" href="' + b.slug + '/">Contents</a>',
'          <a class="btn btn--primary btn--sm" href="' + pdfHref(root, b.full) + '">Read PDF</a>',
'        </div>',
'      </article>'
    ].join('\n');
  }).join('\n');

  var body = [
c.html,
'  <section class="wrap">',
'    <div class="section-head">',
'      <p class="eyebrow">The Five Volumes</p>',
'      <h1>Books</h1>',
'      <p class="lede narrow">Each volume is offered as a single complete PDF and chapter by chapter. All are free to read, download, and cite.</p>',
'    </div>',
'    <div class="volumes">',
list,
'    </div>',
'  </section>'
  ].join('\n');

  page({file:'books/index.html', root:root, current:'books', path:'books/',
    title:'Books — The Five Volumes of Thomas F. McDaniel',
    desc:'Five free volumes of Old Testament philology by Thomas F. McDaniel: The Song of Deborah, Clarifying Baffling Biblical Passages (I & II), Aramaic Names & Hebrew Matthew, and Miscellaneous Biblical Studies.',
    jsonld:c.ld, body:body});
}

/* ======================================================================= */
/*  BOOK PAGE                                                               */
/* ======================================================================= */
function chapterRow(root, ch){
  var num = ch.front ? '&loz;' : (ch.n || '');
  var cls = 'toc__item' + (ch.front ? ' is-front' : '');
  var sub = '';
  if(ch.addendum){
    sub = '<span class="toc__sub"><a href="' + pdfHref(root, ch.addendum) + '">Addendum (PDF)</a></span>';
  }
  return [
'        <li class="' + cls + '">',
'          <span class="toc__num">' + num + '</span>',
'          <span class="toc__link"><a href="' + pdfHref(root, ch.pdf) + '">' + raw(ch.t) + '</a>' + sub + '</span>',
'          <span class="toc__pdf">PDF</span>',
'        </li>'
  ].join('\n');
}

function buildBook(b){
  var root = '../../';
  var c = crumbs(root, [{label:'Home',href:''},{label:'Books',href:'books/'},{label:(b.shortTitle||b.title),href:'books/'+b.slug+'/'}]);

  var toc = '';
  if(b.chapters.length){
    toc = [
'      <div class="toc">',
'        <h2>Contents</h2>',
'        <ul class="toc__list">',
b.chapters.map(function(ch){return chapterRow(root, ch);}).join('\n'),
'        </ul>',
'      </div>'
    ].join('\n');
  }

  var extras = '';
  if(b.extras && b.extras.length){
    extras = [
'      <div class="apparatus">',
'        <h2>Apparatus</h2>',
'        <div class="chiplist">',
b.extras.map(function(e){return '          <a class="chip" href="' + pdfHref(root, e.pdf) + '">' + raw(e.t) + '</a>';}).join('\n'),
'        </div>',
'      </div>'
    ].join('\n');
  }

  var noteHtml = b.note ? ('<p class="muted" style="font-size:.92rem;margin-top:1.4rem">' + raw(b.note) + '</p>') : '';

  var ld = {
    '@context':'https://schema.org','@type':'Book',
    'name':b.title,'author':personLd(),'inLanguage':'en',
    'datePublished':b.year,'numberOfPages':b.pages,
    'bookFormat':'https://schema.org/EBook','isAccessibleForFree':true,
    'description':b.blurb,'url':site.baseUrl + '/books/' + b.slug + '/'
  };

  var body = [
c.html,
'  <section class="wrap">',
'    <div class="book">',
'      <aside class="book__aside">',
'        <div class="book__cover">',
'          <span class="vcard__no">' + esc(b.no) + '</span>',
'          <h1>' + esc(b.title) + '</h1>',
'          <ul class="book__facts">',
'            <li><span>Published</span><span>' + esc(b.year) + '</span></li>',
'            <li><span>Length</span><span>' + b.pages + ' pages</span></li>',
'            <li><span>Author</span><span>T. F. McDaniel</span></li>',
'            <li><span>Access</span><span>Free PDF</span></li>',
'          </ul>',
'          <div class="btn-row" style="margin-top:1.4rem">',
'            <a class="btn btn--primary" href="' + pdfHref(root, b.full) + '">Read the full PDF</a>',
'          </div>',
'        </div>',
'      </aside>',
'      <div class="book__intro">',
'        <p class="eyebrow">' + esc(b.no) + '</p>',
'        <p class="lede">' + esc(b.blurb) + '</p>',
noteHtml,
toc,
extras,
'      </div>',
'    </div>',
'  </section>'
  ].join('\n');

  page({file:'books/' + b.slug + '/index.html', root:root, current:'books',
    path:'books/' + b.slug + '/', ogType:'book',
    title:esc(b.title) + ' — Thomas F. McDaniel',
    desc:b.blurb + ' A free ' + b.pages + '-page PDF (' + b.year + ') by Thomas F. McDaniel.',
    jsonld:[ld, c.ld], body:body});
}

/* ======================================================================= */
/*  WRITINGS                                                                */
/* ======================================================================= */
function buildWritings(){
  var root = '../';
  var c = crumbs(root, [{label:'Home',href:''},{label:'Writings',href:'writings/'}]);
  var rows = D.writings.map(function(w){
    var href, tag;
    if(w.pdf){ href = pdfHref(root, w.pdf); tag = '<span class="tag">PDF</span>'; }
    else { href = origHref(w.html); tag = '<span class="tag tag--ext">Archive</span>'; }
    return [
'      <li class="entry">',
'        <span class="entry__year">' + esc(w.year) + '</span>',
'        <span class="entry__title"><a href="' + href + '"' + (w.html?' rel="nofollow"':'') + '>' + raw(w.title) + '</a>' + tag + '</span>',
'      </li>'
    ].join('\n');
  }).join('\n');

  var body = [
c.html,
'  <section class="wrap">',
'    <div class="section-head">',
'      <p class="eyebrow">1951 &ndash; 2012</p>',
'      <h1>Other Writings &amp; Publications</h1>',
'      <p class="lede narrow">Articles, dissertation chapters, devotionals, and book reviews spanning sixty years. Items marked <span class="tag">PDF</span> are hosted here; those marked <span class="tag tag--ext">Archive</span> open on the original server.</p>',
'      <div class="btn-row"><a class="btn btn--primary" href="' + pdfHref(root, D.writingsFull.pdf) + '">' + esc(D.writingsFull.title) + '</a></div>',
'    </div>',
'    <ol class="entries">',
rows,
'    </ol>',
'  </section>'
  ].join('\n');

  page({file:'writings/index.html', root:root, current:'writings', path:'writings/',
    title:'Writings & Reviews (1951–2012) — Thomas F. McDaniel',
    desc:'Articles, dissertation chapters, devotionals, and book reviews by Thomas F. McDaniel, 1951–2012, on Lamentations, Hebrew philology, and biblical interpretation.',
    jsonld:c.ld, body:body});
}

/* ======================================================================= */
/*  SERMONS                                                                 */
/* ======================================================================= */
function buildSermons(){
  var root = '../';
  var c = crumbs(root, [{label:'Home',href:''},{label:'Sermons',href:'sermons/'}]);
  var rows = D.sermons.map(function(s){
    var href, tag;
    if(s.pdf){ href = pdfHref(root, s.pdf); tag = '<span class="tag">PDF</span>'; }
    else { href = origHref(s.html); tag = '<span class="tag tag--ext">Archive</span>'; }
    return [
'      <li class="entry">',
'        <span class="entry__year">' + esc(s.year) + '</span>',
'        <span class="entry__title"><a href="' + href + '"' + (s.html?' rel="nofollow"':'') + '>' + raw(s.title) + '</a>' + tag,
'          <span class="entry__where">' + raw(s.where) + '</span></span>',
'      </li>'
    ].join('\n');
  }).join('\n');

  var body = [
c.html,
'  <section class="wrap">',
'    <div class="section-head">',
'      <p class="eyebrow">1969 &ndash; 2004</p>',
'      <h1>Seven Selected Sermons</h1>',
'      <p class="lede narrow">Preached across more than three decades, from a Japanese congregation in Oppama to Silverside Church in Wilmington, Delaware.</p>',
'    </div>',
'    <ol class="entries">',
rows,
'    </ol>',
'  </section>'
  ].join('\n');

  page({file:'sermons/index.html', root:root, current:'sermons', path:'sermons/',
    title:'Seven Selected Sermons (1969–2004) — Thomas F. McDaniel',
    desc:'Seven sermons by Thomas F. McDaniel preached between 1969 and 2004, including the 1998 seminary graduation sermon “Shifting the Paradigm to Jesus, Son of Jesse.”',
    jsonld:c.ld, body:body});
}

/* ======================================================================= */
/*  THE KEY (essay)                                                         */
/* ======================================================================= */
function buildKey(){
  var root = '../';
  var k = D.keyEssay;
  var c = crumbs(root, [{label:'Home',href:''},{label:'The Key',href:'key/'}]);
  var paras = k.paragraphs.map(function(p,i){
    return '        <p' + (i===0?' class="dropcap"':'') + '>' + raw(p) + '</p>';
  }).join('\n');

  var ld = {
    '@context':'https://schema.org','@type':'Article',
    'headline':k.title,'author':personLd(),'inLanguage':'en',
    'isAccessibleForFree':true,'url':site.baseUrl + '/key/',
    'about':'Biblical hermeneutics'
  };

  var body = [
c.html,
'  <section class="wrap">',
'    <article class="prose narrow" style="margin:0 auto">',
'      <p class="eyebrow">A Hermeneutical Essay</p>',
'      <h1>' + esc(k.title) + '</h1>',
'      <blockquote class="epigraph">' + esc(k.epigraph) + '<cite>' + esc(k.epigraphRef) + '</cite></blockquote>',
paras,
'      <div class="ornament" style="margin-top:2.5rem"><span>&loz;</span></div>',
'    </article>',
'  </section>'
  ].join('\n');

  page({file:'key/index.html', root:root, current:'key', path:'key/', ogType:'article',
    title:'A Key for Interpreting the Bible — Thomas F. McDaniel',
    desc:'A short hermeneutical essay by Thomas F. McDaniel: distinguishing the word of God about the divine will from the word of God about the human condition, in the light of the Cross.',
    jsonld:[ld, c.ld], body:body});
}

/* ======================================================================= */
/*  RESOURCES                                                               */
/* ======================================================================= */
function buildResources(){
  var root = '../';
  var c = crumbs(root, [{label:'Home',href:''},{label:'Resources',href:'resources/'}]);
  var cards = D.resources.map(function(r){
    return [
'      <a class="rcard" href="' + origHref(r.html) + '" rel="nofollow">',
'        <h3>' + raw(r.title) + '</h3>',
'        <p>' + raw(r.desc) + '</p>',
'        <span class="rcard__cue">Open in the archive &rarr;</span>',
'      </a>'
    ].join('\n');
  }).join('\n');

  var body = [
c.html,
'  <section class="wrap">',
'    <div class="section-head">',
'      <p class="eyebrow">Reference &amp; Collections</p>',
'      <h1>Lexicons &amp; Resources</h1>',
'      <p class="lede narrow">A working set of Semitic lexicons and special collections. These large reference works remain on the original Palmer Seminary server; each link opens there in full.</p>',
'    </div>',
'    <div class="cards">',
cards,
'    </div>',
'  </section>'
  ].join('\n');

  page({file:'resources/index.html', root:root, current:'resources', path:'resources/',
    title:'Lexicons & Resources — Thomas F. McDaniel Archive',
    desc:'Semitic lexicons and special collections curated by Thomas F. McDaniel: Castell’s 1669 Semitic–Latin Lexicon, Lane’s Arabic–English Lexicon, Jastrow, Golius, OT bibliographies, and a clergy reference directory.',
    jsonld:c.ld, body:body});
}

/* ======================================================================= */
/*  ABOUT / CV                                                              */
/* ======================================================================= */
function buildAbout(){
  var root = '../';
  var cv = D.cv;
  var c = crumbs(root, [{label:'Home',href:''},{label:'About',href:'about/'}]);
  function lis(arr){return arr.map(function(x){return '          <li>' + raw(x) + '</li>';}).join('\n');}

  var ld = {'@context':'https://schema.org','@type':'ProfilePage','mainEntity':personLd()};

  var body = [
c.html,
'  <section class="wrap">',
'    <div class="book">',
'      <aside class="book__aside">',
'        <figure class="book__cover" style="text-align:center">',
'          <img src="' + root + 'assets/img/mcdaniel-1990.jpg" alt="Thomas F. McDaniel" style="border-radius:2px;box-shadow:var(--shadow);filter:sepia(.12) saturate(.92)">',
'          <figcaption class="muted" style="font-size:.8rem;margin-top:.7rem">Thomas F. McDaniel</figcaption>',
'          <ul class="book__facts" style="text-align:left">',
'            <li><span>Born</span><span>1931, Baltimore</span></li>',
'            <li><span>Ph.D.</span><span>Johns Hopkins, 1966</span></li>',
'            <li><span>Field</span><span>OT &amp; Semitics</span></li>',
'          </ul>',
'        </figure>',
'      </aside>',
'      <article class="prose">',
'        <p class="eyebrow">Curriculum Vitae</p>',
'        <h1>Thomas Francis McDaniel, Ph.D.</h1>',
'        <p class="lede">' + esc(site.role) + ' at ' + esc(site.institution) + '. A scholar of Hebrew and the Semitic languages whose work recovers lost lexemes and cognates to clarify the text of the Old and New Testaments.</p>',
'        <h3>Education</h3>',
'        <ul class="cv-list">',
lis(cv.education),
'        </ul>',
'        <h3>Honors</h3>',
'        <ul class="cv-list">',
lis(cv.honors),
'        </ul>',
'        <h3>Professional Experience</h3>',
'        <ul class="cv-list">',
lis(cv.experience),
'        </ul>',
'        <h3>Professional Societies</h3>',
'        <p>' + raw(cv.societies) + '</p>',
'        <h3>Personal</h3>',
'        <p><strong>Born:</strong> ' + esc(site.birth) + '.<br><strong>Family:</strong> ' + raw(cv.family) + '</p>',
'      </article>',
'    </div>',
'  </section>'
  ].join('\n');

  page({file:'about/index.html', root:root, current:'about', path:'about/', ogType:'profile',
    title:'About — Thomas F. McDaniel, Ph.D. (Curriculum Vitae)',
    desc:'Curriculum vitae of Thomas F. McDaniel, Ph.D. (Johns Hopkins, 1966): Professor Emeritus of Old Testament and Hebrew at Palmer Theological Seminary; missionary in Japan; scholar of Semitic philology.',
    jsonld:ld, body:body});
}

/* ======================================================================= */
/*  404                                                                     */
/* ======================================================================= */
function build404(){
  var root = '/tmcdaniel/'; // absolute for project-page 404
  var body = [
'  <section class="wrap" style="text-align:center;padding-top:7rem;padding-bottom:7rem">',
'    <p class="eyebrow">404</p>',
'    <h1 style="font-family:var(--display)">This page is not in the codex</h1>',
'    <p class="lede narrow" style="margin:0 auto">The leaf you sought is missing. Return to the library and begin again.</p>',
'    <div class="btn-row" style="justify-content:center"><a class="btn btn--primary" href="' + root + '">Back to the archive</a></div>',
'  </section>'
  ].join('\n');
  // 404 uses absolute asset paths so it works at any depth
  var html = [
'<!DOCTYPE html>','<html lang="en">','<head>',
'  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">',
'  <title>Page not found — Thomas F. McDaniel Archive</title>',
'  <meta name="robots" content="noindex">',
'  <link rel="stylesheet" href="' + root + 'assets/css/site.css?v=' + ASSET_VER + '">',
'</head>','<body>',
masthead(root,''),
'  <main>',body,'  </main>',
footer(root),
'</body>','</html>'
  ].join('\n');
  write('404.html', html);
}

/* ======================================================================= */
/*  sitemap / robots / nojekyll                                             */
/* ======================================================================= */
function buildMeta(){
  var urls = ['', 'books/', 'writings/', 'sermons/', 'key/', 'resources/', 'about/'];
  D.books.forEach(function(b){ urls.push('books/' + b.slug + '/'); });
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  urls.forEach(function(u){
    var pri = (u==='') ? '1.0' : (u.indexOf('books/')===0 && u!=='books/') ? '0.8' : '0.7';
    xml += '  <url><loc>' + site.baseUrl + '/' + u + '</loc><changefreq>yearly</changefreq><priority>' + pri + '</priority></url>\n';
  });
  xml += '</urlset>\n';
  fs.writeFileSync(path.join(OUT,'sitemap.xml'), xml);

  fs.writeFileSync(path.join(OUT,'robots.txt'),
    'User-agent: *\nAllow: /\n\nSitemap: ' + site.baseUrl + '/sitemap.xml\n');
  fs.writeFileSync(path.join(OUT,'.nojekyll'), '');
  pages.push('sitemap.xml','robots.txt','.nojekyll');
}

/* ---- run ----------------------------------------------------------------- */
buildHome();
buildBooksIndex();
D.books.forEach(buildBook);
buildWritings();
buildSermons();
buildKey();
buildResources();
buildAbout();
build404();
buildMeta();

console.log('Built ' + pages.length + ' files:');
pages.forEach(function(p){ console.log('  ' + p); });
if(warnings.length){
  console.log('\n' + warnings.length + ' warning(s):');
  warnings.slice(0,40).forEach(function(w){ console.log('  ! ' + w); });
} else {
  console.log('\nNo missing-PDF warnings — all referenced files present.');
}
