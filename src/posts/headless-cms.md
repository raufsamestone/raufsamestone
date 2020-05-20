---
date: 2020-05-19T21:00:00Z
path: headless-cms
title: 'Headless CMS Nedir?'
tags:
- Headless CMS
- " CMS"
- Netlify
- " Netlify CMS"
- " Contentful"
- " Forestry"
- " Tiny CMS"
- " Ghost"
- " Jamstack"
- Markdown
writer: Berkay Demirbas
avatar: "../images/berkay.jpg"
english: false

---
## Headless CMS Nedir ?

**Headless CMS** web sitenizdeki front-end ile host edildiği yerin ayrı tutulduğu bir içerik yönetim sistemidir aslında.

Bir Headless CMS, tamamen API odaklı, son kullanıcının tarayıcıdan API'ye bağlandığı yada Git'teki (**GitHub, GitLab**) içeriğin güncellenmesiyle de çalışabilir.

**Wordpress**, **Drupal** gibi en çok kullanılan eski CMS'lerin **tam tersidir**. Bu eski CMS'lerin her biri, hizmet vermek için devreye girdiği her seferinde, siteyle birlikte geleneksel olarak bir hosting üzerinde barındırılması ve içeriklerle birlikte oluşturulması gereken CMS'lerdir.

Headless CMS'ler ise içeriklerin nerede sunulduğuyla ilgilenmez, tamamen front-end'e bağlı değildir ve herhangi bir platformda gözükebilir ve düzenlenebilir.

Sunucuya ihtiyaç duymaz ve doğrudan **CDN** ile aktarılabilir.

### Nasıl Yani?

Örneğin bu yazıyı okuyorsanız, **raufsamestone.com/headless-cms** URL'inde gözüken web sitesindesinizdir ve bu web sitesi de **React** tabanlı **Gatsby** ile **Netlify** üzerinden servis edilerek çalışmakta. Ve her bir sayfa aslında birer **Markdown** dosyası. Ve bu Markdown dosyalarının oluşturulup düzenlemesi, Gatsby üzerinde bunun generate edilmesi ve birer eşsiz sayfa olarak Netlify'da build edilmesi gerekiyor. Şimdi, bu içeriği nasıl yazabiliriz?

