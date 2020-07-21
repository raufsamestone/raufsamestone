---
date: "2020-05-18"
path: 'gatsby-cloud'
title: "Gatsby Cloud ve Contentful İncelemesi"
tags: ["Gatsby Cloud", "Jamstack", "Gatsby", "Contentful", "Headless CMS"]
writer: Berkay Demirbas
avatar: ../images/raufsamestone.jpg
english: false
---

## Gatsby Cloud

Gatsby tarafından yine Gatsby ile oluşturulmuş web sitelerinin daha hızlı ve daha stabil yönetilebilmesi için tasarlanmış platform.

[gatsbyjs.com/cloud](https://www.gatsbyjs.com/cloud/)

## Contentful

API öncelikli headless CMS.

[contentful.com](https://www.contentful.com/)

## Genel Bakış

Normal şartlarda, bir Gatsby projenizle CMS entegrasyonu yapabilmeniz için, config.js dosyalarıyla, headles CMS'inizdeki API kodlarını entegre etmeniz gerekiyor. 

Ancak Gatsby Cloud ile bunu hiç kod yazmadan da, hazır starter paketlerini kullanarak bunu kolaylıkla yapabiliyorsunuz. 

### Yeni Site Oluşturma

Login olduğunuzda, varolan bir Gatsby sitenizle mi yoksa hazır starter paketiyle mi devam edeceğiniz soruluyor.

![Gatsby Cloud CMS Selecting](https://res.cloudinary.com/raufsamestone/image/upload/v1589873929/blog-contents/select-gatsby-site.webp)


Daha sonra **Create a new site** kısmında, hem projemizin hem de **Gatsby Cloud** tarafından açılacak yeni repository'nin ismini giriyoruz. 

![Gatsby Cloud Create a new site](https://res.cloudinary.com/raufsamestone/image/upload/v1589873934/blog-contents/Screen_Shot_2020-05-19_at_09.23.52_om6fcq.webp)


**GitHub** üzerinden devam ettiyseniz, açılan repository'yi kontrol edebilirsiniz.


![GitHub Repository Check](https://res.cloudinary.com/raufsamestone/image/upload/v1589873937/blog-contents/Screen_Shot_2020-05-19_at_09.24.04_vghtbn.webp)



Gatsby Cloud arayüzünde görebilecğiniz diğer bir kullanışlı özellik de, deploy edilen branch'in **Google Lighthouse** skor özetini gösteriyor olması.


![Gatsby Cloud Google Lighthouse](https://res.cloudinary.com/raufsamestone/image/upload/f_auto/v1589873939/blog-contents/gatsby-cloud-google-lighthouse.webp)


Contentful içindeki Content Model'ler ile içeriklerinizi düzenleyebilirsiniz. 

![Contentful Dashboard Content Edit](https://res.cloudinary.com/raufsamestone/image/upload/v1589873937/blog-contents/contentful-dashboard-content.png)


İçeriği düzenledikten ya da yeni bir içerik oluşturduğunuzda, repository'nizde herhangi bir değişiklik olmuyor. Dolayısıyla tüm veritabanınız artık Gatsby Cloud ve entegre ettiğiniz Headless CMS arasında kalıyor. Yapılan değişikliği de anında random key ile size verilen domainden görebiliyorsunuz. Bu da güzel bir özellik. Normalde, `localhost` üzerinde yaptığınız değişikliği **Hot Reloader** ile görüntüleyebiliyordunuz.


Contentful ücretli bir ugulama, ancak ücretsiz kısmında da pek çok özelliği kullanabiliyorsunuz. Şöyle ki, **free** bir hesapta, usage kısmında yaptığınız kullanımların ne şekilde count edildiğini görebilirsiniz. 

![Contentful Dashboard Usage](https://res.cloudinary.com/raufsamestone/image/upload/v1589873936/blog-contents/contentful-dashboard-usage.png)


Not: Büyük projeler için tasarlanmış neredeyse tüm headless CMS'ler ücretli. Dolayısıyla size sunduğu API ve performans çözümlerini ve bütçenizi göz önünde tutarak proje başlatmanız daha avantajlı olacaktır. **2020 En iyi Headless CMS'leri** diye bir çalışmaya da başladım, bugünler de yayına alacağım. 


Detaylı videoyu, buradan izleyebilirsiniz. 

`youtube:https://www.youtube.com/embed/JkAlSgmUMtc`