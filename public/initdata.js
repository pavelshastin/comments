const initData = [
    {
      "id": "1",
      "author": {
        "id": "1",
        "name": "Polly Jane"
      },
      "title": "How I spent my summer",
      "text": "Few words about my summer story...",
      "comments": [
        {
          "id": "1",
          "text": "Paris is so cool!1",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        },
          {
          "id": "87",
          "text": "Paris is so cool!87",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        }
      ]
    },
    {
      "id": "2",
      "author": {
        "id": "2",
        "name": "John Galt"
      },
      "title": "Walk in Paris",
      "text": "The French eating habits the world should learn from",
      "comments": [
        {
          "id": "28",
          "text": "Paris is so cool!48",
          "commenter": {
            "id": "1",
            "name": "Polly Jane"
          }
        },
        {
          "id": "277",
          "text": "Paris is so cool!277",
          "commenter": {
            "id": "1",
            "name": "Polly Jane"
          }
        },
        {
          "id": "978",
          "text": "Paris is so cool!978",
          "commenter": {
            "id": "1",
            "name": "Polly Jane"
          }
        }
      ]
    },
     {
      "id": "3",
      "author": {
        "id": "3",
        "name": "Galt John New"
      },
      "title": "How I spent my summer",
      "text": "Few words about my summer story...",
      "comments": [
        {
          "id": "4",
          "text": "Paris is so cool!4",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        },
        {
          "id": "48",
          "text": "Paris is so cool!48",
          "commenter": {
            "id": "3",
            "name": "John Galt New"
          }
        },
        {
          "id": "448",
          "text": "Paris is so cool!448",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        },
        {
          "id": "848",
          "text": "Paris is so cool!848",
          "commenter": {
            "id": "3",
            "name": "John Galt New"
          }
        }
      ]
    },

     {
      "id": "4",
      "author": {
        "id": "4",
        "name": "Jane Polly New"
      },
      "title": "How I spent my summer",
      "text": "Few words about my summer story...",
      "comments": [
        {
          "id": "13",
          "text": "Paris is so cool!13",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        },
        {
          "id": "112",
          "text": "Paris is so cool!112",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        },
        {
          "id": "145",
          "text": "Paris is so cool!145",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        },
        {
          "id": "849",
          "text": "Paris is so cool!849",
          "commenter": {
            "id": "2",
            "name": "John Galt"
          }
        }
      ]
    },

  ]
   if (!window.localStorage.getItem("articles")) {
      window.localStorage.setItem('articles', JSON.stringify(initData))
   }
