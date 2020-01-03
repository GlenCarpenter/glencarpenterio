app.controller('MainController', ['$scope', function($scope) {
    $scope.projects = [
        {
            title: '.NET To-do App',
            appLink: 'https://github.com/GlenCarpenter/dotnet-todo',
            description1: 'A .NET console to-do app written in C#.',
            description2: 'Special attention was given to error handling, preventing improper inputs, and seamless user interaction.',
            gitHubLink: 'https://github.com/GlenCarpenter/dotnet-todo',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': '#ffb868'}
        },
        {
            title: 'New Saigon Grill',
            appLink: 'https://glencarpenter.github.io/new-saigon-denver/#/',
            description1: 'New Saigon Grill is a Vietnamese restaurant in Denver, CO.',
            description2: 'The website uses ReactJS with React Router, react-scroll-parallax, and google-map-react to create a seamless and responsive single page application.  The site is easy to navigate and use on both desktop and mobile.',
            gitHubLink: 'https://github.com/GlenCarpenter/new-saigon-denver',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': 'SteelBlue'}
        },
        {
            title: 'CoffeeLab Solutions',
            appLink: 'https://glencarpenter.github.io/CoffeeLabSolutions/',
            description1: 'CoffeeLab Solutions is a software solutions and project management service provider.',
            description2: 'The website I created is a lead generation landing page designed to drive sales.    The site is easy to navigate and use on both desktop and mobile.',
            gitHubLink: 'https://github.com/GlenCarpenter/CoffeeLabSolutions',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': '#ffb868'}
        },
        {
            title: 'Poetry Simulator',
            appLink: 'https://glencarpenter.github.io/poetry-simulator/',
            description1: 'Poetry Simulator uses the DataMuse API to find rhyming and related words to automatically generate a poem, based off of a seed word provided by the user.',
            description2: 'This app was built with ReactJS and makes use of HTTP requests with axios.',
            gitHubLink: 'https://github.com/GlenCarpenter/poetry-simulator',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': 'Dodgerblue'}
        },
        {
            title: '8bit Paint',
            appLink: 'https://easy-8bit-paint.herokuapp.com/index.html',
            description1: '8bit Paint allows the user to paint a 16x16 grid in a retro sprite style and can even download the image when complete!',
            description2: 'Based on my love for all things Nintendo!',
            gitHubLink: 'https://github.com/GlenCarpenter/8bit_paint',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': 'Sienna'}
        },
        {
            title: 'Blackjack!',
            appLink: 'https://glencarpenter.github.io/blackjack/index.html',
            description1: 'A text-based blackjack game, made with Vue.js.',
            description2: 'Great for killing time!',
            gitHubLink: 'https://github.com/GlenCarpenter/blackjack',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': '#ffb868'}
        },
        {
            title: 'RetroTube',
            appLink: 'https://glencarpenter.github.io/retrotube/',
            description1: 'RetroTube is an app that allows you to search for YouTube videos in a throwback 2007 aesthetic.  ',
            description2: 'The app uses ReactJS and axios for API calls.',
            gitHubLink: 'https://github.com/GlenCarpenter/retrotube',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': 'SteelBlue'}
        },
        {
            title: 'Montessori Household',
            appLink: 'https://montessorihousehold.com/',
            description1: 'Montessori Household is a simple Wordpress eCommerce website that delivers tools to develop a Montessori learning environment in individual households.',
            description2: 'The site was initially created as a market evaluation for the products being sold, which was then updated to a full fledged web store.',
            gitHubLink: '',
            gitHubDesc: '',
            backgroundColor: {'background-color': '#ffb868'}
        },
        {
            title: 'React Key Logger',
            appLink: 'https://glencarpenter.github.io/reactKeyLogger/',
            description1: 'React Key Logger is a proof-of-concept to show how user behavior can be tracked and measured by logging all user inputs.',
            description2: 'The question is, how useful is it to harvest ALL user keystrokes on your app?  Is it ethical to do so?  The key logger was fairly easy to create, however the privacy implications must be carefully considered prior to deployment.',
            gitHubLink: 'https://github.com/GlenCarpenter/reactKeyLogger',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': 'Dodgerblue'}
        },
        {
            title: 'Team Search',
            appLink: '#',
            description1: 'Chrome extension to search multiple data repositories, reducing search time.  Later I streamlined the search tool using regular expressions, thereby eliminating the need to specify which system to search.',
            description2: 'Tool is used by a global team for day to day workflows.',
            gitHubLink: 'https://github.com/GlenCarpenter/teamSearch',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': 'Sienna'}
        },
        {
            title: 'VetRelief Site Enhancement',
            appLink: 'https://chrome.google.com/webstore/detail/vetrelief-site-enhancemen/fldlpkekmafogncdjlmnhbkiihocnipk',
            description1: 'VetRelief Site Enhancement was created per a customer request on Upwork.com',
            description2: 'This is a Chrome extension that changes layout of VetRelief.com website, which is owned and maintained by a third party developer.  This is accomplished by use of jQuery plugins and HTML/CSS injection.',
            gitHubLink: '',
            gitHubDesc: '',
            backgroundColor: {'background-color': 'SteelBlue'}
        },
        {
            title: 'Reddit User Search',
            appLink: 'https://chrome.google.com/webstore/detail/reddit-user-search/hcebefcnbjhdclmhkaeedeoidgeiaeam?hl=en',
            description1: 'Reddit User Search is a Chrome extension that allows you to search a Reddit User\'s profile and posts with ease.',
            description2: '',
            gitHubLink: 'http://github.com/GlenCarpenter/RedditUserApp',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': '#ffb868'}
        },
        {
            title: 'Glen Carpenter: Front End Developer',
            appLink: 'http://glencarpenter.io',
            description1: 'The webpage you are currently visiting!',
            description2: 'This website was custom built with jQuery, Bootstrap, and AngularJS.',
            gitHubLink: 'https://github.com/GlenCarpenter/glencarpenterio',
            gitHubDesc: 'View on GitHub',
            backgroundColor: {'background-color': 'Dodgerblue'}
        }
    ];
  }]);
