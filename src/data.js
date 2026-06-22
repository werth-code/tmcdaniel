/* Content model for the Thomas F. McDaniel scholarly archive.
   All authored PDFs live in /pdf/ (rehosted). Third-party lexicons and a
   handful of HTML-only pages link back to the original Palmer server. */

'use strict';

var ORIGIN = 'https://tmcdaniel.palmerseminary.edu';

var site = {
  baseUrl: 'https://werth-code.github.io/tmcdaniel', // canonical root (no trailing slash)
  origin: ORIGIN,
  author: 'Thomas F. McDaniel, Ph.D.',
  shortName: 'Thomas F. McDaniel',
  role: 'Professor Emeritus of Old Testament Studies and Hebrew',
  institution: 'Palmer Theological Seminary, the Seminary of Eastern University',
  email: 'tmcdebts1@comcast.net',
  birth: 'March 1, 1931, Baltimore, Maryland',
  tagline: 'A free online library of biblical philology — Hebrew, Aramaic, Syriac, and Arabic studies of the Old and New Testaments.'
};

/* ---- The five volumes ---------------------------------------------------- */

var books = [
  {
    slug: 'song-of-deborah',
    no: 'Volume I',
    title: 'The Song of Deborah: Poetry in Dialect',
    year: '2003',
    pages: 397,
    full: 'The Song of Deborah Poetry in Dialect.pdf',
    blurb: 'A philological reconstruction and fresh translation of Judges 5, one of the oldest poems in the Hebrew Bible, read through its Northwest-Semitic dialect.',
    note: 'First published as <em>Deborah Never Sang: A Philological Study of the Song of Deborah (Judges Chapter V)</em> (Jerusalem: Makor, 1983).',
    cover: 'judges5-hebrew.jpg',
    chapters: [
      { t: 'Title Page, Table of Contents, Preface, Acknowledgements, Abbreviations', pdf: 'Deborah_TP-Abbrev.pdf', front: true },
      { t: 'Introduction', pdf: 'Deborah_Introduction.pdf', front: true },
      { n: 'I', t: 'The Integrity of the Hebrew Text', pdf: 'Deborah_Chapter_1.pdf' },
      { n: 'II', t: 'The Literary Components of the Deborah–Barak–Yael Tradition', pdf: '2Chapter.pdf' },
      { n: 'III', t: 'Shamgar Ben-Anat: An Israelite Overseer', pdf: '3Chapter.pdf' },
      { n: 'IV', t: 'Tapara / Dapara: A Clue to Chronology', pdf: '4Chapter.pdf' },
      { n: 'V', t: 'The Reconstructed Hebrew Text and Translation', pdf: '5Chapter.pdf' },
      { n: 'VI', t: 'Commentary and Notes', pdf: '6Chapter.pdf' },
      { n: 'VII', t: 'Summary and Conclusions', pdf: '7Chapter.pdf' }
    ],
    extras: [
      { t: 'Plates I–V', pdf: '8Plates.pdf' },
      { t: 'Bibliography (A–Z)', pdf: '9Bibliography.pdf' },
      { t: 'Appendix: Alternate Translations', pdf: '10Appendix-Translations.pdf' },
      { t: 'Indices', pdf: '11Appendix-Index.pdf' },
      { t: 'Paraphrase of Judges 5 by Sir Richard Blackmore (1700)', pdf: '1700SOD.pdf' }
    ]
  },

  {
    slug: 'clarifying-baffling-biblical-passages',
    no: 'Volume II',
    title: 'Clarifying Baffling Biblical Passages',
    year: '2002',
    pages: 506,
    full: 'Clarifying Baffling Biblical Passages.pdf',
    blurb: 'Thirty-six studies that recover lost lexemes and Arabic, Aramaic, and Ugaritic cognates to clarify difficult verses from Genesis to the Gospels.',
    chapters: [
      { t: 'Title Page, Table of Contents, Preface, Abbreviations', pdf: 'CBBP_Preface.pdf', front: true },
      { t: 'Introduction', pdf: 'CBBP_Introduction.pdf', front: true },
      { n: '1', t: 'Reptile Rations in Genesis 3:14 and Isaiah 65:25', pdf: 'CBBP_Chapter_1.pdf' },
      { n: '2', t: 'Genesis 3:16 “He Shall Be Like You”', pdf: 'CBBP_Chapter_2.pdf' },
      { n: '3', t: 'Genesis 16:10–12 Ishmael: A Peacemaker', pdf: 'CBBP_Chapter_3.pdf' },
      { n: '4', t: 'Genesis 17:5 The Meaning of Abram and Abraham', pdf: 'CBBP_Chapter_4.pdf' },
      { n: '5', t: 'Exodus 4:24 Revisited', pdf: 'CBBP_Chapter_5.pdf' },
      { n: '6', t: 'Leviticus 16:8, 10, 26 Ending the Enigma of Azazel', pdf: 'CBBP_Chapter_6.pdf' },
      { n: '7', t: 'Moses was Made to Despair: Numbers 12:3', pdf: 'CBBP_Chapter_7.pdf' },
      { n: '8', t: 'The Poor Must Not Be Denied Assistance: Deut. 15:14 and 15:11', pdf: 'CBBP_Chapter_8.pdf' },
      { n: '9', t: 'The Rehab of Rahab: Joshua 2:1; 6:17; 6:25', pdf: 'CBBP_Chapter_9.pdf' },
      { n: '10', t: 'The Call for a “Blackout” and the Solar Eclipse in Joshua 10:7–15', pdf: 'CBBP_Chapter_10.pdf' },
      { n: '11', t: 'Huldah: The Guardian of Tradition: II Kings 22', pdf: 'CBBP_Chapter_11.pdf' },
      { n: '12', t: 'The Good Samaritan Named Oded in II Chronicles 28:5–15', pdf: 'CBBP_Chapter_12.pdf' },
      { n: '13', t: 'The Meaning of Karpas: Multi-Colored, Cotton, and Celery', pdf: 'CBBP_Chapter_13.pdf' },
      { n: '14', t: 'Adore without Restraint: Psalm 2:11–12', pdf: 'CBBP_Chapter_14.pdf' },
      { n: '15', t: 'Surely There Is a God: Proverbs 30:1–5', pdf: 'CBBP_Chapter_15.pdf' },
      { n: '16', t: 'Recovery of Rare Words in Ecclesiastes 7:26–28', pdf: 'CBBP_Chapter_16.pdf' },
      { n: '17', t: 'Arabic Cognates which Clarify Song of Solomon 1:3', pdf: 'CBBP_Chapter_17.pdf' },
      { n: '18', t: 'The Excited Stallions of Jeremiah 5:8', pdf: 'CBBP_Chapter_18.pdf' },
      { n: '19', t: 'Jeremiah 31:21–22 Revisited', pdf: 'CBBP_Chapter_19.pdf' },
      { n: '20', t: 'Ezekiel Went “Flying Off in a Circle of Wind”: Ezekiel 3:14', pdf: 'CBBP_Chapter_20.pdf' },
      { n: '21', t: 'Ezekiel’s Criticism of Triage in Jerusalem: Ezekiel 13:17–22', pdf: 'CBBP_Chapter_21.pdf' },
      { n: '22', t: 'The King of Tyre in Ezekiel 28', pdf: 'CBBP_Chapter_22.pdf' },
      { n: '23', t: 'No Moon of Blood in Joel 2:31', pdf: 'CBBP_Chapter_23.pdf' },
      { n: '24', t: 'The Ambiguities in Amos’ Résumé: Amos 1:1 and 7:4', pdf: 'CBBP_Chapter_24.pdf' },
      { n: '25', t: 'The Mobile Shrine in Zechariah 5:5–11', pdf: 'CBBP_Chapter_25.pdf' },
      { n: '26', t: 'The Setting Star in Matthew 2:9', pdf: 'CBBP_Chapter_26.pdf' },
      { n: '27', t: 'What to Do with a Lamp? Matthew 5:15; Luke 8:16, 11:33; Mark 4:21', pdf: 'CBBP_Chapter_27.pdf' },
      { n: '28', t: 'A “Reappraisal” of the Pearls in Matthew 7:6', pdf: 'CBBP_Chapter_28.pdf' },
      { n: '29', t: 'Who Should Bury Their Dead? (Matthew 8:22b)', pdf: 'CBBP_Chapter_29.pdf' },
      { n: '30', t: 'I Have Not Come to Bring the End: Matthew 10:34–36', pdf: 'CBBP_Chapter_30.pdf' },
      { n: '31', t: 'The Misreading which Led to the “Hate” in Luke 14:26–27', pdf: 'CBBP_Chapter_31.pdf' },
      { n: '32', t: 'The Meaning of “Mary,” “Magdalene,” and Other Names', pdf: 'CBBP_Chapter_32.pdf' },
      { n: '33', t: 'Do You Love Me More Than Kith-and-Kin? John 21:15–17', pdf: 'CBBP_Chapter_33.pdf' },
      { n: '34', t: 'Stabbed Along the Inlets of Egypt: Psalms of Solomon 2:26–27', pdf: 'CBBP_Chapter_34.pdf' },
      { n: '35', t: 'Arabic Cognates that Clarify the Hasmonean “Seekers of Flattery”', pdf: 'CBBP_Chapter_35.pdf' },
      { n: '36', t: 'Summary', pdf: 'CBBP_Chapter_36.pdf' }
    ],
    extras: [
      { t: 'Bibliography', pdf: 'CBBP_Bibliography.pdf' },
      { t: 'Complete Index', pdf: 'CBBP_Index.pdf' },
      { t: 'Index — Akkadian', pdf: 'CBBP_Index_Akkadian+.pdf' },
      { t: 'Index — Arabic', pdf: 'CBBP_Index_Arabic.pdf' },
      { t: 'Index — Aramaic', pdf: 'CBBP_Index_Aramaic.pdf' },
      { t: 'Index — Authors', pdf: 'CBBP_Index_Authors.pdf' },
      { t: 'Index — Biblical References', pdf: 'CBBP_Index_Biblical_References.pdf' },
      { t: 'Index — Coptic', pdf: 'CBBP_Index_Coptic+.pdf' },
      { t: 'Index — Greek', pdf: 'CBBP_Index_Greek.pdf' },
      { t: 'Index — Hebrew', pdf: 'CBBP_Index_Hebrew.pdf' },
      { t: 'Index — Names', pdf: 'CBBP_Names.pdf' },
      { t: 'Index — Non-Biblical References', pdf: 'CBBP_Index_Non_Biblical_References.pdf' },
      { t: 'Index — Syriac', pdf: 'CBBP_Index_Syriac.pdf' },
      { t: 'Index — Ugaritic', pdf: 'CBBP_Index_Ugaritic.pdf' }
    ]
  },

  {
    slug: 'clarifying-more-baffling-biblical-passages',
    no: 'Volume III',
    title: 'Clarifying More Baffling Biblical Passages',
    year: '2004',
    pages: 477,
    full: 'Clarifying More Baffling Biblical Passages.pdf',
    blurb: 'A second gathering of twenty-nine philological studies, from the patriarchs and the Psalms to the prophets and the Epistle to the Hebrews.',
    chapters: [
      { t: 'Title Page, Preface, Acknowledgements', pdf: 'CMBBP_PREFACE.pdf', front: true },
      { t: 'Table of Contents', pdf: 'CMBBP_TC.pdf', front: true },
      { n: '1', t: 'Suggestions for Genesis 2:1–3, 8:11, and 39:6', pdf: 'CMBBP_ONE.pdf' },
      { n: '2', t: 'Notes on Genesis 6:3–4', pdf: 'CMBBP_TWO.pdf' },
      { n: '3', t: 'Ambiguities About Abraham', pdf: 'CMBBP_THREE.pdf' },
      { n: '4', t: 'What Kind of Aramean was Jacob? Deut 26:5', pdf: 'CMBBP_FOUR.pdf' },
      { n: '5', t: 'Moses Said “Please! Behold!” (Exodus 17 & Numbers 20)', pdf: 'CMBBP_FIVE.pdf' },
      { n: '6', t: 'Problems in the Balaam Tradition', pdf: 'CMBBP_SIX.pdf' },
      { n: '7', t: 'The Prayer of Jabez in I Chron 4:8–10', pdf: 'CMBBP_SEVEN.pdf' },
      { n: '8', t: 'Psalm 19:1–6 — A Psalm by a Blind Poet', pdf: 'CMBBP_EIGHT.pdf' },
      { n: '9', t: 'Notes on Psalms 70 and 40', pdf: 'CMBBP_NINE.pdf' },
      { n: '10', t: 'Psalm 109: A Woman’s Lament', pdf: 'CMBBP_TEN.pdf' },
      { n: '11', t: 'The Royal Lady of Proverbs 31', pdf: 'CMBBP_ELEVEN.pdf' },
      { n: '12', t: 'The Stranger Women of Proverbs', pdf: 'CMBBP_TWELVE.pdf' },
      { n: '13', t: 'Seven Problems in Isaiah 8:1–15', pdf: 'CMBBP_THIRTEEN.pdf' },
      { n: '14', t: 'Two Unrecognized Words in Isaiah 53:9a and Ezekiel 43:7', pdf: 'CMBBP_FOURTEEN.pdf' },
      { n: '15', t: 'Jeremiah Was Not Deceived: Jeremiah 20:7–13', pdf: 'CMBBP_FIFTEEN.pdf' },
      { n: '16', t: 'Deceived or Deceiving Prophets: Ezekiel 14:9 and 20:25–27', pdf: 'CMBBP_SIXTEEN.pdf' },
      { n: '17', t: 'Notes on Habakkuk 2:1–5', pdf: 'CMBBP_SEVENTEEN.pdf' },
      { n: '18', t: 'O.T. Short Notes: 1 Sam 25:22 & 2 Sam 12:14; Ezek 38:21; Zech 2:8', pdf: 'CMBBP_EIGHTTEEN.pdf' },
      { n: '19', t: 'The Derivation of Nazarene & Nazareth', pdf: 'CMBBP_NINETEEN.pdf' },
      { n: '20', t: 'Note on the Widow’s Donation', pdf: 'CMBBP_TWENTY.pdf' },
      { n: '21', t: 'The Multiple Meanings of “Hosanna”', pdf: 'CMBBP_TWENTY-ONE.pdf' },
      { n: '22', t: 'The Meaning of Ephratha', pdf: 'CMBBP_TWENTY-TWO.pdf' },
      { n: '23', t: 'Clarifying Mark 3:17 and 9:49', pdf: 'CMBBP_TWENTY-THREE.pdf' },
      { n: '24', t: 'How Did “Rust” Get into Matt 6:19–20 and “Purse” into Luke 12:33?', pdf: 'CMBBP_TWENTY-FOUR.pdf' },
      { n: '25', t: 'Adam and Enosh and “the Son of Man” (with an Addendum on Amos 9:11–12 and Acts 15:16–17)', pdf: 'CMBBP_TWENTY-FIVE.pdf' },
      { n: '26', t: 'New Testament Miscellanea', pdf: 'CMBBP_TWENTY-SIX.pdf' },
      { n: '27', t: 'Problem Quotations in the Epistle to the Hebrews (with an Addendum on Psalm 8:2 & Matthew 21:16)', pdf: 'CMBBP_TWENTY-SEVEN.pdf' },
      { n: '28', t: 'Luke’s Misreading in 16:9 of Two Hebrew Words', pdf: 'CMBBP_TWENTY-EIGHT.pdf' },
      { n: '29', t: 'Summary of New Translations of Old Hebrew Words in Chapters 1–28', pdf: 'CMBBP_TWENTY-NINE.pdf' }
    ],
    extras: [
      { t: 'Bibliography', pdf: 'CMBBP_BIBLIOGRAPHY.pdf' }
    ]
  },

  {
    slug: 'aramaic-names-and-hebrew-matthew',
    no: 'Volume IV',
    title: 'Clarifying New Testament Aramaic Words and Names, and Shem Tob’s Hebrew Gospel of Matthew',
    shortTitle: 'Aramaic Names & Hebrew Matthew',
    year: '2008',
    pages: 375,
    full: "Clarifying New Testament Names & Words and Shem Tob's Gospel of Matthew.pdf",
    blurb: 'The Aramaic words and names of the New Testament, set beside Shem Tob ben Isaac ben Shaprut’s medieval Hebrew text of the Gospel of Matthew.',
    cover: 'judges5-aramaic.jpg',
    chapters: [],
    extras: [
      { t: 'Bibliography', pdf: 'Bibliography-Volume4_ShemTob+.pdf' },
      { t: 'Shem Tob’s Hebrew Gospel of Matthew (PDF text)', pdf: 'ShemTob_Matthew.pdf' }
    ]
  },

  {
    slug: 'miscellaneous-biblical-studies',
    no: 'Volume V',
    title: 'Miscellaneous Biblical Studies',
    year: '2010',
    pages: 364,
    full: 'Miscellaneous Biblical Studies.pdf',
    blurb: 'Twenty-two essays on gender, the ineffable Name, lost lexemes in the Gospels, and the recovery of original readings across the testaments.',
    chapters: [
      { n: '1', t: 'Some Observations on Gender and Sexuality in Biblical Tradition', pdf: 'MBS_1_Gender.pdf' },
      { n: '2', t: 'Why the Name of God was Ineffable', pdf: 'MSB_2_Ineffable.pdf' },
      { n: '3', t: 'Eliminating “The Enemies of the Lord” in II Samuel 12:14', pdf: 'MSB_3_II SAMUEL 12.pdf' },
      { n: '4', t: 'Reconsidering the Arabic Cognates which Clarify Psalm 40:7', pdf: 'MBS_4_Psalm40.pdf' },
      { n: '5', t: 'A New Interpretation of Prov 25:22 & Rom 12:20', pdf: 'MBS_5_Prov-n-Rom.pdf' },
      { n: '6', t: 'Arabic Cognates Help to Clarify Jer 2:34b', pdf: 'MBS_6_Jer2-34.pdf' },
      { n: '7', t: 'Notes on Matthew 6:34, “Sufficient unto the day…”', pdf: 'MBS_7_Matt-6.pdf' },
      { n: '8', t: 'What Did Jesus Write according to John 8:6b–8?', pdf: 'MBS_8_John_8_6-8.pdf', addendum: 'ADDENDUM_Chapter_8.pdf' },
      { n: '9', t: 'Notes on John 19:39, 20:15 and Matt 3:7', pdf: 'MBS_9_JOHN_19-39.pdf' },
      { n: '10', t: 'Recovering Jesus’ Words by which He Initiated the Eucharist', pdf: 'MBS_10_Eucharist.pdf' },
      { n: '11', t: 'Understanding Sarah’s Laughter and Lying: Notes on Gen 18:9–15', pdf: 'MBS_11_Sarah_Laugh.pdf' },
      { n: '12', t: 'Redefining the Eikei, Raka, and More in Matt 5:22', pdf: 'MBS_12_MATTHEW_5-22.pdf' },
      { n: '13', t: 'Luke’s Misinterpretation of the Hebrew Quotation in Acts 26:14', pdf: 'MBS_13_Acts26-14.pdf' },
      { n: '14', t: 'The Origin of Jesus’ “Messianic Secret”', pdf: 'MBS_14_pp219-244.pdf' },
      { n: '15', t: 'Lost Lexemes Clarify Mark 1:41 and John 3:3', pdf: 'MBS_15_Mark1-41&John3-3.pdf' },
      { n: '16', t: 'Lost Lexemes Clarify John 11:33 and 11:38', pdf: 'John 11_Lost-Lexemes_256ff.pdf' },
      { n: '17', t: 'A New Interpretation of Jesus’ Cursing the Fig Tree', pdf: 'MBS_Chapter_17.pdf' },
      { n: '18', t: 'A New Interpretation of Jesus’ Parable of the Wedding Banquet', pdf: 'MBS_18_Matt22_287-304.pdf' },
      { n: '19', t: 'Restoring the Original Versification of Isaiah 8', pdf: 'Isaiah_8_304-314.pdf' },
      { n: '20', t: 'A Better Interpretation of Isaiah 9:5–6a', pdf: 'Isaiah 9_Names_315-320.pdf' },
      { n: '21', t: 'The Septuagint Has the Correct Translation of Exodus 21:22–23 (2012)', pdf: 'New Vol 5_XXI.pdf' },
      { n: '22', t: 'Recovering the Wordplay in Zechariah 2:4–9 [MT 2:8–13] (2012)', pdf: 'New Vol 5_XXII.pdf' }
    ],
    extras: [
      { t: 'Bibliography', pdf: 'MBS_BIBLIOGRAPHY_1-19page1ff.pdf' },
      { t: 'Author / Editor Index', pdf: 'MBS_Author_Index.pdf' }
    ]
  }
];

