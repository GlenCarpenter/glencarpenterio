app.controller('MainController', ['$scope', function($scope) {
    $scope.projects = [
        {
            title: '8bit Paint',
            appLink: 'https://easy-8bit-paint.herokuapp.com/index.html',
            description1: '8bit Paint allows the user to paint a 16x16 grid in a retro sprite style and can even download the image when complete!',
            description2: 'Based on my love for all things Nintendo!',
            gitHubLink: 'https://github.com/GlenCarpenter/8bit_paint',
            gitHubDesc: 'github.com/GlenCarpenter/8bit_paint',
            backgroundColor: {'background-color': 'Dodgerblue'}
        },
        {
            title: 'React Key Logger',
            appLink: 'https://codepen.io/GlenTheEskimo/pen/XoNQXR',
            description1: 'React Key Logger is an open source proof-of-concept to show how user behavior can be tracked and measured.',
            description2: 'The question is, how useful is it to harvest ALL user keystrokes on your app?  Is it ethical to do so?  The key logger was fairly easy to create, however the privacy implications must be carefully considered prior to deployment.',
            gitHubLink: 'https://github.com/GlenCarpenter/reactKeyLogger',
            gitHubDesc: 'github.com/GlenCarpenter/reactKeyLogger',
            backgroundColor: {'background-color': 'Sienna'}
        },
        {
            title: 'Team Search',
            appLink: '#',
            description1: 'Chrome extension to search multiple data repositories, reducing search time.  Later I streamlined the search tool using regular expressions, thereby eliminating the need to specify which system to search.',
            description2: 'Tool is used by a global team for day to day workflows.',
            gitHubLink: 'https://github.com/GlenCarpenter/teamSearch',
            gitHubDesc: 'github.com/GlenCarpenter/teamSearch',
            backgroundColor: {'background-color': 'SteelBlue'}
        },
        {
            title: 'Montessori Household',
            appLink: 'https://montessorihousehold.com/',
            description1: 'Montessori Household is a simple Wordpress eCommerce website that delivers tools to develop a Montessori learning environment in individual households.',
            description2: 'The site was initially created as an market evaluation for the products being sold, which was then updated to a full fledged web store.',
            gitHubLink: '',
            gitHubDesc: '',
            backgroundColor: {'background-color': 'SandyBrown'}
        },
        {
            title: 'VetRelief Site Enhancement',
            appLink: 'https://chrome.google.com/webstore/detail/vetrelief-site-enhancemen/fldlpkekmafogncdjlmnhbkiihocnipk',
            description1: 'VetRelief Site Enhancement was created per a customer request on Upwork.com',
            description2: 'This is a Chrome extension that changes layout of VetRelief.com website, which is owned and maintained by a third party developer.  This is accomplished by use of jQuery plugins and HTML/CSS injection.',
            gitHubLink: '',
            gitHubDesc: '',
            backgroundColor: {'background-color': 'Dodgerblue'}
        },
        {
            title: 'Reddit User Search',
            appLink: 'https://chrome.google.com/webstore/detail/reddit-user-search/hcebefcnbjhdclmhkaeedeoidgeiaeam?hl=en',
            description1: 'Reddit User Search is a Chrome extension that allows you to search a Reddit User\'s profile and posts with ease.',
            description2: '',
            gitHubLink: 'http://github.com/GlenCarpenter/RedditUserApp',
            gitHubDesc: 'github.com/GlenCarpenter/RedditUserApp',
            backgroundColor: {'background-color': 'Sienna'}
        },
        {
            title: 'Poetry Simulator',
            appLink: 'https://repl.it/@GlenCarpenter/Poetry-Simulator',
            description1: 'Poetry Simulator uses the DataMuse API to find rhyming and related words to automatically generate a poem, based off of a seed word provided by the user.',
            description2: '',
            gitHubLink: '',
            gitHubDesc: '',
            backgroundColor: {'background-color': 'SteelBlue'}
        }
    ];
  }]);