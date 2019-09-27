const sliderList = [
    {
        id: 1,
        url: '/assets/img/slider1.jpg'
    },
    {
        id: 2,
        url: '/assets/img/slider2.jpg'
    }
]

const componyList = [
    {
        id: '1',
        title: '广一装饰',
        phoneNumber: '133-4982-3114',
        url: '/assets/img/c1.jpg',
        logoUrl: '/assets/img/componyLogo1.png',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '2',
        title: '晶志装饰',
        phoneNumber: '133-4982-3115',
        url: '/assets/img/c2.jpg',
        logoUrl: '/assets/img/componyLogo2.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '3',
        title: '恒泰兴装饰',
        phoneNumber: '133-4982-3116',
        url: '/assets/img/c3.jpg',
        logoUrl: '/assets/img/componyLogo3.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '4',
        title: '自然元素装饰',
        phoneNumber: '133-4982-3118',
        url: '/assets/img/c4.jpg',
        logoUrl: '/assets/img/componyLogo4.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
     {
        id: '5',
        title: '广一装饰',
        phoneNumber: '133-4982-3114',
        url: '/assets/img/c1.jpg',
        logoUrl: '/assets/img/componyLogo1.png',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '6',
        title: '晶志装饰',
        phoneNumber: '133-4982-3115',
        url: '/assets/img/c2.jpg',
        logoUrl: '/assets/img/componyLogo2.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '7',
        title: '恒泰兴装饰',
        phoneNumber: '133-4982-3116',
        url: '/assets/img/c3.jpg',
        logoUrl: '/assets/img/componyLogo3.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '8',
        title: '自然元素装饰',
        phoneNumber: '133-4982-3118',
        url: '/assets/img/c4.jpg',
        logoUrl: '/assets/img/componyLogo4.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '9',
        title: '广一装饰',
        phoneNumber: '133-4982-3114',
        url: '/assets/img/c1.jpg',
        logoUrl: '/assets/img/componyLogo1.png',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '10',
        title: '晶志装饰',
        phoneNumber: '133-4982-3115',
        url: '/assets/img/c2.jpg',
        logoUrl: '/assets/img/componyLogo2.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '11',
        title: '恒泰兴装饰',
        phoneNumber: '133-4982-3116',
        url: '/assets/img/c3.jpg',
        logoUrl: '/assets/img/componyLogo3.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '12',
        title: '自然元素装饰',
        phoneNumber: '133-4982-3118',
        url: '/assets/img/c4.jpg',
        logoUrl: '/assets/img/componyLogo4.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
     {
        id: '13',
        title: '广一装饰',
        phoneNumber: '133-4982-3114',
        url: '/assets/img/c1.jpg',
        logoUrl: '/assets/img/componyLogo1.png',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '14',
        title: '晶志装饰',
        phoneNumber: '133-4982-3115',
        url: '/assets/img/c2.jpg',
        logoUrl: '/assets/img/componyLogo2.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '15',
        title: '恒泰兴装饰',
        phoneNumber: '133-4982-3116',
        url: '/assets/img/c3.jpg',
        logoUrl: '/assets/img/componyLogo3.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    },
    {
        id: '16',
        title: '自然元素装饰',
        phoneNumber: '133-4982-3118',
        url: '/assets/img/c4.jpg',
        logoUrl: '/assets/img/componyLogo4.jpg',
        caseNum: 3053,
        buildingSiteNum: 92
    }
]

export default {
    "get /api/slider": function(req, res, next) {
      setTimeout(() => {
        res.json({
          code: 0,
          data: sliderList
        });
      }, 1000);
    },
    "get /api/compony": function(req, res, next) {
        setTimeout(() => {
          res.json({
            code: 0,
            data: componyList
          });
        }, 1000);
      }
  };
  