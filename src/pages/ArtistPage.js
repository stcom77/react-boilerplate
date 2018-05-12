import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Slider, { Slide, SlideElement } from 'components/slider';
import { connect } from 'react-redux';
import slide1 from 'assets/images/slides/slide1.jpg';
import slide2 from 'assets/images/slides/slide2.jpg';
import slide3 from 'assets/images/slides/slide3.jpg';
import slide4 from 'assets/images/slides/slide4.jpg';
import { Helmet } from 'react-helmet';

class ArtistPage extends PureComponent {
  static propTypes = {
    currentLang: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    console.log('page mounted ');
  }

  content = {
    'ru': [
      'История моя началась в городе на меловых холмах- Белгороде. Там благодаря маме пошла в художественную школу и закончила ее с отличием.',
      '2005 - поступила в МГТУ МАМИ на Авто Дизайн в Москву, затем закончила в 2011 МГОУ Графический Дизайн.',
      'Делала дизайны для таких известных фирм, как МТС, Ростелеком, ЕРГО Страхование и других компаний. Создала множество логотипов, один из них был для Никиты Сергеевича Михалкова и его Академии кино.',
      'Несколько лет назад я попала на мастеркласс к Зурабу Церетелли, где он погладил меня по голове и сказал: "у тебя талант от Бога!" Удивительно, как человек несколькими словами может вселить веру и вдохновить?',
      'Сегодня пишу портреты на заказ. Создаю картины на тему CryptoART. Делаю авторские Дарумы. Участвую в выставках.',
      'Состою в Творческом Союзе Художников России и IFA с 2012 года'
    ],
    'en': [
      'My story began in Belgorod 26.01.1988. There, thanks to my mother, I went to the art school and graduated it with honors.',
      'In 2005 I entered Auto Design specialty at the MAMI University Moscow. In 2011 finished Graphic Design higher education in MGOU University.',
      'I do graphic works for such well-known companies as MTS, Rostelecom, ERGO Insurance and other. I create many logos, one of them was for Nikita Sergeyevich Mikhalkov and his Academy of Cinema.',
      'Few years ago I went to Zurab Tsereteli art masterclass. Where Tsereteli stroked my head and said: "You have talent from God!" It\'s amazing how one person can instill confidence and inspire in few words?!',
      'Today, I write portraits to order. Сreate CryptoART pictures. Do copyright Daruma Dolls. And participate in exhibitions.',
      'Member of the Сreative Union of Russian artists and International Federation of Arts since 2012.'
    ]
  }

  achivements = {
    'ru': [
      '2015 г. Благодарность за создание логотипа для "Академии кинематографического и театрального искусства Никиты Сергеевича Михалкова" и за помощь в организации торжества по случаю открытия Академии за личной подписью Н.С. Михалкова',
      '2015 г. Участие в выставке "Моя страна - Россия" галерея Артефакт',
      '2015 г. Публикация в книге "Молодёжному движению Творческого Союза Художников России 20 лет" издательство "АртКоминтер"',
      '2014 г. Лауреат Международного Конкурса "ХУДОЖНИК И ВРЕМЯ"',
      '2014 г. Участие в региональной выставке "Молодость Страны" в Государственном выставочном зале "Галерея Нагорная"',
      '2014 г. Участие в выставке АРТ ВЕСНА в Центральном Доме художника на Крымском валу',
      '2014 г. Публикация в книге "Русский Модерн" издательство "Наш Изограф"',
      '2014 г. Москва. Диплом за участие в художественном проекте "Русский Модерн" к 165 летию В.М. Васнецова за профессиональный и духовный вклад в развитие современного искусства',
      '2013 г. Участие в выставке "Родные просторы" организованной Российской Академией Художеств',
      '2013 г. Участие в выставке "Воспоминания о лете" проходившей в ДК АЛЫЕ ПАРУСА Москва',
      '2013 г. Предоставила свои работы для  благотворительного аукциона в пользу Детского дома при Николо-Перервинской обители в Печатниках',
      '2013 г. участник выставки «Москва-город художников», издательства «Наш Изограф», которая проходила в Государственном выставочном зале «Арт Холл Юго-Восток»',
      '2013 г. участник выставки «Танец», которая проходит в выставочном зале дома культуры «Гайдаровец»',
      '2013 г. Сертификат за участие в региональной выставке «Россия Молодая»',
      '2012 г. Разработала логотип для "Летней Киноакадемии Никиты Михалкова"',
      '2011 г. Оформление корпоративных ежедневников для компании "Ростелеком". Тираж 10 000 экземпляров',
      '2008 г. Выставка «Золотая осень». Благодарность от министра СХ Гордеева А.В. За участие в СХ выставке',
      '2008 г. Праздник «МК» в Лужниках. Благодарность от газеты «Московский Комсомолец» за творческое участие в организации праздничной площадки «РАДУГА»',
      '2000 г. Лауреат детского творческого конкурса «Святое Белогорье»'
    ],
    'en': []
  }

  render() {
    const { currentLang } = this.props;
    const {} = this.state;

    return (
      <div className="artist-page hero is-fullheight">
        <Helmet
          htmlAttributes={{ 'lang': this.props.currentLang }}
        >
          <title>Elena Sharbur</title>
        </Helmet>
        <Header visible alwaysShow />
        <div className="hero-body">
          <div className="container">
            <Slider className="slider is-2by1" buttons transition="carousel" speed={1} spinner="dots">
              <Slide img={slide1} img2x={slide1} transition="fade" />
              <Slide img={slide2} transition="zoom" />
              <Slide img={slide3} transition="fade" />
              <Slide img={slide4} transition="fade" />
            </Slider>
            <div className="page__title">
              <h1 className="title">{currentLang == 'en' ? 'THE ARTIST' : ''}</h1>
              <h2 className="subtitle">{currentLang == 'en' ? 'ELENA SHARBUR WAS BORN 1988 IN BELGOROD' : ''}</h2>
            </div>
            <div className="columns">
              <div className="column is-12">
                <div>
                  {
                    this.content[currentLang].map(item => <p key={item}>{item}</p>)
                  }
                </div>
                <div className="subtitle">
                  {currentLang == 'en' ? 'Creative activity' : 'Творческая деятельность'}
                </div>
                <div>
                  {
                    this.achivements[currentLang].map(item => <p key={item}>{item}</p>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        < Footer />
      </div>
    );
  }
}

const getData = (state) => {
  return { currentLang: state.main.currentLang };
};

export default connect(getData)(ArtistPage);
