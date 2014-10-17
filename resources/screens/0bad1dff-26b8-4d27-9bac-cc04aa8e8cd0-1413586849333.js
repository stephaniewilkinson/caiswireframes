jQuery("#simulation")
  .on("mouseenter dragenter", ".s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_32") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_32": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px"
                      },
                      "expressions": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_32": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_33") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_33": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px"
                      },
                      "expressions": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_33": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_35") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_35": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px"
                      },
                      "expressions": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_36") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_36": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px"
                      },
                      "expressions": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 #s-Label_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#EEEEEE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "3px 0px 0px 3px",
                        "padding-top": "2px",
                        "padding-right": "0px",
                        "padding-bottom": "2px",
                        "padding-left": "13px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(100 - 1 - 0 - 13 - 0, 0) + 'px'",
                        "height": "Math.max(38 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-0bad1dff-26b8-4d27-9bac-cc04aa8e8cd0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_35")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_36")) {
      jEvent.undoCases(jFirer);
    }
  });