import Stemmer from "../stemmer";

const customDictionary = [
  "hancur",
  "benar",
  "apa",
  "siapa",
  "jubah",
  "baju",
  "beli",
  "celana",
  "hantu",
  "jual",
  "buku",
  "milik",
  "kulit",
  "sakit",
  "kasih",
  "buang",
  "suap",
  "nilai",
  "beri",
  "rambut",
  "adu",
  "suara",
  "daerah",
  "ajar",
  "kerja",
  "ternak",
  "asing",
  "raup",
  "gerak",
  "puruk",
  "terbang",
  "lipat",
  "ringkas",
  "warna",
  "yakin",
  "bangun",
  "fitnah",
  "vonis",
  "baru",
  "ajar",
  "tangkap",
  "kupas",
  "minum",
  "pukul",
  "cinta",
  "dua",
  "jauh",
  "ziarah",
  "nuklir",
  "gila",
  "hajar",
  "qasar",
  "udara",
  "populer",
  "warna",
  "yoga",
  "adil",
  "rumah",
  "muka",
  "labuh",
  "tarung",
  "tebar",
  "indah",
  "daya",
  "untung",
  "sepuluh",
  "ekonomi",
  "makmur",
  "telah",
  "serta",
  "percaya",
  "pengaruh",
  "kritik",
  "seko",
  "sekolah",
  "tahan",
  "capa",
  "capai",
  "mula",
  "mulai",
  "petan",
  "tani",
  "aba",
  "abai",
  "balas",
  "balik",
  "peran",
  "medan",
  "syukur",
  "syarat",
  "bom",
  "promosi",
  "proteksi",
  "prediksi",
  "kaji",
  "sembunyi",
  "langgan",
  "laku",
  "baik",
  "terang",
  "iman",
  "bisik",
  "taat",
  "puas",
  "makan",
  "nyala",
  "nyanyi",
  "nyata",
  "nyawa",
  "rata",
  "lembut",
  "ligas",
  "budaya",
  "karya",
  "ideal",
  "final",
  "taat",
  "tiru",
  "sepak",
  "kuasa",
  "malaikat",
  "nikmat",
  "lewat",
  "nganga",
  "allah",
];

