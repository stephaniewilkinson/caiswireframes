(function(window, undefined) {
  var dictionary = {
    "5ffefb19-ac9a-4856-a233-fb7f3d7eb82e": "06 Comments",
    "56f09c81-e5b0-49d6-862e-91ffac37e3b3": "05 Users",
    "83eccb00-b96f-453c-a196-b57431b33f09": "Modal Congratulations",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "02 Navbar for Self Study Participants",
    "0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0": "05b Resources - Examples",
    "d26fe817-36d0-4636-9a66-eddca7e91774": "04 Forms",
    "fe86450a-750b-4f12-9e8b-8a03fa632f46": "02 Reporting",
    "e4d2e65a-26a5-4b1b-907d-21f29a98d690": "05a Resources - Instructions",
    "9ff702ab-bb21-448c-b985-4720920b3dd5": "04 Collaborators",
    "2590d4a1-57b9-4572-a1c4-0357b9884b15": "01 Schools Table",
    "bdd95815-c333-49a6-b74b-c9ff2d44972c": "01 Landing page",
    "2ece1654-e2c5-496d-941f-c9809291838c": "03 School Profile",
    "ff23f7c2-4ca8-481d-b2ef-679abc559708": "08 Reports",
    "4a8e607a-c30a-40b4-bde9-3fd96f302a5d": "03 Navbar for Visiting Committee Participants",
    "258a5dff-5c13-4d06-ad6e-7652379db2fb": "Dashboard",
    "bc227f88-44cf-4d19-b5fd-698ef5b63f01": "05c Resources - Glossary",
    "39d46773-1759-4af0-b68e-790393d252a8": "07 Progress",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Self Study Users",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);