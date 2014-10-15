(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "02 Navbar for Self Study Participants",
    "bdd95815-c333-49a6-b74b-c9ff2d44972c": "01 Landing page",
    "e4d2e65a-26a5-4b1b-907d-21f29a98d690": "05a Resources - Instructions",
    "9ff702ab-bb21-448c-b985-4720920b3dd5": "03 Collaborators",
    "4a8e607a-c30a-40b4-bde9-3fd96f302a5d": "Navbar for Visiting Committee Participants",
    "0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0": "05b Resources - Examples",
    "bc227f88-44cf-4d19-b5fd-698ef5b63f01": "05c Resources - Glossary",
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