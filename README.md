# Deploy ve En iyi Pratikler

Bu challengeda, Heroku'ya _deployable_ olan basit bir Express uygulaması oluşturacaksınız. 
Bu, `package.json` dosyasında uygun bir `start` betiğine sahip olduğu ve port numarasının sabit kodlanmak yerine ortamdan alındığı anlamına gelir. 
Uygulamanızı Heroku'ya dağıtmaktan çekinmeyin, ancak bunun artık ücretsiz bir hizmet olmadığını unutmayın.

## Talimatlar

### Görev 1: Proje Kurulumu

Forklayın, clone'layın ve bolca commitleyin.

### Görev 2: MVP

- [x] Basit bir API oluşturun:

  - `npx gitignore node` komutuyla bir `.gitignore` dosyası oluşturun
  - `npm init --y` komutuyla bir `package.json` oluşturun
  - `npx eslint --init` komutuyla bir Eslint oluşturun
  - `"start"` ve `"server"` komut dosyaları eklemek için `package.json` dosyasını düzenleyin
  - `express`, `dotenv`, `cors` yükleyin
  - Bir `.env` dosyası ve dotenv kitaplığı kullanarak ortam değişkenleri için destek ekleyin ve kodda geri dönüşler sağlayın
  - API'yi detaylandırın:

    | Metod  | URL                  | Açıklama                                                                                                       |
    | ------ | -------------------- | ---------------------------------------------------------------------------------------------------------------|
    | GET    | /api/kullanıcılar    | Kullanıcılar dizisini döndüren.                                                                                |
    | POST   | /api/kayıtol         | `request body` de { kullaniciadi, sifre } ile bir kullanıcı oluşturan , yeni oluşturulan kullanıcıyı döndüren. |
    | POST   | /api/giriş           | `request body` deki { kullaniciadi, sifre } yi kontrol edip , bir hoşgeldin mesajı döndüren    .               |

- [ ] **İSTEĞE BAĞLI OLARAK** uygulamanızı [Heroku](https://heroku.com) üzerinde konuşlandırın. Github'daki depoya giden bağlantı, teslim edilebilir gerçek gönderiminizdir..

### Önemli Notlar

- İstemcilerden gelen istekler için API'nin tamamen sabit kodlanmış yanıtlar vermesini sağlayabilirsiniz (veritabanı olmadan).
- Alternatif olarak, kullanıcıları kalıcı kılmak ve bir veritabanı gibi davranmak ve kullanıcılar dizisiyle etkileşime giren veritabanı yardımcıları oluşturmak için bir bellek içi dizi kullanabilirsiniz.
- Kullanıcıları bir dizi veritabanında ısrarla kullanıyorsanız, parolaları düz metin olarak saklamanın güvenlik açısından çok kötü bir uygulama olduğunu bilin.

### Esnek Görevler

- Dizi veritabanınızda parolaları olduğu gibi saklamaktan nasıl kaçınacağınızı araştırın. (md5, password hash)
- Yalnızca kayıtlı ve oturum açmış istemcilere "GET /api/kullanıcılar" erişiminin nasıl verileceğini araştırın.
- Proje içinde bir kayıt/oturum açma formu ve kullanıcıları görüntüleme araçları içeren bir ön uç(front-end) parçası oluşturun.


### Testleri Çalıştırma

- Proje dizinindeki `user.json` dosyasını bulun ve `user_id` alanını NextGen proje ekranında görünen kendi `user_id` değeriniz ile güncelleyin.
- Projeyi tamamladıktan sonra sonucu NextGen'e göndermek için `npm run sendresults` komutunu kullanın.
- Komut çalıştıktan sonra NextGen sayfasını refresh ederek skorunuzu kontrol edebilirsiniz.