/* ---- Sermons ------------------------------------------------------------- */

var sermons = [
  { year: '1969', title: 'Peace on Earth', where: 'Oppama, Japan (preached in Japanese)', html: 'sekkyo-oppama.html' },
  { year: '1993', title: 'A Light to the Gentiles', where: 'Philadelphia Japanese Church', html: 'kyokaisermon.html' },
  { year: '1998', title: 'Shifting the Paradigm to Jesus, Son of Jesse', where: 'Seminary Graduation Sermon, Bryn Mawr Presbyterian Church (May 23)', pdf: '1998GraduationSermon.pdf' },
  { year: '2001', title: 'Celebrating Fifty Years of M & M', where: 'North Fork Baptist Church, Virginia (August 26)', pdf: '50_Anniv_Sermon.pdf' },
  { year: '2002', title: 'Ancient Myth or Good News', where: 'Silverside Church, Wilmington, Delaware (September)', pdf: 'sermon-myths-gospel.pdf' },
  { year: '2004', title: 'Love of Labor and Labor of Love', where: 'Silverside Church, Wilmington — Communion & Labor Sunday (September 5)', pdf: 'Silverside Sept 2004.pdf' },
  { year: '2004', title: 'God and Government', where: 'North Fork Baptist Church, Virginia (October 24)', pdf: 'Romans_13_Sermon.pdf' }
];