Herhangi bir editorle.  
![Markdown Editor](https://res.cloudinary.com/raufsamestone/image/upload/v1589966134/blog-contents/headless-cms-markdown-editor_koabgj.webp "VS Code")

Ya da bir Headess CMS aracılığıyla. Burada [**Forestry**](https://forestry.io/) kullanıyorum.

![Forestry Headless CMS Dashboard](https://res.cloudinary.com/raufsamestone/image/upload/v1589959817/blog-contents/headless-cms-forestry-dashboard_sfjtrb.webp "Forestry Headless CMS Dashboard")

İçeriği yazdıktan sonra, Git-Based olan Forestry, yapılan değişikliği yani oluşturduğu markdown dosyasını, doğrudan web sitenin GitHub üzerindeki repository'sine gönderiyor ve Netlify'da bunun yeni ve güncel bir Branch olduğunu görüp burada yeralan tüm dosyaları build edip canlıya alıyor.

Bu durumda Headless CMS'leri de **git-tabanlı** ve **API** odaklı olarak ikiye ayırmak mümkün.

### Git-Tabanlı Headless CMS

Git üzerindeki repository'de bulunan dosyaların manipüle edilmesiyle içerik yönetimi sağlanır. Çoğu geliştirici ve içerik yöneticisi bu yöntemi tercih eder. Tüm içerikle Markdown, YAML gibi dosyalarda saklanabilir. Git'in ana mantığı olan olan versiyon kontrolü ve bir önceki branch'e geri dönme özelli, web projenize büyük avantaj sağlar. Ancak bununla birlikte repository'nizdeki dosya boyutunun yüksek olması, medya formatlarının stabil olarak saklanamaması gibi sorunlar dolayısıyla da bazı dezavantajları var.

### API Odaklı Headless CMS 

Contentful ve Prismic gibi tamamen API odaklı çalışan CMS'lerdir. Sitedeki içerik değişikliğinde de her seferinde tüm siteyi build etmesine gerek kalmaz ve birden fazla uygulamaya tek bir noktadan veri sağlayabilir. Ancak Git-Tabanlı gibi versiyon ve branch kontrolü yoktur. 

Headless CMS, Jamstack CMS ya da Decoupled CMS olarak da biliniyor.

### Hangi Headless CMS daha iyi?

2020 yılı içerisinde kullanabileceğiniz en iyi headless CMS'ler;

## Netlify CMS

**Netlify**'ın kurduğu ve kendi dashboardu içerisinde yönetebileceğiniz, açık kaynaklı bir CMS'dir. Kompleks site mimarisi ve içerikler için **YAML** ve **Markdown** formatlarını destekliyor ve aynı zamanda localde de çalıştırabiliyorsunuz. Arayüzündeki fieldları kendiniz, içeriğinize göre ayarlamak zorundasınız. Kurulumu bu esnada biraz uzun sürüyor. Çoklu kullanıcıyla ortak içerik üzerinde çalışma, workflow ve draft gibi özellikleri de mevcut.

Kurulma dair Türkçe videoyu buradan izleyebilirsiniz.  

`youtube:https://www.youtube.com/embed/R_AJrElQBkI`


Türü: Git-Tabanlı  
[https://www.netlifycms.org/](https://www.netlifycms.org/ "https://www.netlifycms.org/")

## Contentful

Kurulumu kendi arayüzünden olmakta ve çoklu proje yöneticileri için ve kompleks içerik modelleri oluşturmak için idealdir. Ücretlidir ancak ücretsiz versiyonunda da sunduğu özellikler tatmin edici. Özellikle dil yönetimi, **i18n** konusunda gayet iyi. **Gatsby Cloud** ile entegre çalıştırıldığında oldukça başarılı hale geliyor.  
  
`youtube:https://www.youtube.com/embed/JkAlSgmUMtc`

Türü: API  
[https://www.contentful.com/](https://www.contentful.com/ "https://www.contentful.com/")

## Forestry

**SSG (Static Site Generator)** aracılığıyla oluşturduğunuz bir web projeniz varsa, kurulumu son derece basit. Projenizin root yoluna eklediği settings.yaml dosyası ile entegre olabiliyor. Aynı zamanda benim de kullandığım bir CMS.

Türü: Git-Tabanlı  
[https://forestry.io/](https://forestry.io/ "https://forestry.io/")

## Tiny CMS

Local'de çalıştırabildiğiniz ve **GraphQL** üzerinden tüm verileri çekebildiğiniz bir CMS. En güzel ve etkileyici özelliği sanırım, kurulum sonrasında çok fazla teknik bilgi gerektirmeyen bir dinamiği olması. Tüm içeriklerinizi Front-end üzerinden anlık olarak yönetebiliyorsunuz.

Türü: Git-Tabanlı  
[https://tinacms.org/](https://tinacms.org/ "https://tinacms.org/")

## Ghost

Node.JS tabanlı açık kaynaklı bir CMS. Çoklu kullanım ve kapsamlı entegrasyonlar için ücret ödemeniz gerekiyor. Daha çok üyelik (auth) ve e-ticaret işlemleri için tercih ediliyor. Tüm SSG'ler tarafından destekleniyor.

Türü: Git-Tabanlı  
[https://ghost.org/](https://ghost.org/ "https://ghost.org/")

**Kaynaklar**

[https://headlesscms.org/about](https://headlesscms.org/about "https://headlesscms.org/about")  
[https://www.g2.com/categories/headless-cms](https://www.g2.com/categories/headless-cms "https://www.g2.com/categories/headless-cms")