describe("Stemmer", () => {
  it("stem words", () => {
    const stemmer = new Stemmer(customDictionary);

    expect(stemmer.stem("mei")).toEqual("mei");
    expect(stemmer.stem("bui")).toEqual("bui");
    expect(stemmer.stem("nilai")).toEqual("nilai");
    expect(stemmer.stem("hancurlah")).toEqual("hancur");
    expect(stemmer.stem("benarkah")).toEqual("benar");
    expect(stemmer.stem("apatah")).toEqual("apa");
    expect(stemmer.stem("siapapun")).toEqual("siapa");
    expect(stemmer.stem("jubahku")).toEqual("jubah");
    expect(stemmer.stem("bajumu")).toEqual("baju");
    expect(stemmer.stem("celananya")).toEqual("celana");
    expect(stemmer.stem("hantui")).toEqual("hantu");
    expect(stemmer.stem("belikan")).toEqual("beli");
    expect(stemmer.stem("jualan")).toEqual("jual");
    expect(stemmer.stem("bukumukah")).toEqual("buku");
    expect(stemmer.stem("miliknyalah")).toEqual("milik");
    expect(stemmer.stem("kulitkupun")).toEqual("kulit");
    expect(stemmer.stem("berikanku")).toEqual("beri");
    expect(stemmer.stem("sakitimu")).toEqual("sakit");
    expect(stemmer.stem("beriannya")).toEqual("beri");
    expect(stemmer.stem("kasihilah")).toEqual("kasih");
    expect(stemmer.stem("dibuang")).toEqual("buang");
    expect(stemmer.stem("kesakitan")).toEqual("sakit");
    expect(stemmer.stem("sesuap")).toEqual("suap");
    expect(stemmer.stem("beradu")).toEqual("adu");
    expect(stemmer.stem("berambut")).toEqual("rambut");
    expect(stemmer.stem("bersuara")).toEqual("suara");
    expect(stemmer.stem("berdaerah")).toEqual("daerah");
    expect(stemmer.stem("belajar")).toEqual("ajar");
    expect(stemmer.stem("bekerja")).toEqual("kerja");
    expect(stemmer.stem("beternak")).toEqual("ternak");
    expect(stemmer.stem("terasing")).toEqual("asing");
    expect(stemmer.stem("teraup")).toEqual("raup");
    expect(stemmer.stem("tergerak")).toEqual("gerak");
    expect(stemmer.stem("terpuruk")).toEqual("puruk");
    expect(stemmer.stem("teterbang")).toEqual("terbang");
    expect(stemmer.stem("melipat")).toEqual("lipat");
    expect(stemmer.stem("meringkas")).toEqual("ringkas");
    expect(stemmer.stem("mewarnai")).toEqual("warna");
    expect(stemmer.stem("meyakinkan")).toEqual("yakin");
    expect(stemmer.stem("membangun")).toEqual("bangun");
    expect(stemmer.stem("memfitnah")).toEqual("fitnah");
    expect(stemmer.stem("memvonis")).toEqual("vonis");
    expect(stemmer.stem("memperbaru")).toEqual("baru");
    expect(stemmer.stem("mempelajar")).toEqual("ajar");
    expect(stemmer.stem("meminum")).toEqual("minum");
    expect(stemmer.stem("memukul")).toEqual("pukul");
    expect(stemmer.stem("mencinta")).toEqual("cinta");
    expect(stemmer.stem("mendua")).toEqual("dua");
    expect(stemmer.stem("menjauh")).toEqual("jauh");
    expect(stemmer.stem("menziarah")).toEqual("ziarah");
    expect(stemmer.stem("menuklir")).toEqual("nuklir");
    expect(stemmer.stem("menangkap")).toEqual("tangkap");
    expect(stemmer.stem("menggila")).toEqual("gila");
    expect(stemmer.stem("menghajar")).toEqual("hajar");
    expect(stemmer.stem("mengqasar")).toEqual("qasar");
    expect(stemmer.stem("mengudara")).toEqual("udara");
    expect(stemmer.stem("mengupas")).toEqual("kupas");
    expect(stemmer.stem("menyuarakan")).toEqual("suara");
    expect(stemmer.stem("mempopulerkan")).toEqual("populer");
    expect(stemmer.stem("pewarna")).toEqual("warna");
    expect(stemmer.stem("peyoga")).toEqual("yoga");
    expect(stemmer.stem("peradilan")).toEqual("adil");
    expect(stemmer.stem("perumahan")).toEqual("rumah");
    expect(stemmer.stem("permuka")).toEqual("muka");
    expect(stemmer.stem("perdaerah")).toEqual("daerah");
    expect(stemmer.stem("pembangun")).toEqual("bangun");
    expect(stemmer.stem("pemfitnah")).toEqual("fitnah");
    expect(stemmer.stem("pemvonis")).toEqual("vonis");
    expect(stemmer.stem("peminum")).toEqual("minum");
    expect(stemmer.stem("pemukul")).toEqual("pukul");
    expect(stemmer.stem("pencinta")).toEqual("cinta");
    expect(stemmer.stem("pendua")).toEqual("dua");
    expect(stemmer.stem("penjauh")).toEqual("jauh");
    expect(stemmer.stem("penziarah")).toEqual("ziarah");
    expect(stemmer.stem("penuklir")).toEqual("nuklir");
    expect(stemmer.stem("penangkap")).toEqual("tangkap");
    expect(stemmer.stem("penggila")).toEqual("gila");
    expect(stemmer.stem("penghajar")).toEqual("hajar");
    expect(stemmer.stem("pengqasar")).toEqual("qasar");
    expect(stemmer.stem("pengudara")).toEqual("udara");
    expect(stemmer.stem("pengupas")).toEqual("kupas");
    expect(stemmer.stem("penyuara")).toEqual("suara");
    expect(stemmer.stem("pelajar")).toEqual("ajar");
    expect(stemmer.stem("pelabuh")).toEqual("labuh");
    expect(stemmer.stem("petarung")).toEqual("tarung");
    expect(stemmer.stem("terpercaya")).toEqual("percaya");
    expect(stemmer.stem("pekerja")).toEqual("kerja");
    expect(stemmer.stem("peserta")).toEqual("serta");
    expect(stemmer.stem("mempengaruhi")).toEqual("pengaruh");
    expect(stemmer.stem("mengkritik")).toEqual("kritik");
    expect(stemmer.stem("bersekolah")).toEqual("sekolah");
    expect(stemmer.stem("bertahan")).toEqual("tahan");
    expect(stemmer.stem("mencapai")).toEqual("capai");
    expect(stemmer.stem("dimulai")).toEqual("mulai");
    expect(stemmer.stem("petani")).toEqual("tani");
    expect(stemmer.stem("terabai")).toEqual("abai");
    expect(stemmer.stem("mensyaratkan")).toEqual("syarat");
    expect(stemmer.stem("mensyukuri")).toEqual("syukur");
    expect(stemmer.stem("mengebom")).toEqual("bom");
    expect(stemmer.stem("mempromosikan")).toEqual("promosi");
    expect(stemmer.stem("memproteksi")).toEqual("proteksi");
    expect(stemmer.stem("memprediksi")).toEqual("prediksi");
    expect(stemmer.stem("pengkajian")).toEqual("kaji");
    expect(stemmer.stem("pengebom")).toEqual("bom");
    expect(stemmer.stem("bersembunyi")).toEqual("sembunyi");
    expect(stemmer.stem("bersembunyilah")).toEqual("sembunyi");
    expect(stemmer.stem("pelanggan")).toEqual("langgan");
    expect(stemmer.stem("pelaku")).toEqual("laku");
    expect(stemmer.stem("pelangganmukah")).toEqual("langgan");
    expect(stemmer.stem("pelakunyalah")).toEqual("laku");
    expect(stemmer.stem("perbaikan")).toEqual("baik");
    expect(stemmer.stem("kebaikannya")).toEqual("baik");
    expect(stemmer.stem("bisikan")).toEqual("bisik");
    expect(stemmer.stem("menerangi")).toEqual("terang");
    expect(stemmer.stem("berimanlah")).toEqual("iman");
    expect(stemmer.stem("memuaskan")).toEqual("puas");
    expect(stemmer.stem("berpelanggan")).toEqual("langgan");
    expect(stemmer.stem("bermakanan")).toEqual("makan");
    expect(stemmer.stem("menyala")).toEqual("nyala");
    expect(stemmer.stem("menyanyikan")).toEqual("nyanyi");
    expect(stemmer.stem("menyatakannya")).toEqual("nyata");
    expect(stemmer.stem("penyanyi")).toEqual("nyanyi");
    expect(stemmer.stem("penyawaan")).toEqual("nyawa");
    expect(stemmer.stem("rerata")).toEqual("rata");
    expect(stemmer.stem("lelembut")).toEqual("lembut");
    expect(stemmer.stem("lemigas")).toEqual("ligas");
    expect(stemmer.stem("kinerja")).toEqual("kerja");
    expect(stemmer.stem("bertebaran")).toEqual("tebar");
    expect(stemmer.stem("terasingkan")).toEqual("asing");
    expect(stemmer.stem("membangunkan")).toEqual("bangun");
    expect(stemmer.stem("mencintai")).toEqual("cinta");
    expect(stemmer.stem("menduakan")).toEqual("dua");
    expect(stemmer.stem("menjauhi")).toEqual("jauh");
    expect(stemmer.stem("menggilai")).toEqual("gila");
    expect(stemmer.stem("pembangunan")).toEqual("bangun");
    expect(stemmer.stem("marwan")).toEqual("marwan");
    expect(stemmer.stem("subarkah")).toEqual("subarkah");
    expect(stemmer.stem("memberdayakan")).toEqual("daya");
    expect(stemmer.stem("persemakmuran")).toEqual("makmur");
    expect(stemmer.stem("keberuntunganmu")).toEqual("untung");
    expect(stemmer.stem("kesepersepuluhnya")).toEqual("sepuluh");
    expect(stemmer.stem("Perekonomian")).toEqual("ekonomi");
    expect(stemmer.stem("menahan")).toEqual("tahan");
    expect(stemmer.stem("peranan")).toEqual("peran");
    expect(stemmer.stem("memberikan")).toEqual("beri");
    expect(stemmer.stem("medannya")).toEqual("medan");
    expect(stemmer.stem("idealis")).toEqual("ideal");
    expect(stemmer.stem("idealisme")).toEqual("ideal");
    expect(stemmer.stem("finalisasi")).toEqual("final");
    expect(stemmer.stem("mentaati")).toEqual("taat");
    expect(stemmer.stem("melewati")).toEqual("lewat");
    expect(stemmer.stem("menganga")).toEqual("nganga");
    expect(stemmer.stem("kupukul")).toEqual("pukul");
    expect(stemmer.stem("kauhajar")).toEqual("hajar");
    expect(stemmer.stem("kuasa-Mu")).toEqual("kuasa");
    expect(stemmer.stem("nikmat-Ku")).toEqual("nikmat");
    expect(stemmer.stem("allah-lah")).toEqual("allah");
  });
});