/* ---- Other writings & publications (1951–2012) --------------------------- */
/* pdf: rehosted file in /pdf/.  html: original page on the Palmer server.    */

var writings = [
  { year: '1951', title: 'Seminary Paper Comparing 1850 and 1950 New Testament Scholarship', pdf: '1951_McD_TermPaper.pdf' },
  { year: '1956', title: 'The Tribal Participants of the Exodus and Conquest (M.A. Thesis, full text)', pdf: 'penn-thesis.pdf' },
  { year: '1958', title: 'Japan Baptist Begin Again', html: 'JapanBaptist.html' },
  { year: '1966', title: 'Book Review: Albrektson’s Studies in the Text and Theology of the Book of Lamentations', pdf: 'ALBREKTSON_REVIEW.pdf' },
  { year: '1966', title: 'Book Review: Albright’s History, Archaeology, and Christian Humanism', pdf: 'Albright_Reviewed.pdf' },
  { year: '1968', title: 'Philological Studies in Lamentations (Biblica) — from the 1966 Johns Hopkins dissertation', html: 'biblica.html' },
  { year: '1968', title: 'The Alleged Sumerian Influence Upon Lamentations (Vetus Testamentum)', html: 'vt.html' },
  { year: '1968', title: 'The Consonantal Force of He in the Tetragrammaton', html: 'seishotoshingaku.html' },
  { year: '1969', title: 'A Critique of James Barr’s Critique of Old Testament Philology', html: 'barrcritique.html' },
  { year: '1978', title: 'A Response to Paul Van Buren — International Symposium on the Holocaust', html: 'holocaustsynposium.html' },
  { year: '1979', title: '13 Teaching-Learning Resources for Sunday School Teachers (Baptist Leader)', html: 'Baptist_Leader_1979.html' },
  { year: '1979', title: 'Review: Hans Gottlieb’s A Study on the Text of Lamentations', pdf: 'Gottleib_Reviewed.pdf' },
  { year: '1980', title: 'Review: John Topolewski’s The Rabbi’s Elixir', pdf: 'Topolewski_Reviewed.pdf' },
  { year: '1981', title: '13 more Teaching-Learning Resources for Sunday School Teachers (Baptist Leader)', html: 'Baptist_Leader_1981.html' },
  { year: '1985', title: 'Evangelical Roundtable Devotionals I and II', html: 'devotion1&2.html' },
  { year: '1987', title: 'The Recovery of Reconciliation', html: 'Isa9-7leMarbeh.html' },
  { year: '1987', title: 'A Devotional on Psalm 67', html: 'psalm67.htm' },
  { year: '1987', title: 'The Right to Work', html: 'right2work.html' },
  { year: '1999', title: 'Recollections About The Eastern Baptist Theological Seminary', html: '1999recollections.html' },
  { year: '2004', title: 'The Los Lunas, New Mexico, Decalogue: Exodus 20:2–17 and Deuteronomy 5:6–21', pdf: 'LosLunas10.pdf' },
  { year: '2005', title: 'Name Changes in the Bible (manuscript for InMinistry)', pdf: 'palmer.pdf' },
  { year: '2005', title: 'Name Changes in the Bible (InMinistry, printed text)', pdf: 'InMinistry_NameChanges.pdf' },
  { year: '2005', title: 'The Ten Commandments — The Pastor’s Bible Study (Abingdon Press)', pdf: 'PastorsBibleStudy_10Commandments.pdf' },
  { year: '2005', title: 'The Ten Commandments (original PDF copy)', pdf: '10.pdf' },
  { year: '2005', title: 'Letter to Abingdon Press concerning errors in the published text', pdf: 'Letter to Abingdon.pdf' },
  { year: '2006', title: 'McDaniel’s Meanderings (InMinistry, Palmer Theological Seminary)', pdf: 'McD_InMinistry_Fall_2006.pdf' },
  { year: '2010', title: 'Review of Rein Bos, We Have Heard That God Is With You: Preaching the Old Testament', pdf: 'Bos Review.pdf' },
  { year: '2012', title: 'The Septuagint Has the Correct Translation of Exodus 21:22–23', pdf: 'LXX_EXO_ 21_22-23.pdf' },
  { year: '2012', title: 'Recovering the Wordplay in Zechariah 2:4–9 [MT 2:8–13]', pdf: 'Zechariah_2.pdf' }
];

