**LeSlider**

LeSlider - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps. Designed mostly for iOS, but also works great on latest Android, Windows Phone 8 and modern Desktop browsers

LeSlider is not compatible with all platforms, it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity.

**Getting Started**

**Layout**

Use the following HTML layout:
```
        <Slider
          autoplay
          buttons
          data-transition="carousel"
        >
          <Slide img={slide1} transition="fade">
            <h1>fsdfsfsfsd</h1>
          </Slide>
          <Slide img={slide2} transition="zoom" />
          <Slide img={slide3} transition="fade" />
        </Slider>
```

this produce html layout

```
<div class="le_slider">
  <div class="le_slider__wrapper">
    <!--First Slide-->
    <div class="le_slider__slide">
      <!-- Any HTML content of the first slide goes here -->
    </div>
    <!--Second Slide-->
    <div class="le_slider__slide">
      <!-- Any HTML content of the second slide goes here -->
    </div>
    <!--Third Slide-->
    <div class="le_slider__slide">
      <!-- Any HTML content of the third slide goes here -->
    </div>
    <!--Etc..-->
  </div>
</div>
```

**Main options**

auto - delay between transitions (in ms). If this parameter is not specified, auto play will be
continuous -  create an infinite feel with no endpoints
buttons - show left right buttons
stopPropagation - stop event propagation
lazy - lazy load
speed - transition speed for all slides
initialSlide - Index number of initial slide.
transition-default transition for all slides
wheel - mouse wheel navigation (обработка мышиных событий(колесо мыши))
to show thumbnails add option thumbnails or manually create thumbnails like this
you can't use lazy load if you use thumbnails option only if you set url for thumbs
spinner="type" - to show load spinner

**Slides**
Slide options
speed - duration of animation between slides (in ms)
autoplay - if is used youtube video for slide
возможность вставлять видео ссылки, видео из youtube
you can use youtube video links
возможность добавлять слои текст, картинки, кнопки
you can add any additional content to slide
to make it use SlideElement
for example
```
<SlideElement>
  <h1 className="up">My cool slide</h1>
  <h2 className="down">with cool image</h2>
</SlideElement>
```
to position additional elements use top, left, right, bottom in px
elements positioned in relation to top left slide corner
like this
```
<SlideElement>
  <h1 className="up" left="100px" top="50px">My cool slide</h1>
  <h2 className="down" left="200px" bottom="30px">with cool image</h2>
</SlideElement>
```


* поддержка scrset и sizes для слайда
поддерживать такую конструкцию
<picture>
  <source srcset="img/awesomeWebPImage.webp" type="image/webp">
  <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg">
  <img src="img/creakyOldJPEG.jpg" alt="Alt Text!">
</picture>

https://habrahabr.ru/post/237991/

* добавить проверку поддержки transform, transform3D и браузерные префиксы
* возможности слайдера
* возможность растягивать его на весь экран
* thumbnails
* возможность задавать размеры слайдера(может оставить эту возможность в разметке)
* показывать точки обозначающие слайды, баллеты, возможность задавить стиль баллета(передавать в опциях)
* показывать таймер до следующего слайда
* показывать прелоадер, возможность задавать прелоадер
* расширить количество эффектов
* добавить поддержку тач событий
* добавить опцию запрета для мобильных? стоит чтобы не грузить мобильные циклами
* возможность задавать лайаут для кнопок через опции
* поддержка keyboard navigation
* поддержка параллакс эффекта
* расширить количество эффектов
* добавить каллбеки для событий
* проверить чтобы каллбеки можно было вставлять в разметке(чтобы не убирались при рендеринге)
какие коллбеки
перед сменой слайда, после смены слайда
по
* возможность задавать ссылку при клике на слайд или callBack клик на слайд
* проверить чтобы разметка не переделывалась а оставалась той же
* добавить lazyLoad
* опции для каждого слайда передаем в разметке
опции: тип перехода для слайда(data-transition)
основное изображение(опции для основного изображения: ленивая загрузка, тип fit для background, )
alt, title
background fit, position
слайды надо обозначать в разметке
data-bgfit="cover" data-bgposition="center center"
все же слайды лучше ставить как background
* добавить поддержку слоев
слои завертывать в div с обозначением что это слой(класс)
для каждого слоя задавать свой эффект
задавать координаты для каждого слоя
указывать thumbnails как опцию: максимальное количество, размер, показывать или нет
* возможные переходы
Slide To Top - slideup
Slide To Bottom - slidedown
Slide To Right - slideright
Slide To Left - slideleft
Slide Horizontal (depending on Next/Previous) - slidehorizontal
Slide Vertical (depending on Next/Previous) - slidevertical
Slide Boxes - boxslide
Slide Slots Horizontal - slotslide-horizontal
Slide Slots Vertical - slotslide-vertical
Fade Boxes - boxfade
Fade Slots Horizontal - slotfade-horizontal
Fade Slots Vertical - slotfade-vertical
Fade and Slide from Right - fadefromright
Fade and Slide from Left - fadefromleft
Fade and Slide from Top - fadefromtop
Fade and Slide from Bottom - fadefrombottom
Fade To Left and Fade From Right - fadetoleftfadefromright
Fade To Right and Fade From Left - fadetorightfadefromleft
Fade To Top and Fade From Bottom - fadetotopfadefrombottom
Fade To Bottom and Fade From Top - fadetobottomfadefromtop
Parallax to Right - parallaxtoright
Parallax to Left - parallaxtoleft
Parallax to Top - parallaxtotop
Parallax to Bottom - parallaxtobottom
Zoom Out and Fade From Right - scaledownfromright
Zoom Out and Fade From Left - scaledownfromleft
Zoom Out and Fade From Top - scaledownfromtop
Zoom Out and Fade From Bottom - scaledownfrombottom
ZoomOut - zoomout
ZoomIn - zoomin
Zoom Slots Horizontal - slotzoom-horizontal
Zoom Slots Vertical - slotzoom-vertical
Fade - fade
Random Flat - random-static
Random Flat and Premium - random
* опция выбора случайных transitions



* слайды с сайта http://richbrown.info/
видео вставлено в тег video
нужно указать src и type также loop autoplay buffered playsinline crossorigin height muted played preload poster playsline
возможно добавлять svg фильтры(маски)
loader один для всех слайдов
можно сделать класс VideoSlide

для поддержки touch используем Hammer.js https://github.com/hammerjs/hammer.js/tree/master/
