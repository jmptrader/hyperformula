(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{361:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"localizing-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localizing-functions"}},[t._v("#")]),t._v(" Localizing functions")]),t._v(" "),a("p",[t._v("You can localize a function's ID and error\nmessages. Currently, HyperFormula supports 17 languages, with British English\nas the default.")]),t._v(" "),a("p",[t._v("To change the language all you need to do is import and\nregister the language like so:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import the French language pack")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" frFR "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hyperformula/es/i18n/languages/frFR'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register the language")]),t._v("\nHyperFormula"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerLanguage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frFR'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" frFR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("To import the language packs, use the module-system-specific dedicated bundles at:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("ES")]),t._v(": "),a("code",[t._v("hyperformula/es/i18n/languages/")])]),t._v(" "),a("li",[a("strong",[t._v("CommonJS")]),t._v(": "),a("code",[t._v("hyperformula/commonjs/i18n/languages/")])]),t._v(" "),a("li",[a("strong",[t._v("UMD")]),t._v(": "),a("code",[t._v("hyperformula/dist/languages/")])])]),t._v(" "),a("p",[t._v("For the UMD build, the languages are accessible through "),a("code",[t._v("HyperFormula.languages")]),t._v(", e.g. "),a("code",[t._v("HyperFormula.languages.frFR")]),t._v(".")])]),t._v(" "),a("p",[t._v("Then set it inside it the "),a("RouterLink",{attrs:{to:"/guide/configuration-options.html"}},[t._v("configuration options")]),t._v(":")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// configure the instance")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'frFR'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Language pack names should be passed as strings. They follow a\nnaming convention that incorporates two standards: ISO-639 and\nISO-3166-1. The pattern is "),a("code",[t._v("languageCOUNTRY")]),t._v(", for\nexample "),a("code",[t._v("enUS")]),t._v(", "),a("code",[t._v("enGB")]),t._v(", "),a("code",[t._v("frFR")]),t._v(",  etc.")]),t._v(" "),a("p",[t._v("You can freely use the localized names: "),a("code",[t._v("SUM")]),t._v(" can be written as\n"),a("code",[t._v("SOMME")]),t._v(" and the functionality of the function will remain the same.")]),t._v(" "),a("p",[t._v("Here are some example functions and their translations in French:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// localized functions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("functions")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MATCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EQUIV'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CORREL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'COEFFICIENT.CORRELATION'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AVERAGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MOYENNE'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("Same goes for the "),a("RouterLink",{attrs:{to:"/guide/types-of-errors.html"}},[t._v("errors")]),t._v(" displayed inside\ncells when something goes wrong:")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// localized errors")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("errors")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CYCLE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#CYCLE!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DIV_BY_ZERO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#DIV/0!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ERROR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#ERROR!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#N/A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#NOM?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NUM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#NOMBRE!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#REF!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VALUE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#VALEUR!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"localizing-custom-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localizing-custom-functions"}},[t._v("#")]),t._v(" Localizing custom functions")]),t._v(" "),a("p",[t._v("You can localize your custom functions as well. For details, see the "),a("RouterLink",{attrs:{to:"/guide/custom-functions.html#function-name-translations"}},[t._v("Custom functions")]),t._v(" guide.")],1),t._v(" "),a("h3",{attrs:{id:"list-of-supported-languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-languages"}},[t._v("#")]),t._v(" List of supported languages")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Language name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Language code")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("British English")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("enGB")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("American English")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("enUS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Czech")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("csCZ")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Danish")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("daDK")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Dutch")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("nlNL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Finnish")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("fiFI")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("French")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("frFR")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("German")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("deDE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Hungarian")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("huHU")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Italian")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("itIT")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Norwegian")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("nbNO")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Polish")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("plPL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Portuguese")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ptPT")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Russian")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ruRU")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Spanish")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("esES")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Swedish")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("svSE")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Turkish")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("trTR")])])])]),t._v(" "),a("h2",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/github/handsontable/hyperformula-demos/tree/2.6.x/localizing-functions?autoresize=1&fontsize=11&hidenavigation=1&theme=light&view=preview",title:"handsontable/hyperformula-demos: localizing-functions",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})])}),[],!1,null,null,null);a.default=n.exports}}]);