var writingsFull = { title: 'Miscellaneous Writings and Reviews — collected (362 pages)', pdf: 'Miscellaneous Writings and Reviews.pdf' };

/* ---- Reference works & collections (linked to the original archive) ------- */

var resources = [
  { title: 'Philological Resources for Old Testament Studies', desc: 'A curated table of contents of lexical and philological tools.', html: 'philological resources toc.htm' },
  { title: 'Castell’s Semitic–Latin Lexicon (1669)', desc: 'Edmund Castell’s monumental Lexicon Heptaglotton, digitized page by page.', html: 'Castells Semitic Latin Lexicon.htm' },
  { title: 'Lane’s Arabic–English Lexicon', desc: 'Edward William Lane’s standard Arabic–English dictionary, indexed for download.', html: 'LaneIndex.htm' },
  { title: 'Jastrow’s Hebrew/Aramaic–English Lexicon', desc: 'Marcus Jastrow’s dictionary of the Targumim, Talmud, and Midrashic literature.', html: 'Jastrow_1&2.htm' },
  { title: 'Golius’ Persian–Latin Lexicon', desc: 'Jacobus Golius’ seventeenth-century Persian–Latin lexicon.', html: 'Persian.html' },
  { title: 'Old Testament Bibliographies', desc: 'Extensive subject bibliographies for Old Testament research.', html: 'OTBibliographies.html' },
  { title: 'The Los Lunas, New Mexico, Decalogue', desc: 'Photographs and links treating the inscribed Decalogue stone of New Mexico.', html: 'loslunas toc.htm' },
  { title: 'Internet Links for Clergy', desc: 'A large directory of scholarly and ecclesiastical resources on the web.', html: 'clergy-links.html' },
  { title: '1977 Green Lake Missions Conference Bible Studies', desc: 'Bible studies led at the World Mission Conference, Green Lake, Wisconsin.', html: '1977_Green_Lake.html' },
  { title: 'Japan Baptist Union Archives (Dōmei)', desc: 'Photographs, 1958–1961, for the Japan Baptist Union Archives.', html: 'Domei Archives.html' },
  { title: 'Palmer Seminary Archives', desc: 'Archival materials from Palmer Theological Seminary.', html: 'archives/index.htm' }
];

