require("dotenv").config();

const crypto = require("crypto");
const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const routes = {
  kullanicilar: ["/api/kullanıcılar", "/api/kullan%C4%B1c%C4%B1lar"],
  kayitol: ["/api/kayıtol", "/api/kay%C4%B1tol"],
  giris: ["/api/giriş", "/api/giri%C5%9F"],
};

const kullanicilar = [
  {
    id: 1,
    kullaniciadi: "demo",
    sifreHash: hashPassword("1234"),
  },
];

let sonrakiId = 2;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mesaj: "Node API çalışıyor." });
});

app.get(routes.kullanicilar, (req, res) => {
  res.json(kullanicilar.map(toPublicUser));
});

app.post(routes.kayitol, (req, res) => {
  const { kullaniciadi, sifre } = req.body;

  if (!kullaniciadi || !sifre) {
    return res.status(400).json({
      mesaj: "kullaniciadi ve sifre alanları zorunludur.",
    });
  }

  const kullaniciVar = kullanicilar.some(
    (kullanici) => kullanici.kullaniciadi === kullaniciadi
  );

  if (kullaniciVar) {
    return res.status(409).json({
      mesaj: "Bu kullaniciadi zaten kayıtlı.",
    });
  }

  const yeniKullanici = {
    id: sonrakiId,
    kullaniciadi,
    sifreHash: hashPassword(sifre),
  };

  sonrakiId += 1;
  kullanicilar.push(yeniKullanici);

  return res.status(201).json(toPublicUser(yeniKullanici));
});

app.post(routes.giris, (req, res) => {
  const { kullaniciadi, sifre } = req.body;

  if (!kullaniciadi || !sifre) {
    return res.status(400).json({
      mesaj: "kullaniciadi ve sifre alanları zorunludur.",
    });
  }

  const kullanici = kullanicilar.find(
    (kayitliKullanici) =>
      kayitliKullanici.kullaniciadi === kullaniciadi &&
      kayitliKullanici.sifreHash === hashPassword(sifre)
  );

  if (!kullanici) {
    return res.status(401).json({
      mesaj: "Kullanıcı adı veya şifre hatalı.",
    });
  }

  return res.json({
    mesaj: `Hoş geldin, ${kullanici.kullaniciadi}!`,
  });
});

app.use((req, res) => {
  res.status(404).json({ mesaj: "Aradığınız endpoint bulunamadı." });
});

function hashPassword(sifre) {
  return crypto.createHash("sha256").update(String(sifre)).digest("hex");
}

function toPublicUser(kullanici) {
  return {
    id: kullanici.id,
    kullaniciadi: kullanici.kullaniciadi,
  };
}

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API ${PORT} portunda çalışıyor.`);
  });
}

module.exports = app;