/* ---- Curriculum vitae ---------------------------------------------------- */

var cv = {
  education: [
    'Baltimore City public schools, 1937–1948.',
    'University of Richmond, Richmond, Virginia — B.A. (Sociology), June 1951.',
    'Eastern Baptist Theological Seminary, Philadelphia — B.D., <em>Cum Laude</em>, May 1955.',
    'University of Pennsylvania, Philadelphia — M.A. (Near Eastern Studies), February 1956. Thesis: “The Tribal Participants of the Exodus and Conquest.”',
    'Yale University, Institute of Far Eastern Languages (Japanese), Spring 1956.',
    'Johns Hopkins University, Department of Near East Studies — Ph.D., May 1966. Dissertation: “A Philological Study of Lamentations.”',
    'Post-Doctoral Fellow, Johns Hopkins University, Department of Near East Studies, 1976.',
    'International Christian University, Tokyo — Japanese Language Study, Summer 1982.'
  ],
  honors: [
    'University of Richmond Honor Council, 1950–1951.',
    'University of Pennsylvania Scholarship, 1953 and 1954.',
    'Johns Hopkins University Fellowship, 1962–1965.'
  ],
  experience: [
    'Student pastor, Gwathmey Baptist Church, Ashland, Virginia, 1950–1951.',
    'Educational missionary (American Baptist Churches), teaching Old Testament at Kanto Gakuin University, Yokohama, Japan, 1956–1961.',
    'Pastor, First Baptist Church of Hurlock, Maryland, 1961–1965 (while in the Ph.D. program at Johns Hopkins).',
    'Interim pastor, Grace Baptist Church, Baltimore, 1966.',
    'Associate Professor at Kanto Gakuin University, Yokohama, and Visiting Lecturer in Semitic languages at Union Theological Seminary and Aoyama University, Tokyo, 1966–1969.',
    'Professor of Hebrew and Old Testament Studies, Eastern Baptist Theological Seminary, Wynnewood, Pennsylvania, 1969–2001 (tenured 1974; retired 2001).',
    'Volunteer, archaeological excavation at Tel Gezer, Israel, Summer 1973.',
    'Adjunct Professor of Old Testament, Eastern College, St. Davids, PA, 1981–1982.',
    'Director, Eastern’s School of Christian Ministry, 1985–1986.',
    'Adjunct Professor, St. Joseph’s University, Philadelphia, Summer 1987.',
    'Director of Financial Aid, Eastern Baptist Theological Seminary, 1987.',
    'Affiliate Professor of Religion, Temple University, sabbatical 1988.',
    'Director, Doctor of Ministry Program in Theological Studies and Ministry, 1988–1989.',
    'Visiting Lecturer, Temple University, Department of Religion, 1990–1991.',
    'Professor Emeritus, Eastern Baptist Theological Seminary, from June 30, 2001.'
  ],
  societies: 'Before retirement: member of the Society of Biblical Literature, the American Schools of Oriental Research, and the National Association of Professors of Hebrew. Listed in the Sixth Edition of the Directory of American Scholars and the 1976 edition of Who’s Who in Religion.',
  family: 'Married to Doris Jean Hudgins, R.N. (retired). One son, James Walter, married to Kim Heise of Glen Ellyn, Illinois; four grandchildren: Erica, Ian, Lauren, and Owen.'
};

/* ---- The Key essay (full text) ------------------------------------------ */

var keyEssay = {
  title: 'A Key for Interpreting the Bible',
  epigraphRef: '2 Timothy 3:16–17',
  epigraph: 'All scripture is inspired by God and is useful for teaching, for reproof, for correction, and for training in righteousness, so that everyone who belongs to God may be proficient, equipped for every good work.',
  paragraphs: [
    'To state simply, “The Bible is the inspired and authoritative word of God,” is to make an incomplete sentence. The complete sentence needs to include prepositional modifiers which affirm that “the Bible is the inspired and authoritative word of God (1) <em>about</em> the way and will of God and (2) <em>about</em> our human condition.” The Bible includes countless case studies about human sin and pathologies — including the sins and pathology of some very religious people — as well as case studies of God’s therapeutic intentions and saving activities.',
    'The human pathologies evident in the Bible are revealed, in the words of Timothy, for our “<em>reproof</em>” and for our “<em>correction</em>.” There are case studies of bad behavior and bad religion revealed in the Bible which should never be followed, lest we suffer the same consequences as did the biblical characters. On the other hand, God’s will and ways are revealed for “<em>training in righteousness</em>” and for “<em>every good work</em>.”',
    'The guideline for distinguishing between the human pathology and the divine therapy in the Bible is to note first that whatever <em>blossoms</em> in the light of the Cross is the word of God about the divine will and the divine way. Secondly, whatever <em>withers</em> in the light of the Cross is the word of God about our human condition. Christ, the <em>Living Word</em>, clarified the ambiguities in the two parts of the divinely inspired <em>Written Word</em>. Anyone having difficulty distinguishing between our human pathologies and God’s will and saving acts must simply come closer to the Cross. The Cross demonstrated the difference between the therapeutic “loving enough to die” in contrast to the human pathology of “loving enough to kill.” When we approach the Cross, we become “<em>equipped for every good work</em>” to fulfill God’s will.'
  ]
};

module.exports = {
  site: site,
  books: books,
  sermons: sermons,
  writings: writings,
  writingsFull: writingsFull,
  resources: resources,
  cv: cv,
  keyEssay: keyEssay
};
